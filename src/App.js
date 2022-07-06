import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="md:flex flex-row justify-around items-center h-20">
        <div className="logo ">
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <div className="menu w-1/4">
          <ul className="md:flex justify-around">
            <li className="text-gray hover:text-dark-blue hover:underline hover:decoration-lime-green">
              <a href="/">Home</a>
            </li>
            <li className="text-gray hover:text-dark-blue hover:underline hover:decoration-lime-green">
              <a href="/">About</a>
            </li>
            <li className="text-gray hover:text-dark-blue hover:underline hover:decoration-lime-green">
              <a href="/">Contact</a>
            </li>
            <li className="text-gray hover:text-dark-blue hover:underline hover:decoration-lime-green">
              <a href="/">Blog</a>
            </li>
            <li className="text-gray hover:text-dark-blue hover:underline hover:decoration-lime-green">
              <a href="/">Careers</a>
            </li>
          </ul>
        </div>
        <div className="registerButton bg-gradient-to-r from-lime-green to-bright-cyan hover:from-light-lime-green hover:to-light-bright-cyan cursor-pointer text-very-light-gray px-8 py-3 rounded-full font-semibold">
          <a href="/">Request Invite</a>
        </div>
      </nav>
    </div>
  );
}

export default App;
