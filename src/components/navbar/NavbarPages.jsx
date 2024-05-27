import {React,useEffect,useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import './Navbar.css';

const NavbarPages = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrl , setScrl] = useState("");

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setScrl("active")
    } else {
      setScrl("")
    }
  }

  useEffect(()=>{
    changeBackground();
    window.addEventListener("scroll",changeBackground);
  },[])

  return (
    <nav className={`app__navbar ${scrl}`} >
      <div className="app__navbar-logo">
        <Link to={"../#Destination"}><img src={"imgs/logo.png"} alt="app__logo" /></Link>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><Link to="../#Destination">Destination</Link></li>
        <li className="p__opensans"><Link to={"../about"}>About</Link></li>
        <li className="p__opensans"><Link to="../stay">Stay</Link></li>
        <li className="p__opensans"><Link to="../experiences">Experiences</Link></li>
        <li className="p__opensans"><Link to="../dining">Dining</Link></li>
        <li className="p__opensans"><Link to="../#contact">Contact</Link></li>
        <li>
                <a
                  className="btn green"
                  href="https://www.secure-booking-engine.com/accounts/vNH542fVOcdncZm7B5k3gw/properties/gjHs20I36NsBRyuomcgHgA/booking-engine/web/source/4wsctBw6Oq6j-g9XuxeRzQ/"
                  target="_blank"
                  rel="noreferrer "
                >
                  Book Now
                </a>
              </li>
      </ul>
    
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu className='hambuger' fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <ImCross fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><Link to="../#Destination" onClick={() => setToggleMenu(false)}>Home</Link></li>
              <li><Link to="../about" onClick={() => setToggleMenu(false)}>About</Link></li>
              <li><Link to="../stay" onClick={() => setToggleMenu(false)}>Stay</Link></li>
              <li><Link to="../experiences" onClick={() => setToggleMenu(false)}>Experiences</Link></li>
              <li><Link to="../dining" onClick={() => setToggleMenu(false)}>Dining</Link></li>
              <li><Link to="../#contact" onClick={() => setToggleMenu(false)}>Contact</Link></li>
              <li>
                <a
                  className="btn green"
                  href="https://www.secure-booking-engine.com/accounts/vNH542fVOcdncZm7B5k3gw/properties/gjHs20I36NsBRyuomcgHgA/booking-engine/web/source/4wsctBw6Oq6j-g9XuxeRzQ/"
                  target="_blank"
                  rel="noreferrer "
                >
                  Book Now
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarPages;