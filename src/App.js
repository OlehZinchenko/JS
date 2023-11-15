import './App.css';
import logo from './logo.png';
import logoBg from './logo-background.png';

const Logo = () =>
    <img src={logo} id="header-logo" alt="Logo"/>

function App() {
  return (
    <div className="App">
      <header className="head-wrapper">
        <Logo />
         <nav className="nav-wrapper">
            <a href="#item-1">Item 1</a>
            <a href="#item-2">Item 2</a>
            <a href="#item-3">Item 3</a>
            <a href="#item-4">Item 4</a>
            <a href="#item-5">Item 5</a>
        </nav>
      </header>
      <div className="content">
        <aside className="aside-1">Aside 1</aside>
        <main className="main-wrapper">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel numquam maxime nam ex placeat accusantium, ut mollitia facere neque blanditiis corrupti harum cupiditate porro, officiis nesciunt quam. Illum, omnis molestias?</p>
          <h3>Our work</h3>
          <div className="card-wrapper">
            <div className="card">
              <div id="card-container">
                <img src={logoBg} id="card-img"  alt="Card image"/>
                <h5>Lorem ipsum dolor sit amet</h5>
                <p id="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat doloribus quam nisi?</p>
              </div>
              <button className="card-btn">Go</button>
            </div>
            <div className="card">
              <div id="card-container">
                <img src={logoBg} id="card-img"  alt="Card image"/>
                <h5>Lorem ipsum dolor sit amet</h5>
                <p id="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
              <button className="card-btn">Go</button>
            </div>
            <div className="card">
              <div id="card-container">
                <img src={logoBg} id="card-img"  alt="Card image"/>
                <h5>Lorem ipsum dolor sit amet</h5>
                <p id="card-text">Lorem ipsum dolor sit amet </p>
              </div>
              <button className="card-btn">Go</button>
            </div>
            <div className="card">
              <div id="card-container">
                <img src={logoBg} id="card-img"  alt="Card image"/>
                <h5>Lorem ipsum dolor sit amet</h5>
                <p id="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, laudantium. Aspernatur ipsam quibusdam doloremque ea.</p>
              </div>
              <button className="card-btn">Go</button>
            </div>
            <div className="card">
              <div id="card-container">
                <img src={logoBg} id="card-img"  alt="Card image"/>
                <h5>Lorem ipsum dolor sit amet</h5>
                <p id="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat doloribus quam nisi?</p>
              </div>
              <button className="card-btn">Go</button>
            </div>
            <div className="card">
              <div id="card-container">
                <img src={logoBg} id="card-img"  alt="Card image"/>
                <h5>Lorem ipsum dolor sit amet</h5>
                <p id="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus labore, quae natus distinctio cupiditate dicta facere mollitia sequi.</p>
              </div>
              <button className="card-btn">Go</button>
            </div>
          </div>
        </main>
        <aside className="aside-3">Aside 2</aside>
      </div>
      <footer className="bottom-footer">
        <div className="footer-content">Footer</div>
      </footer>
    </div>
  );
}

export default App;
