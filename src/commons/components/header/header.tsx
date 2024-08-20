import { HeaderStyle } from './header.Style';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Logo from '../images/qroom-white 1.png';
import arrowDown from '../images/arrow-down.svg';
import Link from 'next/link';

const Header = () => {
    return (
        <HeaderStyle>
            <Image src={Logo} alt='qtroom icon' width={75} />
            <ul className='header-ul'>
                <li>
                    <Link className='navbar-links' href=''>
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link className='navbar-links' href=''>
                        <span>Resources</span>
                    </Link>
                    <Image src={arrowDown} alt='arrowDown icon' width={16} />
                </li>
                <li>
                    <Link className='navbar-links' href=''>
                        <span>Solutions</span>
                    </Link>
                    <Image src={arrowDown} alt='arrowDown icon' width={16} />
                </li>
                <li>
                    <Link className='navbar-links' href=''>
                        <span>Company</span>
                    </Link>
                    <Image src={arrowDown} alt='arrowDown icon' width={16} />
                </li>
            </ul>
            <div className='header-login'>
                <Button className='login'>
                    <span>Login</span>
                </Button>
                <Button className='get-started'>
                    <span>Get Started</span>
                </Button>
            </div>
        </HeaderStyle>
    );
};

export default Header;
