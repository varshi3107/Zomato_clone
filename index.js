document.getElementById('seeMoreBtn').addEventListener('click', function () 
{
    const newPlaces = [
        { name: "Kodambakkam", places: "198 places" },
        { name: "Porur", places: "120 places" },
        { name: "Tambaram", places: "250 places" },
        { name: "Pallavaram", places: "140 places" },
        { name: "Guindy", places: "175 places" },
        { name: "Egmore", places: "300 places" },
        { name: "Saidapet", places: "190 places" },
        { name: "Perungudi", places: "155 places" },
    ];
    const grid = document.getElementById('placesGrid');
    newPlaces.forEach(place => {
        const card = document.createElement('div');
        card.className = 'place-card';
        card.innerHTML = `
            <h4>${place.name}</h4>
            <p>${place.places}</p>
        `;
        grid.appendChild(card);
    });
    this.style.display = 'none';//hide see more
});
// Get elements
const dropdownButton = document.getElementById("dropdown-button1");
const dropdownContent = document.getElementById("dropdown-content1");
const dropdownIcon = document.getElementById("dropdown-icon");

// Toggle the dropdown content and rotate icon on click
dropdownButton.addEventListener("click", function () 
{
    // Toggle visibility
    dropdownContent.classList.toggle("show");
    
    // Rotate the dropdown icon
    dropdownIcon.classList.toggle("rotate");
});
const dropdownButton1 = document.getElementById("dropdown-button2");
const dropdownContent1 = document.getElementById("dropdown-content2");

// Toggle the dropdown content and rotate icon on click
dropdownButton1.addEventListener("click", function () 
{
    // Toggle visibility
    dropdownContent1.classList.toggle("show");
    
    // Rotate the dropdown icon
    dropdownIcon.classList.toggle("rotate");
});
const dropdownButton2 = document.getElementById("dropdown-button3");
const dropdownContent2 = document.getElementById("dropdown-content3");

// Toggle the dropdown content and rotate icon on click
dropdownButton2.addEventListener("click", function () 
{
    // Toggle visibility
    dropdownContent2.classList.toggle("show");
    
    // Rotate the dropdown icon
    dropdownIcon.classList.toggle("rotate");
});
const dropdownButton3 = document.getElementById("dropdown-button4");
const dropdownContent3 = document.getElementById("dropdown-content4");

// Toggle the dropdown content and rotate icon on click
dropdownButton3.addEventListener("click", function () 
{
    // Toggle visibility
    dropdownContent3.classList.toggle("show");
    
    // Rotate the dropdown icon
    dropdownIcon.classList.toggle("rotate");
});
function showEmail() {
    document.getElementById("email").style.display = "flex";  // Show email div
    document.getElementById("phnnos").style.display = "none";  // Hide phone div
}

// Function to show the phone input and hide the email input
function showPhone() {
    document.getElementById("email").style.display = "none";   // Hide email div
    document.getElementById("phnnos").style.display = "flex"; // Show phone div
}

// Set default visibility to email (since it's checked initially)
window.onload = showEmail;
// Function to open the menu
// Function to open the side menu
function Menu() {
    document.getElementById("sideMenu").style.left = "0";
}
// Function to close the side menu
function closeMenu() {
    document.getElementById("sideMenu").style.left = "-100%";
}
document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.side-menu').classList.toggle('active');
});
