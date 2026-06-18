#!/usr/bin/env python3
"""
Blog build script.

Usage:
    cd <repo root>
    pip install markdown python-frontmatter   # once
    python blog/build.py

Reads:  blog/posts/*.md  (YAML frontmatter + markdown body)
Writes: blog/<slug>.html  (static HTML from _template.html)
        blog/index.html   (listing page, newest first by date string)

Run this before committing whenever you add or edit a post.
"""

import os
import sys
import glob
import textwrap

try:
    import frontmatter
    import markdown as md_lib
except ImportError:
    print("Missing dependencies. Run:\n  pip install markdown python-frontmatter")
    sys.exit(1)

# ── Paths ──────────────────────────────────────────────────────────────────
SCRIPT_DIR   = os.path.dirname(os.path.abspath(__file__))
POSTS_DIR    = os.path.join(SCRIPT_DIR, "posts")
TEMPLATE     = os.path.join(SCRIPT_DIR, "_template.html")
INDEX_OUT    = os.path.join(SCRIPT_DIR, "index.html")

# ── Markdown renderer ───────────────────────────────────────────────────────
md = md_lib.Markdown(extensions=["tables", "fenced_code", "nl2br"])


def render_body(text: str) -> str:
    md.reset()
    return md.convert(text)


# ── CTA block builder ───────────────────────────────────────────────────────
def build_cta(meta: dict) -> str:
    intro      = meta.get("cta_intro", "")
    p_text     = meta.get("cta_primary_text", "")
    p_href     = meta.get("cta_primary_href", "")
    s_text     = meta.get("cta_secondary_text", "")
    s_href     = meta.get("cta_secondary_href", "")

    if not (p_text and p_href):
        return ""

    primary  = f'<a class="btn btn-primary"  href="{p_href}">{p_text}</a>'
    secondary = (
        f'<a class="btn btn-secondary" href="{s_href}">{s_text}</a>'
        if s_text and s_href else ""
    )

    return textwrap.dedent(f"""\
    <div class="post-cta">
        <p>{intro}</p>
        <div class="cta-links">
            {primary}
            {secondary}
        </div>
    </div>""")


# ── Footer block builder ────────────────────────────────────────────────────
def build_footer(meta: dict) -> str:
    text = meta.get("footer", "").strip()
    if not text:
        return ""
    return f'<div class="post-footer"><p>{text}</p></div>'


# ── Per-post build ──────────────────────────────────────────────────────────
def build_post(md_path: str, template: str) -> dict:
    post     = frontmatter.load(md_path)
    meta     = post.metadata
    slug     = meta.get("slug") or os.path.splitext(os.path.basename(md_path))[0]

    tag_color  = meta.get("tag_color", "blue")
    tag_class  = f"post-tag--{tag_color}"
    page_title = f"{meta.get('title', '')} — Duct Tape to COO"

    body_html = render_body(post.content)

    html = (
        template
        .replace("{{page_title}}",       page_title)
        .replace("{{meta_description}}", meta.get("description", ""))
        .replace("{{tag_class}}",        tag_class)
        .replace("{{tag_text}}",         meta.get("tag", ""))
        .replace("{{post_title}}",       meta.get("title", ""))
        .replace("{{post_subtitle}}",    meta.get("subtitle", ""))
        .replace("{{post_date}}",        meta.get("date", ""))
        .replace("{{post_content}}",     body_html)
        .replace("{{cta_block}}",        build_cta(meta))
        .replace("{{footer_block}}",     build_footer(meta))
    )

    out_path = os.path.join(SCRIPT_DIR, f"{slug}.html")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(html)

    print(f"  wrote {os.path.relpath(out_path)}")
    return {
        "slug":     slug,
        "title":    meta.get("title", ""),
        "subtitle": meta.get("subtitle", ""),
        "tag":      meta.get("tag", ""),
        "date":     meta.get("date", ""),
    }


