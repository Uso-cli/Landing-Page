import { motion } from 'framer-motion';
import { Workflow, Layers, Activity, Cpu, ShieldCheck, Monitor, Play, Wallet } from 'lucide-react';

const features = [
    {
        icon: <Workflow size={24} />,
        iconColor: '#818cf8',
        iconBg: 'rgba(129,140,248,0.12)',
        title: 'One-Click Setup',
        desc: 'Install the entire Solana stack — Rust, Solana CLI, Anchor — with a single command. USO handles PATH updates, privilege escalation, and error recovery automatically.',
        badge: 'uso init',
    },
    {
        icon: <Monitor size={24} />,
        iconColor: '#22d3ee',
        iconBg: 'rgba(34,211,238,0.12)',
        title: 'Stealth WSL Mode',
        desc: 'On Windows, deploy a hidden WSL2 Linux engine that eliminates Smart App Control blocks, symlink errors, and "Access Denied" failures entirely. You stay in PowerShell — the engine is invisible.',
        badge: 'uso init --wsl',
    },
    {
        icon: <Play size={24} />,
        iconColor: '#4ade80',
        iconBg: 'rgba(74,222,128,0.12)',
        title: 'Dev Mode',
        desc: 'One command starts your local validator, runs your test suite, and watches for file changes. Tests re-run automatically on every save with a 2-second debounce.',
        badge: 'uso dev',
    },
    {
        icon: <Wallet size={24} />,
        iconColor: '#eab308',
        iconBg: 'rgba(234,179,8,0.12)',
        title: 'Wallet Management',
        desc: 'Check your wallet address and SOL balance, and airdrop devnet SOL directly from USO. Works transparently through the WSL engine when Stealth Mode is active.',
        badge: 'uso address • uso balance',
    },
    {
        icon: <Layers size={24} />,
        iconColor: '#c084fc',
        iconBg: 'rgba(192,132,252,0.12)',
        title: 'Granular Control',
        desc: 'Already have Rust installed? Use granular install commands to set up only the components you need. Mix and match your toolchain however you like.',
        badge: 'uso install <component>',
    },
    {
        icon: <Activity size={24} />,
        iconColor: '#34d399',
        iconBg: 'rgba(52,211,153,0.12)',
        title: 'System Diagnostics',
        desc: 'Run a full environment diagnostic to detect missing tools, PATH issues, and Windows-specific blockers. Know exactly what is wrong before trying to fix it.',
        badge: 'uso doctor',
    },
    {
        icon: <Cpu size={24} />,
        iconColor: '#facc15',
        iconBg: 'rgba(250,204,21,0.12)',
        title: 'Cross-Platform',
        desc: 'Native support for Windows, macOS, and Linux. OS-specific logic is handled internally — the same commands work everywhere.',
        badge: null,
    },
    {
        icon: <ShieldCheck size={24} />,
        iconColor: '#60a5fa',
        iconBg: 'rgba(96,165,250,0.12)',
        title: 'Auto-Elevation',
        desc: 'USO automatically handles admin privilege escalation, Windows Defender exclusions, Developer Mode activation, and Mark-of-the-Web removal when needed.',
        badge: 'uso unblock',
    },
];

const Features = () => {
    return (
        <section id="features" className="features" style={{ position: 'relative' }}>
            {/* Background glow */}
            <div style={{
                position: 'absolute', top: 0, right: 0,
                width: '600px', height: '600px',
                background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(120px)', opacity: 0.2, pointerEvents: 'none'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            padding: '0.4rem 1rem', borderRadius: 999,
                            background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)',
                            color: '#818cf8', fontSize: '0.8rem', fontWeight: 600,
                            letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1.25rem'
                        }}>
                            Features
                        </div>
                        <h2 className="text-gradient" style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem' }}>
                            Built for Speed
                        </h2>
                        <p className="text-muted" style={{ fontSize: '1.125rem', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto' }}>
                            Stop wasting hours on environment setup. USO gets you from zero to a working Solana project in under 2 minutes.
                        </p>
                    </motion.div>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.07, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="card feature-card"
                        >
                            <div className="feature-icon" style={{ background: feature.iconBg, color: feature.iconColor }}>
                                {feature.icon}
                            </div>

                            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem', color: 'white' }}>
                                {feature.title}
                            </h3>

                            <p className="text-muted" style={{ lineHeight: 1.65, fontSize: '0.925rem', flex: 1 }}>
                                {feature.desc}
                            </p>

                            {feature.badge && (
                                <div style={{ marginTop: '1.25rem' }}>
                                    <code style={{
                                        background: 'rgba(0,0,0,0.4)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        padding: '0.3rem 0.65rem',
                                        borderRadius: 6,
                                        fontSize: '0.78rem',
                                        fontFamily: 'Fira Code, monospace',
                                        color: feature.iconColor,
                                    }}>
                                        {feature.badge}
                                    </code>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                .feature-card {
                    display: flex;
                    flex-direction: column;
                    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
                }
                .feature-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 20px 60px -20px rgba(99,102,241,0.3);
                }
                .feature-card:hover .feature-icon {
                    transform: scale(1.08);
                    transition: transform 0.2s ease;
                }
                .feature-icon {
                    transition: transform 0.2s ease;
                }
            `}</style>
        </section>
    );
};

export default Features;
