# 🏥 Hospital Management REST API

A modular, backend-only REST API built with **Node.js**, **Express**, and **MongoDB** to manage hospital data such as patients, doctors, and appointments.  
Designed to demonstrate CRUD operations, structured routing, and Mongoose schema management in a clean API architecture.

---

## 🚀 Features

### ✅ Core Functionalities

- Create, read, update, and delete **patients**, **doctors**, and **appointments**
- Modular file structure for scalability and readability
- Schema-based validation with **Mongoose**
- RESTful routing and status codes for easy frontend integration

### 📬 API Endpoints

- `GET /patients` – Get all patients  
- `POST /doctors` – Add a doctor  
- `PUT /appointments/:id` – Update an appointment  
- `DELETE /patients/:id` – Delete a patient  
- More CRUD routes for each model

---

## 🛠 Tech Stack

- **Node.js** & **Express.js** for API development  
- **MongoDB** with **Mongoose** for database and modeling  
- **dotenv** for environment configuration  
- **Postman** for API testing

---

## 🔧 Getting Started

### 📦 Prerequisites

- Node.js and npm installed
- MongoDB Atlas or local MongoDB setup

### 🚀 Installation

```bash
git clone https://github.com/srinivaspaluvayi/REST_API_Hospital-Management.git
cd REST_API_Hospital-Management
npm install
```

### ⚙️ Environment Setup

Create a `.env` file:

```
MONGODB_URI=your_mongo_connection_string
PORT=5000
```

### ▶️ Run the Server

```bash
npm start
```

---

## 🔒 Security Note

⚠️ This project does **not include authentication**. Use it for learning/demo purposes only.  
🛡️ To respect privacy, **actual patient data is not shared** in this repository.

---
