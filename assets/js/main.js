/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
	navToggle = document.getElementById("nav-toggle"),
	navClose = document.getElementById("nav-close")

/* =======MENU SHOW========= */
/* Validate if constant exists */
if (navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.add("show-menu")
	})
}

/* =======MENU HIDDEN========= */
/* Validate if constant exists */
if (navClose) {
	navClose.addEventListener("click", () => {
		navMenu.classList.remove("show-menu")
	})
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link")

const linkAction = () => {
	const navMenu = document.getElementById("nav-menu")
	// When we click on each nav__link, we remove the show-menu class
	navMenu.classList.remove("show-menu")
}
navLink.forEach((n) => n.addEventListener("click", linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
	const header = document.getElementById("header")
	// When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
	this.scrollY >= 10
		? header.classList.add("blur-header")
		: header.classList.remove("blur-header")
}
window.addEventListener("scroll", blurHeader)

/*=============== EMAIL JS ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/

/*=============== PORTFOLIO ===============*/
const projects = [
	{
		id: 1,
		title: "Project 1",
		category: "web",
		img: "./assets/img/project-img-1.jpg",
	},
	{
		id: 2,
		title: "Project 2",
		category: "web",
		img: "./assets/img/project-img-2.jpg",
	},
	{
		id: 3,
		title: "Project 3",
		category: "ai",
		img: "./assets/img/project-img-3.jpg",
	},
	{
		id: 4,
		title: "Project 4",
		category: "app",
		img: "./assets/img/project-img-4.jpg",
	},
]

//Load All projects initially using display projects function
const gallery = document.querySelector(".portfolio-gallery")

function displayProjects(projects) {
	projects.forEach((project, index) => {
		let projectCard = document.createElement("div")
		projectCard.classList.add("project__card")
		projectCard.innerHTML = `<div class="project__image">
									<img src=${project.img} alt="" srcset="">
									<div class="project__overlay">
										<span class="project__icon zoom-icon" onclick="zoom(${index})" >
											<i class="ri-eye-line"></i>
										</span>
										<span class="project__icon">
											<i class="ri-github-fill"></i>
										</span>
										<span class="project__icon">
											<i class="ri-link-m"></i>
										</span>
									</div>
								</div>
								<div class="project__info">
									<h3>${project.title}</h3>
									<a href="#" class="secondary-button">Read More</a>
								</div>`
		gallery.appendChild(projectCard)
	})
}

addEventListener("DOMContentLoaded", () => {
	displayProjects(projects)
})

//Filter projects based on category
class Btn {
	constructor(element) {
		this.element = element
		this.category = element.dataset.filter
	}
}

function filterItems(category) {
	gallery.innerHTML = ""
	if (category === "all") {
		displayProjects(projects)
	} else {
		projects.forEach((project, index) => {
			if (project.category === category) {
				let projectCard = document.createElement("div")
				projectCard.classList.add("project__card")
				projectCard.innerHTML = `<div class="project__image">
										<img src=${project.img} alt="" srcset="">
										<div class="project__overlay">
											<span class="project__icon zoom-icon" onclick="zoom(${index})">
												<i class="ri-eye-line"></i>
											</span>
											<span class="project__icon">
												<i class="ri-github-fill"></i>
											</span>
											<span class="project__icon">
												<i class="ri-link-m"></i>
											</span>
										</div>
									</div>
									<div class="project__info">
										<h3>${project.title}</h3>
										<a href="#" class="secondary-button">Read More</a>
									</div>`
				gallery.appendChild(projectCard)
			}
		})
	}
}

let allBtn = new Btn(document.querySelector("#filter-all"))
let webBtn = new Btn(document.querySelector("#filter-web"))
let appBtn = new Btn(document.querySelector("#filter-app"))
let aiBtn = new Btn(document.querySelector("#filter-ai"))

const Btns = [allBtn, webBtn, appBtn, aiBtn]
Btns.forEach((Button) => {
	Button.element.addEventListener("click", () => {
		filterItems(Button.category)
	})
})

// Modals for Projects
const portfolioSection = document.querySelector(".portfolio")
const modal = document.querySelector(".modal")
const modal_overlay = document.querySelector(".modal-overlay")
const images = document.querySelector(".images")

// Modal Carousel

// Modal Popup Animation
function zoom(index) {
	portfolioSection.classList.add("open")
	document.body.classList.add("stopScrolling")
	currentIndex = index
	carousel_Length = gallery.children.length
	changeImage(index)
}

modal_overlay.addEventListener("click", () => {
	portfolioSection.classList.remove("open")
	document.body.classList.remove("stopScrolling")
	currentIndex = 0
})

function changeImage(index) {
	// let image = document.createElement("img")
	// image.src = projects[index].img
	// image.classList.add("showImage")
	images.innerHTML = ""
	images.innerHTML = `<img src=${projects[index].img} class="showImage" alt="" srcset="">`
}
