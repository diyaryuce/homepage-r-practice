function ChatSidebar({ sidebarOpen }) {
  
  return(<>
      <aside className={`
          overflow-hidden h-[calc(100vh-80px)] sticky left-0 top-20 bg-[#151515]

          transition-all
          duration-400
          ease-in-out
          ${
            sidebarOpen
              ? "w-81.5 opacity-100"
              : "w-0 opacity-0"
          }
      `}>
          <h1 className="p-8 text-3xl text-white">
              Chat
          </h1>
      </aside>
  </>)
}

export default ChatSidebar