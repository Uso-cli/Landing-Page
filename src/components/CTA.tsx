
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className="features" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background */}
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(99,102,241,0.2)' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.8)' }} />
                <div style={{ position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)', width: '1000px', height: '1000px', background: 'rgba(99,102,241,0.2)', borderRadius: '50%', filter: 'blur(150px)', opacity: 0.3, pointerEvents: 'none' }} />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '56rem' }}>
                <h2 className="text-5xl font-bold text-white mb-8" style={{ fontSize: '3.75rem', lineHeight: 1.1, letterSpacing: '-0.025em' }}>
                    Build the Future of <br />
                    <span className="text-brand-gradient">Solana Automation</span>
                </h2>
                <p className="text-muted mb-10" style={{ fontSize: '1.25rem' }}>
                    Join 1,000+ developers scaling their infrastructure with <span style={{ color: 'var(--brand-light)', fontFamily: 'monospace', fontStyle: 'italic', fontWeight: 'bold' }}>USO</span>.
                    Start for free, scale as you grow.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', justifyContent: 'center' }} className="cta-buttons">
                    <style>{`
                       @media (min-width: 640px) {
                           .cta-buttons { flex-direction: row !important; }
                       }
                   `}</style>


                    <Link to="/docs" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                        Start Building Now
                    </Link>
                    <button className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                        Contact Sales
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
