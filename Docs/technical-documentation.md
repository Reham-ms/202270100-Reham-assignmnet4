# Technical Documentation

## 1. Project Overview

This project is a personal portfolio web application developed using HTML, CSS, and JavaScript. The purpose of this project is to demonstrate advanced web development functionality, including API integration, dynamic content rendering, form validation, and state management.

The application builds on previous assignments and introduces more complex logic and real-world features. It is designed to be interactive, responsive, and user-friendly while maintaining clean code structure and performance optimization.

---

## 2. Technologies Used

The following technologies were used to develop this project:

* **HTML5** → Provides the structure of the web application
* **CSS3** → Handles styling, layout, responsiveness, and visual design
* **JavaScript (ES6)** → Implements logic, interactivity, and dynamic behavior
* **GitHub REST API** → Fetches real-time repository data
* **LocalStorage** → Stores user preferences (theme state)

---

## 3. Application Features

### 3.1 GitHub API Integration

The application connects to the GitHub API to fetch and display public repositories dynamically.

#### Implementation:

* Uses `fetch()` with `async/await`
* Retrieves repository data including:

    * Name
    * Description
    * Programming language
    * Repository link
* Displays repositories in dynamically generated cards

#### Error Handling:

* If the API request fails, a user-friendly error message is displayed
* Prevents the application from crashing

#### Example:

```javascript
const response = await fetch(`https://api.github.com/users/${username}/repos`);
```

---

### 3.2 Project Filtering and Sorting

The portfolio section includes advanced logic that allows users to:

#### Filtering:

* Filter projects by category:

    * Web
    * UI
    * JavaScript

#### Sorting:

* Sort projects using multiple criteria:

    * Newest first
    * Oldest first
    * Alphabetical order (A–Z)

#### Implementation:

* Uses JavaScript arrays
* Uses `.filter()` to narrow results
* Uses `.sort()` to reorder data
* Combines multiple conditions for dynamic results

---

### 3.3 Contact Form Validation

The contact form includes multiple validation checks to ensure proper user input.

#### Validation Rules:

* Name must not be empty
* Email must not be empty
* Email must follow a valid format
* Message must not be empty
* Message must be at least 10 characters

#### Behavior:

* Displays error messages under each field
* Prevents submission if validation fails
* Shows success message when validation passes

#### Example:

```javascript
if (!validateEmail(email)) {
  showError("Invalid email format");
}
```

---

### 3.4 State Management (Dark/Light Mode)

The application includes a theme toggle feature.

#### Functionality:

* Users can switch between light and dark mode
* The selected theme is saved using `localStorage`
* The theme remains the same after page refresh

#### Implementation:

* Uses CSS variables for theming
* Uses JavaScript to toggle classes
* Stores state in browser storage

#### Example:

```javascript
localStorage.setItem("theme", "dark");
```

---

### 3.5 Visit Timer

A timer tracks how long a user has stayed on the website.

#### Features:

* Starts automatically when page loads
* Updates every second
* Displays total time in seconds

#### Implementation:

* Uses `setInterval()`
* Updates DOM dynamically

---

## 4. Code Structure

The project follows a clean and organized structure:

```
id-name-assignment3/
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
├── README.md
└── .gitignore
```

### Explanation:

* **index.html** → Main structure of the website
* **styles.css** → All styling and visual design
* **script.js** → Handles logic, API calls, and interactivity
* **docs/** → Contains documentation files

---

## 5. Performance Optimization

Several techniques were applied to improve performance:

* Optimized and minimal CSS design
* No unnecessary external libraries
* Efficient DOM manipulation
* Reusable JavaScript functions
* Lightweight structure for fast loading
* Responsive layout for different screen sizes

---

## 6. Error Handling

### API Error Handling:

* Displays a message if GitHub API fails
* Prevents application from breaking

### Form Validation Errors:

* Shows clear error messages
* Blocks invalid form submission

---

## 7. User Experience (UX)

The application is designed with usability in mind:

* Clean and simple layout
* Responsive design for mobile and desktop
* Clear navigation and sections
* Interactive features (filtering, sorting, theme toggle)
* Visual feedback (errors and success messages)

---

## 8. Browser Compatibility

The application was tested on:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox

It works correctly across modern browsers and different screen sizes.

---

## 9. Future Improvements

Possible enhancements include:

* Adding a search feature for projects
* Connecting contact form to a backend service
* Adding animations and transitions
* Improving accessibility (ARIA labels, keyboard navigation)
* Adding more API integrations (weather, quotes, etc.)

---

## 10. Conclusion

This project demonstrates the use of advanced JavaScript concepts, API integration, state management, and clean coding practices. It reflects an understanding of how to build interactive, user-friendly web applications while maintaining performance and code quality.

The project serves as a strong foundation for developing more complex and professional web applications in the future.
