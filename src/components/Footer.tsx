const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#050505',
            color: '#ffffff',
            padding: '4rem 2rem 2rem',
            position: 'relative',
            overflow: 'hidden',
            borderTop: '1px solid rgba(255,255,255,0.05)'
        }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '6rem',
                    flexWrap: 'wrap',
                    gap: '2rem'
                }}>
                    {/* Top Left: Contact */}
                    <div>
                        <p style={{
                            fontSize: '0.875rem',
                            color: 'var(--text-muted, #888)',
                            marginBottom: '0.5rem',
                            fontFamily: 'inherit'
                        }}>Contact us at:</p>
                        <a href="https://x.com/uso_cli" target="_blank" rel="noopener noreferrer" style={{
                            fontSize: '1.25rem',
                            color: 'white',
                            textDecoration: 'none',
                            borderBottom: '1px solid rgba(255,255,255,0.2)',
                            paddingBottom: '2px',
                            transition: 'border-color 0.2s'
                        }} className="contact-link">
                            x.com/uso_cli
                        </a>
                    </div>

                    {/* Top Right: Navigation */}
                    <nav>
                        <ul style={{
                            display: 'flex',
                            gap: '2rem',
                            listStyle: 'none',
                            padding: 0,
                            margin: 0
                        }}>
                            {['Home', 'Features', 'Install'].map(item => (
                                <li key={item}>
                                    <a href={item === 'Home' ? '#' : `#${item.toLowerCase()}`} style={{
                                        color: 'white',
                                        textDecoration: 'none',
                                        fontSize: '0.875rem',
                                        fontWeight: 500,
                                        opacity: 0.7,
                                        transition: 'opacity 0.2s'
                                    }} className="nav-link">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Big Text: Universal Solana Orchestrator */}
                <div style={{
                    textAlign: 'center',
                    marginBottom: '2rem',
                    userSelect: 'none'
                }}>
                    <h1 style={{
                        fontSize: 'clamp(2rem, 8vw, 6rem)',
                        fontWeight: 900,
                        margin: 0,
                        lineHeight: 0.9,
                        letterSpacing: '-0.02em',
                        background: 'linear-gradient(180deg, #FFFFFF 0%, #666666 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textTransform: 'uppercase',
                        fontFamily: 'var(--font-heading, sans-serif)',
                        maxWidth: '100%',
                        wordWrap: 'break-word'
                    }}>
                        Universal Solana Orchestrator
                    </h1>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '2rem',
                    fontSize: '0.75rem',
                    color: '#666',
                    flexWrap: 'wrap',
                    gap: '1rem'
                }}>
                    <p>© {new Date().getFullYear()} @uso</p>
                    <p>Universal Solana Orchestrator</p>
                </div>
            </div>
            <style>{`
                .contact-link:hover {
                    border-bottom-color: white !important;
                }
                .nav-link:hover {
                    opacity: 1 !important;
                }
            `}</style>
        </footer>
    );
};

export default Footer;
