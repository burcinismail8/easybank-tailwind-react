import "./App.css";

function App() {
  return (
    <div className="App font-body overflow-x-hidden">
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
        <header className="md:flex flex-row items-center h-4/5 justify-between bg-very-light-gray">
          <div className="text-content w-2/5 pl-28">
            <div className="heading text-dark-blue text-6xl text-left my-5 font-light leading-tight">
              Next generation digital banking
            </div>
            <div className="description text-grayish-blue text-left pt-3 pb-6 text-lg leading-relaxed">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </div>
            <div className="registerButton bg-gradient-to-r from-lime-green to-bright-cyan hover:from-light-lime-green hover:to-light-bright-cyan cursor-pointer text-very-light-gray mt-2 px-8 py-3 rounded-full font-semibold w-1/2">
              <a href="/">Request Invite</a>
            </div>
          </div>
          <div
            className="w-1/2 h-full"
            style={{ backgroundImage: "url(/images/bg-intro-desktop.svg)" }}
          >
            <img
              src="/images/image-mockups.png"
              alt="logo"
              className="max-w-85 ml-56"
            />
          </div>
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
        <div className="section-2 bg-fafafa p-14">
          <div className="w-1/2 ml-10">
            <div className=" text-dark-blue text-4xl text-left my-5 font-light leading-tight">
              Latest Articles
            </div>
          </div>
          <ul className="list flex flex-row justify-between px-9 py-10 max-h-470">
            <li className="card w-1/5 bg-white rounded-md">
              <img
                src="/images/image-currency.jpg"
                alt="logo"
                className="rounded-t-md w-full h-48"
              />
              <div className="content p-4">
                <div className="createdBy text-grayish-blue text-left text-xs">
                  By Claire Robinson
                </div>
                <div className=" text-dark-blue text-lg text-left my-2 font-light leading-tight">
                  Receive money in any currency with no fees
                </div>
                <div className="description text-grayish-blue text-left text-sm leading-relaxed">
                  The world is getting smaller and we’re becoming more mobile.
                  So why should you be forced to only receive money in a single
                  …
                </div>
              </div>
            </li>
            <li className="card w-1/5 bg-white rounded-md">
              <img
                src="/images/image-restaurant.jpg"
                alt="logo"
                className="rounded-t-md w-full h-48"
              />
              <div className="content p-4">
                <div className="createdBy text-grayish-blue text-left text-xs">
                  By Wilson Hutton
                </div>
                <div className=" text-dark-blue text-lg text-left my-2 font-light leading-tight">
                  Treat yourself without worrying about money
                </div>
                <div className="description text-grayish-blue text-left text-sm leading-relaxed">
                  Our simple budgeting feature allows you to separate out your
                  spending and set realistic limits each month. That means you …
                </div>
              </div>
            </li>
            <li className="card w-1/5 bg-white rounded-md">
              <img
                src="/images/image-plane.jpg"
                alt="logo"
                className="rounded-t-md w-full h-48"
              />
              <div className="content p-4">
                <div className="createdBy text-grayish-blue text-left text-xs">
                  By Wilson Hutton
                </div>
                <div className=" text-dark-blue text-lg text-left my-2 font-light leading-tight">
                  Take your Easybank card wherever you go
                </div>
                <div className="description text-grayish-blue text-left text-sm leading-relaxed">
                  We want you to enjoy your travels. This is why we don’t charge
                  any fees on purchases while you’re abroad. We’ll even show you
                  …
                </div>
              </div>
            </li>
            <li className="card w-1/5 bg-white rounded-md">
              <img
                src="/images/image-confetti.jpg"
                alt="logo"
                className="rounded-t-md w-full h-48"
              />
              <div className="content p-4">
                <div className="createdBy text-grayish-blue text-left text-xs">
                  By Claire Robinson
                </div>
                <div className=" text-dark-blue text-lg text-left my-2 font-light leading-tight">
                  Our invite-only Beta accounts are now live!
                </div>
                <div className="description text-grayish-blue text-left text-sm leading-relaxed">
                  After a lot of hard work by the whole team, we’re excited to
                  launch our closed beta. It’s easy to request an invite through
                  the site ...
                </div>
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
