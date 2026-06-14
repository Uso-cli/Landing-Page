import { useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={containerRef} className="hero">
            {/* Background Elements */}
            <div className="hero-bg-glow" />
            <div className="hero-grid" />

            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Badge */}
                    <div className="hero-badge" style={{ marginBottom: '1rem' }}>
                        <span style={{ display: 'block', width: 8, height: 8, borderRadius: '50%', background: 'var(--brand-light)' }}></span>
                        <span>v1.0.3 • AI Agent Available</span>
                    </div>

                    {/* Headline */}
                    <h1 className="hero-title" style={{ marginBottom: '1rem' }}>
                        The Autonomous Agent for <br />
                        <span className="text-brand-gradient">
                            Solana Development
                        </span>
                    </h1>

                    {/* Subtext */}
                    <p className="hero-subtitle" style={{ marginBottom: '2rem' }}>
                        One command to install Rust, Solana, and Anchor. One prompt to automatically build, test, and deploy with an intelligent ReAct FSM loop.
                    </p>

                    {/* Code Snippet Preview (Now above buttons and static) */}
                    <div
                        style={{ marginTop: '0', marginBottom: '2rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}
                        className="code-preview"
                    >
                        <div className="terminal-header">
                            <div className="flex gap-2">
                                <div className="terminal-dot dot-red" />
                                <div className="terminal-dot dot-yellow" />
                                <div className="terminal-dot dot-green" />
                            </div>
                            <div style={{ marginLeft: '1rem', fontSize: '0.8rem', color: '#666' }}>terminal</div>
                        </div>
                        <div className="terminal-body text-left" style={{ fontFamily: 'monospace', padding: '1rem' }}>
                            <div style={{ color: '#666' }}># 1. Install & Setup Environment</div>
                            <div style={{ color: 'white' }}>
                                <span style={{ color: '#a855f7' }}>npm</span> install -g <span style={{ color: '#4ade80' }}>@xaidenlabs/uso</span>
                            </div>
                            <div style={{ color: 'white', marginTop: '0.25rem' }}>
                                <span style={{ color: '#eab308' }}>uso</span> init
                            </div>
                            <div style={{ color: '#4ade80', marginTop: '0.25rem' }}>{`✔ Environment Ready! 🚀`}</div>

                            <div style={{ color: '#666', marginTop: '1.25rem' }}># 2. Hand off your devops to the Agent</div>
                            <div style={{ color: 'white' }}>
                                <span style={{ color: '#eab308' }}>uso</span> agent <span style={{ color: '#4ade80' }}>"Deploy my program to devnet"</span>
                            </div>
                            <div style={{ color: '#666', marginTop: '0.5rem' }}>── 🧠 Planning ──</div>
                            <div style={{ color: '#3b82f6' }}>{`💭 I need to build the program first, then deploy it.`}</div>
                            <div style={{ color: '#666', marginTop: '0.5rem' }}>── ⚡ Executing ──</div>
                            <div style={{ color: '#eab308' }}>{`🔧 anchor_build`}</div>
                            <div style={{ color: '#4ade80' }}>{`  ✅ Build successful. 128 KB compiled.`}</div>
                            <div style={{ color: '#eab308', marginTop: '0.25rem' }}>{`🔧 anchor_deploy`}</div>
                            <div style={{ color: '#4ade80', marginBottom: '0.5rem' }}>{`  ✅ Program ID: 8XF... Deploy successful.`}</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
