# # Assignment 4 – Personal Web Application

## 📌 Project Description

This project is a personal portfolio website developed as part of Assignment 4. It demonstrates advanced web development concepts using HTML, CSS, and JavaScript.

The application includes dynamic content, API integration, interactive features, and state management to create a modern, user-friendly portfolio.

---

## 🚀 Features

* ✅ Responsive portfolio layout
* ✅ GitHub API integration (live repositories)
* ✅ Project filtering by category
* ✅ Project sorting (newest, oldest, A–Z)
* ✅ Contact form with validation
* ✅ Light/Dark mode toggle (saved using localStorage)
* ✅ Visit timer (tracks time on site)
* ✅ Error handling for API and form inputs

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* GitHub REST API
* LocalStorage

---

## 📂 Project Structure

```
202270100-Reham-assignmnet4/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── presentation/
│   └── vedio/
├── README.md
└── .gitignore
```

---

## ⚙️ Setup Instructions

1. Clone or download the repository:


2. Open the project folder in **WebStorm** or any code editor.

3. Open `js/script.js` and replace the GitHub username:

```javascript
const username = "Reham-ms";
```

4. Run the project:

* Open `index.html` in your browser
* Or use WebStorm's built-in server

---

## 🌐 API Integration

This project uses the **GitHub REST API** to fetch and display repositories dynamically.

* Endpoint used:

```
https://api.github.com/users/Reham-ms/repos
```

* Displays:

   * Repository name
   * Description
   * Programming language
   * Link to GitHub

* Includes error handling if the API fails.

---

##  AI Usage Summary

AI tools were used to support development and learning:

* **ChatGPT**

   * Helped with planning features
   * Assisted with debugging and fixing errors
   * Provided explanations for JavaScript logic

* **GitHub Copilot**

   * Assisted with code completion
   * Suggested syntax improvements

📄 Full details are provided in:

```
docs/ai-usage-report.md
```

---

## 🎯 Learning Outcomes

Through this project, I learned:

* How to integrate external APIs using `fetch()` and `async/await`
* How to implement filtering and sorting logic
* How to validate user input in forms
* How to manage state using `localStorage`
* How to structure and organize a web project professionally

---

## ⚡ Performance Considerations

* Lightweight design with no external frameworks
* Efficient DOM manipulation
* Reusable JavaScript functions
* Responsive layout for different devices

---

## 🌍 Optional Deployment

This project can be deployed using:

* GitHub Pages
* Netlify
* Vercel

---

## 📌 Author

**Reham Alsubhy**




