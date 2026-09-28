// ================= RECOMMENDATION FORM =================

const form = document.getElementById("recommendationForm");

form.addEventListener("submit", function (event) {

    // Stop page from refreshing
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    if (message === "") {
        alert("Please enter a recommendation.");
        return;
    }

    // If name is empty, use Anonymous
    const userName = name === "" ? "Anonymous" : name;

    // Create new recommendation
    const newRecommendation = document.createElement("div");

    newRecommendation.classList.add("recommendation");

    newRecommendation.innerHTML = `
        <span>"</span>
        ${message}
        <span>"</span>
        <br>
        <strong>- ${userName}</strong>
    `;

    // Add recommendation to the page
    const recommendationContainer =
        document.querySelector(".recommendation-container");

    recommendationContainer.appendChild(newRecommendation);

    // Clear form
    form.reset();

    // Success message
    alert("Thank you for your recommendation!");
});


// ================= NAVBAR ACTIVE CLICK =================

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.style.fontWeight = "normal";
        });

        this.style.fontWeight = "bold";
    });

});