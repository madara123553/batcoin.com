const tasks = [
    { id: 1, description: "Invite 3 friends to join the platform", reward: 500, completed: false, priority: 'high' },
    { id: 2, description: "Complete your user profile with a picture and bio", reward: 200, completed: false, priority: 'medium' },
    { id: 3, description: "Share our latest product on your social media feed", reward: 300, completed: false, priority: 'high' },
    { id: 4, description: "Earn 100 coins by completing challenges", reward: 100, completed: false, priority: 'low' },
    { id: 5, description: "Complete 3 tasks in a row to earn a bonus reward", reward: 200, completed: false, priority: 'bonus' },
    { id: 6, description: "Invite a friend and earn a 1000-point referral bonus (Time-limited)", reward: 1000, completed: false, priority: 'high', expires: '24h' }
];

const tasksContainer = document.getElementById('tasks');
const coinCount = document.getElementById('coinCount');

let totalCoins = localStorage.getItem('totalCoins') ? parseInt(localStorage.getItem('totalCoins')) : 0;
coinCount.textContent = totalCoins;

let savedTasks = JSON.parse(localStorage.getItem('tasks')) || tasks;

function renderTasks() {
    tasksContainer.innerHTML = '';
    savedTasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span class="${task.priority}-priority">${task.description}</span>
            <input type="checkbox" ${task.completed ? 'checked' : ''} data-id="${task.id}">
        `;
        tasksContainer.appendChild(taskItem);
    });
}

function handleTaskCompletion(e) {
    if (e.target.type === 'checkbox') {
        const taskId = e.target.getAttribute('data-id');
        const task = savedTasks.find(t => t.id == taskId);

        if (!task.completed) {
            task.completed = true;
            totalCoins += task.reward;
            localStorage.setItem('totalCoins', totalCoins);
            coinCount.textContent = totalCoins;
        }

        localStorage.setItem('tasks', JSON.stringify(savedTasks));
        renderTasks();  // Re-render the task list
    }
}

tasksContainer.addEventListener('change', handleTaskCompletion);

renderTasks();
