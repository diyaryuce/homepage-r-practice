import { useState } from "react";

import Navbar from "./components/Navbar";
import ChatSidebar from "./components/ChatSidebar";
import Main from "./components/Main";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [rainpoolAlertOpen, setRainpoolAlertOpen] = useState(false);

  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-black">
      <Navbar 
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}

        rainpoolAlertOpen={rainpoolAlertOpen}
        setRainpoolAlertOpen={setRainpoolAlertOpen}
      />

      <div className="flex w-full min-w-0">
        <ChatSidebar 
          sidebarOpen={sidebarOpen} 
          
          rainpoolAlertOpen={rainpoolAlertOpen}
          setRainpoolAlertOpen={setRainpoolAlertOpen}
        />

        <Main sidebarOpen={sidebarOpen}/>
        
      </div>
    </div>
  );
}

export default App;