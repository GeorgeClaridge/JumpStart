import {
  LandingImage,
  Phone,
  Profile,
  CommaRed,
  CommaBlue,
  Logo,
} from "./assets/import";
import "./App.css";

function App() {
  return (
    <div className="Content bg-white">
      <div className="Navbar flex justify-between py-4 md:px-20 xl:px-60 px-4">
        <img src={Logo} alt="Logo" className="" />
        <button className="py-2 px-4 bg-red shadow text-2xl font-space font-bold hover:bg-blue hover:text-white duration-300">
          Join Now
        </button>
      </div>

      <div className="Landing grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 md:px-20 xl:px-60 px-4 pb-[3rem] bg-white">
        <img
          src={LandingImage}
          alt="LandingImage"
          className="object-contain h-[30rem]"
        />

        <div className="Content">
          <div className="Header font-space text-6xl font-bold text-blue">
            Jump Into Action
          </div>
          <div className="SubHeader font-space text-2xl py-4 text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <button className="py-2 px-4 bg-red shadow text-2xl font-space font-bold hover:bg-blue hover:text-white duration-300">
            Join Now
          </button>
        </div>
      </div>

      <div class="relative flex overflow-x-hidden bg-red hover:bg-blue hover:text-white duration-300 border-y-[3px] border-black cursor-default">
        <div class="py-2 animate-marquee whitespace-nowrap font-space font-bold">
          <span class="text-4xl mx-14">Jump Start</span>
          <span class="text-4xl mx-14">Jump Start</span>
          <span class="text-4xl mx-14">Jump Start</span>
          <span class="text-4xl mx-14">Jump Start</span>
          <span class="text-4xl mx-14">Jump Start</span>
        </div>

        <div class="absolute top-0 py-2 animate-marquee2 whitespace-nowrap font-space font-bold">
          <span class="text-4xl mx-14">Jump Start</span>
          <span class="text-4xl mx-14">Jump Start</span>
          <span class="text-4xl mx-14">Jump Start</span>
          <span class="text-4xl mx-14">Jump Start</span>
          <span class="text-4xl mx-14">Jump Start</span>
        </div>
      </div>

      <div className="User grid grid-cols-1 lg:grid-cols-3 gap-12 place-items-center py-[3rem] bg-white md:px-20 xl:px-60 px-4">
        <div className="shadow rounded-md bg-lightblue p-4">
          <div className="flex justify-between">
            <div className="Profile w-24 h-24 mr-4">
              <div className="image">
                <img
                  src={Profile}
                  alt="LandingImage"
                  className="rounded-full border-[3px]"
                />
              </div>
            </div>
            <div className="Comma">
              <img src={CommaBlue} alt="Comma" className="" />
            </div>
          </div>
          <div className="Name font-space text-2xl font-bold pt-4">
            John Smith, CEO
          </div>
          <div className="Content font-open pt-2">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          </div>
        </div>

        <div className="shadow rounded-md bg-lightred p-4">
          <div className="flex justify-between">
            <div className="Profile w-24 h-24 mr-4">
              <div className="image">
                <img
                  src={Profile}
                  alt="LandingImage"
                  className="rounded-full border-[3px]"
                />
              </div>
            </div>
            <div className="Comma">
              <img src={CommaRed} alt="Comma" className="" />
            </div>
          </div>
          <div className="Name font-space text-2xl font-bold pt-4">
            John Smith, CEO
          </div>
          <div className="Content font-open pt-2">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          </div>
        </div>

        <div className="shadow rounded-md bg-lightblue p-4">
          <div className="flex justify-between">
            <div className="Profile w-24 h-24 mr-4">
              <div className="image">
                <img
                  src={Profile}
                  alt="LandingImage"
                  className="rounded-full border-[3px]"
                />
              </div>
            </div>
            <div className="Comma">
              <img src={CommaBlue} alt="Comma" className="" />
            </div>
          </div>
          <div className="Name font-space text-2xl font-bold pt-4">
            John Smith, CEO
          </div>
          <div className="Content font-open pt-2">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          </div>
        </div>
      </div>

      <div class="relative flex overflow-x-hidden bg-red hover:bg-blue hover:text-white duration-300 border-y-[3px] border-black cursor-default">
        <div class="py-2 animate-marquee whitespace-nowrap font-space font-bold">
          <span class="text-4xl mx-14">Jump Start</span>
          <span class="text-4xl mx-14">Jump Start</span>
          <span class="text-4xl mx-14">Jump Start</span>
          <span class="text-4xl mx-14">Jump Start</span>
          <span class="text-4xl mx-14">Jump Start</span>
        </div>

        <div class="absolute top-0 py-2 animate-marquee2 whitespace-nowrap font-space font-bold">
          <span class="text-4xl mx-14">Jump Start</span>
          <span class="text-4xl mx-14">Jump Start</span>
          <span class="text-4xl mx-14">Jump Start</span>
          <span class="text-4xl mx-14">Jump Start</span>
          <span class="text-4xl mx-14">Jump Start</span>
        </div>
      </div>

      <div className="Landing grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 md:px-20 xl:px-60 py-[3rem] px-4 bg-white">
        <div className="Content">
          <div className="Header font-space text-6xl font-bold text-blue">
            Jump Into Action
          </div>
          <div className="SubHeader font-space text-2xl py-4 text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <button className="py-2 px-4 bg-red shadow text-2xl font-space font-bold hover:bg-blue hover:text-white duration-300">
            Learn Now
          </button>
        </div>

        <img
          src={Phone}
          alt="LandingImage"
          className="object-contain h-[25rem]"
        />
      </div>

      <div className="User grid grid-cols-1 lg:grid-cols-2 gap-12 place-items-center pb-[3rem] bg-white md:px-20 xl:px-60 px-4">
        <div className="shadow rounded-md bg-lightblue p-4">
          <div className="Name font-space text-2xl font-bold">Header</div>
          <div className="Content font-open py-2">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          </div>
          <button className="py-2 px-4 bg-blue shadow text-2xl font-space font-bold hover:bg-white duration-300">
            Learn Now
          </button>
        </div>

        <div className="shadow rounded-md bg-lightred p-4">
          <div className="Header text"></div>
          <div className="Name font-space text-2xl font-bold">Header</div>
          <div className="Content font-open py-2">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          </div>
          <button className="py-2 px-4 bg-red shadow text-2xl font-space font-bold hover:bg-white duration-300">
            Learn Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
