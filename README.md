# 🎧 SoundWave – Headphone Website

**SoundWave** is a modern and responsive headphone website designed to showcase premium headphones with an attractive user interface and smooth product interactions.

The website includes a dynamic hero section, headphone product collection, product slider, offers, customer reviews, newsletter subscription and a responsive footer.

---

## 🖼️ Project Preview

### 🏠 Home Section

![SoundWave Headphone Website](https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format\&fit=crop\&w=1200\&q=80)

### 🎧 Headphone Collection

![Headphone Collection](https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format\&fit=crop\&w=1200\&q=80)

### 🎵 Premium Audio

![Premium Headphones](https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format\&fit=crop\&w=1200\&q=80)

---

## ✨ Features

* 🎧 Premium headphone showcase
* 🔄 Automatic hero image slider
* 🎨 Dynamic background colors
* 🏷️ Dynamic brand title and description
* 💰 Dynamic product prices
* 🛍️ Product collection section
* ⬅️➡️ Horizontal product slider
* 🎯 Shop Now buttons
* 📦 12 headphone products
* 🚚 Free delivery information
* 🛡️ 1-year warranty information
* ⭐ Customer reviews
* 📧 Newsletter subscription section
* 📱 Responsive design
* 🔗 Social media icons
* 🦶 Professional footer

---

## 🎧 Featured Brands

The website showcases headphones from multiple popular brands:

* Sony
* Bose
* JBL
* Sennheiser
* Audio-Technica
* Marshall
* boAt

---

## 🔄 Dynamic Hero Slider

The hero section automatically changes every **2 seconds**.

It dynamically updates:

* Product image
* Brand name
* Description
* Price
* Background gradient
* Text color

Example brands include:

```text
Sony
Bose
JBL
Sennheiser
Audio-Technica
```

---

## 🛍️ Product Collection

The collection section contains **12 headphone product cards**.

Each card includes:

* Product image
* Brand name
* Product category
* Description
* Price
* Shop Now button

The products are displayed inside a horizontal slider with **Previous** and **Next** buttons.

---

## 🎨 Why Choose Us

The website contains four main features:

### 🎧 Premium Sound

Crystal-clear audio, powerful bass and an immersive listening experience.

### 🔋 Long Battery Life

Reliable battery performance for everyday listening.

### 🚚 Fast Delivery

Fast and safe delivery directly to the customer's doorstep.

### 🛡️ Trusted Quality

Quality products with reliable customer support.

---

## ⭐ Customer Reviews

The website contains a customer review section with:

* ⭐ 5-star ratings
* Customer feedback
* Customer names
* Verified Customer labels
* Overall rating section

---

## 📧 Newsletter

Users can subscribe to receive:

* Exclusive offers
* New product updates
* Special discounts

---

## 🛠️ Technologies Used

### HTML5

Used to create the structure of the website.

### Tailwind CSS

Used for responsive design, layouts, colors, spacing, cards, buttons and animations.

The project uses the Tailwind CSS browser CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

### JavaScript

Used for:

* Automatic image slider
* Dynamic content
* Dynamic background colors
* Product slider
* Previous/Next buttons

### Font Awesome

Used for icons such as:

* Headphones
* Search
* Arrow
* Truck
* Shield
* Battery
* Social media icons

---

## 📂 Project Structure

```text
SoundWave/
│
├── index.html
├── script.js
│
├── imges/
│   ├── img1.png
│   ├── img2.png
│   ├── img3.png
│   ├── img4.png
│   ├── img5.png
│   ├── img6.png
│   ├── img7.png
│   ├── img8.png
│   ├── img9.png
│   ├── img10.png
│   ├── img11.png
│   ├── img12.png
│   └── offer.png
│
└── README.md
```

---

## ⚙️ JavaScript Functionality

### Hero Slider

The hero section uses an image array:

```javascript
let imges = [
    "imges/img1.png",
    "imges/img2.png",
    "imges/img3.png",
    "imges/img4.png",
    "imges/img5.png"
];
```

The content automatically changes using:

```javascript
setInterval(change, 2000);
```

### Product Slider

The product collection can be moved using:

```text
⬅️ Previous
➡️ Next
```

JavaScript calculates the maximum scroll position and moves the product track using `translateX()`.

---

## 📱 Responsive Design

The website is designed to work on:

* 📱 Mobile
* 📱 Tablet
* 💻 Laptop
* 🖥️ Desktop

Tailwind responsive classes such as:

```text
sm:
md:
lg:
```

are used throughout the website.

---

## 🚀 How to Run

### 1. Download or Clone the Project

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

### 2. Open the Project

Open the project folder in **VS Code**.

### 3. Run the Website

You can use **Live Server** in VS Code:

```text
Right Click on index.html
        ↓
Open with Live Server
```

---

## 📸 Product Images

![Headphones](https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format\&fit=crop\&w=800\&q=80)

![Wireless Headphones](https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format\&fit=crop\&w=800\&q=80)

![Music Headphones](https://images.unsplash.com/photo-1487215078519-e21cc028cb29?auto=format\&fit=crop\&w=800\&q=80)

---

## 🎯 Project Purpose

The main purpose of this project is to create a modern headphone shopping interface while practicing:

* HTML
* Tailwind CSS
* JavaScript
* DOM manipulation
* Arrays
* Functions
* `setInterval()`
* Event handling
* CSS transforms
* Responsive web design

---

## 👩‍💻 Author

### Shruti Dhanani

Frontend / Full Stack Web Development Learner

📍 Rajkot, Gujarat, India

---

## 📄 License

This project is created for **learning, practice and portfolio purposes**.

© 2026 SoundWave

