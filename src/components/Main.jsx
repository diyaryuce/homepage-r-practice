function Main({ sidebarOpen }) {
  return(<>
    <main className="
      flex-1 bg-[#0f0f0f] min-h-[2000px]
      px-10.75 py-8.5 min-w-0
    ">
      <div role="usersection" className={`
        w-auto h-24 mx-auto shrink-0 overflow-hidden
        border border-solid border-white/5
        flex relative bg-[#151515]
        
        transition-all duration-400 ease-in-out
      `}>
        <img src="/img/doggy.png" alt="doggy" className="ml-13.75 h-20.75 flex my-auto" />

        <div className="
          ml-17.25 mr-4 my-auto flex flex-col gap-1
        ">
          <span className="
            text-white
            font-onest not-italic font-bold text-[18px] leading-5.5
          ">
            0xHearts.com
          </span>

          <span className="
            flex flex-grid gap-2 items-center
            text-white/40 font-onest not-italic font-bold text-[14px] leading-4.5
          ">
            Level 43
          <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="1.5" cy="1.5" r="1.5" fill="white" fill-opacity="0.4"/></svg>
          36,628,122 XP
          </span>
        </div>

        <div className="my-auto flex flex-col gap-2 mx-auto">
          <div className="flex w-[690px] h-0.5 bg-[#282828] bg-blend-soft-light">
            <div className="w-96 h-full bg-[#E8BD70]" />
          </div>

          <div className="flex">
            <span className="text-white/40 font-onest not-italic font-bold text-[14px] leading-4.5">
              36,000,000 XP
            </span>

            <span className="ml-auto text-white/40 font-onest not-italic font-bold text-[14px] leading-4.5">
              37,000,000 XP
            </span>

          </div>
        </div>

        <div className="
          relative ml-auto h-full w-88 shrink-0
          border-l-2 border-[#292929]
        ">
          <img src="/img/weekly.png" alt="bg" className="flex items-center justify-center" />

          <span className="
            absolute left-1/2 top-4 -translate-x-1/2
            whitespace-nowrap text-white/20
            font-onest text-[12px] font-bold leading-4.5 tracking-[0.24em]
          ">
            WEEKLY RACE
          </span>

          <div className="
            absolute inset-1 whitespace-nowrap translate-y-1.5
            flex items-center justify-center gap-1
            font-onest text-[18px] font-bold leading-6 text-[#c0c1c1]
          ">
            <span>You have</span>

            <span className="text-[#ffce76]">
              28,321
            </span>

            <span>points</span>
          </div>
        </div>
      </div>

      <div role="gamemodes" className="
        flex flex-col items-start 
        w-full gap-6 mt-10
      ">
        <div className="
          flex flex-col items-start gap-2 w-114
        ">
          <span className="text-white font-onest not-italic font-bold text-[28px] leading-none">Gamemodes</span>

          <span className="text-white/40 font-onest not-italic font-bold text-[14px] leading-4.5">
            Short description bla bla bla bla line word word word word word string word word word word word text insert there!
          </span>
        </div>

        <div className="flex gap-6 mx-auto">
          <Gamemodes sidebarOpen={sidebarOpen} Image={<img src="/img/unboxings.png" />}  Name="Unboxings" />

          <Gamemodes sidebarOpen={sidebarOpen} Image={<img src="/img/battles.png" />}  Name="Battles" />

          <Gamemodes sidebarOpen={sidebarOpen} Image={<img src="/img/upgrader.png" />}  Name="Upgrader" />
          
          <Gamemodes sidebarOpen={sidebarOpen} Image={<img src="/img/vault.png" />}  Name="Vault" />
        </div>
      </div>
    </main>
  </>)
}

export default Main;

/*---MINI-COMPONENTS---*/
function Gamemodes({ sidebarOpen, Image, Name }) {
  return (<>
    <a href="#" className={`
      relative flex h-65 bg-[#151515] group

      transition-all duration-400 ease-in-out
      ${sidebarOpen ? "w-90" : "w-110"}
    `}>
      <img src="/img/rays.png" alt="rays" className="absolute inset-0" />

      <div className="
        relative flex justify-center
        mx-auto mt-3.5 w-54 h-32

        transition-all duration-400 ease-in-out
        group-hover:scale-[1.1]
        group-hover:-rotate-3

      ">
        {Image}
      </div>

      <div className="absolute top-40.75 w-full h-px bg-[#282828]" />

      <div className="
        flex flex-col mt-auto absolute top-45 mx-4 mb-4 gap-1
      ">
        <span className="text-white font-onest not-italic font-bold text-[18px] leading-6">
          {Name}
        </span>

        <span className="text-white/40 font-onest not-italic font-bold text-[14px] leading-4.5">
          Short description bla bla bla bla line word word word word word string word word word word
        </span>
      </div>
    </a>
  </>)
}