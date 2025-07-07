# SBI YONO Clone (React Native + Expo)

This is a starter template for an SBI YONO clone mobile application, built with React Native and Expo. It includes the basic UI structure for the Login and Home screens as per the provided requirements.

---

## 🚀 How to Run the Application

### 1. Install Dependencies

If you haven't already, open your terminal in the project root and run:

```bash
npm install
```

### 2. Start the Expo Development Server

To start the app, run one of the following commands:

```bash
# To run on your local network (recommended for mobile)
npx expo start --lan

# To run in a web browser
npx expo start --web
```

After running the command, you will see a QR code in your terminal.

### 3. Open on Your Mobile Device

- **Install the Expo Go app** on your iOS or Android device.
- **Ensure your phone and computer are on the same Wi-Fi network.**
- Scan the QR code from the terminal using the Expo Go app (or your phone's camera app).

---

## 🔧 Troubleshooting: "Network Response Timed Out"

This is a common error and is almost always a local network issue. Here’s how to fix it:

1.  **Same Wi-Fi Network**: Double-check that your computer and phone are on the exact same Wi-Fi network. Avoid guest networks.

2.  **Firewall**: Your computer's firewall might be blocking the connection. 
    -   **Windows**: You may get a pop-up asking for permission for "Node.js" to access the network. Make sure you **allow access** on both Private and Public networks.
    -   **macOS**: Check your firewall settings in System Preferences > Security & Privacy.

3.  **Use LAN Mode**: Always start the server with the `--lan` flag. This is more reliable than the default "Local" mode for connecting from another device.
    ```bash
    npx expo start --lan
    ```

4.  **Clear Cache**: Sometimes the bundler cache causes issues. Stop the server and restart it with the `-c` flag.
    ```bash
    npx expo start -c --lan
    ```

5.  **Try Tunnel Mode (If LAN Fails)**: If your network is restrictive, tunnel mode can work as a last resort. It can be slower.
    ```bash
    npx expo start --tunnel
    ```

---

## 📂 Project Structure

```
/bank
├── /screens
│   ├── LoginScreen.js      # The login page UI and logic
│   ├── HomeScreen.js       # The main home screen after login
│   ├── AccountsScreen.js   # Placeholder for the 'Accounts' tab
│   ├── ServicesScreen.js   # Placeholder for the 'Services' tab
│   └── MoreScreen.js       # Placeholder for the 'More' tab
├── App.js                # The main app component, handles navigation
├── package.json          # Project dependencies and scripts
└── README.md             # This file
```
