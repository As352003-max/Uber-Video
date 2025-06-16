# README.md

# Uber Video Frontend

This project is a frontend application for the Uber Video platform, built using React. It utilizes Socket.IO for real-time communication and provides a user-friendly interface for managing video-related functionalities.

## Project Structure

```
uber-video-frontend
├── public
│   └── index.html          # Main HTML file for the application
├── src
│   ├── components          # Contains React components
│   ├── context             # Contains context providers for state management
│   │   ├── CaptainContext.jsx  # Context for captain-related data
│   │   ├── UserContext.jsx     # Context for user-related state
│   │   └── SocketContext.jsx   # Context for Socket.IO connection
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Entry point for rendering the application
│   └── index.css            # Global styles for the application
├── package.json             # npm configuration file
└── README.md                # Documentation for the project
```

## Features

- **User Management**: Context for managing user data and state.
- **Captain Management**: Context for handling captain-related functionalities.
- **Real-time Communication**: Socket.IO integration for sending and receiving messages in real-time.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd uber-video-frontend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```
This will launch the application in your default web browser.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.