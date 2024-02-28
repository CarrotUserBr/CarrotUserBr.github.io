const toggleTheme = document.getElementById("toggleTheme")
const rootHtml = document.documentElement

applySavedTheme()

function changeTheme(){
    const currentTheme = rootHtml.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light"

    rootHtml.setAttribute("data-theme", newTheme)
    toggleTheme.classList.toggle("bi-moon-stars");
    toggleTheme.classList.toggle("bi-sun");
    toggleTheme.classList.toggle("bi-moon-stars");

    localStorage.setItem ("theme", newTheme)
};

function applySavedTheme(){
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        rootHtml.setAttribute("data-theme", savedTheme)
        if (savedTheme === "dark") {
            toggleTheme.classList.add("bi-sun")            
        } else {
            toggleTheme.classList.add("bi-moon-stars")
        }
    }
};

console.log(localStorage)

toggleTheme.addEventListener("click", changeTheme);


const accordionHeaders = document.querySelectorAll(".accordion__header");

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const accordionItem = header.parentElement;
        const accordionActive = accordionItem.classList.contains("active");

        accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active")
    })
})

const menuLinks = document.querySelectorAll(".menu__link")

menuLinks.forEach(item => {
    item.addEventListener("click", () => {
        menuLinks.forEach(i => i.classList.remove("active"));
        item.classList.add("active")
    })
})

