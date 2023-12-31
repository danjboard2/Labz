import Logo from "../components/Logo"
import { Drawer, ButtonToolbar, Button, Placeholder } from 'rsuite';
import Link from 'next/link';
import {use, useEffect, useState} from 'react';
import 'rsuite/dist/rsuite.min.css';
import '../app/nav-overrides.css';


const Navigation = ({ page }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  const getLinkClassName = (linkPage) => {
      return `navlink px-[30px] py-[20px] text-[#fff] text-xl select-none ${page === linkPage ? 'active' : ''} current:bg-primary`;
  };

  return (
    <nav className="navigation top-0 left-0 w-full flex p-[20px] md:p-[50px] justify-between z-[1000] fixed">
    <Logo /> 
    <ButtonToolbar>
      <Button style={{ background: 'transparent', overflow: 'visible', zIndex: 10000}} onClick={toggleOpen}>
          <div className="nav-button w-[52.38px] h-[54.76px] border-[transparent] border-[1px] relative rounded-[2px] cursor-pointer">
            <div className="nav-button-outer absolute top-0 left-0 right-0 bottom-0 border-[#FF3D00] border-[0.5px] nav-pulse rounded-md"></div>
            <div className="nav-button-outer absolute top-0 left-0 right-0 bottom-0 border-[#FF3D00] border-[0.5px] nav-pulse2 rounded-md"></div>
            <div className="nav-button-outer absolute top-0 left-0 right-0 bottom-0 border-[#FF3D00] border-[0.5px] nav-pulse3 rounded-md"></div>
            <div className="nav-square border-[#FF3D00] border-[2px] w-[13.95px] h-[14.48px] absolute top-[9.52px] left-[8.33px] rounded-[2px]"></div>
            <div className="nav-square border-[#FF3D00] border-[2px] w-[13.95px] h-[14.48px] absolute top-[9.52px] right-[8.33px] rounded-[2px]"></div>
            <div className="nav-square border-[#FF3D00] border-[2px] w-[13.95px] h-[14.48px] absolute bottom-[9.52px] left-[8.33px] rounded-[2px]"></div>
            <div className="nav-square"></div>
          </div>
    </Button>
    </ButtonToolbar>
    <Drawer backdropClassName={'backdrop'} backdrop={false} size={'xs'} style={{zIndex: '20'}} open={open} onClose={() => setOpen(false)}>
      <div className="absolute top-0 bottom-0 left-0 right-0 backdrop-blur-md"></div>
      <Drawer.Body>
                <Link className={getLinkClassName('about')} href="/about" title="About us">
                    About us
                </Link>
                <Link className={getLinkClassName('services')} href="/services" title="Services & Projects">
                    Services & projects
                </Link>
                <Link className={getLinkClassName('contact')} href="/contact" title="Contact us">
                    Contact us
                </Link>
            </Drawer.Body>
    </Drawer>
    </nav>
  );
}
export default Navigation;