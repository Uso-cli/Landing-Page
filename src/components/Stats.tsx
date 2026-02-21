
import { motion } from 'framer-motion';

const stats = [
    { label: 'Deploys Automated', value: '10k+' },
    { label: 'Hours Saved', value: '50,000+' },
    { label: 'Happy Developers', value: '1,200+' },
    { label: 'Setup Time', value: '< 2 mins' },
];

const Stats = () => {
    return (
        <section className="stats-section" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background Glow */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '300px', background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.15), transparent 70%)', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.2, pointerEvents: 'none' }} />

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="stat-item"
                        >
                            <h3 className="stat-value" style={{ transition: 'color 0.3s ease' }}>
                                {stat.value}
                            </h3>
                            <p className="stat-label" style={{ transition: 'color 0.3s ease' }}>
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style>{`
                .stat-item:hover .stat-value {
                    color: var(--brand-light) !important;
                }
                .stat-item:hover .stat-label {
                    color: white !important;
                }
            `}</style>
        </section>
    );
};

export default Stats;
