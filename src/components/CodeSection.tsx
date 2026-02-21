
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const CodeSection = () => {
    return (
        <section className="features" style={{ background: '#050505', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                {/* Left Side: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="hero-badge" style={{ display: 'inline-flex', marginBottom: '1.5rem', background: 'rgba(99,102,241,0.1)', borderColor: 'rgba(99,102,241,0.2)', color: 'var(--brand-light)' }}>
                        Flexibility First
                    </div>
                    <h2 className="text-5xl font-bold text-white mb-6" style={{ fontSize: '3rem', lineHeight: 1.2 }}>
                        Granular Control <br /> <span style={{ color: 'var(--brand-light)' }}>When You Need It</span>
                    </h2>
                    <p className="text-muted text-lg mb-8 leading-relaxed" style={{ fontSize: '1.125rem', color: 'var(--text-muted)' }}>
                        Sometimes you just need one tool, not the whole toolbox. <span style={{ color: 'var(--brand-light)', fontFamily: 'monospace', fontWeight: 'bold' }}>USO</span> gives you the flexibility to install components individually without messing up your existing setup.
                    </p>

                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {['Install compatible versions', 'Avoid dependency conflicts', 'Clean uninstallation', 'Path management handled automagically'].map((item, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#e5e5e5' }}>
                                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(34,197,94,0.2)', border: '1px solid rgba(34,197,94,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Check size={12} color="#4ade80" />
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Right Side: Code Window */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{ position: 'relative' }}
                >
                    <div style={{ position: 'absolute', inset: -4, background: 'linear-gradient(to right, #4f46e5, #9333ea)', borderRadius: '12px', opacity: 0.2, filter: 'blur(8px)', zIndex: 0 }} />
                    <div className="code-preview" style={{ position: 'relative', zIndex: 1, background: '#0f0f0f' }}>
                        <div className="terminal-header" style={{ background: 'rgba(255,255,255,0.03)' }}>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <div className="terminal-dot dot-red" />
                                <div className="terminal-dot dot-yellow" />
                                <div className="terminal-dot dot-green" />
                            </div>
                            <span style={{ marginLeft: 'auto', marginRight: 'auto', fontSize: '12px', color: '#666' }}>terminal</span>
                        </div>
                        <div className="terminal-body" style={{ lineHeight: 1.8, fontFamily: 'monospace' }}>
                            <div style={{ color: '#666' }}># Need just Rust?</div>
                            <div style={{ color: 'white' }}><span style={{ color: '#eab308' }}>uso</span> install rust</div>
                            <br />
                            <div style={{ color: '#666' }}># Need just Solana CLI?</div>
                            <div style={{ color: 'white' }}><span style={{ color: '#eab308' }}>uso</span> install solana</div>
                            <br />
                            <div style={{ color: '#666' }}># Need just Anchor?</div>
                            <div style={{ color: 'white' }}><span style={{ color: '#eab308' }}>uso</span> install anchor</div>
                            <br />
                            <div style={{ color: '#4ade80' }}>{`✔ Installed successfully`}</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CodeSection;
