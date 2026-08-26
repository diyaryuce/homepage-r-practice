import { useState } from "react";

import Navbar from "./components/Navbar";
import ChatSidebar from "./components/ChatSidebar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen min-w-max bg-black">
      <Navbar 
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex">
        <ChatSidebar sidebarOpen={sidebarOpen}/>

        <main className="flex-1 min-h-[2000px] bg-[#0f0f0f]">
          <h1 className="p-8 text-3xl text-white">
            Main content
          </h1>
        </main>
      </div>
    </div>
  );
}

export default App;