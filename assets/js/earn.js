let totalReward = 0;
const completedTasks = new Set();

function collectReward(taskId, reward) {
    if (completedTasks.has(taskId)) {
        alert("You have already collected this reward.");
        return;
    }

    // Add the task ID to the set of completed tasks
    completedTasks.add(taskId);

    // Add the reward to the total
    totalReward += reward;

    // Update the reward display
    document.getElementById('total-reward').textContent = totalReward;

    // Mark the task as completed
    const taskLink = document.querySelector(`.task-list li:nth-child(${taskId}) a`);
    taskLink.classList.add('task-completed');
    taskLink.setAttribute('onclick', ''); // Disable further clicks

    alert(`You collected ${reward} NotCoins!`);
}

    // Function to show the verification form after clicking the link
    function collectReward(taskId, points) {
        // Show the verification form
        document.getElementById('verificationForm').style.display = 'block';
    }

    // Function to verify the entered word
    function verifyTask() {
        const correctWord = "BAT"; // The word the user needs to enter
        const userWord = document.getElementById('verificationWord').value.trim();

        if (userWord.toLowerCase() === correctWord.toLowerCase()) {
            alert("Task completed! You've earned 1500 points.");
            // Here you can add code to reward the user, such as sending the data to your server
        } else {
            alert("Incorrect word. Please try again after watching the video carefully.");
        }
    }

