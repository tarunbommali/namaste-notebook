
# 📒 Namaste Notebook

A well-structured learning companion for the **Namaste JavaScript** and **Namaste Node.js** YouTube series by Akshay Saini. This project organizes all episodes into a clean web UI where learners can read episode notes, understand core concepts, and contribute to building a great open-source resource.

## 🚀 Project Overview

The Namaste Notebook aims to:

- 📚 Organize episode-wise markdown content from the Namaste series.
- 🧠 Help learners easily navigate, read, and revise concepts.
- 🤝 Encourage contributions by the community to improve or add missing content.
- 🧑‍💻 Showcase markdown-rendered learning material in a beautiful, responsive UI.

---

## 🛠️ Tech Stack

- **React.js** – Core frontend framework
- **React Router DOM** – Dynamic routing by `course`, `season`, and `episode`
- **React Markdown** – Render markdown content in React
- **Tailwind CSS / DaisyUI** – For responsive and clean UI styling
- **Vite** – Fast dev server and bundler
- **File-based Markdown Imports** – For managing and displaying note files

---

## 📂 Folder Structure

```

namaste-notebook/
├── public/
├── src/
│   ├── components/
│   │   └── SideBar.jsx        # Sidebar with course/season/episode navigation
│   ├── pages/
│   │   └── Markdown.jsx       # Dynamic Markdown reader page
│   ├── utils/
│   │   ├── constants.js       # Static data for courses, seasons, episodes
│   │   └── readmeMap.js       # Episode-wise markdown imports
│   └── App.jsx
│   └── main.jsx
├── README.md
└── ...

```

---

## 📘 How It Works

1. Route: `/courseId/seasonId/episodeId`
2. We match the URL with markdown files like:
```

NAMASTE\_NODE\_SEASON\_2\_EPISODE\_1.md

````
3. The corresponding file content is shown in the UI using `react-markdown`.

---

## 📸 Demo

> Coming soon! (You can host it on Netlify, Vercel, or GitHub Pages)

---

## 💡 Missing an Episode?

If a note is missing, you'll see a message like:

> 🙋‍♂️ This episode needs your help!  
> Fork the repo and contribute the missing notes. Let’s build this together, Namaste Devs! 🙏

---

## ✍️ How to Contribute

1. 🍴 Fork the repository
2. 📁 Add your markdown in `src/notes/`
3. 🗺️ Update the `readmeMap.js` to register your file
4. 🔃 Submit a pull request

We welcome PRs for:
- ✅ Adding new episodes
- ✏️ Fixing typos
- 🎨 UI/UX improvements
- 🧪 Tests (optional)

---

## 📌 Example Markdown Format

```markdown
# Episode 1: Introduction

## What is JavaScript?
- High-level
- Interpreted
- Multi-paradigm

## Summary
JS is the soul of web development!
````

---

## 🧑‍🤝‍🧑 Contributors

Thanks to everyone helping build this dev-friendly notebook! 💖
\[Your Name Here] | \[GitHub Handle]

---

## 📄 License

MIT License – Use it, fork it, learn from it, contribute to it 🙌

---

> “The best way to learn is to teach others.” – Let’s grow together, one episode at a time.

```

---

Let me know if you want:
- A version with images or badges
- Auto-generated table of contents
- GitHub deploy tips  
- Or if you want to split it into sections like `README`, `CONTRIBUTING.md`, etc.
```
