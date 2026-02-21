import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Features', href: '#features' },
        { name: 'Install', href: 'https://www.npmjs.com/package/@xaidenlabs/uso' },
        { name: 'Community', href: 'https://github.com/xaidenlabs/uso' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <div className="nav-logo">
                    <img src="/uso-logo.png" alt="USO Logo" style={{ height: '96px', width: 'auto' }} />
                </div>

                {/* Desktop Menu */}
                <div className="nav-links desktop-only">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="nav-link"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-link"
                    >
                        GitHub
                    </a>
                </div>



                <div className="desktop-only items-center gap-4" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <Link to="/docs" className="btn btn-primary">
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="mobile-only">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ color: 'white' }}>
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mobile-menu"
                        style={{
                            position: 'absolute',
                            top: 'var(--nav-height)',
                            left: 0,
                            right: 0,
                            background: 'rgba(10, 10, 10, 0.95)',
                            borderBottom: '1px solid var(--border-color)',
                            padding: '1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem'
                        }}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                style={{ color: 'white', fontSize: '1.1rem', fontWeight: 500 }}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                            Launch Dashboard <ArrowRight size={16} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
