const toggleTheme = document.getElementById("toggleTheme")
const rootHtml = document.documentElement

function changeTheme(){
    const currentTheme = rootHtml.getAttribute("data-theme");

    currentTheme === "light" ? rootHtml.setAttribute("data-theme", "dark") : rootHtml.setAttribute("data-theme", "light")

    toggleTheme.classList.toggle("bi-moon-stars");
    toggleTheme.classList.toggle("bi-sun");
}

toggleTheme.addEventListener("click", changeTheme);

const accordionHeaders = document.querySelectorAll(".accordion__header");

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const accordionActive = accordionItem.classList.contains("active");

        accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active")
    })
})