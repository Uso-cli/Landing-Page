
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CodeSection from '../components/CodeSection';
import Stats from '../components/Stats';
// import Showcase from '../components/Showcase';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Hero />
                <Stats />
                <Features />
                <CodeSection />
                {/* <Showcase /> */}
                <CTA />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
