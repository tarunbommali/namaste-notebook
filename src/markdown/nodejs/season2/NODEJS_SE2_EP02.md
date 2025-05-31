# 02. Features, HLD, LLD & Planning

This episode covers the basics of software planning, including High-Level Design (HLD), Low-Level Design (LLD), database and API design, project workflow, architecture types, and common design patterns.

---

## Table of Contents

- [HLD (High-Level Design)](#hld-high-level-design)
- [LLD (Low-Level Design)](#lld-low-level-design)
- [Real-world Example: DevTinder](#real-world-example-devtinder)
- [Database Design (MongoDB)](#database-design-mongodb)
- [API Design (REST APIs)](#api-design-rest-apis)
- [Project Workflow](#project-workflow)
- [System Architecture Types](#system-architecture-types)
- [Design Patterns](#design-patterns)
- [Summary](#summary)

---

## 📌 HLD (High-Level Design)

- **Definition:** Designing the overall structure and architecture of a software system.
- **Focus:**  
  - Big picture design  
  - Component interaction  
  - Technologies, APIs, services  
- **Goal:** Understand how different modules interact in the system.

---

## 📌 LLD (Low-Level Design)

- **Definition:** Designing the internal logic of individual components or modules.
- **Focus:**  
  - Function definitions  
  - Class diagrams, flowcharts  
  - Database queries, error handling  
- **Goal:** Provide detailed logic that developers will implement.

---

## 🔧 Real-world Example: DevTinder

**Architecture Used:** Microservices

- **Frontend:** UI Layer  
- **Backend:** Node.js + Express.js + MongoDB

---

## 🛢️ Database Design (MongoDB)

### 📂 Collections

1. **User Collection**  
   - Follows SRP (Single Responsibility Principle)  
   - Fields:  
     - `firstName`, `lastName`, `emailID`, `password`  
   - Represents user basic info (ER model)

2. **ConnectionRequest Collection**  
   - Fields:  
     - `fromUserID`, `toUserID`, `status`  
     - `status`: `pending`, `accepted`, `rejected`, `ignored`, `blocked`

---

## 🌐 API Design (REST APIs)

### 📥 HTTP Methods

- `GET`: Read data  
- `POST`: Create data  
- `PUT/PATCH`: Update data  
- `DELETE`: Remove data  

### 📑 DevTinder API List

| Method | Endpoint           | Description                      |
|--------|--------------------|----------------------------------|
| POST   | `/signup`          | User registration                |
| POST   | `/login`           | User login                       |
| GET    | `/profile`         | Get user profile                 |
| POST   | `/profile`         | Create profile                   |
| PATCH  | `/profile`         | Update profile info              |
| DELETE | `/profile`         | Delete profile                   |
| POST   | `/sendRequest`     | Send connection request          |
| POST   | `/reviewRequest`   | Accept or reject requests        |
| GET    | `/requests`        | View incoming requests           |
| GET    | `/connections`     | View accepted connections        |

---

## 🔍 Project Workflow

1. **Requirement Gathering & Analysis**
2. **System Design (HLD & LLD)**
3. **Database Design**
4. **API Design**
5. **Implementation & Testing**

---

## 🏗️ System Architecture Types

- Monolith  
- Microservices ✅  
- Client-Server  
- Serverless  
- Layered (N-Tier)  
- Event-driven  
- Peer-to-peer (P2P)

---

## 🎯 Design Patterns

| Pattern    | Type         | Description                                                      |
|------------|--------------|------------------------------------------------------------------|
| Singleton  | Creational   | Ensures only one instance of a class is created                 |
| Factory    | Creational   | Creates object without exposing the creation logic              |
| Observer   | Behavioral   | Notifies all subscribers when something changes                 |
| Strategy   | Behavioral   | Allows switching algorithms at runtime                          |

---

## Summary

- Understood the difference between HLD and LLD.
- Explored real-world architecture and database design for DevTinder.
- Learned about REST API design and common endpoints.
- Reviewed project workflow and architecture types.
- Saw common design patterns used in interviews.

---