import { HeroStyle } from '../_css/hero.Style';
import Link from 'next/link';
import Image from 'next/image';
import arrowRight from '../_images/arrow-right.svg';
import Wave from '../_images/Landing-Background-3.svg';

const Hero = () => {
    return (
        <HeroStyle Wave={Wave.src}>
            <div className='heading'>
                <h1>Blog Post</h1>
            </div>
            <ul className='hero-ul'>
                <li>
                    <Link className='hero-links' href=''>
                        <span>Resources</span>
                    </Link>
                    <Image src={arrowRight} alt='arrowRight icon' width={14} />
                </li>
                <li>
                    <Link className='hero-links' href=''>
                        <span>Learn</span>
                    </Link>
                    <Image src={arrowRight} alt='arrowRight icon' width={14} />
                </li>
                <li>
                    <Link className='hero-links' href=''>
                        <span>Blog</span>
                    </Link>
                    <Image src={arrowRight} alt='arrowRight icon' width={14} />
                </li>
                <li>
                    <Link className='hero-links' href=''>
                        <span>Blog Post</span>
                    </Link>
                </li>
            </ul>
        </HeroStyle>
    );
};

export default Hero;
