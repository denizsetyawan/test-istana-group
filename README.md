# Simple Orders App
Aplikasi pemesanan sederhana menggunakan **Microservice Architecture**, terdiri dari:
- **Backend Service**: Node.js + Express + JWT Auth
- **Frontend Service**: Vue.js + Bootstrap 5
- **Database Service**: MySQL (Docker)
- **Docker Compose** single-command startup

---

## 📌 Fitur
### 🧑‍💻 Backend (Node.js + Express + MySQL)
- Register & Login (JWT Authentication)
- CRUD Produk (nama, harga, stok)
- Buat Pesanan (pilih produk & jumlah)
- Riwayat Pesanan
- Protected Route menggunakan JWT

### 💻 Frontend (Vue + Bootstrap 5)
- Login Page
- Produk List Page
- Form Pemesanan
- Riwayat Pesanan
- Navbar & Logout
- Routing Guard (akses login otomatis redirect)

---

## ⚙️ Cara Menjalankan

### **1. Clone Repository**
```
git clone https://github.com/denizsetyawan/test-istana-group
cd test-istana-group

```

### **2. Jalankan Dengan Single Command**

Pastikan Docker & Docker Compose sudah terpasang. Lalu jalankan

```
docker-compose up --build
```

Tunggu sampai semua container berjalan.

🚀 Akses Aplikasi
```
Service	URL
Frontend	http://localhost:5173

Backend API	http://localhost:3000

MySQL (Host)	3306
```

Login default setelah setup database (jika ada seed):

```
username: deniz
password: 123456
```

## 📂 Project Structure

```
test-istana-group/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── app.js
│   ├── package.json
│   └── Dockerfile
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── Dockerfile
│
├── docker-entrypoint-initdb.d/
│   └── simple_orders_app.sql
│
└── docker-compose.yml
```
- Folder Backend untuk menampung Api, Node, Express
- Folder Frontend untuk menampung Vue js
- Folder docker-entrypoint-initdb.d untuk mengambil data Database MySQL
- docker-compose.yml untuk config docker
