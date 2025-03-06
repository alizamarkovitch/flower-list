// Initialize an array with some flowers
let flowers = ["Rose", "Lily", "Tulip", "Daisy"];
    
function displayFlowers() {
    let list = document.getElementById("flower-list"); // Get the <ul> element
    list.innerHTML = ""; // Clear existing items to prevent duplication

    // Loop through the flowers array and create list items
    flowers.forEach((flower, index) => {
        let li = document.createElement("li"); // Create a <li> element
        li.textContent = flower; // Set the text

        // Create a delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = function () {
            removeFlower(index, li);
        };

        // Add the delete button to the list item
        li.appendChild(deleteBtn);
        list.appendChild(li); // Add the list item to the list
    });
}

function addFlower() {
    let flower = prompt("What is your favorite flower?"); // Ask the user for input

    // Check if input is valid (not empty or just spaces)
    if (flower && flower.trim() !== "") {
        flowers.push(flower.trim()); // Add the flower to the array
        displayFlowers(); // Update the list to show the new flower
    } else {
        alert("Please enter a valid flower name."); // Show an error if input is empty
    }
}


function removeFlower(index, li) {
    li.classList.add("fade-out"); // Add fade-out animation

    setTimeout(() => {
        flowers.splice(index, 1); // Remove the flower from the array
        displayFlowers(); // Refresh the list
    }, 400); // Wait for animation to finish before removing
}

