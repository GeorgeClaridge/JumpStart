import { LandingImage, Phone, Profile, Comma, Logo } from './assets/import'
import './App.css'

function App() {

  return (
    <div className="Content bg-white">
      <div className="Navbar flex justify-between py-4 md:px-20 xl:px-60">
        <img src={Logo} alt="Logo" className=''/>
        <button className='py-2 px-4 bg-red shadow text-2xl font-space font-bold hover:bg-blue hover:text-white duration-300'>Join Now</button>
      </div>

      <div className="Landing grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 md:px-20 xl:px-60 pb-4 px-4 bg-white">

        <img src={LandingImage} alt="LandingImage" className='h-[20rem] lg:h-[30rem] w-fit'/>

        <div className="Content">
          <div className="Header font-space text-6xl font-bold text-blue">Jump Into Action</div>
          <div className="SubHeader font-space text-xl font-bold py-2 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          <button className='py-2 px-4 bg-red shadow text-2xl font-space font-bold hover:bg-blue hover:text-white duration-300'>Join Now</button>
        </div>
        
      </div>

      <div class="relative flex overflow-x-hidden bg-red hover:bg-blue duration-300 border-y-[3px]">
        <div class="py-2 animate-marquee whitespace-nowrap font-space font-bold">
          <span class="text-4xl mx-14">Marquee Item 1</span>
          <span class="text-4xl mx-14">Marquee Item 2</span>
          <span class="text-4xl mx-14">Marquee Item 3</span>
          <span class="text-4xl mx-14">Marquee Item 4</span>
          <span class="text-4xl mx-14">Marquee Item 5</span>
        </div>

        <div class="absolute top-0 py-2 animate-marquee2 whitespace-nowrap font-space font-bold">
          <span class="text-4xl mx-14">Marquee Item 1</span>
          <span class="text-4xl mx-14">Marquee Item 2</span>
          <span class="text-4xl mx-14">Marquee Item 3</span>
          <span class="text-4xl mx-14">Marquee Item 4</span>
          <span class="text-4xl mx-14">Marquee Item 5</span>
        </div>
      </div>

      <div className="User grid grid-cols-1 lg:grid-cols-3 gap-12 place-items-center py-[3rem] bg-white md:px-20 xl:px-60 px-4">

        <div className="shadow rounded-md bg-lightblue p-4">
          <div className="flex justify-between">
            <div className="flex">
              <div className="Profile w-24 h-24 mr-4"><div className="image"><img src={Profile} alt="LandingImage" className='rounded-full border-[3px]'/></div></div>
              <div className="User">
                <div className="Name font-space text-2xl font-bold">John Smith,</div>
                <div className="Title font-space text-lg font-bold">CEO</div>
              </div>
            </div>
            <div className="Comma"><img src={Comma} alt="LandingImage" className=''/></div>
          </div>
          <div className="Content font-open pt-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
        </div>


        <div className="shadow rounded-md bg-lightblue p-4">
          <div className="flex justify-between">
            <div className="flex">
              <div className="Profile w-24 h-24 mr-4"><div className="image"><img src={Profile} alt="LandingImage" className='rounded-full border-[3px]'/></div></div>
              <div className="User">
                <div className="Name font-space text-xl font-bold">John Smith,</div>
                <div className="Title font-space text-lg font-bold">CEO</div>
              </div>
            </div>
            <div className="Comma"><img src={Comma} alt="LandingImage" className=''/></div>
          </div>
          <div className="Content font-open pt-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
        </div>

        <div className="shadow rounded-md bg-lightblue p-4">
          <div className="flex justify-between">
            <div className="flex">
              <div className="Profile w-24 h-24 mr-4"><div className="image"><img src={Profile} alt="LandingImage" className='rounded-full border-[3px]'/></div></div>
              <div className="User">
                <div className="Name font-space text-xl font-bold">John Smith,</div>
                <div className="Title font-space text-lg font-bold">CEO</div>
              </div>
            </div>
            <div className="Comma"><img src={Comma} alt="LandingImage" className=''/></div>
          </div>
          <div className="Content font-open pt-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
        </div>

      </div>

      <div class="relative flex overflow-x-hidden bg-red hover:bg-blue duration-300 border-y-[3px]">
        <div class="py-2 animate-marquee whitespace-nowrap font-space font-bold">
          <span class="text-4xl mx-14">Marquee Item 1</span>
          <span class="text-4xl mx-14">Marquee Item 2</span>
          <span class="text-4xl mx-14">Marquee Item 3</span>
          <span class="text-4xl mx-14">Marquee Item 4</span>
          <span class="text-4xl mx-14">Marquee Item 5</span>
        </div>

        <div class="absolute top-0 py-2 animate-marquee2 whitespace-nowrap font-space font-bold">
          <span class="text-4xl mx-14">Marquee Item 1</span>
          <span class="text-4xl mx-14">Marquee Item 2</span>
          <span class="text-4xl mx-14">Marquee Item 3</span>
          <span class="text-4xl mx-14">Marquee Item 4</span>
          <span class="text-4xl mx-14">Marquee Item 5</span>
        </div>
      </div>

    </div>
  )
}

export default App
