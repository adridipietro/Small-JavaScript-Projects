const navtoggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.nav-links')

navtoggle.addEventListener("click", () => {

    links.classList.toggle()
})

// classList: looks through all classes