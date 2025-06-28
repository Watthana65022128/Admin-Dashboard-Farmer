# User Management Admin Dashboard

แดชบอร์ดแอดมินสำหรับระบบจัดการผู้ใช้งาน

### 📊 แดชบอร์ดหลัก
- ภาพรวมสถิติผู้ใช้งาน
- จำนวนผู้ใช้ทั้งหมด, ผู้ใช้ปกติ, ผู้ใช้ถูกระงับ, ผู้ดูแลระบบ
- แสดงข้อมูลแบบเรียลไทม์

### 👤 จัดการผู้ใช้
- ดูรายชื่อผู้ใช้ทั้งหมดในระบบ
- ระงับ/ยกเลิกการระงับผู้ใช้
- ค้นหาผู้ใช้ตามชื่อหรืออีเมล
- ระบุเหตุผลในการระงับการใช้งาน
- แสดงสถานะผู้ใช้ (ปกติ/ถูกระงับ/แอดมิน)
- ป้องกันการจัดการผู้ดูแลระบบ

## 🛠 เทคโนโลยีที่ใช้

### Frontend Framework
- **Next.js 14** - React Framework พร้อม App Router
- **React 18** - JavaScript Library สำหรับ UI
- **Tailwind CSS** - Utility-first CSS Framework

### State Management & Data Fetching
- **React Hooks** - useState, useEffect, Custom Hooks
- **Axios** - HTTP Client สำหรับเรียก API
- **js-cookie** - จัดการ Cookies

### UI Components & Icons
- **Lucide React** - Modern SVG Icons
- **Recharts** - Charting Library สำหรับ React
- **React Hot Toast** - Notification System

### Styling & Theme
- **CSS Custom Properties** - ธีมสีเกษตรกรรม
- **Inter Font** - Typography
- **Responsive Design** - รองรับทุกขนาดหน้าจอ

## 🚀 การติดตั้ง

### ข้อกำหนดระบบ
- Node.js 18.0 หรือใหม่กว่า
- npm หรือ yarn
- Backend API ที่รันอยู่ (ดูโฟลเดอร์ backend)

### ขั้นตอนการติดตั้ง

1. **Clone repository**
```bash
git clone <repository-url>
cd user-management-frontend
```

2. **ติดตั้ง dependencies**
```bash
npm install
# หรือ
yarn install
```

3. **สร้างไฟล์ environment**
```bash
cp .env.example .env.local
```

4. **กำหนดค่า environment variables**
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

5. **รันโปรเจ็กต์**
```bash
npm run dev
# หรือ
yarn dev
```

6. **เปิดเบราว์เซอร์**
```
http://localhost:3001
```

## 💻 การใช้งาน

### การเข้าสู่ระบบ
1. เข้าหน้า Login: `http://localhost:3001/login`
2. ใช้บัญชี Admin:
   - Email: `admin@gmail.com`
   - Password: `Az-123456`

### การนำทาง
- **Dashboard** - ภาพรวมสถิติผู้ใช้งาน
- **จัดการผู้ใช้** - รายชื่อและการจัดการผู้ใช้งานในระบบ

## 📁 โครงสร้างโปรเจ็กต์

```
user-management-frontend/
├── app/                          # Next.js App Router
│   ├── dashboard/               # หน้าแดชบอร์ด
│   │   └── users/              # จัดการผู้ใช้
│   ├── login/                  # หน้า Login
│   ├── globals.css             # Global Styles
│   ├── layout.tsx              # Root Layout
│   └── page.js                 # Home Page
├── components/                  # React Components
│   ├── Layout.js               # Layout หลัก
│   ├── StatCard.js             # Card แสดงสถิติ
│   ├── UserTable.js            # ตารางผู้ใช้
│   ├── BanModal.js             # Modal ระงับผู้ใช้
│   ├── LoginForm.js            # ฟอร์มเข้าสู่ระบบ
│   └── LoadingSpinner.js       # Loading Component
├── hooks/                       # Custom React Hooks
│   ├── useAuth.js              # Authentication
│   └── useUsers.js             # User Management
├── lib/                         # Utility Libraries
│   ├── api.js                  # Axios Configuration
│   ├── auth.js                 # Authentication Service
│   └── userService.js          # User API Service
├── middleware.js                # Next.js Middleware
├── next.config.js              # Next.js Configuration
├── tailwind.config.js          # Tailwind Configuration
└── package.json                # Dependencies
```

## 🖥 หน้าจอต่างๆ

### 1. หน้า Login
- ฟอร์มเข้าสู่ระบบสำหรับแอดมิน
- ตรวจสอบสิทธิ์แอดมิน
- ธีมสีสวยงาม

### 2. Dashboard หลัก
- สถิติผู้ใช้ใน 4 categories
- จำนวนผู้ใช้ทั้งหมด, ปกติ, ถูกระงับ, แอดมิน

### 3. จัดการผู้ใช้
- ตารางรายชื่อผู้ใช้ทั้งหมด
- ฟังก์ชันค้นหาตามชื่อผู้ใช้หรืออีเมล
- ปุ่มระงับ/ยกเลิกระงับผู้ใช้
- Modal สำหรับระบุเหตุผลการระงับ
- แสดงสถานะและประเภทผู้ใช้
- ป้องกันการระงับผู้ดูแลระบบ

## 🔐 การยืนยันตัวตน

### JWT Token Authentication
- ใช้ JWT Token สำหรับการยืนยันตัวตน
- เก็บ Token ใน Cookies
- Auto-redirect เมื่อ Token หมดอายุ

### Middleware Protection
- ป้องกันการเข้าถึงหน้าที่ต้องการสิทธิ์
- ตรวจสอบสิทธิ์แอดมิน
- Redirect ไปหน้า Login อัตโนมัติ

### Role-based Access
- เฉพาะผู้ใช้ที่มี `isAdmin: true` เท่านั้น
- ป้องกันการเข้าถึงของผู้ใช้ทั่วไป

