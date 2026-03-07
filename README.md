## GitHub Issue Tracker – Project Overview

This project is a **GitHub issue tracker dashboard** where users can view, filter, and explore issues in a clean and modern interface. It is built with **HTML, Tailwind CSS (DaisyUI)**, and **vanilla JavaScript**, focusing on responsive design and interactive UI behavior.

- **Live link**: `https://redwan-github-issue-tracker.netlify.app`

### Implemented Features

- **Issue listing**: Displays all issues in a card-based layout with priority, status, labels, and metadata.
- **Filter by status**: Quickly switch between **All**, **Open**, and **Closed** issues using interactive buttons.
- **Search functionality**: Real-time search (desktop and mobile) to find issues by keywords.
- **Detailed modal view**: Clicking on a card opens a modal with full issue details (author, date, labels, priority, assignee, etc.).
- **Loading spinner**: Visual loading state while fetching data from the API for a smoother user experience.
- **Responsive design**: Fully responsive layout with a desktop navbar and mobile-friendly menu.

---
## Question Answer
### 1. Difference between `var`, `let`, and `const`

In JavaScript, we can declare variables using `var`, `let`, or `const`.  
Although they all store values, they behave differently in terms of scope and how they can be updated.

- **`var`**: This the older way of declaring variables. It is **function‑scoped**, can be **redeclared** and **updated**, which can sometimes lead to bugs in larger codebases.
- **`let`**: This is a  modern option. It is **block‑scoped** (limited to `{ ... }`), can be **updated**, but **cannot be redeclared in the same scope**.
- **`const`**: It is also **block‑scoped**, but once a value is assigned, it **cannot be reassigned**. It is used when we know the reference should not change.

**Example:**

```js
var name = "Redwan";
let age = 20;
const country = "Bangladesh";

age = 21;          // correct
// country = "bangladesh"; // wrong(TypeError)
```

---

### 2. What is the spread operator (`...`)?

The **spread operator** (`...`) allows us to **expand** an array or object into individual elements.  
It is very useful when we want to **copy**, **merge**, or **extend** arrays and objects in a clean and readable way.

**Example (Array spread):**

```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2);
```

**Output:**

```txt
[1, 2, 3, 4, 5]
```

---

### 3. Difference between `map()`, `filter()`, and `forEach()`

These three are commonly used **array methods** in JavaScript. All of them loop through elements, but they are used for different purposes.

| Method     | Purpose                                                                  |
|-----------|--------------------------------------------------------------------------|
| `map()`   | Creates a **new array** by applying a function to **each element**.      |
| `filter()`| Creates a **new array** containing only elements that **match a condition**. |
| `forEach()` | Loops through each element to **perform an action**, but **does not return** a new array. |

**Example:**

```js
const numbers = [1, 2, 3, 4];

// map: transform each element
const doubled = numbers.map(num => num * 2);      // [2, 4, 6, 8]

// filter: keep only that numbers who satisfy the condition
const even = numbers.filter(num => num % 2 === 0); // [2, 4]

// forEach: just loop and do something (Do not return anything)
numbers.forEach(num => console.log(num));
```

---

### 4. What is an arrow function?

An **arrow function** is a shorter and more modern way to write functions in JavaScript.  
It uses the `=>` syntax and often makes the code cleaner and easier to read, especially for small functions.

**Normal function vs arrow function:**

```js
// Normal function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => {
  return a + b;
};
```

For very short functions, we can make it even more smaller:

```js
const addShort = (a, b) => a + b;
```

Arrow functions are commonly used in callbacks (like  in `map`, `filter`, event listeners, etc.).

---

### 5. What are template literals?

**Template literals** are a modern way to create strings in JavaScript using **backticks** (`` ` ``) instead of single or double quotes.  
They allow us to easily insert variables and expressions using the `${ ... }` syntax, which makes dynamic strings much more readable.

**Example:**

```js
const name = "Redwan";

const message = `Hello, my name is ${name}`;

console.log(message);
```

**Output:**

```txt
Hello, my name is Redwan
```

Template literals also support **multi‑line strings** and embedding expressions, which is very helpful in real projects.