const toggleTheme = document.getElementById("toggleTheme")
const rootHtml = document.documentElement

function changeTheme(){
    const currentTheme = rootHtml.getAttribute("data-theme");

    currentTheme === "light" ? rootHtml.setAttribute("data-theme", "dark") : rootHtml.setAttribute("data-theme", "light")

    toggleTheme.classList.toggle("bi-moon-stars");
    toggleTheme.classList.toggle("bi-sun");
}

toggleTheme.addEventListener("click", changeTheme);