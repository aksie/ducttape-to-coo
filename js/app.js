// Main application logic
let processesData = null;
let stagesData = null;
let currentStage = 'first-hires'; // Default
let userSelections = {
    employees: '3-5',
    revenue: 'first-revenue',
    funding: 'bootstrapped'
};
let responses = {};

// Initialize app
async function init() {
    try {
        // Load data
        const [processesResponse, stagesResponse] = await Promise.all([
            fetch('data/processes.json'),
            fetch('data/stages.json')
        ]);
        
        processesData = await processesResponse.json();
        stagesData = await stagesResponse.json();
        
        // Load saved data
        loadFromLocalStorage();
        
        // Setup UI
        setupPillSelectors();
        setupTimeline();
        renderProcesses();
        updateSummary();
        
        console.log('App initialized successfully');
    } catch (error) {
        console.error('Error initializing app:', error);
        document.body.innerHTML = '<div style="padding: 40px; text-align: center;"><h2>Error loading data</h2><p>Please make sure you\'re running this from a web server, not file://</p></div>';
    }
}

// Setup pill selectors
function setupPillSelectors() {
    const employeeSelect = document.getElementById('employee-select');
    const revenueSelect = document.getElementById('revenue-select');
    const fundingSelect = document.getElementById('funding-select');
    
    // Populate employees dropdown
    stagesData.employeeRanges.forEach(range => {
        const option = document.createElement('option');
        option.value = range.value;
        option.textContent = range.label;
        if (range.value === userSelections.employees) {
            option.selected = true;
        }
        employeeSelect.appendChild(option);
    });
    
    // Populate revenue dropdown
    stagesData.revenueStages.forEach(stage => {
        const option = document.createElement('option');
        option.value = stage.value;
        option.textContent = stage.label;
        if (stage.value === userSelections.revenue) {
            option.selected = true;
        }
        revenueSelect.appendChild(option);
    });
    
    // Populate funding dropdown
    stagesData.fundingStages.forEach(stage => {
        const option = document.createElement('option');
        option.value = stage.value;
        option.textContent = stage.label;
        if (stage.value === userSelections.funding) {
            option.selected = true;
        }
        fundingSelect.appendChild(option);
    });
    
    // Add change listeners
    employeeSelect.addEventListener('change', handleSelectorChange);
    revenueSelect.addEventListener('change', handleSelectorChange);
    fundingSelect.addEventListener('change', handleSelectorChange);
}

// Handle selector changes
function handleSelectorChange(e) {
    const selectId = e.target.id;
    
    if (selectId === 'employee-select') {
        userSelections.employees = e.target.value;
        // Determine stage from employee count
        const range = stagesData.employeeRanges.find(r => r.value === e.target.value);
        if (range) {
            currentStage = range.stage;
        }
    } else if (selectId === 'revenue-select') {
        userSelections.revenue = e.target.value;
    } else if (selectId === 'funding-select') {
        userSelections.funding = e.target.value;
    }
    
    saveToLocalStorage();
    updateTimeline();
    renderProcesses();
}

