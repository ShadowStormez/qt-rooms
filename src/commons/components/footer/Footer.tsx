import Link from 'next/link';
import { FooterStyle } from './Footer.Style';
import Image from 'next/image';
import Facebook from './images/FaceBook.svg';
import Twitter from './images/Twitter.svg';
import Skype from './images/Skype.svg';
import Instagram from './images/Instagram.svg';

//mui
import { Button } from '@mui/material';

//Assets
import { ArrowUp } from '@/assets';

const Footer = () => {
    return (
        <FooterStyle>
            <div className='Blue-Gradient-Footer'></div>
            <section className='Footer-FirstSec'>
                <div className='Footer-Subscribe'>
                    <h1>Subscribe to our newsletter</h1>
                    <span>Join the 5000+ people that uses Softnio products</span>
                </div>
                <div className='Footer-Input'>
                    <input className='Search-Input' type='text' placeholder='Your Email Address' />
                    <div className='Subscribe-Button'>Subscribe</div>
                </div>
            </section>
            <section className='Footer-SecondSec'>
                <div className='Social-Media-Links'>
                    <div className='Social-Media-Description'>
                        <p>Streamline your business operations with our powerful suite of solutions. Boost productivity and drive growth with QTRooms.</p>
                    </div>
                    <div className='Social-Media-Icons'>
                        <Link href={''}>
                            <Image src={Facebook} alt='Facebook Icon' />
                        </Link>
                        <Link href={''}>
                            {' '}
                            <Image src={Twitter} alt='Twitter Icon' />
                        </Link>
                        <Link href={''}>
                            {' '}
                            <Image src={Skype} alt='Skype Icon' />
                        </Link>
                        <Link href={''}>
                            {' '}
                            <Image src={Instagram} alt='Instagram Icon' />
                        </Link>
                    </div>
                </div>
                <div className='Footer-Nav'>
                    <div className='Footer-Nav-Sec'>
                        <header>Resources</header>
                        <ul>
                            <li>Blog</li>
                            <li>Video</li>
                            <li>Webinar</li>
                        </ul>
                    </div>
                    <div className='Footer-Nav-Sec'>
                        {' '}
                        <header>Something</header>
                        <ul>
                            <li>Docs</li>
                            <li>Communities</li>
                            <li>Case Studies</li>
                        </ul>
                    </div>
                    <div className='Footer-Nav-Sec'>
                        {' '}
                        <header>Company</header>
                        <ul>
                            <li>About us</li>
                            <li>Contact us</li>
                            <li>Career</li>
                            <li>What's New!</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='Footer-ThirdSec'>
                <div className='CopyRight'>
                    <p>
                        © 2014 – 2023 <a href=''>Steelthemes.</a>All Rights Reserved.
                    </p>
                </div>
                <div className='Terms'>
                    <ul>
                        <li>AllRights</li>
                        <li>Terms & Conditions</li>
                        <li>PrivacyPolicy</li>
                    </ul>
                </div>
            </section>
            <div className='Blue-Gradient-Footer-bottom'></div>
            <div className='Arrow-Up'>
                <Button>
                    <Image src={ArrowUp} width={35} alt='ArrowUp Icon'></Image>
                </Button>
            </div>
        </FooterStyle>
    );
};

export default Footer;
