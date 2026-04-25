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

function renderProjects(projectItems) {
    projectList.innerHTML = "";

    if (projectItems.length === 0) {
        projectList.innerHTML = "<p>No projects found for the selected filter.</p>";
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
    const selectedCategory = filterCategory.value;
    const selectedSort = sortProjects.value;

    if (selectedCategory !== "all") {
        updatedProjects = updatedProjects.filter(
            (project) => project.category === selectedCategory
        );
    }

    if (selectedSort === "newest") {
        updatedProjects.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (selectedSort === "oldest") {
        updatedProjects.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (selectedSort === "az") {
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

function initializeTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
});

function startVisitTimer() {
    let seconds = 0;

    setInterval(() => {
        seconds++;
        visitTimer.textContent = `${seconds}s`;
    }, 1000);
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
            throw new Error(`Failed to fetch GitHub repositories. Status: ${response.status}`);
        }

        const repos = await response.json();

        if (repos.length === 0) {
            apiMessage.textContent = "No public repositories found.";
            return;
        }

        apiMessage.textContent = "";

        repos.forEach((repo) => {
            const card = document.createElement("article");
            card.className = "card";

            card.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description ? repo.description : "No description available."}</p>
                <small>Language: ${repo.language ? repo.language : "Not specified"}</small>
                <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">View Repository</a>
            `;

            githubRepos.appendChild(card);
        });
    } catch (error) {
        apiMessage.textContent = "Unable to load GitHub repositories at the moment. Please try again later.";
        console.error("GitHub API error:", error);
    }
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
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

    let isValid = true;

    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    }

    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        isValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (message === "") {
        document.getElementById("messageError").textContent = "Message is required.";
        isValid = false;
    } else if (message.length < 10) {
        document.getElementById("messageError").textContent = "Message must be at least 10 characters long.";
        isValid = false;
    }

    if (isValid) {
        formSuccess.textContent = "Form submitted successfully! Validation passed.";
        contactForm.reset();
    }
});

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

function init() {
    initializeTheme();
    renderProjects(projects);
    startVisitTimer();
    fetchGitHubRepos();
}

init();