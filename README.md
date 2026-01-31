# 🇮🇳 iINDIA: Virtual Heritage Explorer & Smart Planner

> **Heritage Tech | AR/VR | Smart Tourism**
> *Built by Team PastForward*

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=google-chrome)](https://prathamncrypt.github.io/iINDIA/?v=1)


---

## 👋 Introduction
Welcome to **iINDIA**, a project built by **Team PastForward**, a squad of first-year B.Tech CSE students passionate about bridging the gap between India's rich history and modern technology.

As freshers from **BVCOE, New Delhi** and **ABES, Ghaziabad**, we noticed that while India has incredible monuments, the digital experience for tourists is often static and boring. We built iINDIA to change that—making heritage immersive, accessible, and easy to plan.

---

## 🔴 The Problem
1.  **Static Experience:** Most tourism websites just show 2D photos. You can't truly "see" the architecture of the Taj Mahal or Red Fort from a flat image.
2.  **Planning Chaos:** Tourists often struggle to plan their day. Questions like *"I have 7 hours in Delhi, where should I go?"* usually result in generic answers or wasted time.
3.  **Accessibility:** Not everyone can physically travel to these sites.

## 💡 The Solution
**iINDIA** is a "Heritage Tech" platform that serves two main purposes: **Virtual Exploration** and **Smart Itinerary Planning**.

### Key Features

#### 1. 🏛️ Immersive 3D Exploration
We moved beyond JPEGs. Users can interact with high-fidelity **3D models** of iconic sites directly in the browser.
* **Rotate, Zoom, & Inspect:** See the Taj Mahal, Red Fort, India Gate, and more from every angle.
* **AR-Ready:** Built using `<model-viewer>` for lightweight 3D rendering.
* **Historical Context:** Learn the history behind the architecture.

#### 2. ⏳ "HourGlass" Smart Planner
A unique algorithm that creates itineraries based on **time availability**, not just location.
* **Input:** "I have 7 hours."
* **Output:** A curated "Heritage Route" (e.g., *National Crafts Museum + Purana Qila*) instead of a generic mall visit.
* **Logic:** It prioritizes cultural experiences over commercial ones.

---

## 📸 Screenshots

| **Home Page** | **3D Exploration (Taj Mahal)** |
|:---:|:---:|
| <img width="500" alt="Home Page Screenshot" src="https://github.com/user-attachments/assets/3d4317aa-9ba3-46b5-9fca-172bf6249a1d" /> | <img width="500" alt="3D Taj Mahal Screenshot" src="https://github.com/user-attachments/assets/fe947e3c-abe9-438a-9ed8-d166d4142b87" /> |

| **HourGlass Planner (7 Hours)** | **Timings & Info** |
|:---:|:---:|
| <img width="500" alt="7 Hour Plan Screenshot" src="https://github.com/user-attachments/assets/15e7bc66-8248-467c-802c-34b34629af62" /> | <img width="500" alt="Timings Page Screenshot" src="https://github.com/user-attachments/assets/e7970028-3a93-4d69-9dd3-2e0d9fd7332b" /> |

---

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
* **3D Rendering:** `<model-viewer>` (Google's web component for 3D & AR)
* **Design:** Custom CSS for a dark, immersive "Museum" aesthetic.
* **Logic:** Custom JS algorithms for time-based itinerary generation.

---

## 🚀 How to Run Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/prathamncrypt/iINDIA.git
    ```
2.  **Navigate to the project folder:**
    ```bash
    cd iINDIA
    ```
3.  **Launch:**
    Simply open `index.html` in your browser.
    *Note: For the best 3D experience, use a local server (like Live Server in VS Code) to avoid CORS issues with 3D models.*

---

## 👥 Team PastForward
* **Pratham** - *BVCOE, New Delhi (1st Year CSE)*
* **Ananyaa** - *BVCOE, New Delhi (1st Year CSE)*
* **Deepak** - *BVCOE, New Delhi (1st Year CSE)*
* **Aviral** - *ABES, Ghaziabad (1st Year CSE)*

---

## 🔮 Future Scope
* **AI Integration:** Moving from static time-blocks to a Generative AI model that creates custom routes based on user interests (e.g., "Foodie Tour" vs. "History Tour").
* **VR Mode:** Full Virtual Reality support for headsets.
* **Ticket Booking:** Direct integration with ASI (Archaeological Survey of India) for ticket purchases.

---

Made with ❤️ and Code by **Team PastForward**.


