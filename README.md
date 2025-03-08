# 2nd Brain
![image alt](https://github.com/intojhanurag/Second---Brain-/blob/578c8c3a8aa8fa6a1965f3c23fdcea41e0efc94d/Screenshot%202025-03-08%20233314.png?raw=true)
## Overview
2nd Brain is a web platform built using **React, TypeScript, and Node.js** that allows users to create an account and store various social media embedded posts in a categorized manner. Users can then visualize their "Brain" and share a unique link to their stored data with others.

## Features
- **User Authentication**: Users can sign up and log in securely.
- **Store Embedded Posts**: Save social media posts (e.g., Twitter, Instagram, YouTube) in a structured way.
- **Categorization**: Organize stored posts into different categories.
- **View Brain**: A dedicated section to visualize and manage stored posts.
- **Share Brain**: Generate a shareable link to allow others to view stored content.

## Tech Stack
- **Frontend**: React + TypeScript
- **Backend**: Node.js + Express
- **Database**: MongoDB (or any other database of choice)
- **Authentication**: JWT-based authentication (or OAuth, if applicable)

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- **Node.js** (Latest LTS version recommended)
- **MongoDB** (if using locally)
- **Git** (optional but recommended)

### Clone the Repository
```sh
git clone https://github.com/your-username/2nd-brain.git
cd 2nd-brain
```

### Backend Setup
```sh
cd backend
npm install
npm run dev
```

### Frontend Setup
```sh
cd frontend
npm install
npm start
```

## Environment Variables
Create a `.env` file in the backend directory and set the required variables:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Usage
1. Sign up or log in to your account.
2. Add embedded posts from various social media platforms.
3. Categorize and organize your saved posts.
4. View your saved "Brain" anytime.
5. Share your "2nd Brain" link with others.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## License
This project is licensed under the MIT License.

---

### Future Enhancements
- **AI-based categorization** of stored content.
- **Support for more social media platforms**.
- **Dark mode and customizable themes**.

Enjoy building your 2nd Brain! 🚀

