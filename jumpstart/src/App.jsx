import { LandingImage, Phone, Profile, Comma } from './assets/import'
import './App.css'

function App() {

  return (
    <div className="Content bg-white px-4 md:px-20 xl:px-60">
      <div className="Navbar flex justify-between pt-2">
        <div className="Logo">Logo</div>
        <button className='py-2 px-4 bg-red rounded-md shadow'>Button</button>
      </div>

      <div className="Landing grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8">
        <img src={LandingImage} alt="LandingImage" className=''/>
        
        <div className="Content">
          <div className="Header font-space text-6xl font-bold text-red">Jump Into Action</div>
          <div className="SubHeader font-space text-5xl font-bold text-blue">Kickstart Your Career</div>
          <div className="Paragraph font-open text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          <div className="Buttons flex">
            <button className='py-2 px-4 bg-red rounded-md shadow mr-4'>Button</button>
            <button className='rounded-md bg-blue shadow p-2'>IconArrow</button>
          </div>
        </div>
      </div>

      <div className="User grid grid-cols-1 lg:grid-cols-3 gap-12 place-items-center pt-[6rem]">
        <div className="shadow rounded-md bg-lightblue">
          <div className="flex justify-between px-4">
            <div className="comma"><img src={Comma} alt="LandingImage" className='py-4'/></div>
            <div className="image"><img src={Profile} alt="LandingImage" className='-mt-[50%] rounded-full border-[2px]'/></div>
            <div className="comma hidden lg:block lg:invisible"><img src={Comma} alt="LandingImage" className='py-4'/></div>
          </div>
          <div className="Content font-open p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>

        <div className="shadow rounded-md bg-lightblue">
          <div className="flex justify-between px-4">
            <div className="comma"><img src={Comma} alt="LandingImage" className='py-4'/></div>
            <div className="image"><img src={Profile} alt="LandingImage" className='-mt-[50%] rounded-full border-[2px]'/></div>
            <div className="comma hidden lg:block lg:invisible"><img src={Comma} alt="LandingImage" className='py-4'/></div>
          </div>
          <div className="Content font-open p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>

        <div className="shadow rounded-md bg-lightblue">
          <div className="flex justify-between px-4">
            <div className="comma"><img src={Comma} alt="LandingImage" className='py-4'/></div>
            <div className="image"><img src={Profile} alt="LandingImage" className='-mt-[50%] rounded-full border-[2px]'/></div>
            <div className="comma hidden lg:block lg:invisible"><img src={Comma} alt="LandingImage" className='py-4'/></div>
          </div>
          <div className="Content font-open p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
      </div>

      <div className="Brand grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 pt-[3rem]">
        <div className="Content">
          <div className="Header font-space text-6xl font-bold text-red">Brand Identity</div>
          <div className="SubHeader font-space text-5xl font-bold text-blue">What Makes You, You</div>
          <div className="Paragraph font-open text-2xl">We would love to help you with UX/UI & Brand-Identity Design and help you kickstart your business.</div>
          <div className="Buttons flex">
            <button className='py-2 px-4 bg-red rounded-md shadow mr-4'>Button</button>
            <button className='rounded-md bg-blue shadow p-2'>IconArrow</button>
          </div>
        </div>

        <img src={Phone} alt="PhoneImage" className=''/>
      </div>

      <div className="Footer">

      </div>
    </div>
  )
}

export default App
