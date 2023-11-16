import './App.css';
import logo from './logo.png';
import logoBg from './logo-background.png';

const Logo = () =>
    <img src={logo} id="header-logo" alt="Logo"/>

const Item = ({text="Item ", href="#"}) =>
    <a href={href}>{text}</a>

const Card = ({header = "Lorem ipsum dolor sit amet", bodyTxt = "Lorem ipsum dolor sit amet consectetur adipisicing", btnTxt = "Go"}) =>
    <div className="card">
      <div id="card-container">
        <img src={logoBg} id="card-img"  alt="Card image"/>
        <h5>{header}</h5>
        <p id="card-text">{bodyTxt}</p>
      </div>
      <button className="card-btn">{btnTxt}</button>
    </div>

function App() {
  return (
    <div className="App">
      <header className="head-wrapper">
        <Logo />
        <nav className="nav-wrapper">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </nav>
      </header>
      <div className="content">
        <aside className="aside-1">Aside 1</aside>
        <main className="main-wrapper">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel numquam maxime nam ex placeat accusantium, ut mollitia facere neque blanditiis corrupti harum cupiditate porro, officiis nesciunt quam. Illum, omnis molestias?</p>
          <h3>Our work</h3>
          <div className="card-wrapper">
            <Card />
            <Card bodyTxt="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
            <Card bodyTxt="Lorem ipsum dolor sit amet." />
            <Card bodyTxt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, laudantium. Aspernatur ipsam quibusdam doloremque ea." />
            <Card bodyTxt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat doloribus quam nisi" />
            <Card bodyTxt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus labore, quae natus distinctio cupiditate dicta facere mollitia sequi." />
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
