import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const [progress, setProgress] = useState(0);
    const [text, setText] = useState('Initializing Protocol...');

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 500); // Wait a bit before finishing
                    return 100;
                }

                // Random increments for "realistic" feel
                const increment = Math.random() * 15;
                const newProgress = Math.min(prev + increment, 100);

                // Update text based on progress
                if (newProgress > 30 && newProgress < 60) setText('Connecting to Solana Devnet...');
                if (newProgress >= 60 && newProgress < 90) setText('Verifying Orchestration Nodes...');
                if (newProgress >= 90) setText('System Ready.');

                return newProgress;
            });
        }, 150);

        // Disable scrolling while loading
        document.body.style.overflow = 'hidden';

        return () => {
            clearInterval(timer);
            document.body.style.overflow = 'unset';
        };
    }, [onComplete]);

    return (
        <motion.section
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="preloader"
            style={{
                position: 'fixed',
                inset: 0,
                background: 'var(--bg-dark)',
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontFamily: "'Fira Code', monospace" // Techy font
            }}
        >
            <div style={{ position: 'relative', width: '300px', textAlign: 'center' }}>
                {/* Logo/Icon placeholder */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        margin: '0 auto 2rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <img src="/uso-logo.png" alt="USO Logo" style={{ width: '300px', height: 'auto' }} />
                </motion.div>

                {/* Loading Text */}
                <div style={{
                    fontSize: '0.875rem',
                    color: 'var(--brand-light)',
                    marginBottom: '1rem',
                    height: '24px' // Fixed height to prevent jump
                }}>
                    {text}
                </div>

                {/* Progress Bar Container */}
                <div style={{
                    width: '100%',
                    height: '4px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '2px',
                    overflow: 'hidden',
                    position: 'relative'
                }}>
                    {/* Progress Fill */}
                    <motion.div
                        style={{
                            height: '100%',
                            background: 'var(--brand-primary)',
                            boxShadow: '0 0 10px var(--brand-primary)'
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "linear" }}
                    />
                </div>

                {/* Percentage */}
                <div style={{
                    marginTop: '0.5rem',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    textAlign: 'right'
                }}>
                    {Math.round(progress)}%
                </div>
            </div>

            {/* Background Grid Effect (Optional) */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                backgroundSize: '4rem 4rem',
                opacity: 0.2,
                pointerEvents: 'none',
                zIndex: -1
            }} />
        </motion.section>
    );
};

export default Preloader;
