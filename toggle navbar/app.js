const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.nav-links')

navToggle.addEventListener("click", () => {
    links.classList.toggle("close-menu")
})

// classList: looks through all classes