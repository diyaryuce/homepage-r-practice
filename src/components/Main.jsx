import { useRef } from "react";

function Main({ sidebarOpen }) {
  return(<>
    <main className="
      flex-1 bg-[#0f0f0f] min-h-[2000px]
      px-10.75 py-8.5 min-w-0
    ">
      <div role="usersection" className={`
        w-full min-w-0 h-24 mx-auto shrink-0 overflow-hidden
        border border-solid border-white/5
        flex relative bg-[#151515]
        
        transition-all duration-400 ease-in-out
      `}>
        <img src="/img/doggy.png" alt="doggy" className="ml-13.75 h-20.75 flex my-auto shrink-0" />

        <div className="
          ml-17.25 mr-4 my-auto flex flex-col gap-1 shrink-0
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

        <div className="mx-8 my-auto flex min-w-0 flex-1 justify-center">
          <div className="flex w-full max-w-[690px] flex-col gap-2">
            <div className="h-0.5 w-full bg-[#282828]">
              <div className="h-full w-2/3 bg-[#E8BD70]" />
            </div>

            <div className="flex w-full justify-between">
              <span className="font-onest text-[14px] font-bold text-white/40">
                36,000,000 XP
              </span>

              <span className="font-onest text-[14px] font-bold text-white/40">
                37,000,000 XP
              </span>
            </div>
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
        gap-6 mt-10
      ">
        <div className="
          flex flex-col items-start gap-2 w-114
        ">
          <span className="text-white font-onest not-italic font-bold text-[28px] leading-none">Gamemodes</span>

          <span className="text-white/40 font-onest not-italic font-bold text-[14px] leading-4.5">
            Short description bla bla bla bla line word word word word word string word word word word word text insert there!
          </span>
        </div>

        <div className="grid w-full gap-6 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
          <Gamemodes sidebarOpen={sidebarOpen} Image={<img src="/img/unboxings.png" />}  Name="Unboxings" />

          <Gamemodes sidebarOpen={sidebarOpen} Image={<img src="/img/battles.png" />}  Name="Battles" />

          <Gamemodes sidebarOpen={sidebarOpen} Image={<img src="/img/upgrader.png" />}  Name="Upgrader" />
          
          <Gamemodes sidebarOpen={sidebarOpen} Image={<img src="/img/vault.png" />}  Name="Vault" />
        </div>
      </div>

      <div role="activebattles" className="mt-8">
        <div className="flex items-center">
          <div className="
            flex flex-col items-start gap-2 w-114
          ">
            <span className="text-white font-onest not-italic font-bold text-[28px] leading-none">Active Battles</span>

            <span className="text-white/40 font-onest not-italic font-bold text-[14px] leading-4.5">
              Short description bla bla bla bla line word word word word word string word word word word word text insert there!
            </span>
          </div>

          <div className="flex ml-auto gap-2">
            <button className="h-10 py-1.5 px-3.5 bg-[#151515] cursor-pointer">
              <span className="text-[#a1a1a1] font-onest not-italic font-bold text-[14px] leading-[18px]">All battles</span>
            </button>

            <button className="
              h-10 py-1.5 px-3.5 cursor-pointer
              bg-[radial-gradient(50.42%_92.5%_at_50.42%_7.5%,#FFDFA7_0%,#E8BD70_100%)]
              border-2 border-solid [border-image-slice:1]
              [border-image-source:radial-gradient(87.5%_87.5%_at_50.42%_12.5%,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_100%)]
            ">
              <span className="text-[#212121] font-onest not-italic font-bold text-[14px] leading-[18px]">Create Battle</span>
            </button>
          </div>
        </div>
        
        {/* COME BACK TO THIS WHEN BATTLES ARE DONE */}
        <div className="mt-6 text-white/70 font-onest not-italic font-bold text-[14px] leading-[18px]">
          <span className="">Rounds</span>
          <span className=" left-[138px]">Boxes</span>
          <span className=" left-[933px]">Players</span>
          <span className=" left-[1299px]">Actions</span>
        </div>

        <Battles />
      </div>
    </main>
  </>)
}

export default Main;

/*---MINI-COMPONENTS---*/
function Gamemodes({ Image, Name }) {
  return (<>
    <a href="#" className={`
      relative flex w-full h-65 bg-[#151515] group

      transition-all duration-400 ease-in-out
      min-w-0 overflow-hidden
    `}>
      <img src="/img/rays.png" alt="rays" className="absolute" />

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
        absolute inset-x-4 top-45 flex flex-col gap-1
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

function Battles() {
  return(<>
    <div className="
      flex w-full h-[114px] bg-[#151515] mt-4
      grid-cols-[repeat(auto-fit,minmax(280px,1fr))]
      overflow-hidden relative
    ">
      
      <div className="
        relative w-[127px] flex flex-col items-center justify-center
      ">
        <div className="absolute left-[-32px] top-[-24px] h-[76px] w-[96px] shrink-0 rounded-full bg-[#E8BD70] blur-[66px]" />

        <img src="/img/rank.png" className="w-[50px] h-[56px]" />
        <span className="
          text-white font-onest not-italic font-bold text-[16px] leading-[24px]
          absolute -translate-y-2.75
        ">
          2
        </span>

        <span className="text-white/70 font-onest not-italic font-bold text-[14px] leading-[18px] mt-1.5">Waiting</span>
      </div>

      <div className="h-[114px] w-px opacity-10 bg-[linear-gradient(90deg,#FFFFFF_0%,rgba(255,255,255,0)_100%)] absolute left-[128px]" />

      <CaseCarousel />
      
    </div>
  </>)
}

function CaseCarousel() {
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    const slider = sliderRef.current;
    const firstBox = slider.firstElementChild;

    if (!firstBox) return;

    const boxWidth = firstBox.getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(slider).columnGap) || 0;

    slider.scrollBy({
      left: direction * (boxWidth + gap),
      behavior: "smooth"
    });
  };

  return(<>
    <div className="relative my-auto flex gap-[10px]">
      <button type="button" aria-label="Previous box" onClick={() => scrollSlider(-1)} className="
        cursor-pointer w-[20px] h-[20px] my-auto shrink-0 ml-[10px]
      ">
        <div className="group transition-all duration-400 ease-in-out">
          <svg className="inset-0 group-hover:hidden" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8416 13.825L9.02489 10L12.8416 6.175L11.6666 5L6.66655 10L11.6666 15L12.8416 13.825Z" fill="#3c3c3c"/></svg>
          <svg className="inset-0 hidden group-hover:block group-hover:scale-[1.5]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8416 13.825L9.02489 10L12.8416 6.175L11.6666 5L6.66655 10L11.6666 15L12.8416 13.825Z" fill="#ffffff"/></svg>
        </div>
      </button>

      <Cases Colour="Blue" Box={<img src="/img/watchbox.png" />} />

      <Cases Colour="Purple" Box={<img src="/img/applebox.png" />} />

      <Cases Colour="Red" Box={<img src="/img/yeezybox.png" />} />

      <Cases Colour="Blue" Box={<img src="/img/watchbox.png" />} />

      <Cases Colour="Purple" Box={<img src="/img/applebox.png" />} />

      <Cases Colour="Red" Box={<img src="/img/yeezybox.png" />} />

      <Cases Colour="Gold" Box={<img src="/img/lvbox.png" />} />
    </div>
  </>)
}

function Cases({ Colour, Box }) {
  const boxColour = getBoxColour(Colour);
  
  return(<>
    <button style={{ "--box-colour": boxColour }} className={`group cursor-pointer shrink-0 overflow-hidden relative h-[114px] w-[114px] flex`}>
      <div className="
        absolute bottom-0 left-1/2 -translate-x-1/2
        h-0.5 w-[75%] bg-[var(--box-colour)]
      "/>
      
      <div className="
        absolute bg-[var(--box-colour)] mix-blend-normal blur-[48px]
        left-[25.44%] right-[25.44%] top-[85.88%] bottom-[-50%]"
      />

      <div className="
        w-[80px] h-[80px] flex my-auto mx-auto relative
        transition-all duration-400 ease-in-out 
        group-hover:scale-[1.1] group-hover:-rotate-3
      ">
        {Box}
      </div>
    </button>
  </>)
}

const BoxColour = {
  BLUE: "#389ed3",
  PURPLE: "#b245ef",
  RED: "#fe3e3c",
  GOLD: "#e8bd70"
}

function getBoxColour(colour) {
  if (colour === "Blue") return BoxColour.BLUE;
  if (colour === "Purple") return BoxColour.PURPLE;
  if (colour === "Red") return BoxColour.RED;
  if (colour === "Gold") return BoxColour.GOLD;
}
