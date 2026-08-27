import { useState } from "react";
import { Logo, Player } from "../icons"

function Navbar({ sidebarOpen, setSidebarOpen }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (<>
    <header className="
      sticky top-0 z-50
      bg-[#151515]
      w-full h-20 pl-6 pr-8
      flex items-center
      min-w-max 
    ">

      {/*LOGO AREA*/}
      <div className="
        absolute pointer-events-none
        bg-[linear-gradient(90deg,rgba(232,189,112,0.06)_0%,rgba(232,189,112,0)_100%)]
        left-0 inset-y-0 w-80 shrink-0
      "/>

      <div className="
        flex shrink-0 items-center gap-3
      ">
        <a href="#" className="cursor-pointer">
          <img src={Logo} alt="logo" className="
            h-10.5 w-[169.79px]
          "/>
        </a>

        <button onClick={() => setSidebarOpen(!sidebarOpen)} className={`
          flex items-center justify-center
          w-10 h-9
          bg-white/2
          border-2 border-white/8

          hover:bg-white/8
          hover:border-white/8
          cursor-pointer

        `}>
          <span className={`
            relative flex h-6 w-6 items-center justify-center
          `}>
            {sidebarOpen ? (
              <svg className={`
                absolute
                transition-all
                duration-200
                ease-in-out

                ${
                  sidebarOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }
              `}
                width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_118_3716)"><path d="M3 18H16V16H3V18Z" fill="white" fill-opacity="0.3"/><path d="M3 13H13V11H3V13Z" fill="white" fill-opacity="0.3"/><path d="M3 6V8H16V6H3Z" fill="white" fill-opacity="0.3"/><path d="M21 15.59L17.42 12L21 8.41L19.59 7L14.59 12L19.59 17L21 15.59Z" fill="white" fill-opacity="0.8"/></g><defs><clipPath id="clip0_118_3716"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>
            ) : (
              <svg className={`
                absolute
                transition-all
                duration-200
                ease-in-out

                ${
                  sidebarOpen
                    ? "opacity-0 -translate-y-2"
                    : "opacity-100 translate-y-0"
                }
              `}
              
                width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" title="Chat2"><g clip-path="url(#clip0_2194_15789)"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.9261 10.3867C13.6137 9.72309 14 8.82307 14 7.88462V7H18C19.1 7 20 7.9 20 9V20L16 16H10C9.46957 16 8.96086 15.7893 8.58579 15.4142C8.21071 15.0391 8 14.5304 8 14V11.4231H10.3333C11.3058 11.4231 12.2384 11.0503 12.9261 10.3867Z" fill="white"></path><path d="M12 7C12 7.53043 11.7893 8.03914 11.4142 8.41421C11.0391 8.78929 10.5304 9 10 9H4L0 13V2C0 0.9 0.9 0 2 0H10C10.5304 0 11.0391 0.210714 11.4142 0.585786C11.7893 0.960859 12 1.46957 12 2V7Z" fill="white" fill-opacity="0.8"></path></g><defs><clipPath id="clip0_2194_15789"><rect width="18" height="18" fill="white" fill-opacity="0.8"></rect></clipPath></defs></svg>
            )}
          </span>
        </button>

      </div>

      {/*SEPPER*/}
      <div className={`
        transition-all
        duration-400
        ease-in-out

        ${sidebarOpen
          ? "opacity-100"
          : "opacity-0"
        }
      `}>
        <svg className="ml-19.5 shrink-0" width="2" height="80" viewBox="0 0 2 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.03" width="2" height="80" fill="white"/></svg>
      </div>

      {/*NAVS*/}
      <nav className={`
        flex flex-row items-center 
        p-0 ml-8.5 h-10 shrink-0

        transition duration-400
        ${sidebarOpen
            ? "translate-x-0"
            : "-translate-x-12"
          }
      `}>
        <a href="#" className="
          flex flex-row justify-center items-center
          py-2.5 px-5 gap-2.75 h-10 group
          bg-white/4
        ">
          <div className="group relative w-4.5 h-3.5">
            <svg className="inset-0" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_118_3624)"><path d="M0 0H18V3.23077H0V0Z" fill="#E8BD70"/><path d="M5.625 5.38477H1.125V14.0002H16.875V5.38477H12.375V7.53861H5.625V5.38477Z" fill="#E8BD70"/></g><defs><clipPath id="clip0_118_3624"><rect width="18" height="14" fill="white"/></clipPath></defs></svg>
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
            <svg className="inset-0 group-hover:hidden" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_118_3629)"><path d="M3.78981 0L7.00637 0.59725L14.9045 8.89587L16.4331 7.88998L17.707 9.27308L16.1146 10.8448L18.3439 13.0452L19.3631 12.5422L20 13.611L19.0446 15.057L17.5796 16L16.5605 15.3084L17.0701 14.3026L14.8408 12.1022L13.2484 13.6739L11.8471 12.4165L12.8662 10.9077L10 8.26719L7.13376 10.9077L8.21656 12.4165L6.81529 13.6739L5.22293 12.1022L2.99363 14.3026L3.43949 15.2456L2.42038 15.9371L0.955414 14.9941L0 13.5481L0.700637 12.5422L1.71975 13.0452L3.94904 10.8448L2.35669 9.27308L3.56688 7.95285L5.09554 8.95874L7.70701 6.19253L4.3949 3.17485L3.78981 0ZM16.2102 0L15.6051 3.17485L13.5032 5.12377L11.1465 2.60904L12.9936 0.59725L16.2102 0Z" fill="white" fill-opacity="0.7"/></g><defs><clipPath id="clip0_118_3629"><rect width="20" height="16" fill="white"/></clipPath></defs></svg>
            <svg className="inset-0 hidden group-hover:block" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_66_4080)"><path d="M3.78981 0L7.00637 0.59725L14.9045 8.89587L16.4331 7.88998L17.707 9.27308L16.1146 10.8448L18.3439 13.0452L19.3631 12.5422L20 13.611L19.0446 15.057L17.5796 16L16.5605 15.3084L17.0701 14.3026L14.8408 12.1022L13.2484 13.6739L11.8471 12.4165L12.8662 10.9077L10 8.26719L7.13376 10.9077L8.21656 12.4165L6.81529 13.6739L5.22293 12.1022L2.99363 14.3026L3.43949 15.2456L2.42038 15.9371L0.955414 14.9941L0 13.5481L0.700637 12.5422L1.71975 13.0452L3.94904 10.8448L2.35669 9.27308L3.56688 7.95285L5.09554 8.95874L7.70701 6.19253L4.3949 3.17485L3.78981 0ZM16.2102 0L15.6051 3.17485L13.5032 5.12377L11.1465 2.60904L12.9936 0.59725L16.2102 0Z" fill="#E8BD70"/></g><defs><clipPath id="clip0_66_4080"><rect width="20" height="16" fill="white"/></clipPath></defs></svg>
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
            <svg className="inset-0 group-hover:hidden" width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.67 1.7H7V0H3V1.7H1.33C0.6 1.7 0 2.21 0 2.8305V15.861C0 16.49 0.6 17 1.33 17H8.66C9.4 17 10 16.49 10 15.8695V2.8305C10 2.21 9.4 1.7 8.67 1.7ZM4 15.3V10.625H2L6 4.25V8.925H8L4 15.3Z" fill="white" fill-opacity="0.7"/></svg>
            <svg className="inset-0 hidden group-hover:block" width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.67 1.7H7V0H3V1.7H1.33C0.6 1.7 0 2.21 0 2.8305V15.861C0 16.49 0.6 17 1.33 17H8.66C9.4 17 10 16.49 10 15.8695V2.8305C10 2.21 9.4 1.7 8.67 1.7ZM4 15.3V10.625H2L6 4.25V8.925H8L4 15.3Z" fill="#E8BD70"/></svg>
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
            <svg className="inset-0 group-hover:hidden" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_118_3640)"><path d="M9 2.91667C9 4.52749 7.7408 5.83333 6.1875 5.83333C4.6342 5.83333 3.375 4.52749 3.375 2.91667C3.375 1.30584 4.6342 0 6.1875 0C7.7408 0 9 1.30584 9 2.91667Z" fill="white" fill-opacity="0.7"/><path d="M2.25 8.1665L0 10.4998V13.9998H9V8.1665H2.25Z" fill="white" fill-opacity="0.7"/><path d="M18 10.4998L15.75 8.1665H11.25V13.9998H18V10.4998Z" fill="white" fill-opacity="0.7"/><path d="M13.5 5.83317C14.7427 5.83317 15.75 4.7885 15.75 3.49984C15.75 2.21117 14.7427 1.1665 13.5 1.1665C12.2573 1.1665 11.25 2.21117 11.25 3.49984C11.25 4.7885 12.2573 5.83317 13.5 5.83317Z" fill="white" fill-opacity="0.7"/></g><defs><clipPath id="clip0_118_3640"><rect width="18" height="14" fill="white"/></clipPath></defs></svg>
            <svg className="inset-0 hidden group-hover:block" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_118_3640)"><path d="M9 2.91667C9 4.52749 7.7408 5.83333 6.1875 5.83333C4.6342 5.83333 3.375 4.52749 3.375 2.91667C3.375 1.30584 4.6342 0 6.1875 0C7.7408 0 9 1.30584 9 2.91667Z" fill="#E8BD70"/><path d="M2.25 8.1665L0 10.4998V13.9998H9V8.1665H2.25Z" fill="#E8BD70"/><path d="M18 10.4998L15.75 8.1665H11.25V13.9998H18V10.4998Z" fill="#E8BD70"/><path d="M13.5 5.83317C14.7427 5.83317 15.75 4.7885 15.75 3.49984C15.75 2.21117 14.7427 1.1665 13.5 1.1665C12.2573 1.1665 11.25 2.21117 11.25 3.49984C11.25 4.7885 12.2573 5.83317 13.5 5.83317Z" fill="#E8BD70"/></g><defs><clipPath id="clip0_118_3640"><rect width="18" height="14" fill="white"/></clipPath></defs></svg>
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
            <svg className="inset-0 group-hover:hidden" width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_118_3647)"><path d="M3.375 3.4V0H4.5C6.36396 0 7.875 1.52224 7.875 3.4V6.8H0V3.4H3.375Z" fill="white" fill-opacity="0.7"/><path d="M18 3.4H14.625V0H13.5C11.636 0 10.125 1.52224 10.125 3.4V6.8H18V3.4Z" fill="white" fill-opacity="0.7"/><path d="M7.875 9.06689V17.0002H1.125V9.06689H7.875Z" fill="white" fill-opacity="0.7"/><path d="M16.875 17.0002V9.06689H10.125V17.0002H16.875Z" fill="white" fill-opacity="0.7"/></g><defs><clipPath id="clip0_118_3647"><rect width="18" height="17" fill="white"/></clipPath></defs></svg>
            <svg className="inset-0 hidden group-hover:block" width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_118_3647)"><path d="M3.375 3.4V0H4.5C6.36396 0 7.875 1.52224 7.875 3.4V6.8H0V3.4H3.375Z" fill="#E8BD70"/><path d="M18 3.4H14.625V0H13.5C11.636 0 10.125 1.52224 10.125 3.4V6.8H18V3.4Z" fill="#E8BD70"/><path d="M7.875 9.06689V17.0002H1.125V9.06689H7.875Z" fill="#E8BD70"/><path d="M16.875 17.0002V9.06689H10.125V17.0002H16.875Z" fill="#E8BD70"/></g><defs><clipPath id="clip0_118_3647"><rect width="18" height="17" fill="white"/></clipPath></defs></svg>
          </div>

          <span className="
            w-14.75 h-4.5 text-white/70
            font-onest not-italic font-bold text-sm leading-4.5
          ">
            Rewards
          </span>
        </a>
      </nav>

      {/*RIGHT SIDE*/}
      <div className="ml-auto shrink-0 flex items-center">

        {/*BALANCE*/}
        <div className="mr-6 w-49.75 h-10.5 flex shrink-0">
          <div className="w-30 h-10.5 bg-[#212121] flex items-center">
            <span className="
              text-[#BFBFBF] ml-4
              font-onest not-italic font-bold text-sm leading-5
            ">
              $ 999.00
            </span>
          </div>

          <button className="w-19.75 h-10.5 bg-[radial-gradient(50.42%_92.5%_at_50.42%_7.5%,#FFDFA7_0%,#E8BD70_100%)]">
            <span className="
              text-[#212121] cursor-pointer
              font-onest not-italic font-bold text-sm leading-5
            ">
              Top up
            </span>
          </button>
        </div>

        <svg className="shrink-0 mr-6" width="1" height="32" viewBox="0 0 1 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="32" fill="#2A2A2A"/></svg>

        {/*PLAYER*/}
        <button className="cursor-pointer flex items-center" onClick={() => setDropdownOpen(!dropdownOpen)}>
          <div className="flex items-center shrink-0 mr-8.5 w-38.25 h-10.5 gap-4">
            <img src={Player} alt="playa" className="w-10.5 h-10.5"/>

            <div className="grid justify-center">
              <span className="
                w-23.75 h-5 text-white
                font-onest not-italic font-bold text-sm leading-5
              ">
                0xHearts.com
              </span>

              <span className="
                w-18.25 h-4.5 text-[#BFBFBF]
                font-onest not-italic font-bold text-[12px] leading-4.5
              ">
                Challenger 3
              </span>
            </div>
          </div>
        
          <svg className={`w-5 h-5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : "rotate-0"}`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_118_3599)"><path d="M6.175 7.1582L10 10.9749L13.825 7.1582L15 8.3332L10 13.3332L5 8.3332L6.175 7.1582Z" fill="#BFBFBF"/></g><defs><clipPath id="clip0_118_3599"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>
        </button>

        <MenuDropdown dropdownOpen={dropdownOpen} />
      </div>

      {/*SEPPER BELLOW*/}
      <div className="
        absolute shrink-0 h-0.5 top-20 left-0 w-full
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
function MenuDropdown({ dropdownOpen }) {
  return (
    <div className={`
      absolute right-8 top-16
      grid w-42
      rounded-sm
      bg-[#212121]

      transition duration-200
      ease-in-out

      ${
          dropdownOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
      }
    `}>
      <a href="#" className="
        text-white flex items-center gap-2 pl-3 pr-5 py-2 rounded-sm m-1
        font-onest not-italic font-semibold text-sm leading-5 group
        
        transition duration-200
        hover:bg-white
        hover:text-black
      ">
        <svg width="16" height="16" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" title="Users"><path d="M9 2.91667C9 4.52749 7.7408 5.83333 6.1875 5.83333C4.6342 5.83333 3.375 4.52749 3.375 2.91667C3.375 1.30584 4.6342 0 6.1875 0C7.7408 0 9 1.30584 9 2.91667Z" fill="currentColor"></path><path d="M2.25 8.16669L0 10.5V14H9V8.16669H2.25Z" fill="currentColor"></path><path d="M18 10.5L15.75 8.16669H11.25V14H18V10.5Z" fill="currentColor"></path><path d="M13.5 5.83335C14.7427 5.83335 15.75 4.78868 15.75 3.50002C15.75 2.21136 14.7427 1.16669 13.5 1.16669C12.2573 1.16669 11.25 2.21136 11.25 3.50002C11.25 4.78868 12.2573 5.83335 13.5 5.83335Z" fill="currentColor"></path></svg>
        <span>Profile</span>
      </a>

      <a href="#" className="
        text-white flex items-center gap-2 pl-3 pr-5 py-2 rounded-sm m-1
        font-onest not-italic font-semibold text-sm leading-5 group

        transition duration-200
        hover:bg-white
        hover:text-black
      ">
        <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" title="Cart"><path d="M12.9585 9.83334C13.5835 9.83334 14.1335 9.49167 14.4168 8.97501L17.4002 3.56667C17.7085 3.01667 17.3085 2.33334 16.6752 2.33334H4.34183L3.5585 0.666672H0.833496V2.33334H2.50016L5.50016 8.65834L4.37516 10.6917C3.76683 11.8083 4.56683 13.1667 5.8335 13.1667H15.8335V11.5H5.8335L6.75016 9.83334H12.9585ZM5.1335 4.00001H15.2585L12.9585 8.16667H7.1085L5.1335 4.00001ZM5.8335 14C4.91683 14 4.17516 14.75 4.17516 15.6667C4.17516 16.5833 4.91683 17.3333 5.8335 17.3333C6.75016 17.3333 7.50016 16.5833 7.50016 15.6667C7.50016 14.75 6.75016 14 5.8335 14ZM14.1668 14C13.2502 14 12.5085 14.75 12.5085 15.6667C12.5085 16.5833 13.2502 17.3333 14.1668 17.3333C15.0835 17.3333 15.8335 16.5833 15.8335 15.6667C15.8335 14.75 15.0835 14 14.1668 14Z" fill="currentColor"></path></svg>
        <span>Cart</span>
      </a>

      <a href="#" className="
        text-white flex items-center gap-1 pl-3 pr-5 py-2 rounded-sm m-1
        font-onest not-italic font-semibold text-sm leading-5 group
        
        transition duration-200
        hover:bg-white
        hover:text-black
      ">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" title="ArrowsSwap"><path d="M5.825 9.16666L2.5 12.5L5.825 15.8333V13.3333H11.6667V11.6667H5.825V9.16666ZM17.5 7.49999L14.175 4.16666V6.66666H8.33333V8.33332H14.175V10.8333L17.5 7.49999Z" fill="currentColor"></path></svg>
        <span>Exchange</span>
      </a>

       <a href="#" className="
        text-white flex items-center gap-2 pl-3 pr-5 py-2 rounded-sm m-1
        font-onest not-italic font-semibold text-sm leading-5 group
        
        transition duration-200
        hover:bg-white
        hover:text-black
      ">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 18" ><title>Box</title><g id="surface1"><path fill="currentColor" d="M 8.328125 8.335938 L 0.242188 4.929688 C 0.128906 4.882812 0 4.96875 0 5.09375 L 0 14.195312 C 0 14.425781 0.140625 14.632812 0.355469 14.71875 L 8.195312 17.855469 C 8.3125 17.902344 8.4375 17.816406 8.4375 17.691406 L 8.4375 8.496094 C 8.4375 8.425781 8.394531 8.363281 8.328125 8.335938 Z M 8.328125 8.335938" /><path fill="currentColor" d="M 9.066406 7.367188 L 16.882812 4.078125 C 17.023438 4.019531 17.027344 3.820312 16.890625 3.757812 L 9.238281 0.183594 C 9.085938 0.113281 8.914062 0.113281 8.761719 0.183594 L 1.109375 3.757812 C 0.972656 3.820312 0.976562 4.019531 1.117188 4.078125 L 8.933594 7.367188 C 8.976562 7.386719 9.023438 7.386719 9.066406 7.367188 Z M 9.066406 7.367188" /><path fill="currentColor" d="M 9.5625 8.496094 L 9.5625 17.691406 C 9.5625 17.816406 9.6875 17.902344 9.804688 17.855469 L 17.644531 14.71875 C 17.859375 14.632812 18 14.425781 18 14.195312 L 18 5.09375 C 18 4.96875 17.871094 4.882812 17.757812 4.929688 L 9.671875 8.335938 C 9.605469 8.363281 9.5625 8.425781 9.5625 8.496094 Z M 9.5625 8.496094" /></g></svg>
        <span>Deliveries</span>
      </a>

      <a href="#" className="
        text-white flex items-center gap-2 pl-3 pr-5 py-2 rounded-sm m-1
        font-onest not-italic font-semibold text-sm leading-5 group
        
        transition duration-200
        hover:bg-white
        hover:text-black
      ">
        <svg width="17" height="17" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" title="Help"><g><path fill="currentColor" d="m600 84c136.85 0 268.1 54.363 364.87 151.13 96.77 96.77 151.13 228.02 151.13 364.87s-54.363 268.1-151.13 364.87c-96.77 96.77-228.02 151.13-364.87 151.13s-268.1-54.363-364.87-151.13c-96.77-96.77-151.13-228.02-151.13-364.87s54.363-268.1 151.13-364.87c96.77-96.77 228.02-151.13 364.87-151.13m0-84c-159.13 0-311.74 63.215-424.27 175.73-112.52 112.52-175.73 265.14-175.73 424.27s63.215 311.74 175.73 424.27c112.52 112.52 265.14 175.73 424.27 175.73s311.74-63.215 424.27-175.73c112.52-112.52 175.73-265.14 175.73-424.27s-63.215-311.74-175.73-424.27c-112.52-112.52-265.14-175.73-424.27-175.73z"></path><path fill="currentColor" d="m609.48 300c21.348 2.2305 42.543 5.7148 63.48 10.441 63.961 18.121 102 69.238 106.8 137.16 4.707 44.293-14.543 87.738-50.523 114-17.039 13.199-34.922 25.199-52.078 38.16-25.305 16.578-39.852 45.391-38.16 75.598 0.42578 10.711-2.7461 21.258-9.0078 29.957-6.2656 8.6992-15.258 15.051-25.551 18.043-10.961 4.2188-23.008 4.6797-34.258 1.3125-11.25-3.3633-21.062-10.367-27.902-19.91-4.4844-7.5234-6.9258-16.086-7.082-24.84-0.85156-27.129 4.9336-54.059 16.855-78.441 11.918-24.387 29.613-45.488 51.547-61.48 19.258-14.66 37.426-30.703 54.359-48 8.0703-9.5078 12.977-21.293 14.039-33.719 2.7617-33.961-19.078-55.801-54.238-58.078-42.48-2.7617-78.238 8.2812-103.2 45.84l-0.003906-0.003907c-5.207 8.8555-13 15.898-22.332 20.191-9.332 4.2891-19.758 5.6211-29.867 3.8086-36-6-51.48-35.281-36.719-69 15.449-32.863 42.012-59.211 75-74.398 33.918-16.672 71.055-25.762 108.84-26.641z"></path><path fill="currentColor" d="m645.36 838.56c0.24219 38.52-21.359 61.441-59.16 61.441s-63-22.078-63.121-54.359c0-44.762 20.039-67.078 60-68.281 32.523-0.96094 66.363 18.961 62.281 61.199z"></path></g></svg>
        <span>Help</span>
      </a>

      <a href="#" className="
        text-white flex items-center gap-2 pl-3 pr-5 py-2 rounded-sm m-1
        font-onest not-italic font-semibold text-sm leading-5 group
        
        transition duration-200
        hover:bg-white
        hover:text-black
      ">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" title="Logout"><path d="M11 7L9.6 8.4L12.2 11H2V13H12.2L9.6 15.6L11 17L16 12L11 7ZM20 19H12V21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H12V5H20V19Z" fill="currentColor"></path></svg>
        <span>Logout</span>
      </a>
    </div>
  );
}