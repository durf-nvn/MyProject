document.addEventListener('DOMContentLoaded', () => {
    let index = 0;
    const slides = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide .carousel-item');
    const dots = document.querySelectorAll('.dot');

    if (!slides || !images.length || !dots.length) {
        console.error('Carousel elements not found. Check your HTML structure.');
        return;
    }

    function updateSlide() {
        slides.style.transform = `translateX(${-index * 100}%)`; // Fixed template literal syntax
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    window.moveSlide = function(step) { // Made global for HTML onclick
        index += step;
        if (index >= images.length) index = 0;
        if (index < 0) index = images.length - 1;
        updateSlide();
    };

    window.currentSlide = function(n) { // Made global for HTML onclick
        index = n;
        updateSlide();
    };

    updateSlide();

    setInterval(() => {
        moveSlide(1);
    }, 3000);

    // Fixed ID mismatch - your HTML uses "close" not "close-btn"
    document.getElementById("close").addEventListener("click", () => {
        window.close();
    });
});

function longestWord() {
    let a = prompt("Please enter a word:");
    let b = prompt("Please enter another word for comparison:");

    if (a.length > b.length) {
        alert(`The longer word is ${a}, which is ${a.length} characters long.`); // Fixed template literal
    } else if (a.length === b.length) {
        alert("Both words have the same length.");
    } else {
        alert(`The longer word is ${b}, which is ${b.length} characters long.`); // Fixed template literal
    }
}

function tempConverter() {
    let v = prompt(
        "Please choose an option to convert:\nC for Celsius to Fahrenheit\nF for Fahrenheit to Celsius"
    ).toLowerCase().trim();

    switch (v) {
        case "c":
            let celsius = parseFloat(prompt("Enter temperature in Celsius:"));
            let fahrenheit = (celsius * 1.8) + 32; // Fixed emoji typo (1.😎 -> 1.8)
            alert(`The temperature in Fahrenheit is ${fahrenheit.toFixed(2)}°F.`); // Fixed template literal
            break;
        case "f":
            let fahr = parseFloat(prompt("Enter temperature in Fahrenheit:"));
            let cels = (fahr - 32) / 1.8;
            alert(`The temperature in Celsius is ${cels.toFixed(2)}°C.`); // Fixed template literal
            break;
        default:
            alert("Invalid option.");
    }
}

function birthStone() {
    let month = prompt("Please enter your birth month:").toLowerCase().trim();
    const birthstones = {
        january: "Garnet",
        february: "Amethyst",
        march: "Aquamarine",
        april: "Diamond",
        may: "Emerald",
        june: "Alexandrite & Pearl",
        july: "Ruby",
        august: "Peridot",
        september: "Sapphire",
        october: "Opal & Tourmaline",
        november: "Citrine & Topaz",
        december: "Blue Zircon, Turquoise, & Tanzanite",
    };

    if (birthstones[month]) {
        alert(`Your birthstone is ${birthstones[month]}.`); // Fixed template literal
    } else {
        alert("The month you entered is not valid.");
    }
}

// Note: This function wasn't called in your HTML, assuming it's a typo for "basicOperations"
function bankOperation() {
    let amount = parseInt(prompt("Please enter an amount to denote:"));

    let twenties = Math.floor(amount / 20);
    let remainder20 = amount % 20;

    let tens = Math.floor(remainder20 / 10);
    let remainder10 = remainder20 % 10;

    let fives = Math.floor(remainder10 / 5);
    let ones = remainder10 % 5;

    alert(`The denomination is:\n$20 = ${twenties}\n$10 = ${tens}\n$5 = ${fives}\n$1 = ${ones}`); // Fixed template literal
}

function basicOperations() {
    let choice = parseInt(prompt(
        "Choose an arithmetic operation:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division"
    ));

    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let result;

    switch (choice) {
        case 1:
            result = num1 + num2;
            alert(`The sum of ${num1} and ${num2} is ${result}.`); // Fixed template literal
            break;
        case 2:
            result = num1 - num2;
            alert(`The difference between ${num1} and ${num2} is ${result}.`); // Fixed template literal
            break;
        case 3:
            result = num1 * num2;
            alert(`The product of ${num1} and ${num2} is ${result}.`); // Fixed template literal
            break;
        case 4:
            if (num2 !== 0) {
                result = num1 / num2;
                alert(`The quotient of ${num1} and ${num2} is ${result}.`); // Fixed template literal
            } else {
                alert("Division by zero is not allowed.");
            }
            break;
        default:
            alert("Invalid choice.");
    }
}

function acceleration() {
    let initialVelocity = parseFloat(prompt("Enter initial velocity in m/s:"));
    let finalVelocity = parseFloat(prompt("Enter final velocity in m/s:"));
    let timeChange = parseFloat(prompt("Enter the time change in seconds:"));

    if (timeChange === 0) {
        alert("Time change cannot be zero.");
    } else {
        let accel = (finalVelocity - initialVelocity) / timeChange;
        alert(`The acceleration is ${accel.toFixed(2)} m/s².`); // Fixed template literal
    }
}

function toggleLike(element) {
    let heartImg = element.querySelector("img");
    if (element.classList.contains("clicked")) { // Fixed typo "cliked" -> "clicked"
        element.classList.remove("clicked");
        heartImg.style.filter = "grayscale(100%)";
    } else {
        element.classList.add("clicked");
        heartImg.style.filter = "brightness(0) saturate(100%) invert(17%) sepia(99%) saturate(7470%) hue-rotate(357deg) brightness(91%) contrast(118%)";
    }
}

function addComment(button) {
    let commentInput = button.previousElementSibling;
    let commentText = commentInput.value.trim();
    
    if (commentText !== "") {
        let commentList = button.parentElement.nextElementSibling; // Fixed selector to target comments-list
        let newComment = document.createElement("li");
        newComment.textContent = commentText;
        commentList.appendChild(newComment);
        commentInput.value = "";
    }
}