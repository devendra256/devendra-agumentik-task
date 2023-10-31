const allBtn = document.querySelectorAll('.block');

const boardBtn = document.querySelector('#btn-board');
const viewBtn = document.querySelector('#btn-view');
const dashBtn = document.querySelector('#btn-dash');
const intBtn = document.querySelector('#btn-int');
const autoBtn = document.querySelector('#btn-auto');
const appBtn = document.querySelector('#btn-apps');
const docBtn = document.querySelector('#btn-docs')

const para = document.querySelector('#block-para');
const head = document.querySelector('#block-head');

viewBtn.addEventListener('click', () => {
    
    head.innerHTML = "Views";

    para.innerHTML = "Visualize and plan your work more efficiently with multiple views: Kanban board, calendar, timeline, Gantt chart, and more.";

})

boardBtn.addEventListener('click', () => {

    head.innerHTML = "Boards";

    para.innerHTML = "Everything starts with a visual board — the core of monday.com Work OS. Tailor it your way and manage anything from projects to departments.";

})


dashBtn.addEventListener('click', () => {

    head.innerHTML = "Dashboard";

    para.innerHTML = "Get the insights you need to make decisions with confidence. Keep track of progress, timelines, and budgets with custom dashboards.";

})

intBtn.addEventListener('click', () => {

    head.innerHTML = "Integration";

    para.innerHTML = "Connect monday.com with all your favorite tools and get more work done. Integrate Slack, Dropbox, Adobe Creative Cloud, and more.";

})

autoBtn.addEventListener('click', () => {

    head.innerHTML = "Automation";

    para.innerHTML = "Streamline processes to focus on the work that matters. Choose from a variety of automation recipes or create your own in minutes.";


})

appBtn.addEventListener('click', () => {

    head.innerHTML = "Apps";

    para.innerHTML = "Expand the capabilities of your Work OS with monday apps. Enhance your workflows with custom views, widgets, integrations, and more.";

})

docBtn.addEventListener('click', () => {

    head.innerHTML = "Docs";

    para.innerHTML = "Transform text into action items, in just a few clicks. Connect, collaborate, and execute ideas and workflows in real-time from any doc.";


})