# ── Index builder ───────────────────────────────────────────────────────────
INDEX_TEMPLATE = """\
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog — Duct Tape to COO</title>
    <meta name="description" content="Deep dives and essays on operational maturity — more opinion and more why than the Wiki, with a bias toward what the ducttape-to-coo curators know and care about most.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/styles.css">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='12' fill='%230d1117'/><text y='72' x='50' text-anchor='middle' font-size='60'>⚙</text></svg>">
    <style>
        .wrap{max-width:800px;margin:0 auto;padding:48px 32px 100px}
        .page-eyebrow{display:inline-block;font-size:.7rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--blue);border:1px solid var(--blue);padding:3px 9px;border-radius:3px;margin-bottom:20px}
        .wrap h1{font-size:2rem;font-weight:700;letter-spacing:-.02em;margin-bottom:12px;color:var(--text)}
        .page-sub{font-size:1rem;color:var(--text-dim);margin-bottom:56px;max-width:540px;line-height:1.7}
        .post-item{display:block;padding:28px 0;border-bottom:1px solid var(--border)}
        .post-item:first-child{border-top:1px solid var(--border)}
        .post-item:hover .post-item-title{color:var(--blue)}
        .post-item-tag{font-size:.7rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--text-muted);margin-bottom:8px}
        .post-item-title{font-size:1.15rem;font-weight:600;color:var(--text);margin-bottom:8px;transition:color .15s}
        .post-item-sub{font-size:.9rem;color:var(--text-dim);line-height:1.6}
        @media(max-width:640px){.wrap{padding:40px 20px 80px}.wrap h1{font-size:1.6rem}}
    </style>
</head>
<body>
<header class="site-header">
    <div class="header-container">
        <div class="header-top">
            <a class="header-logo" href="../index.html">Duct Tape to COO</a>
            <nav class="header-nav">
                <a href="../diagnostic.html">Diagnostic</a>
                <a href="../wiki.html">Wiki</a>
                <a href="../skill-setup.html">Virtual COO</a>
                <a href="index.html" class="active">Blog</a>
            </nav>
        </div>
    </div>
</header>
<div class="wrap">
    <span class="page-eyebrow">Blog</span>
    <h1>Deep dives, essays &amp; observations</h1>
    <p class="page-sub">More opinion, and more explanation of why something matters than the Wiki. Deliberately focused — and therefore biased — toward the processes the ducttape-to-coo curators have the most experience in or care most about.</p>
    <div class="post-list">
{{post_items}}
    </div>
</div>
</body>
</html>
"""


def build_index(posts: list[dict]) -> None:
    items = []
    for p in posts:
        tag_line = f"{p['tag']} · {p['date']}" if p["tag"] else p["date"]
        items.append(
            f'        <a class="post-item" href="{p["slug"]}.html">\n'
            f'            <div class="post-item-tag">{tag_line}</div>\n'
            f'            <div class="post-item-title">{p["title"]}</div>\n'
            f'            <div class="post-item-sub">{p["subtitle"]}</div>\n'
            f'        </a>'
        )
    html = INDEX_TEMPLATE.replace("{{post_items}}", "\n".join(items))
    with open(INDEX_OUT, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"  wrote {os.path.relpath(INDEX_OUT)}")


# ── Main ────────────────────────────────────────────────────────────────────
def main() -> None:
    # Change to repo root so relative paths in the template work correctly
    os.chdir(os.path.dirname(SCRIPT_DIR))

    with open(TEMPLATE, encoding="utf-8") as f:
        template = f.read()

    md_files = sorted(glob.glob(os.path.join(POSTS_DIR, "*.md")))
    if not md_files:
        print("No markdown files found in blog/posts/")
        return

    print(f"Building {len(md_files)} post(s)...")
    posts = [build_post(p, template) for p in md_files]

    # Newest first: reverse alphabetical on date string is fine for "May 2026" etc.
    # For precise control add an `order: 1` field to frontmatter (lower = first).
    posts_ordered = sorted(
        posts,
        key=lambda p: (
            frontmatter.load(os.path.join(POSTS_DIR, p["slug"] + ".md"))
            .metadata.get("order", 999)
        )
    )

    print("Building index...")
    build_index(posts_ordered)
    print("Done.")


if __name__ == "__main__":
    main()
