
import { motion } from 'framer-motion';

const Showcase = () => {
    return (
        <section className="features" style={{ background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
            <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', textAlign: 'center', marginBottom: '4rem' }}>
                <h2 className="text-5xl font-bold text-white mb-6" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
                    Powerful <span style={{ color: 'var(--brand-light)' }}>Dashboard</span> Controls
                </h2>
                <p className="text-muted" style={{ maxWidth: '42rem', margin: '0 auto', fontSize: '1.125rem' }}>
                    Monitor your orchestration infrastructure with real-time analytics, debug logs, and visual workflow builders.
                </p>
            </div>

            <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
                {/* Main Dashboard Mockup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{
                        borderRadius: '0.75rem',
                        border: '1px solid rgba(255,255,255,0.1)',
                        background: '#0A0A0A',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        overflow: 'hidden',
                        position: 'relative',
                        zIndex: 10
                    }}
                >
                    <div style={{ height: '3rem', background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', padding: '0 1rem', gap: '1rem' }}>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.2)' }} />
                            <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', background: 'rgba(234, 179, 8, 0.2)' }} />
                            <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', background: 'rgba(34, 197, 94, 0.2)' }} />
                        </div>
                        <div style={{ height: '1.5rem', width: '16rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.375rem' }} />
                    </div>
                    <div style={{ padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem', height: '500px' }}>
                        {/* Sidebar */}
                        <div style={{ gridColumn: 'span 2', borderRight: '1px solid rgba(255,255,255,0.05)', paddingRight: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }} className="sidebar-hidden-mobile">
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} style={{ height: '2rem', width: '100%', background: 'rgba(255,255,255,0.05)', borderRadius: '0.25rem', opacity: 0.5 }} />
                            ))}
                        </div>
                        {/* Main Content */}
                        <div style={{ gridColumn: 'span 12', display: 'flex', flexDirection: 'column', gap: '1.5rem' }} className="main-content-response">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                <div style={{ height: '2.5rem', width: '12rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.25rem' }} />
                                <div style={{ height: '2.5rem', width: '6rem', background: 'rgba(99, 102, 241, 0.2)', borderRadius: '0.25rem' }} />
                            </div>
                            {/* Chart Placeholder */}
                            <div style={{ height: '16rem', width: '100%', background: 'linear-gradient(to top, rgba(99, 102, 241, 0.1), transparent)', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '8rem', background: 'linear-gradient(to top, rgba(99, 102, 241, 0.2), transparent)', transform: 'skewY(3deg)' }} />
                            </div>
                            {/* Activity List */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {[1, 2, 3].map(i => (
                                    <div key={i} style={{ height: '3rem', width: '100%', background: 'rgba(255,255,255,0.05)', borderRadius: '0.25rem', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', padding: '0 1rem', justifyContent: 'space-between' }}>
                                        <div style={{ width: '33%', height: '1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '0.25rem' }} />
                                        <div style={{ width: '16%', height: '1rem', background: 'rgba(34, 197, 94, 0.2)', borderRadius: '0.25rem' }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Floating UI Elements (Parallax) */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{ position: 'absolute', top: '-3rem', right: '-3rem', width: '16rem', height: '10rem', background: '#111', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', padding: '1rem', zIndex: 0 }}
                    className="floating-ui-hidden"
                >
                    <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div style={{ height: '1rem', width: '5rem', background: 'rgba(99, 102, 241, 0.2)', borderRadius: '0.25rem' }} />
                        <div style={{ height: '0.5rem', width: '100%', background: 'rgba(255,255,255,0.1)', borderRadius: '0.25rem' }} />
                        <div style={{ height: '0.5rem', width: '75%', background: 'rgba(255,255,255,0.1)', borderRadius: '0.25rem' }} />
                        <div style={{ height: '2rem', width: '100%', background: 'rgba(255,255,255,0.05)', borderRadius: '0.25rem', marginTop: 'auto' }} />
                    </div>
                </motion.div>

                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    style={{ position: 'absolute', bottom: '-3rem', left: '-3rem', width: '14rem', height: '14rem', background: '#111', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', padding: '1rem', zIndex: 20 }}
                    className="floating-ui-hidden"
                >
                    <div style={{ height: '2rem', width: '100%', background: 'rgba(255,255,255,0.05)', borderRadius: '0.25rem', marginBottom: '1rem' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} style={{ display: 'flex', gap: '0.5rem' }}>
                                <div style={{ width: '2rem', height: '2rem', borderRadius: '0.25rem', background: 'rgba(255,255,255,0.05)', flexShrink: 0 }} />
                                <div style={{ width: '100%', height: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.25rem' }} />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <style>{`
                @media (min-width: 768px) {
                    .main-content-response { grid-column: span 10 !important; }
                    .sidebar-hidden-mobile { display: flex !important; }
                }
                @media (max-width: 768px) {
                    .sidebar-hidden-mobile { display: none !important; }
                }
                @media (max-width: 1024px) {
                    .floating-ui-hidden { display: none !important; }
                }
            `}</style>
        </section>
    );
};

export default Showcase;
