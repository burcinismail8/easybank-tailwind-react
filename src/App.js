import "./App.css";

function App() {
  return (
    <div className="App font-body ">
      <div className="header h-screen">
        <nav className="md:flex flex-row justify-around items-center h-20">
          <div className="logo ">
            <img src="/images/logo.svg" alt="logo" />
          </div>
          <div className="menu w-1/4">
            <ul className="md:flex justify-around">
              <li className="text-grayish-blue hover:text-dark-blue hover:underline hover:decoration-lime-green">
                <a href="/">Home</a>
              </li>
              <li className="text-grayish-blue hover:text-dark-blue hover:underline hover:decoration-lime-green">
                <a href="/">About</a>
              </li>
              <li className="text-grayish-blue hover:text-dark-blue hover:underline hover:decoration-lime-green">
                <a href="/">Contact</a>
              </li>
              <li className="text-grayish-blue hover:text-dark-blue hover:underline hover:decoration-lime-green">
                <a href="/">Blog</a>
              </li>
              <li className="text-grayish-blue hover:text-dark-blue hover:underline hover:decoration-lime-green">
                <a href="/">Careers</a>
              </li>
            </ul>
          </div>
          <div className="registerButton bg-gradient-to-r from-lime-green to-bright-cyan hover:from-light-lime-green hover:to-light-bright-cyan cursor-pointer text-very-light-gray px-8 py-3 rounded-full font-semibold">
            <a href="/">Request Invite</a>
          </div>
        </nav>
        <header className="md:flex flex-row items-center h-4/5 justify-around bg-very-light-gray">
          <div className="text-content w-2/5 pl-12">
            <div className="heading text-dark-blue text-6xl text-left my-5 font-light leading-tight">
              Next generation digital banking
            </div>
            <div className="description text-grayish-blue text-left pt-3 pb-6 text-lg leading-relaxed">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </div>
            <div className="registerButton bg-gradient-to-r from-lime-green to-bright-cyan hover:from-light-lime-green hover:to-light-bright-cyan cursor-pointer text-very-light-gray mt-2 px-8 py-3 rounded-full font-semibold w-1/3">
              <a href="/">Request Invite</a>
            </div>
          </div>
          <div className="w-2/5"></div>
        </header>
      </div>
      <div className="main flex-row ">
        <div className="section-1 bg-light-grayish-blue p-20 pb-10">
          <div className="w-1/2 ml-10">
            <div className=" text-dark-blue text-4xl text-left my-5 font-light leading-tight">
              Why choose Easybank?
            </div>
            <div className="description text-grayish-blue text-left pb-6 text-lg leading-relaxed">
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </div>
          </div>
          <ul className="list flex flex-row justify-between px-9 py-14">
            <li className="w-1/5">
              <img src="/images/icon-online.svg" alt="logo" />
              <div className=" text-dark-blue text-2xl text-left my-5 font-light leading-tight">
                Online Banking
              </div>
              <div className="description text-grayish-blue text-left pb-6 text-base leading-relaxed">
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </div>
            </li>
            <li className="w-1/5">
              <img src="/images/icon-budgeting.svg" alt="logo" />
              <div className=" text-dark-blue text-2xl text-left my-5 font-light leading-tight">
                Simple Budgeting
              </div>
              <div className="description text-grayish-blue text-left pb-6 text-base leading-relaxed">
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits.
              </div>
            </li>
            <li className="w-1/5">
              <img src="/images/icon-onboarding.svg" alt="logo" />
              <div className=" text-dark-blue text-2xl text-left my-5 font-light leading-tight">
                Fast Onboarding
              </div>
              <div className="description text-grayish-blue text-left pb-6 text-base leading-relaxed">
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </div>
            </li>
            <li className="w-1/5">
              <img src="/images/icon-api.svg" alt="logo" />
              <div className=" text-dark-blue text-2xl text-left my-5 font-light leading-tight">
                Open API
              </div>
              <div className="description text-grayish-blue text-left pb-6 text-base leading-relaxed">
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* <img src="/images/bg-intro-desktop.svg" alt="logo" /> */}
    </div>
  );
}

export default App;
