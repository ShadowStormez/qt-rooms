import Image from 'next/image';
import { BlogSideBarStyle } from '../_css/BlogSideBar.Style';
import Link from 'next/link';

import RecentsPic from '../_images/blog-8.jpeg.svg';

const BlogSideBar = () => {
    return (
        <BlogSideBarStyle>
            <aside className='Blog-SideBar'>
                <div className='Search-Input-Container'>
                    <input className='Search-Input' type='text' placeholder='Enter The Keywords' />
                    <div className='Search-Button'>Search</div>
                </div>

                <div className='Recent-Posts'>
                    <h3>Recent Posts</h3>
                    <div className='Recent-Post'>
                        <Image src={RecentsPic} alt='Recent Pic' width={70} />
                        <div className='RecentPost-Description'>
                            <h4>4 Tips To Optimize Your Funnels For Conversion</h4>
                            <small>August 17, 2023</small>
                        </div>
                    </div>
                </div>
                <div className='Categories'>
                    <h3>Categories</h3>
                    <ul>
                        <li>
                            <span>Financial</span>
                        </li>
                        <li>
                            <span>Growth</span>
                        </li>
                        <li>
                            <span>Marketing</span>
                        </li>
                        <li>
                            <span>Retail</span>
                        </li>
                        <li>
                            <span>Tech</span>
                        </li>
                    </ul>
                </div>
                <div className='Tag-Clouds'>
                    <h3>Tag Clouds</h3>
                    <div className='Tag-Links-Container'>
                        <Link className='Clouds-Link' href=''>
                            <span>Ai</span>
                        </Link>
                        <Link className='Clouds-Link' href=''>
                            <span>Automotive</span>
                        </Link>
                        <Link className='Clouds-Link' href=''>
                            <span>Growth</span>
                        </Link>
                        <Link className='Clouds-Link' href=''>
                            <span>Software</span>
                        </Link>
                        <Link className='Clouds-Link' href=''>
                            <span>Technology</span>
                        </Link>
                    </div>
                </div>
            </aside>
        </BlogSideBarStyle>
    );
};

export default BlogSideBar;
