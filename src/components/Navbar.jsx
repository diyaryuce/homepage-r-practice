import Logo from "../icons/Logo.svg";
import Seperator from "../icons/Seperator.svg";
import MenuOpen from "../icons/MenuOpen.svg";
import Home from "../icons/Home.svg"
import HomeHV from "../icons/HomeHV.svg"
import Battles from "../icons/Battles.svg"
import BattlesHV from "../icons/BattlesHV.svg"
import Upgrader from "../icons/Upgrader.svg"
import UpgraderHV from "../icons/UpgraderHV.svg"
import Affiliates from "../icons/Affiliates.svg"
import AffiliatesHV from "../icons/AffiliatesHV.svg"
import Rewards from "../icons/Rewards.svg"
import RewardsHV from "../icons/RewardsHV.svg"



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
        flex items-center gap-[67.21px]
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
      <img src={Seperator} alt="sepper" className="ml-5.75"/>

      {/*NAVS*/}
      <nav className="
        flex flex-row items-center 
        p-0 ml-7.5 w-20 h-10
      ">
        <a href="#" className="
          flex flex-row justify-center items-center
          py-2.5 px-5 gap-2.75 h-10 group

          transition duration-200
          hover:bg-white/4
        ">
          <div className="group relative w-4.5 h-3.5">
            <img src={Home} alt="home" className="inset-0 group-hover:hidden"/>
            <img src={HomeHV} alt="homehv" className="inset-0 hidden group-hover:block"/>
          </div>

          <span className="
            w-10 h-4.5 text-white/70
            font-onest not-italic font-bold text-sm leading-4.5
          ">
            Home
          </span>
        </a>

        <a href="#" className="
          flex flex-row justify-center items-center
          py-2.5 px-5 gap-2.75 h-10 group

          transition duration-200
          hover:bg-white/4
        ">
          <div className="group relative w-5 h-4">
            <img src={Battles} alt="battles" className="inset-0 group-hover:hidden"/>
            <img src={BattlesHV} alt="battleshv" className="inset-0 hidden group-hover:block"/>
          </div>

          <span className="
            w-12 h-4.5 text-white/70
            font-onest not-italic font-bold text-sm leading-4.5
          ">
            Battles
          </span>
        </a>

        <a href="#" className="
          flex flex-row justify-center items-center
          py-2.5 px-5 gap-4 h-10 group

          transition duration-200
          hover:bg-white/4
        ">
          
          <div className="group relative w-2.5 h-4.25">
            <img src={Upgrader} alt="upgrader" className="inset-0 group-hover:hidden"/>
            <img src={UpgraderHV} alt="upgraderhv" className="inset-0 hidden group-hover:block"/>
          </div>

          <span className="
            w-16.25 h-4.5 text-white/70
            font-onest not-italic font-bold text-sm leading-4.5
          ">
            Upgrader
          </span>
        </a>

        <a href="#" className="
          flex flex-row justify-center items-center
          py-2.5 px-5 gap-3 h-10 group

          transition duration-200
          hover:bg-white/4
        ">
          <div className="group relative w-4.5 h-3.5">
            <img src={Affiliates} alt="Affiliates" className="inset-0 group-hover:hidden"/>
            <img src={AffiliatesHV} alt="AffiliatesHV" className="inset-0 hidden group-hover:block"/>
          </div>

          <span className="
            w-15.25 h-4.5 text-white/70
            font-onest not-italic font-bold text-sm leading-4.5
          ">
            Affiliates
          </span>
        </a>

        <a href="#" className="
          flex flex-row justify-center items-center
          py-2.5 px-5 gap-3 h-10 group

          transition duration-200
          hover:bg-white/4
        ">
          <div className="group relative w-4.5 h-4.25">
            <img src={Rewards} alt="Rewards" className="inset-0 group-hover:hidden"/>
            <img src={RewardsHV} alt="RewardsHV" className="inset-0 hidden group-hover:block"/>
          </div>

          <span className="
            w-14.75 h-4.5 text-white/70
            font-onest not-italic font-bold text-sm leading-4.5
          ">
            Rewards
          </span>
        </a>
      </nav>

      {/*BALANCE*/}

      {/*PLAYER*/}

      {/*SEPPER BELLOW*/}
      <div className="
        absolute h-0.5 top-20 left-0 w-full
      ">
        <div className="absolute left-0 top-0 w-19.5 h-full bg-[linear-gradient(90deg,#E8BD70_0%,rgba(232,189,112,0)_100%)]"/>
        <div className="absolute left-0 top-0 w-84.25 h-full bg-[linear-gradient(90deg,#E8BD70_0%,rgba(232,189,112,0)_100%)] opacity-50"/>
        <div className="absolute left-0 top-0 w-full h-full bg-[linear-gradient(90deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_100%)]"/>
      </div>

    </header>
  </>)
}

export default Navbar

/*---MINI-COMPONENTS---*/