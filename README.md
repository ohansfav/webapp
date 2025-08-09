# 🎓 CampusConnect - University Social Platform

A modern, full-stack web application designed specifically for university communities, built with **Next.js 15**, **TypeScript**, **Prisma**, and **NextAuth.js**. CampusConnect brings together students, alumni, lecturers, and employers in one unified platform.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-6.0-2D3748?style=flat-square&logo=prisma&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-3.0-003B57?style=flat-square&logo=sqlite&logoColor=white)

## ✨ Key Features

### 🔐 **Secure Authentication System**
- **NextAuth.js** integration with credentials provider
- JWT token-based authentication
- Secure password hashing with bcryptjs
- Protected routes and API endpoints
- Session management with automatic refresh

### 👥 **Multi-Role User System**
- **JAMBITE** - Prospective students
- **STUDENT** - Current university students
- **ALUMNI** - Graduated students
- **CORPS_MEMBER** - NYSC members
- **LECTURER** - Academic staff
- **EMPLOYER** - Recruiting companies

### 📝 **Social Features**
- **Posts & Updates** - Share thoughts and announcements
- **Real-time Messaging** - Direct communication between users
- **Marketplace** - Buy and sell items within the campus community
- **User Profiles** - Comprehensive profiles with academic information

### 🎨 **Modern UI/UX**
- **Responsive Design** - Works perfectly on all devices
- **Material-UI Components** - Beautiful, consistent interface
- **Dark/Light Mode** - Automatic theme switching
- **Loading States** - Smooth user experience
- **Form Validation** - Real-time input validation with Zod

## 🛠️ Tech Stack

### **Frontend**
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **TailwindCSS 4.0** - Utility-first CSS framework
- **Material-UI (MUI)** - React component library
- **React Hook Form** - Performant forms with validation
- **Zod** - TypeScript-first schema validation

### **Backend**
- **Next.js API Routes** - Serverless functions
- **Prisma ORM** - Type-safe database queries
- **SQLite** - Lightweight, file-based database
- **bcryptjs** - Password hashing
- **NextAuth.js** - Authentication library

### **Development Tools**
- **ESLint** - Code linting
- **TypeScript** - Type checking
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 🚀 Quick Start

### **Prerequisites**
- Node.js 18+ 
- npm or yarn

### **Installation**

1. **Clone the repository**
```bash
git clone https://github.com/ohansfav/webapp
cd campusconnect
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory:
```env
# Database
DATABASE_URL="file:./dev.db"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# App Configuration
NODE_ENV="development"
```

4. **Set up the database**
```bash
npx prisma generate
npx prisma db push
```

5. **Start the development server**
```bash
npm run dev
```

6. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
campusconnect/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/
│   │   │       ├── [...nextauth]/
│   │   │       └── register/
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── layout.tsx
│   │   ├── dashboard/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── auth/
│   │   ├── ui/
│   │   └── providers.tsx
│   └── lib/
│       ├── auth/
│       ├── prisma.ts
│       └── utils.ts
├── prisma/
│   ├── schema.prisma
│   └── dev.db
├── public/
├── package.json
└── README.md
```

## 🔧 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DATABASE_URL` | SQLite database connection string | `file:./dev.db` |
| `NEXTAUTH_URL` | NextAuth.js URL | `http://localhost:3000` |
| `NEXTAUTH_SECRET` | NextAuth.js secret key | Generate with `openssl rand -base64 32` |
| `NODE_ENV` | Environment mode | `development` |

## 🎯 Usage Guide

### **Authentication Flow**
1. **Registration**: New users can register with email, password, and role selection
2. **Login**: Existing users can log in with credentials
3. **Protected Routes**: Dashboard and profile pages require authentication
4. **Session Management**: Automatic session refresh and logout

### **User Roles & Permissions**
- **JAMBITE**: Can view content and connect with students
- **STUDENT**: Full access to posts, messaging, and marketplace
- **ALUMNI**: Can mentor students and access alumni network
- **CORPS_MEMBER**: Share NYSC experiences and job opportunities
- **LECTURER**: Post announcements and connect with students
- **EMPLOYER**: Post job opportunities and connect with talent

### **Core Features**
- **Posts**: Share updates, ask questions, or make announcements
- **Messaging**: Direct communication with other users
- **Marketplace**: Buy/sell textbooks, electronics, and other items
- **Profiles**: Comprehensive user profiles with academic information

## 🧪 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint

# Database operations
npx prisma db push          # Push schema changes
npx prisma generate       # Generate Prisma Client
npx prisma studio        # Open Prisma Studio
```

## 🚀 Deployment

### **Vercel (Recommended)**
1. Push your code to GitHub
<!-- 2. Import your repository on [Vercel](https://vercel.com) --> In production
3. Add environment variables
4. Deploy!

### **Other Platforms**
- **Netlify**: Use the Next.js build preset
- **Railway**: Connect your GitHub repository
- **Docker**: Build and deploy with Docker containers

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) for the amazing React framework
- [Prisma](https://prisma.io) for the excellent ORM
- [NextAuth.js](https://next-auth.js.org) for authentication
- [Material-UI](https://mui.com) for beautiful components
- [TailwindCSS](https://tailwindcss.com) for utility-first CSS

## 📞 Support

- **Documentation**: Check our [Wiki](https://github.com/ohansfav/campusconnect/wiki)
- **Issues**: [GitHub Issues](https://github.com/ohansfav)
- **Discussions**: [GitHub Discussions](https://github.com/ohansfav/campusconnect/discussions)

---

Made with ❤️ by the ohansfav Team, copiliot and BLACKBOX
