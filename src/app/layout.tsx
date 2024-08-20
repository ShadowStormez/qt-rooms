import { Header } from '@/commons/components';
import { Footer } from '@/commons/components';
import './globals.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang='en'>
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
};

export default Layout;
