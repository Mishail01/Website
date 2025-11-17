const servicesData = [
    {
        icon: "images/srv1.png",
        title: "Mobile App Development",
        content:
            "We excel in end-to-end IOS, Android, and cross-platform app development."
    },

    {
        icon: "images/srv1.png",
        title: "UI/UX Design",
        content:
            "Create isually stunning and user-friendly interfaces with our expert design teams."
    },

    {
        icon: "images/srv1.png",
        title: "App Maintenance and Support",
        content:
            "Optimize your performance with our ongoing maintenance and support."
    },

    {
        icon: "images/srv1.png",
        title: "Custom Software Solutions",
        content:
            "Customized software for efficient innovative solutions."
    },
];

const blogData = [
    {
        thumbnail: "images/blog1.jpg",
        title: "Mastering Responsive Design: A Developer's Guide",
        excerpt: "Dive into the art of creating responsive web designs that adapt seamlessly to various devices and screen sizes...",
        link: "#"
    },

    {
        thumbnail: "images/blog2.jpg",
        title: "Effective Debugging Techniques: A developer's Toolbox",
        excerpt: "Debugging is an essential skill for any programmer. This blog post explores advanced debugging techniques, from...",
        link: "#"
    },

    {
        thumbnail: "images/blog3.jpg",
        title: "Demystifying JavaScript Frameworks",
        excerpt: "Navigating the landscape of JavaScript frameworks can be overwhelming. This blog post simplifies the...",
        link: "#"
    },
];

const servicesContainer = document.querySelector(".services-container");
const cardsContainer = document.querySelector("#blog .cards-container");

//Display services

const displayServices = () => {
    servicesData.forEach(s => {
        const HTML = `<div data-aos="flip-left" class="icon">
        <img src="${s.icon}" alt="">
    </div>

    <div data-aos="fade-in" class="service-content">
        <h3>${s.title}</h3>
        <p>
          ${s.content}    
        </p>
    </div>`;

        const service = document.createElement("div");
        service.classList.add("service");
        service.innerHTML = HTML;
        servicesContainer.appendChild(service);
    });
};

displayServices();

// Displaying Blog Posts

const displayBlogPosts = () => {
    blogData.forEach(b => {
        const HTML = `<img src="${b.thumbnail}" alt="">
        <h3>${b.title}</h3>
        <p>
            ${b.excerpt}
        </p>
        <a href="${b.link}">Read More</a>`

        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = HTML;
        card.setAttribute("data-aos", "fade-in");
        cardsContainer.appendChild(card);
    })
}

displayBlogPosts();

// Animation for navbar

window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (window.scrollY > 20) {
        nav.classList.add("scrolled");
    }
    else {
        nav.classList.remove("scrolled");
    }
});

// Mobile Menu

const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const mobileMenuItems = document.querySelector(".mobile-menu-items");

menuIcon.addEventListener("click", () => {
    mobileMenuItems.classList.add("active");
});

closeIcon.addEventListener("click", () => {
    mobileMenuItems.classList.remove("active");
});