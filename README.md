# Windows Explorer Clone (Fullstack)

A scalable Windows Explorer-like application built with **Bun**, **Elysia**, and **Vue 3**.
This project demonstrates clean architecture, lazy-loaded folder tree, search functionality, and full testing coverage.

---

## ✨ Features

* 📁 Folder tree (lazy loaded)
* 📄 File display panel
* 🔍 Search folders
* 📂 Expand / collapse folders
* ⚡ High performance for large datasets
* 🧱 Clean architecture (Service + Repository)
* 🗂 ORM integration
* 🧪 Unit tests
* 🔗 Integration tests
* 🎨 UI component testing
* 🌐 REST API (versioned)
* 📦 Monorepo structure
* 🚀 Bun runtime
* 🔌 Elysia framework

---

## 🏗 Architecture

```
windows-explorer/
│
├── backend
│   ├── controller
│   ├── service
│   ├── repository
│   ├── entity
│   └── tests
│
├── frontend
│   ├── src
│   ├── components
│   ├── api
│   └── tests
│
└── README.md
```

---

## ⚙️ Tech Stack

### Backend

* Bun Runtime
* Elysia
* ORM
* Clean Architecture
* REST API

### Frontend

* Vue 3
* TypeScript
* TailwindCSS
* Lazy Tree Component

### Testing

* bun:test (backend)
* Vitest (frontend)
* Vue Test Utils
* E2E HTTP testing

---

## 🚀 Getting Started

### 1. Clone repository

```
git clone https://github.com/your-repo/windows-explorer.git
cd windows-explorer
```

---

### 2. Install dependencies

Backend:

```
cd backend
bun install
```

Frontend:

```
cd ../frontend
bun install
```

---

### 3. Run Backend

```
cd backend
bun run dev
```

Server will run on:

```
http://localhost:3000
```

---

### 4. Run Frontend

```
cd frontend
bun run dev
```

App will run on:

```
http://localhost:5173
```

---

## 📡 API Endpoints

### Get Folder Tree (Lazy Load)

```
GET /api/v1/folders
```

### Get Folder Content

```
GET /api/v1/folders/:id/content
```

### Search Folder

```
GET /api/v1/folders/search/:query
```

---

## 🧪 Running Tests

### Backend Tests

```
cd backend
bun test
```

Includes:

* Unit tests
* Integration tests

---

### Frontend Tests

```
cd frontend
bun run test
```

Includes:

* Component tests
* UI interaction tests

---

### E2E Tests

```
bun run test
```

Checks:

* API availability
* Frontend availability
* Data structure

---

## 📈 Scalability Considerations

* Lazy loading tree
* Repository pattern
* Service abstraction
* API pagination ready
* Stateless backend
* ORM optimized queries

Supports:

* Millions of folders
* Thousands concurrent users

---

## 🧱 Clean Architecture

```
Controller
    ↓
Service
    ↓
Repository
    ↓
ORM
    ↓
Database
```

Benefits:

* Testable
* Scalable
* Maintainable
* SOLID principles

---

## 🧪 Testing Pyramid

```
          E2E
        Integration
      Unit / Component
```

Coverage:

* Service logic
* API endpoints
* UI components
* Full request flow

---

## 🎯 Assessment Checklist

* Clean code ✅
* Data structure ✅
* Algorithm ✅
* Best practices ✅
* Files panel ✅
* Expandable folders ✅
* Scalable architecture ✅
* Search ✅
* UI components ✅
* Clean architecture ✅
* Service & repository ✅
* SOLID principles ✅
* Unit tests ✅
* Integration tests ✅
* UI tests ✅
* E2E tests ✅
* REST API standards ✅
* Bun runtime ✅
* Elysia ✅
* Monorepo ✅
* ORM ✅

---

## 👨‍💻 Author

Wawan Setiawan
Fullstack Developer

---

## 📄 License

MIT License
