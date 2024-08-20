//Components
import Hero from './_components/hero';
import BlogSideBar from './_components/BlogSideBar';
import PostsContainer from './_components/PostsContainer';
//Assets
import { PageStyle } from './_css/Page.Style';

const Blog = () => {
    return (
        <PageStyle>
            <div className='Purple-Gradient'></div>
            <Hero />
            <div className='Blog-Body'>
                <PostsContainer />
                <BlogSideBar />
                <div className='Blue-Gradient-one'></div>
                <div className='Blue-Gradient-two'></div>
            </div>
        </PageStyle>
    );
};

export default Blog;
