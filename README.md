# 🕹️ Retro Pixel To-Do List & Jukebox

Welcome to the **Pixel To-Do List & Jukebox**! This is a fully functional web application designed with a vibrant, 8-bit arcade aesthetic. It blends custom vintage-cream and neon-pink retro styling with dynamic task management and an integrated audio playlist system.

---

## 🚀 Features

### 1. Dynamic Task Management
* **Add Tasks:** Type a task and hit `Enter` or click **ADD** to dynamically inject new items into the list.
* **Complete Tasks:** Click the heavy checkmark button (`✔`) to instantly strike through and gray out completed objectives.
* **Vaporize Tasks:** Click the `X` button to cleanly remove a task from the list entirely.
* **Smart Alignment:** Powered by CSS Flexbox (`flex: 1`), keeping task text anchored to the left and action buttons perfectly aligned vertically on the right margin, regardless of text length.

### 2. Audio Playlist Jukebox
* **Track Array Control:** Powered by a frontend JavaScript engine tracking indices to switch audio tracks seamlessly.
* **Navigation Controls:** Multi-button control deck featuring `◀ PREV` and `NEXT ▶` button triggers to loop through tracks.
* **Dynamic Status Text:** The master toggle updates instantly to display the current track title or an `OFF` state.

### 3. Styled UI Elements
* **Custom Scrollbar:** Includes custom webkit engine styling that transforms standard browser scrollbars into chunky, bordered arcade lanes to cleanly contain massive to-do lists.
* **Responsive Interactions:** Hover and active button states that translate elements downwards slightly (`translateY(2px)`) to mimic authentic arcade physical button clicks.

---

## 📂 File Structure

The project consists of three lightweight, interconnected files:

* `pixel-todo.html` — The core layout skeletal system containing the interactive container wrappers, list nodes, and audio player hooks.
* `pixel-todo.css` — Holds the global visual styling, custom Google Font integration (`Press Start 2P`), color layouts, layout boundaries, and pixelated scroll mechanics.
* `pixel-todo.js` — The application's engine handling DOM manipulation, structural creation, click triggers, event listening, and the jukebox indexing array.

---

## 🛠️ Installation & Usage

Since this application runs entirely on client-side frontend code, it requires zero server installations or package managers to execute.

1. Clone or download the project files into a single unified directory.
2. Ensure the file links inside `pixel-todo.html` point accurately to your local stylesheets and scripts:
    ```html
    <link rel="stylesheet" href="pixel-todo.css">
    <script src="pixel-todo.js"></script>
    ```
3. Double-click or open `pixel-todo.html` in any modern web browser to boot up the application.

---

> **Developer Note:** When adding your own custom tracks to the soundtrack, ensure the target URLs inside the `playlist` array point directly to raw, streaming audio extensions (such as `.mp3`).
