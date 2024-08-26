// Function to create a button with different functionality
function createButton(index) {
    const button = document.createElement("button");
    button.textContent = `Button ${index}`;
    button.classList.add("button");

    // Add different functionalities based on the button index
    button.addEventListener("click", function() {
        switch(index) {
            case 1:
                alert("Button 1 clicked!");
                break;
            case 2:
                button.style.backgroundColor = "red";
                break;
            case 3:
                button.style.transform = "rotate(45deg)";
                break;
            case 4:
                button.textContent = "Clicked!"; 
                break;
                case 5:
                    document.body.style.backgroundColor = "lightblue";
                    break;
                case 6:
                    button.style.fontSize = "20px";
                    break;
                case 7:
                    button.style.borderRadius = "50%";
                    break;
                case 8:
                    button.style.padding = "20px 40px";
                    break;
                case 9:
                    button.style.color = "black";
                    break;
                case 10:
                    button.disabled = true;
                    break;
            }
        });

        return button;
    }
                // Get the container div element
        const buttonContainer = document.getElementById("buttonContainer");

        // Create and append 10 buttons with different functionalities
        for (let i = 1; i <= 10; i++) {
            const button = createButton(i);
            buttonContainer.appendChild(button);
        }