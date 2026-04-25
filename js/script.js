// ==========================
// Project Data
// ==========================
const projects = [
    {
        title: "Portfolio Website",
        category: "web",
        date: "2026-03-15",
        description: "A responsive portfolio website built with HTML, CSS, and JavaScript."
    },
    {
        title: "JavaScript Quiz App",
        category: "javascript",
        date: "2026-02-20",
        description: "An interactive quiz app with score tracking and multiple-choice questions."
    },
    {
        title: "Landing Page UI",
        category: "ui",
        date: "2026-01-10",
        description: "A modern landing page focused on layout, spacing, and visual clarity."
    },
    {
        title: "Task Manager",
        category: "web",
        date: "2026-04-01",
        description: "A task management interface with simple client-side interactions."
    }
];

// ==========================
// DOM Elements
// ==========================
const projectList = document.getElementById("projectList");
const filterCategory = document.getElementById("filterCategory");
const sortProjects = document.getElementById("sortProjects");
const themeToggle = document.getElementById("themeToggle");
const visitTimer = document.getElementById("visitTimer");
const githubRepos = document.getElementById("githubRepos");
const apiMessage = document.getElementById("apiMessage");
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");
const backToTop = document.getElementById("backToTop");

// ==========================
// Project Rendering
// ==========================
function renderProjects(projectItems) {
    projectList.innerHTML = "";

    if (projectItems.length === 0) {
        projectList.innerHTML = "<p>No projects found.</p>";
        return;
    }

    projectItems.forEach((project) => {
        const card = document.createElement("article");
        card.className = "card";

        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <small>Category: ${project.category} | Date: ${project.date}</small>
        `;

        projectList.appendChild(card);
    });
}

function getFilteredAndSortedProjects() {
    let updatedProjects = [...projects];

    if (filterCategory.value !== "all") {
        updatedProjects = updatedProjects.filter(
            (p) => p.category === filterCategory.value
        );
    }

    if (sortProjects.value === "newest") {
        updatedProjects.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortProjects.value === "oldest") {
        updatedProjects.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else {
        updatedProjects.sort((a, b) => a.title.localeCompare(b.title));
    }

    return updatedProjects;
}

filterCategory.addEventListener("change", () => {
    renderProjects(getFilteredAndSortedProjects());
});

sortProjects.addEventListener("change", () => {
    renderProjects(getFilteredAndSortedProjects());
});

// ==========================
// Theme Toggle
// ==========================
function initializeTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const theme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", theme);
});

// ==========================
// Visit Timer
// ==========================
function startVisitTimer() {
    let seconds = 0;

    setInterval(() => {
        seconds++;
        visitTimer.textContent = `${seconds}s`;
    }, 1000);
}

// ==========================
// GitHub API (WITH CACHE)
// ==========================

// Display repos (separate function for reuse)
function displayRepos(repos) {
    githubRepos.innerHTML = "";

    repos.forEach((repo) => {
        const card = document.createElement("article");
        card.className = "card";

        card.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description ? repo.description : "No description available."}</p>
            <small>Language: ${repo.language ? repo.language : "Not specified"}</small>
            <a href="${repo.html_url}" target="_blank">View Repository</a>
        `;

        githubRepos.appendChild(card);
    });
}

// Fetch repos with localStorage caching
async function fetchGitHubRepos() {
    const username = "Reham-ms";

    // Check cache first
    const cached = localStorage.getItem("githubRepos");

    if (cached) {
        displayRepos(JSON.parse(cached));
        apiMessage.textContent = "";
        return;
    }

    try {
        apiMessage.textContent = "Loading repositories...";
        githubRepos.innerHTML = "";

        const response = await fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
        );

        if (!response.ok) {
            throw new Error(`Status: ${response.status}`);
        }

        const repos = await response.json();

        if (repos.length === 0) {
            apiMessage.textContent = "No repositories found.";
            return;
        }

        // Save to cache
        localStorage.setItem("githubRepos", JSON.stringify(repos));

        displayRepos(repos);
        apiMessage.textContent = "";

    } catch (error) {
        apiMessage.textContent = "GitHub API limit reached. Please try again later.";
        console.error("GitHub error:", error);
    }
}

// ==========================
// Contact Form Validation
// ==========================
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clearErrors() {
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";
    formSuccess.textContent = "";
}

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    let valid = true;

    if (!name) {
        document.getElementById("nameError").textContent = "Name is required.";
        valid = false;
    }

    if (!email || !validateEmail(email)) {
        document.getElementById("emailError").textContent = "Valid email required.";
        valid = false;
    }

    if (!message || message.length < 10) {
        document.getElementById("messageError").textContent = "Message must be at least 10 characters.";
        valid = false;
    }

    if (valid) {
        formSuccess.textContent = "Message sent successfully!";
        contactForm.reset();
    }
});

// ==========================
// Back To Top Button
// ==========================
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ==========================
// GitHub API WITH FALLBACK
// ==========================

// fallback data (used if API fails)
const fallbackRepos = [
    {
        name: "Portfolio Website",
        description: "My personal portfolio project.",
        language: "HTML/CSS/JS",
        html_url: "#"
    },
    {
        name: "JavaScript Quiz App",
        description: "Interactive quiz application.",
        language: "JavaScript",
        html_url: "#"
    },
    {
        name: "Task Manager",
        description: "Simple task management app.",
        language: "JavaScript",
        html_url: "#"
    }
];

// display function
function displayRepos(repos) {
    githubRepos.innerHTML = "";

    repos.forEach((repo) => {
        const card = document.createElement("article");
        card.className = "card";

        card.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description ? repo.description : "No description available."}</p>
            <small>Language: ${repo.language ? repo.language : "Not specified"}</small>
            <a href="${repo.html_url}" target="_blank">View Repository</a>
        `;

        githubRepos.appendChild(card);
    });
}

async function fetchGitHubRepos() {
    const username = "Reham-ms";

    try {
        apiMessage.textContent = "Loading repositories...";
        githubRepos.innerHTML = "";

        const response = await fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
        );

        if (!response.ok) {
            throw new Error(`Status: ${response.status}`);
        }

        const repos = await response.json();

        // save to localStorage
        localStorage.setItem("githubRepos", JSON.stringify(repos));

        displayRepos(repos);
        apiMessage.textContent = "";

    } catch (error) {
        console.warn("Using fallback data due to API error:", error);

        // use fallback instead
        displayRepos(fallbackRepos);

        apiMessage.textContent = "Showing sample projects (GitHub API unavailable).";
    }
}
// ==========================
// Initialize App
// ==========================
function init() {
    initializeTheme();
    renderProjects(projects);
    startVisitTimer();
    fetchGitHubRepos();
}

init();