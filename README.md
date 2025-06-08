# Scenic Spots

**Scenic Spots** is a web application designed for users who want to discover interesting and lesser-known locations in their surroundings. It combines a user-friendly interface with the ability to explore, share, and browse community-submitted spots.

---

## About the Project

The goal of Scenic Spots is to promote local exploration through a clean, accessible platform. The application focuses on simplicity and usability, offering features such as:

- Browsing and sharing local attractions
- Seamless search functionality
- Language switching and font size adjustments
- Light/dark theme support

Users can explore spots contributed by the community and are encouraged to add their own discoveries. The platform enhances the experience of traveling off the beaten path.

## How It Works

Scenic Spots uses a custom-built REST API for managing locations. The React frontend communicates with the backend to:

- Fetch and display places
- Allow users to log in and contribute new spots
- Support accessibility and UI customization

## Technologies Used

- **Frontend**: React + TailwindCSS
- **Backend**: Go (Golang)
- **Database**: Google Firestore (NoSQL)
- **Routing & Theming**: React Router, custom context, CSS variables

## Source Code

- **Backend**: [czxrny/scenic-spots-api](https://github.com/czxrny/scenic-spots-api)

---

## Getting Started

To run the project locally:

### 1. Clone the repositories

```bash
git clone https://github.com/czxrny/scenic-spots-frontend.git
git clone https://github.com/czxrny/scenic-spots-api.git
```

### 2. Frontend Setup

```bash
cd scenic-spots-frontend
npm install
npm run dev
```

### 3. Backend Setup

```bash
cd scenic-spots-api
go run cmd/main.go
```


### Firebase Emulator (Optional)

If you want to use the Firebase emulator for local development:

1. Make sure you have the Firebase CLI installed.
2. In the root directory of your project, run:

``` bash
firebase init
``` 

Select Firestore and Storage when prompted to configure the emulator.

3. Start the emulator:

``` bash
firebase emulators:start
``` 

This will allow the backend to connect to the local Firestore and Storage emulators instead of the live Firebase services.

---

## Status

This project is currently under development.
