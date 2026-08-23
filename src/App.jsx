import Logo from "./icons/Logo.svg";
import Seperator from "./icons/Seperator.svg";
import MenuOpen from "./icons/MenuOpen.svg";

function App() {
  return (<>
    <div className="min-h-screen bg-black">
      <Navbar />
    </div>
  </>)
}

export default App;

/*---COMPONENTS---*/

function Navbar() {
  return (<>
    <header className="
      relative bg-[#151515]
      w-full h-20 pl-6 pr-13
      flex items-center
    ">

      {/*LOGO AREA*/}
      <div className="
        absolute pointer-events-none
        bg-[linear-gradient(90deg,rgba(232,189,112,0.06)_0%,rgba(232,189,112,0)_100%)]
        left-0 inset-y-0 w-80
      "/>

      <div className="
        flex items-center gap-16.75
      ">
        <a href="#" className="cursor-pointer">
          <img src={Logo} alt="logo" className="
            h-10.5 w-[169.79px]
          "/>
        </a>

        <button className="
          flex flex-row items-start
          py-1 px-1.5 gap-2.5
          bg-white/2 
          border-2 border-white/1

          transition duration-200
          hover:bg-white/8
          hover:border-white/8
          cursor-pointer
        ">
          <img src={MenuOpen} alt="menu" />
        </button>

      </div>

      {/*SEPPER*/}
      <img src={Seperator} alt="sepper" className="
        absolute left-80
      "/>

      {/*NAVS*/}

    </header>
  </>)
}