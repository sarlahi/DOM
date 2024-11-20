
document.getElementById("change-color").addEventListener("click", function() {
    document.body.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
});


document.getElementById("add-element").addEventListener("click", function() {
    const newElement = document.createElement("div");
    newElement.textContent = "New Element Added!";
    newElement.style.backgroundColor = "#2ecc71";
    newElement.style.color = "white";
    newElement.style.padding = "10px";
    newElement.style.marginTop = "10px";
    document.getElementById("new-element-container").appendChild(newElement);
});


document.getElementById("toggle-visibility").addEventListener("click", function() {
    const box = document.getElementById("box");
    box.style.display = (box.style.display === "none" ? "block" : "none");
});


document.getElementById("animate-element").addEventListener("click", function() {
    const box = document.getElementById("box");
    box.style.transform = "rotate(360deg)";
    setTimeout(function() {
        box.style.transform = "rotate(0deg)";
    }, 500);
});


document.getElementById("modify-text").addEventListener("click", function() {
    const dynamicText = document.getElementById("dynamic-text");
    dynamicText.textContent = "The text has been modified!";
});