// Setup timeline
function setupTimeline() {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = '';
    
    stagesData.stages.forEach((stage, index) => {
        const stageEl = document.createElement('div');
        stageEl.className = 'timeline-stage';
        stageEl.dataset.stage = stage.id;
        
        if (stage.id === currentStage) {
            stageEl.classList.add('current');
        } else if (index < stagesData.stages.findIndex(s => s.id === currentStage)) {
            stageEl.classList.add('completed');
        }
        
        stageEl.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-label">${stage.shortName}</div>
        `;
        
        timeline.appendChild(stageEl);
        
        // Add connector line (except for last stage)
        if (index < stagesData.stages.length - 1) {
            const connector = document.createElement('div');
            connector.className = 'timeline-connector';
            if (index < stagesData.stages.findIndex(s => s.id === currentStage)) {
                connector.classList.add('completed');
            }
            timeline.appendChild(connector);
        }
    });
    
    // Update stage info
    const currentStageData = stagesData.stages.find(s => s.id === currentStage);
    document.getElementById('stage-name').textContent = currentStageData.name;
    document.getElementById('stage-description').textContent = currentStageData.description;
}

// Update timeline (when stage changes)
function updateTimeline() {
    setupTimeline();
}

// Render processes based on current stage
function renderProcesses() {
    const container = document.getElementById('processes-container');
    container.innerHTML = '';
    
    // Filter processes by priority
    const critical = [];
    const recommended = [];
    const future = [];
    
    processesData.processes.forEach(process => {
        const priority = process.stages[currentStage];
        if (priority === 'critical') {
            critical.push(process);
        } else if (priority === 'recommended') {
            recommended.push(process);
        } else {
            future.push(process);
        }
    });
    
    // Render critical processes
    if (critical.length > 0) {
        const section = createProcessSection('🔴 Critical Now', critical, 'critical');
        container.appendChild(section);
    }
    
    // Render recommended processes
    if (recommended.length > 0) {
        const section = createProcessSection('🟡 Recommended Now', recommended, 'recommended');
        container.appendChild(section);
    }
    
    // Render future processes (collapsed by default)
    if (future.length > 0) {
        const section = createProcessSection('⚪ Coming Later', future, 'future', true);
        container.appendChild(section);
    }
    
    // Update count
    document.getElementById('process-count').textContent = 
        `${critical.length + recommended.length} processes for your stage`;
}

// Create process section
function createProcessSection(title, processes, priority, collapsed = false) {
    const section = document.createElement('div');
    section.className = `process-section ${priority}`;
    
    const header = document.createElement('div');
    header.className = 'section-header';
    header.innerHTML = `
        <h3>${title} <span class="count">(${processes.length})</span></h3>
        <button class="toggle-btn">${collapsed ? 'Show' : 'Hide'}</button>
    `;
    
    const content = document.createElement('div');
    content.className = 'section-content';
    if (collapsed) {
        content.style.display = 'none';
    }
    
    processes.forEach(process => {
        const processEl = createProcessElement(process);
        content.appendChild(processEl);
    });
    
    // Toggle functionality
    header.querySelector('.toggle-btn').addEventListener('click', function() {
        const isHidden = content.style.display === 'none';
        content.style.display = isHidden ? 'block' : 'none';
        this.textContent = isHidden ? 'Hide' : 'Show';
    });
    
    section.appendChild(header);
    section.appendChild(content);
    
    return section;
}

// Create individual process element
function createProcessElement(process) {
    const processEl = document.createElement('div');
    processEl.className = 'process';
    processEl.dataset.processId = process.id;
    
    const titleEl = document.createElement('div');
    titleEl.className = 'process-title';
    titleEl.innerHTML = `
        ${process.id} ${process.title}
        ${process.optional ? '<span class="optional-tag">OPTIONAL</span>' : ''}
    `;
    
    const descEl = document.createElement('div');
    descEl.className = 'process-description';
    descEl.textContent = process.description;
    
    // Add stage-specific focus if available
    if (process.stageFocus && process.stageFocus[currentStage]) {
        const focusEl = document.createElement('div');
        focusEl.className = 'stage-focus';
        focusEl.innerHTML = `<strong>For your stage:</strong> ${process.stageFocus[currentStage]}`;
        descEl.appendChild(focusEl);
    }
    
    const dimensionsEl = document.createElement('div');
    dimensionsEl.className = 'dimensions';
    
    // Create dimension rows
    Object.entries(processesData.dimensions).forEach(([key, dimension]) => {
        const row = createDimensionRow(process.id, key, dimension);
        dimensionsEl.appendChild(row);
    });
    
    processEl.appendChild(titleEl);
    processEl.appendChild(descEl);
    processEl.appendChild(dimensionsEl);
    
    return processEl;
}

// Get explanation for each dimension
function getDimensionExplanation(dimensionKey) {
    const explanations = {
        'reliability': 'Does this process work consistently? Rate from frequent failures (0) to optimized and proactively improved (4).',
        'ownership': 'Is there a clear owner for this process? Rate from no owner/CEO does it (0) to dedicated team with backup coverage (4).',
        'documentation': 'Is the process documented? Rate from nonexistent (0) to living documentation with examples and templates (4).',
        'automation': 'Is this process automated? Rate from manual/email-based (0) to highly automated self-service (4).',
        'scalability': 'Can this process handle growth? Rate from breaking under current load (0) to designed for 10x+ growth (4).'
    };
    return explanations[dimensionKey] || '';
}

// Create dimension row with radio buttons
function createDimensionRow(processId, dimensionKey, dimension) {
    const row = document.createElement('div');
    row.className = 'dimension-row';
    
    const label = document.createElement('span');
    label.className = 'dimension-label';
    label.textContent = dimension.label;
    label.title = getDimensionExplanation(dimensionKey); // Add browser tooltip
    
    // Add visual indicator that there's help available
    const helpIcon = document.createElement('span');
    helpIcon.className = 'help-icon';
    helpIcon.textContent = '?';
    helpIcon.title = getDimensionExplanation(dimensionKey);
    label.appendChild(helpIcon);
    
    const radioGroup = document.createElement('div');
    radioGroup.className = 'radio-group';
    
    // Create radio buttons
    dimension.options.forEach((option, index) => {
        const radioOption = document.createElement('div');
        radioOption.className = 'radio-option';
        
        const radioId = `${processId}-${dimensionKey}-${index}`;
        const radioName = `${processId}-${dimensionKey}`;
        
        const input = document.createElement('input');
        input.type = 'radio';
        input.id = radioId;
        input.name = radioName;
        input.value = index;
        
        // Check if this value is saved
        if (responses[processId] && responses[processId].scores && 
            responses[processId].scores[dimensionKey] == index) {
            input.checked = true;
        }
        
        input.addEventListener('change', () => handleScoreChange(processId, dimensionKey, index));
        
        const radioLabel = document.createElement('label');
        radioLabel.htmlFor = radioId;
        radioLabel.textContent = index;
        
        const tooltip = document.createElement('span');
        tooltip.className = 'tooltip';
        tooltip.textContent = option;
        
        radioOption.appendChild(input);
        radioOption.appendChild(radioLabel);
        radioOption.appendChild(tooltip);
        
        // Mobile tap handling
        radioOption.addEventListener('click', function(e) {
            if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'LABEL') {
                // Remove active from siblings
                radioGroup.querySelectorAll('.radio-option').forEach(opt => {
                    opt.classList.remove('active');
                });
                this.classList.add('active');
                setTimeout(() => this.classList.remove('active'), 3000);
            }
        });
        
        radioGroup.appendChild(radioOption);
    });
    
    // Create specific placeholder based on dimension
    const placeholders = {
        'reliability': 'Details (e.g., what breaks, how often)',
        'ownership': 'Name and role of owner (e.g., Sarah Chen, CFO)',
        'documentation': 'Link to documentation (e.g., Notion, wiki URL)',
        'automation': 'Tool name and link (e.g., QuickBooks, Gusto)',
        'scalability': 'Details (e.g., current capacity, bottlenecks)'
    };
    
    const notesInput = document.createElement('input');
    notesInput.type = 'text';
    notesInput.placeholder = placeholders[dimensionKey] || 'Details (optional)';
    notesInput.className = 'notes-input';
    if (responses[processId] && responses[processId].notes && responses[processId].notes[dimensionKey]) {
        notesInput.value = responses[processId].notes[dimensionKey];
    }
    notesInput.addEventListener('input', (e) => handleNotesChange(processId, dimensionKey, e.target.value));
    
    row.appendChild(label);
    row.appendChild(radioGroup);
    row.appendChild(notesInput);
    
    return row;
}

// Handle score changes
function handleScoreChange(processId, dimensionKey, value) {
    if (!responses[processId]) {
        responses[processId] = { scores: {}, notes: {} };
    }
    if (!responses[processId].scores) {
        responses[processId].scores = {};
    }
    
    responses[processId].scores[dimensionKey] = value;
    saveToLocalStorage();
    updateSummary();
}

// Handle notes changes
function handleNotesChange(processId, dimensionKey, value) {
    if (!responses[processId]) {
        responses[processId] = { scores: {}, notes: {} };
    }
    if (!responses[processId].notes) {
        responses[processId].notes = {};
    }
    
    responses[processId].notes[dimensionKey] = value;
    saveToLocalStorage();
}

// Update summary
function updateSummary() {
    // Calculate average scores
    let totalScore = 0;
    let totalCount = 0;
    
    Object.values(responses).forEach(response => {
        if (response.scores) {
            Object.values(response.scores).forEach(score => {
                totalScore += parseInt(score);
                totalCount++;
            });
        }
    });
    
    const avgScore = totalCount > 0 ? (totalScore / totalCount).toFixed(1) : '-';
    const avgScoreEl = document.getElementById('avg-score');
    if (avgScoreEl) {
        avgScoreEl.textContent = avgScore;
    }
}

// Save to localStorage
function saveToLocalStorage() {
    const data = {
        userSelections,
        currentStage,
        responses
    };
    localStorage.setItem('coo-checklist-data', JSON.stringify(data));
}

// Load from localStorage
function loadFromLocalStorage() {
    const saved = localStorage.getItem('coo-checklist-data');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            if (data.userSelections) userSelections = data.userSelections;
            if (data.currentStage) currentStage = data.currentStage;
            if (data.responses) responses = data.responses;
        } catch (e) {
            console.error('Error loading saved data:', e);
        }
    }
}

// Export to CSV
function exportToCSV() {
    let csv = 'Process ID,Process Title,Stage Priority,Reliability,Ownership,Documentation,Automation,Scalability,Notes\n';
    
    processesData.processes.forEach(process => {
        const response = responses[process.id] || { scores: {}, notes: {} };
        const priority = process.stages[currentStage];
        
        const row = [
            process.id,
            `"${process.title}"`,
            priority,
            response.scores?.reliability || '',
            response.scores?.ownership || '',
            response.scores?.documentation || '',
            response.scores?.automation || '',
            response.scores?.scalability || '',
            `"${Object.values(response.notes || {}).join('; ')}"`
        ];
        
        csv += row.join(',') + '\n';
    });
    
    // Download
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ops-checklist-${currentStage}-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    
    showToast('CSV exported! 📊');
}

// Show toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }
}

// Preview next stage
function previewNextStage() {
    const currentIndex = stagesData.stages.findIndex(s => s.id === currentStage);
    if (currentIndex < stagesData.stages.length - 1) {
        const nextStage = stagesData.stages[currentIndex + 1];
        alert(`Next Stage: ${nextStage.name}\n\n${nextStage.description}\n\nFocus areas:\n${nextStage.focus.map(f => '• ' + f).join('\n')}`);
        // TODO: Create a nice modal instead of alert
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);
