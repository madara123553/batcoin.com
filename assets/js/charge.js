setInterval(()=> {
    let count = localStorage.getItem('count')
    let total = localStorage.getItem('total')
    let power = localStorage.getItem('power');
    if(Number(total) > power){
        localStorage.setItem('power' , `${Number(power) + Number(count)}`);
    }
}, 1000);
document.getElementById('inviteButton').addEventListener('click', function () {
    // Generate a unique referral ID (you can customize this further)
    let referralID = generateReferralID();

    // Create a referral link (replace 'yourwebsite.com' with your actual domain)
    let referralLink = `${window.location.origin}/invite?ref=${referralID}`;

    // Display the referral link on the page
    document.getElementById('referralLink').innerHTML = `<span>Your Referral Link: </span><a href="${referralLink}" target="_blank">${referralLink}</a>`;

    // Automatically copy the referral link to the clipboard
    copyToClipboard(referralLink);
    alert('Referral link copied to clipboard!');
});

// Function to generate a random referral ID
function generateReferralID() {
    return 'ref-' + Math.random().toString(36).substring(2, 10); // Generates a random string
}

// Function to copy text to clipboard
function copyToClipboard(text) {
    let tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}



// Function to render the Frens List
function renderFrensList() {
    const frensListBox = document.getElementById('frensList');
    frensListBox.innerHTML = ''; // Clear the list first

    frensList.forEach(fren => {
        frensListBox.innerHTML += `
            <div class="frens-data">
                <div class="frens-profile">
                    <div class="frens-profile-photo">
                        <img src="${fren.profilePhoto}" alt="Profile Picture">
                    </div>
                    <div class="frens-profile-data">
                        <h4>${fren.username}</h4>
                        <div>
                            <img src="./assets/images/3d-trophy.png" width="15px">
                            <span>${fren.tier}</span>
                            <span>•</span>
                            <img src="./assets/images/coin.png" width="15px">
                            <span>${fren.coins}</span>
                        </div>
                    </div>
                </div>
                <div class="frens-data-count">
                    <span>+${(fren.coins * 0.05).toFixed(1)}k</span>
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19" stroke="#ffffff" opacity="0.4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        `;
    });
}

// Load and display the initial list when the page loads
window.onload = function () {
    renderFrensList();
};

function generateReferralLink(username) {
    const referralID = btoa(username); // Base64 encode username as referral ID
    const referralLink = `${window.location.origin}/ref?ref=${referralID}`;
    
    console.log("Referral Link: ", referralLink);
    return referralLink;
}

// Example usage
const username = 'User123'; // This would come from your user data
const referralLink = generateReferralLink(username);
document.getElementById('referralLinkDisplay').textContent = referralLink;

// Check if a referral link was used
function processReferralLink() {
    const urlParams = new URLSearchParams(window.location.search);
    const referralID = urlParams.get('ref');

    if (referralID) {
        // Base64 decode the referral ID to get the username (this is a simple example)
        const referredBy = atob(referralID);
        console.log(`Referred by: ${referredBy}`);

        // Simulate successful referral and add new user to Frens List
        addFren('NewFren', 'Gold', 2500, referredBy); 
    }
}

// Call this on page load or registration page load
window.onload = processReferralLink;


// Array to hold frens (in real app, use an API to fetch this)
let frensList = JSON.parse(localStorage.getItem('frensList')) || [];

// Function to generate dummy user data when a referral is successful
function addFren(username, tier, coins, referredBy) {
    const fren = {
        username: username,
        tier: tier,
        coins: coins,
        referredBy: referredBy,
        profilePhoto: './assets/images/default-profile.png', // Path to the default profile image
    };

    // Add the new fren to the list
    frensList.push(fren);

    // Store the updated list in local storage (in real app, send to server)
    localStorage.setItem('frensList', JSON.stringify(frensList));

    // Render the updated list
    renderFrensList();
}

// Function to render the Frens List
function renderFrensList() {
    const frensListBox = document.getElementById('frensList');
    frensListBox.innerHTML = ''; // Clear the list first

    frensList.forEach(fren => {
        frensListBox.innerHTML += `
            <div class="frens-data">
                <div class="frens-profile">
                    <div class="frens-profile-photo">
                        <img src="${fren.profilePhoto}" alt="Profile Picture">
                    </div>
                    <div class="frens-profile-data">
                        <h4>${fren.username}</h4>
                        <div>
                            <img src="./assets/images/3d-trophy.png" width="15px">
                            <span>${fren.tier}</span>
                            <span>•</span>
                            <img src="./assets/images/coin.png" width="15px">
                            <span>${fren.coins}</span>
                            <span>Referred by: ${fren.referredBy}</span>
                        </div>
                    </div>
                </div>
                <div class="frens-data-count">
                    <span>+${(fren.coins * 0.05).toFixed(1)}k</span>
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19" stroke="#ffffff" opacity="0.4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        `;
    });
}

// Load and display the initial list when the page loads
window.onload = function () {
    renderFrensList();
};

document.getElementById('inviteButton').addEventListener('click', function() {
    // Generate a unique referral link (example: linking to your bot/website)
    const botLink = 'https://yourwebsite.com?ref=';
    
    // Generate a unique ID (you can use the user ID or any unique identifier)
    const userId = '12345'; // Replace this with a real user ID if needed
    const referralLink = botLink + userId;

    // Display the referral link
    document.getElementById('referralLink').innerText = referralLink;

    // Show the copy button
    document.getElementById('copyLinkButton').style.display = 'block';
});

// Function to copy referral link to clipboard
document.getElementById('copyLinkButton').addEventListener('click', function() {
    const referralLink = document.getElementById('referralLink').innerText;
    
    navigator.clipboard.writeText(referralLink).then(function() {
        alert('Referral link copied to clipboard!');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
});
