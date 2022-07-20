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
      <footer className="bg-dark-blue h-44 flex flex-row justify-around">
        <div className="section1 w-1/5 flex flex-col justify-around my-5">
          <div className="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="139"
              height="20"
              className="text-white fill-current"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="72.195%"
                  x2="17.503%"
                  y1="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#33D35E" />
                  <stop offset="100%" stopColor="#2AB6D9" />
                </linearGradient>
              </defs>
              <g fill="none" fillRule="evenodd">
                <path
                  fill="#FFFFFF"
                  fillRule="nonzero"
                  d="M37.754 15.847c2.852 0 5.152-1.622 5.952-4.216h-3.897c-.376.665-1.14 1.066-2.055 1.066-1.237 0-2.065-.674-2.32-1.978h8.44c.051-.352.081-.694.081-1.037 0-3.335-2.537-5.95-6.201-5.95-3.568 0-6.175 2.564-6.175 6.049 0 3.473 2.628 6.066 6.175 6.066zm2.344-7.297h-4.596c.317-1.129 1.11-1.749 2.252-1.749 1.181 0 2 .613 2.344 1.75zm10.946 7.296c1.32 0 2.5-.434 3.43-1.188l.336.804h3.027V4.093h-2.919l-.4.88c-.94-.775-2.135-1.222-3.474-1.222-3.476 0-5.961 2.505-5.961 6.026 0 3.533 2.485 6.07 5.961 6.07zm.524-3.467c-1.467 0-2.545-1.108-2.545-2.593 0-1.475 1.069-2.583 2.545-2.583 1.466 0 2.544 1.108 2.544 2.583 0 1.485-1.078 2.593-2.544 2.593zm13.123 3.467c3.02 0 5.025-1.554 5.025-3.93 0-2.883-2.387-3.256-4.183-3.575-1.08-.193-1.95-.344-1.95-.99 0-.527.422-.838 1.05-.838.71 0 1.197.337 1.197 1.063h3.667c-.044-2.303-1.92-3.843-4.816-3.843-2.912 0-4.854 1.47-4.854 3.75 0 2.757 2.337 3.289 4.1 3.574 1.092.181 1.952.368 1.952 1.024 0 .587-.543.88-1.116.88-.742 0-1.32-.383-1.32-1.214h-3.77c.036 2.463 1.919 4.1 5.018 4.1zm8.1 3.858c2.936 0 4.344-1.257 5.877-4.736l4.764-10.863h-4.206l-2.249 6.263-2.412-6.263H70.31l4.698 10.43c-.53 1.414-.983 1.804-2.48 1.804H71.45v3.365h1.341zm18.504-3.858c3.5 0 5.973-2.515 5.973-6.048S94.796 3.75 91.295 3.75a5.332 5.332 0 00-2.825.784V0H84.6v15.474h2.897l.37-.844c.923.771 2.102 1.216 3.428 1.216zm-.523-3.467c-1.467 0-2.545-1.108-2.545-2.58 0-1.486 1.078-2.594 2.545-2.594 1.466 0 2.544 1.108 2.544 2.593 0 1.473-1.087 2.58-2.544 2.58zm13.598 3.467c1.32 0 2.5-.434 3.43-1.188l.336.804h3.027V4.093h-2.918l-.401.88c-.939-.775-2.135-1.222-3.474-1.222-3.476 0-5.96 2.505-5.96 6.026 0 3.533 2.484 6.07 5.96 6.07zm.524-3.467c-1.467 0-2.545-1.108-2.545-2.593 0-1.475 1.07-2.583 2.545-2.583 1.467 0 2.545 1.108 2.545 2.583 0 1.485-1.078 2.593-2.545 2.593zm12.653 3.095V9.403c0-1.447.702-2.3 1.923-2.3.986 0 1.483.657 1.483 1.98v6.39h3.915V8.543c0-2.897-1.733-4.773-4.373-4.773-1.47 0-2.733.565-3.58 1.508l-.537-1.172h-2.747v11.369h3.916zm13.748 0v-4.808l2.848 4.808h4.616l-3.902-5.95 3.543-5.419h-4.397l-2.708 4.454V0h-3.916v15.474h3.916z"
                />
                <g fill="url(#a)">
                  <path d="M10.802 0L0 19.704h5.986L16.789 0z" />
                  <path
                    opacity=".5"
                    d="M18.171 0L7.368 19.704h5.986L24.157 0z"
                  />
                  <path
                    opacity=".15"
                    d="M25.539 0L14.737 19.704h5.986L31.525 0z"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="icons">
            <ul className="icons-list flex flex-row justify-between w-40">
              <li className="icon-list-item">
                <a href="/">
                  <img src="/images/icon-facebook.svg" alt="facebook-icon" />
                </a>
              </li>
              <li className="icon-list-item">
                <a href="/">
                  <img src="/images/icon-youtube.svg" alt="youtube-icon" />
                </a>
              </li>
              <li className="icon-list-item">
                <a href="/">
                  <img src="/images/icon-twitter.svg" alt="twitter-icon" />
                </a>
              </li>
              <li className="icon-list-item">
                <a href="/">
                  <img src="/images/icon-pinterest.svg" alt="pinterest-icon" />
                </a>
              </li>
              <li className="icon-list-item">
                <a href="/">
                  <img src="/images/icon-instagram.svg" alt="instagram-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="section2 text-md w-1/5 text-grayish-blue flex items-center">
          <ul className="info-list flex flex-col flex-wrap justify-between w-full h-1/2 items-start">
            <li className="info-list-item">
              <a href="/">About Us</a>
            </li>
            <li className="icon-list-item">
              <a href="/">Contact</a>
            </li>
            <li className="icon-list-item">
              <a href="/">Blog</a>
            </li>
            <li className="icon-list-item">
              <a href="/">Careers</a>
            </li>
            <li className="icon-list-item">
              <a href="/">Support</a>
            </li>
            <li className="icon-list-item">
              <a href="/">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="section3 text-md w-1/4 text-grayish-blue flex flex-col items-end justify-center">
          <div className="registerButton bg-gradient-to-r from-lime-green to-bright-cyan hover:from-light-lime-green hover:to-light-bright-cyan cursor-pointer text-very-light-gray mt-2 px-8 py-3 rounded-full font-semibold w-1/2">
            <a href="/">Request Invite</a>
          </div>
          <div className="copyright my-5"> © Easybank. All Rights Reserved</div>
        </div>
      </footer>
      {/* <img src="/images/bg-intro-desktop.svg" alt="logo" /> */}
    </div>
  );
}

export default App;
