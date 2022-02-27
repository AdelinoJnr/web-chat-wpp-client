import Chat from "./components/Chat";
import Menu from "./components/Menu";
import './styles/global.css';
// import { useEffect } from "react";
// import { socket } from "./service/socket";

function App() {
  return (
    <main className="main-content">
      <Menu />
      <Chat />
    </main>
  );
}

export default App;
