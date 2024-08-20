import Image from 'next/image';
import Pic from '../_images/blog-8.jpeg.png';
import ProfilePic from '../_images/9b595d9eb57d513401a61a406c147bb9.png';
import Eye from '../_images/eye.svg';
import Link from 'next/link';
//Assets
import { PostsContainerStyle } from '../_css/PostsContainer.Style';
import { Paginator } from '@/commons/components';

const PostsContainer = () => {
    return (
        <PostsContainerStyle>
            <div className='Blog-Post'>
                <Image src={Pic} alt='Blog Pic' width={250} />
                <div className='Blog-Description'>
                    <div className='Blog-Topic'>
                        <Link className='Category-Link' href=''>
                            <span>Financial</span>
                        </Link>
                        <h3>How To Build The Ultimate Tech Stack For Growth</h3>
                    </div>
                    <div className='Blog-Author'>
                        <Image src={ProfilePic} alt='Profile Pic' width={45} />
                        <div className='Author-Info'>
                            <h4>John Carter</h4>
                            <div className='Blog-Info'>
                                <div className='Blog-Date'>
                                    <small>August 17, 2023</small>
                                    <small className='HasBefore'>Post a Comment</small>
                                </div>
                                <div className='Blog-Views'>
                                    <span>15</span>
                                    <Image src={Eye} alt='Views Pic' width={10} />{' '}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Blog-Post'>
                <Image src={Pic} alt='Blog Pic' width={250} />
                <div className='Blog-Description'>
                    <div className='Blog-Topic'>
                        <Link className='Category-Link' href=''>
                            <span>Financial</span>
                        </Link>
                        <h3>How To Build The Ultimate Tech Stack For Growth</h3>
                    </div>
                    <div className='Blog-Author'>
                        <Image src={ProfilePic} alt='Profile Pic' width={45} />
                        <div className='Author-Info'>
                            <h4>John Carter</h4>
                            <div className='Blog-Info'>
                                <div className='Blog-Date'>
                                    <small>August 17, 2023</small>
                                    <small className='HasBefore'>Post a Comment</small>
                                </div>
                                <div className='Blog-Views'>
                                    <span>15</span>
                                    <Image src={Eye} alt='Views Pic' width={10} />{' '}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Blog-Post'>
                <Image src={Pic} alt='Blog Pic' width={250} />
                <div className='Blog-Description'>
                    <div className='Blog-Topic'>
                        <Link className='Category-Link' href=''>
                            <span>Financial</span>
                        </Link>
                        <h3>How To Build The Ultimate Tech Stack For Growth</h3>
                    </div>
                    <div className='Blog-Author'>
                        <Image src={ProfilePic} alt='Profile Pic' width={45} />
                        <div className='Author-Info'>
                            <h4>John Carter</h4>
                            <div className='Blog-Info'>
                                <div className='Blog-Date'>
                                    <small>August 17, 2023</small>
                                    <small className='HasBefore'>Post a Comment</small>
                                </div>
                                <div className='Blog-Views'>
                                    <span>15</span>
                                    <Image src={Eye} alt='Views Pic' width={10} />{' '}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Blog-Post'>
                <Image src={Pic} alt='Blog Pic' width={250} />
                <div className='Blog-Description'>
                    <div className='Blog-Topic'>
                        <Link className='Category-Link' href=''>
                            <span>Financial</span>
                        </Link>
                        <h3>How To Build The Ultimate Tech Stack For Growth</h3>
                    </div>
                    <div className='Blog-Author'>
                        <Image src={ProfilePic} alt='Profile Pic' width={45} />
                        <div className='Author-Info'>
                            <h4>John Carter</h4>
                            <div className='Blog-Info'>
                                <div className='Blog-Date'>
                                    <small>August 17, 2023</small>
                                    <small className='HasBefore'>Post a Comment</small>
                                </div>
                                <div className='Blog-Views'>
                                    <span>15</span>
                                    <Image src={Eye} alt='Views Pic' width={10} />{' '}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Blog-Post'>
                <Image src={Pic} alt='Blog Pic' width={250} />
                <div className='Blog-Description'>
                    <div className='Blog-Topic'>
                        <Link className='Category-Link' href=''>
                            <span>Financial</span>
                        </Link>
                        <h3>How To Build The Ultimate Tech Stack For Growth</h3>
                    </div>
                    <div className='Blog-Author'>
                        <Image src={ProfilePic} alt='Profile Pic' width={45} />
                        <div className='Author-Info'>
                            <h4>John Carter</h4>
                            <div className='Blog-Info'>
                                <div className='Blog-Date'>
                                    <small>August 17, 2023</small>
                                    <small className='HasBefore'>Post a Comment</small>
                                </div>
                                <div className='Blog-Views'>
                                    <span>15</span>
                                    <Image src={Eye} alt='Views Pic' width={10} />{' '}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Blog-Post'>
                <Image src={Pic} alt='Blog Pic' width={250} />
                <div className='Blog-Description'>
                    <div className='Blog-Topic'>
                        <Link className='Category-Link' href=''>
                            <span>Financial</span>
                        </Link>
                        <h3>How To Build The Ultimate Tech Stack For Growth</h3>
                    </div>
                    <div className='Blog-Author'>
                        <Image src={ProfilePic} alt='Profile Pic' width={45} />
                        <div className='Author-Info'>
                            <h4>John Carter</h4>
                            <div className='Blog-Info'>
                                <div className='Blog-Date'>
                                    <small>August 17, 2023</small>
                                    <small className='HasBefore'>Post a Comment</small>
                                </div>
                                <div className='Blog-Views'>
                                    <span>15</span>
                                    <Image src={Eye} alt='Views Pic' width={10} />{' '}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Paginator />
        </PostsContainerStyle>
    );
};
export default PostsContainer;
