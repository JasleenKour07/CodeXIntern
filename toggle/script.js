document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".toggle");
  const title = document.querySelector(".title");

  toggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Change the title based on the mode
    if (document.body.classList.contains("dark-mode")) {
      title.textContent = "Dark Mode";
    } else {
      title.textContent = "Light Mode";
    }
  });
});

