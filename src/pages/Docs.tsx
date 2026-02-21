import { useState, useEffect } from 'react';
import {
    Terminal, Copy, Check, Zap, ShieldCheck, AlertTriangle,
    FolderPlus, Monitor, Rocket, Wallet, Play, Trash2,
    Search, BookOpen, List
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Docs.css';

const Docs = () => {
    const [activeSection, setActiveSection] = useState('intro');
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const copyToClipboard = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const sections = [
        { id: 'intro', title: 'Introduction', icon: <BookOpen size={14} /> },
        { id: 'install', title: 'Installation', icon: <Terminal size={14} /> },
        { id: 'windows-prereqs', title: 'Windows Setup', icon: <ShieldCheck size={14} /> },
        { id: 'quickstart', title: 'Quick Start', icon: <Zap size={14} /> },
        { id: 'stealth-wsl', title: 'Stealth WSL Mode', icon: <Monitor size={14} /> },
        { id: 'scaffold', title: 'Create a Project', icon: <FolderPlus size={14} /> },
        { id: 'granular', title: 'Granular Control', icon: <List size={14} /> },
        { id: 'workflow', title: 'Workflow Commands', icon: <Rocket size={14} /> },
        { id: 'wallet', title: 'Wallet & SOL', icon: <Wallet size={14} /> },
        { id: 'devmode', title: 'Developer Mode', icon: <Play size={14} /> },
        { id: 'diagnostics', title: 'Diagnostics', icon: <Search size={14} /> },
        { id: 'uninstall', title: 'Uninstallation', icon: <Trash2 size={14} /> },
    ];

    const scrollToSection = (id: string) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;
            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element &&
                    element.offsetTop <= scrollPosition &&
                    (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveSection(section.id);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // ── Helpers ──────────────────────────────────────────────────────────
    const ic = (text: string) => (
        <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, fontSize: '0.88em', fontFamily: 'Fira Code, monospace', color: '#c084fc' }}>
            {text}
        </code>
    );

    const CopyBtn = ({ text, id }: { text: string, id: string }) => (
        <button onClick={() => copyToClipboard(text, id)} className="copy-btn" title="Copy">
            {copiedId === id ? <Check size={15} /> : <Copy size={15} />}
        </button>
    );

    const CodeBlock = ({ lang = 'bash', children, copyText, copyId }: {
        lang?: string, children: React.ReactNode, copyText?: string, copyId?: string
    }) => (
        <div className="docs-code-block">
            <div className="docs-code-header">
                <div className="window-controls">
                    <div className="window-dot" style={{ background: '#ef4444' }} />
                    <div className="window-dot" style={{ background: '#eab308' }} />
                    <div className="window-dot" style={{ background: '#22c55e' }} />
                </div>
                <div className="docs-code-lang">{lang}</div>
            </div>
            <div className="docs-code-content">
                {children}
                {copyText && copyId && <CopyBtn text={copyText} id={copyId} />}
            </div>
        </div>
    );

    const MiniCard = ({ title, cmd, copyId }: { title: string, cmd: string, copyId: string }) => (
        <div className="docs-card">
            <div className="docs-card-title">{title}</div>
            <div className="docs-card-code">
                <span>{cmd}</span>
                <CopyBtn text={cmd} id={copyId} />
            </div>
        </div>
    );

    const Note = ({ color = '#818cf8', icon, title, children }: {
        color?: string, icon?: React.ReactNode, title: string, children: React.ReactNode
    }) => (
        <div className="docs-callout" style={{ borderColor: color }}>
            <h3 style={{ color }}>{icon} {title}</h3>
            <div style={{ color: 'var(--text-muted)', marginTop: '0.75rem', lineHeight: 1.6 }}>{children}</div>
        </div>
    );

    const Warning = ({ title, children }: { title: string, children: React.ReactNode }) => (
        <div className="docs-warning">
            <AlertTriangle size={22} style={{ flexShrink: 0 }} />
            <div><strong>{title}</strong>{children}</div>
        </div>
    );

    // ─────────────────────────────────────────────────────────────────────

    return (
        <div className="docs-layout">
            <Navbar />

            <div className="docs-container">
                {/* ── Sidebar ─────────────────────────────────────── */}
                <aside className="docs-sidebar">
                    <div className="docs-nav-title">Documentation</div>
                    <nav>
                        {sections.map(s => (
                            <button
                                key={s.id}
                                onClick={() => scrollToSection(s.id)}
                                className={`docs-nav-item ${activeSection === s.id ? 'active' : ''}`}
                                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                            >
                                {s.icon} {s.title}
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* ── Main ───────────────────────────────────────── */}
                <main className="docs-main">

                    {/* ── INTRODUCTION ── */}
                    <section id="intro" className="docs-section">
                        <h1 className="docs-title text-gradient">Universal Solana Orchestrator</h1>
                        <p className="docs-subtitle">
                            Stop fighting configuration files. USO installs the entire Solana development stack
                            — Rust, Solana CLI, Anchor — with one command. Native on macOS and Linux.
                            Stealth WSL engine on Windows. Your environment, your rules.
                        </p>
                        <Note icon={<Zap size={18} />} title="What USO solves">
                            Setting up Solana on Windows typically involves 3 package managers, cryptic PATH edits,
                            Smart App Control blocking your installers, and hours of debugging. USO automates
                            every step — including automatic privilege escalation, defender exclusions, and
                            Windows-specific error recovery.
                        </Note>

                        {/* Quick command reference mini-table */}
                        <div style={{ overflowX: 'auto', marginTop: '1.5rem' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                                <thead>
                                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                                        <th style={{ padding: '0.6rem 1rem', textAlign: 'left', color: 'var(--brand-light)' }}>Command</th>
                                        <th style={{ padding: '0.6rem 1rem', textAlign: 'left', color: 'var(--text-muted)' }}>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ['uso init', 'Install full dev stack (Rust + Solana + Anchor)'],
                                        ['uso init --wsl', 'Stealth WSL engine install (Windows)'],
                                        ['uso create <name>', 'Scaffold new Anchor project'],
                                        ['uso build / test / deploy', 'Workflow commands'],
                                        ['uso address / balance / airdrop', 'Wallet & SOL management'],
                                        ['uso val / uso dev', 'Local validator & full dev mode'],
                                        ['uso doctor / uso verify', 'Diagnostics & verification'],
                                        ['uso uninstall', 'Remove installed toolchains'],
                                    ].map(([cmd, desc]) => (
                                        <tr key={cmd} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                            <td style={{ padding: '0.6rem 1rem', fontFamily: 'Fira Code, monospace', color: '#4ade80', whiteSpace: 'nowrap' }}>{cmd}</td>
                                            <td style={{ padding: '0.6rem 1rem', color: 'var(--text-muted)' }}>{desc}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* ── INSTALLATION ── */}
                    <section id="install" className="docs-section">
                        <h2 className="docs-heading">
                            <span className="docs-icon-box"><Terminal size={22} /></span>
                            Installation
                        </h2>
                        <p className="docs-text">
                            Install USO globally via npm. This makes the {ic('uso')} command available in any terminal window.
                        </p>
                        <CodeBlock lang="bash" copyText="npm install -g @xaidenlabs/uso" copyId="inst-main">
                            <span style={{ color: '#a855f7' }}>npm</span> install -g <span style={{ color: '#4ade80' }}>@xaidenlabs/uso</span>
                        </CodeBlock>

                        <p className="docs-text">Confirm it installed correctly:</p>
                        <CodeBlock lang="bash" copyText="uso --version" copyId="inst-ver">
                            <span style={{ color: '#eab308' }}>uso</span> --version
                        </CodeBlock>

                        <Warning title="Restart your terminal after install.">
                            <br />PATH changes don't take effect until you open a new terminal window. If {ic('uso')} says "command not found", close and reopen your terminal.
                        </Warning>
                    </section>

                    {/* ── WINDOWS PREREQUISITES ── */}
                    <section id="windows-prereqs" className="docs-section">
                        <h2 className="docs-heading">
                            <span className="docs-icon-box" style={{ color: '#0ea5e9', background: 'rgba(14,165,233,0.1)' }}><ShieldCheck size={22} /></span>
                            Windows Setup
                        </h2>
                        <p className="docs-text">
                            Windows has extra layers of security that can interfere with development tooling. Here's what to watch for:
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                            {[
                                {
                                    label: '1. C++ Build Tools',
                                    color: '#3b82f6',
                                    text: <>Rust requires the "Desktop development with C++" workload from <strong>Visual Studio Build Tools</strong>. Run {ic('uso doctor')} to check. Download from <a href="https://visualstudio.microsoft.com/visual-cpp-build-tools/" target="_blank" rel="noreferrer" style={{ color: '#818cf8' }}>visualstudio.microsoft.com</a>.</>
                                },
                                {
                                    label: '2. Smart App Control',
                                    color: '#f97316',
                                    text: <>If installers are blocked, check <strong>Windows Security → Virus & threat protection → Protection history</strong> and allow {ic('rustup-init.exe')} or {ic('solana-install.exe')}. Or use <strong>Stealth WSL mode</strong> to avoid this entirely.</>
                                },
                                {
                                    label: '3. Developer Mode',
                                    color: '#a855f7',
                                    text: <>Some Solana tooling requires symlink support. USO enables this automatically when needed, but you can also enable it manually via <strong>Settings → System → For developers → Developer Mode</strong>.</>
                                },
                                {
                                    label: '4. Run as Admin',
                                    color: '#22c55e',
                                    text: <>For the initial {ic('uso init')}, running from an <strong>Administrator terminal</strong> prevents most permission issues. USO will ask for elevation when needed.</>
                                },
                            ].map(item => (
                                <div key={item.label} className="docs-card" style={{ borderColor: `${item.color}40`, display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <div style={{ minWidth: 6, height: 6, borderRadius: '50%', background: item.color, marginTop: '0.5rem', flexShrink: 0 }} />
                                    <div>
                                        <div style={{ fontWeight: 600, color: item.color, marginBottom: '0.4rem', fontSize: '0.9rem' }}>{item.label}</div>
                                        <div style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>{item.text}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── QUICK START ── */}
                    <section id="quickstart" className="docs-section">
                        <h2 className="docs-heading">
                            <span className="docs-icon-box" style={{ color: '#fbbf24', background: 'rgba(251,191,36,0.1)' }}><Zap size={22} /></span>
                            Quick Start
                        </h2>
                        <p className="docs-text">Get from zero to your first project in under 5 minutes:</p>
                        <CodeBlock lang="bash" copyText="uso doctor && uso init && uso verify && uso create my-project" copyId="qs-all">
                            <div style={{ color: '#666', marginBottom: '0.5rem' }}># Step 1: check what's already installed</div>
                            <div style={{ marginBottom: '0.75rem' }}><span style={{ color: '#eab308' }}>uso</span> doctor</div>

                            <div style={{ color: '#666', marginBottom: '0.5rem' }}># Step 2: install the full stack</div>
                            <div style={{ marginBottom: '0.75rem' }}><span style={{ color: '#eab308' }}>uso</span> init</div>

                            <div style={{ color: '#666', marginBottom: '0.5rem' }}># Step 3: verify everything works</div>
                            <div style={{ marginBottom: '0.75rem' }}><span style={{ color: '#eab308' }}>uso</span> verify</div>

                            <div style={{ color: '#666', marginBottom: '0.5rem' }}># Step 4: create your first project</div>
                            <div style={{ marginBottom: '0.75rem' }}><span style={{ color: '#eab308' }}>uso</span> create my-project</div>

                            <div style={{ color: '#666', marginBottom: '0.5rem' }}># Step 5: start building</div>
                            <div><span style={{ color: '#eab308' }}>uso</span> dev</div>
                        </CodeBlock>

                        <Note icon={<Zap size={16} />} title="Already have some tools?">
                            {ic('uso doctor')} detects everything already on your system. USO skips what's installed
                            and only fills in the gaps. Use {ic('uso install rust')} / {ic('uso install solana')} / {ic('uso install anchor')} to install individual components.
                        </Note>
                    </section>

                    {/* ── STEALTH WSL ── */}
                    <section id="stealth-wsl" className="docs-section">
                        <h2 className="docs-heading">
                            <span className="docs-icon-box" style={{ color: '#22d3ee', background: 'rgba(34,211,238,0.1)' }}><Monitor size={22} /></span>
                            Stealth WSL Mode
                        </h2>
                        <p className="docs-text">
                            The recommended mode for Windows developers. USO installs the entire toolchain inside
                            a hidden WSL2 Linux distro called the <strong>"Uso Engine"</strong>. You keep using PowerShell —
                            the Linux engine is completely invisible.
                        </p>

                        <CodeBlock lang="powershell" copyText="uso init --wsl" copyId="wsl-init">
                            <span style={{ color: '#eab308' }}>uso</span> init <span style={{ color: '#22d3ee' }}>--wsl</span>
                        </CodeBlock>

                        <p className="docs-text" style={{ marginTop: '0.5rem' }}>After setup, every command auto-routes through the engine:</p>

                        <CodeBlock lang="powershell" copyText="uso build" copyId="wsl-use">
                            <div style={{ color: '#666', marginBottom: '0.4rem' }}># Runs `anchor build` inside WSL — you stay in PowerShell</div>
                            <div style={{ marginBottom: '0.4rem' }}><span style={{ color: '#eab308' }}>uso</span> build</div>
                            <div style={{ color: '#666', marginBottom: '0.4rem' }}># Runs `solana address` inside WSL</div>
                            <div style={{ marginBottom: '0.4rem' }}><span style={{ color: '#eab308' }}>uso</span> address</div>
                            <div style={{ color: '#666', marginBottom: '0.4rem' }}># Validator runs in WSL, binds to localhost:8899</div>
                            <div><span style={{ color: '#eab308' }}>uso</span> val</div>
                        </CodeBlock>

                        <div className="docs-grid" style={{ marginTop: '1.5rem' }}>
                            {[
                                { label: 'No More Permission Errors', desc: 'Eliminates os error 1314 (symlink privilege failures)' },
                                { label: 'Bypasses Smart App Control', desc: 'Eliminates os error 4551 (WDAC blocks) for good' },
                                { label: 'No PATH Headaches', desc: 'All binaries live inside WSL — your Windows PATH stays untouched' },
                                { label: 'Seamless Localhost', desc: 'Validator binds to 127.0.0.1:8899 — your tests connect normally' },
                            ].map(item => (
                                <div key={item.label} className="docs-card" style={{ borderColor: 'rgba(34,211,238,0.2)' }}>
                                    <div style={{ color: '#22d3ee', fontWeight: 600, fontSize: '0.88rem', marginBottom: '0.35rem' }}>✓ {item.label}</div>
                                    <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{item.desc}</div>
                                </div>
                            ))}
                        </div>

                        <Note icon={<Monitor size={16} />} title="How it works" color="#22d3ee">
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                <li>→ A minimal Ubuntu WSL2 distro is registered and hidden from Windows Terminal</li>
                                <li>→ Rust, Solana CLI, and Anchor are installed inside the distro</li>
                                <li>→ Config stored at {ic('~/.uso-config.json')} — {ic('{ "mode": "wsl", "distro": "Ubuntu" }')}</li>
                                <li>→ If a native binary exists in your Windows PATH, USO uses it for speed. WSL is used only when native binary is missing.</li>
                            </ul>
                        </Note>

                        <p className="docs-text" style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
                            To disable Stealth Mode and return to native tooling, delete the config file:
                        </p>
                        <CodeBlock lang="powershell" copyText="del $env:USERPROFILE\.uso-config.json" copyId="wsl-disable">
                            <span style={{ color: '#ef4444' }}>del</span> $env:USERPROFILE\.uso-config.json
                        </CodeBlock>
                    </section>

                    {/* ── SCAFFOLD ── */}
                    <section id="scaffold" className="docs-section">
                        <h2 className="docs-heading">
                            <span className="docs-icon-box" style={{ color: '#a78bfa', background: 'rgba(167,139,250,0.1)' }}><FolderPlus size={22} /></span>
                            Create a Project
                        </h2>
                        <p className="docs-text">
                            Scaffold a production-ready Anchor workspace. Pre-configured {ic('Anchor.toml')}, a working Rust program, and a TypeScript test suite — no boilerplate hunting.
                        </p>

                        <CodeBlock lang="bash" copyText="uso create my-project" copyId="sc-create">
                            <span style={{ color: '#eab308' }}>uso</span> create <span style={{ color: '#4ade80' }}>my-project</span>
                        </CodeBlock>

                        <p className="docs-text">Move in and install Node dependencies:</p>
                        <CodeBlock lang="bash" copyText="cd my-project && npm install" copyId="sc-cd">
                            <span style={{ color: '#a855f7' }}>cd</span> my-project && <span style={{ color: '#a855f7' }}>npm</span> install
                        </CodeBlock>

                        <div className="docs-callout">
                            <h3><FolderPlus size={18} /> Generated structure</h3>
                            <pre style={{ color: 'var(--text-muted)', fontFamily: 'Fira Code, monospace', fontSize: '0.85rem', marginTop: '0.75rem', lineHeight: 1.8 }}>
                                {`my-project/
├── Anchor.toml          ← pre-wired for localnet
├── programs/
│   └── my_project/
│       └── src/lib.rs   ← your Rust program
├── tests/
│   └── my-project.ts    ← TypeScript tests
├── package.json
└── tsconfig.json`}
                            </pre>
                        </div>
                    </section>

                    {/* ── GRANULAR ── */}
                    <section id="granular" className="docs-section">
                        <h2 className="docs-heading">Granular Control</h2>
                        <p className="docs-text">
                            Already have some tools? Install only what's missing. Both {ic('uso install')} and {ic('uso init')} accept a component name:
                        </p>

                        <div className="docs-grid">
                            <MiniCard title="Install Rust only" cmd="uso install rust" copyId="gr-rust" />
                            <MiniCard title="Install Solana CLI only" cmd="uso install solana" copyId="gr-sol" />
                            <MiniCard title="Install Anchor only" cmd="uso install anchor" copyId="gr-anc" />
                        </div>
                    </section>

                    {/* ── WORKFLOW COMMANDS ── */}
                    <section id="workflow" className="docs-section">
                        <h2 className="docs-heading">
                            <span className="docs-icon-box" style={{ color: '#f97316', background: 'rgba(249,115,22,0.1)' }}><Rocket size={22} /></span>
                            Workflow Commands
                        </h2>
                        <p className="docs-text">
                            USO wraps the core Anchor CLI. Commands work identically in Native and Stealth WSL mode — routing is handled automatically.
                        </p>

                        <div className="docs-grid">
                            <MiniCard title="Build your program" cmd="uso build" copyId="wf-build" />
                            <MiniCard title="Run tests" cmd="uso test" copyId="wf-test" />
                            <MiniCard title="Deploy your program" cmd="uso deploy" copyId="wf-deploy" />
                            <MiniCard title="Clean build artifacts" cmd="uso clean" copyId="wf-clean" />
                        </div>

                        <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <Note icon={<Rocket size={16} />} title="uso build — smart elevation" color="#f97316">
                                If the build fails with {ic('os error 4551')} (Windows Smart App Control), USO automatically:
                                cleans stale blocked artifacts → retries in an elevated Administrator PowerShell window → streams output back.
                            </Note>
                            <Note icon={<Rocket size={16} />} title="uso test — validator-aware" color="#f97316">
                                Before running tests, USO checks if a local validator is already running on port {ic('8899')}.
                                If one is detected, it adds {ic('--skip-local-validator')} automatically so Anchor doesn't hang.
                            </Note>
                        </div>

                        <p className="docs-text" style={{ marginTop: '1.5rem' }}>Pass extra flags directly to Anchor:</p>
                        <CodeBlock lang="bash" copyText="uso test -- --skip-deploy" copyId="wf-flags">
                            <div style={{ color: '#666', marginBottom: '0.4rem' }}># Pass flags after --</div>
                            <div><span style={{ color: '#eab308' }}>uso</span> test -- --skip-deploy</div>
                        </CodeBlock>
                    </section>

                    {/* ── WALLET & SOL ── */}
                    <section id="wallet" className="docs-section">
                        <h2 className="docs-heading">
                            <span className="docs-icon-box" style={{ color: '#eab308', background: 'rgba(234,179,8,0.1)' }}><Wallet size={22} /></span>
                            Wallet & SOL
                        </h2>
                        <p className="docs-text">
                            Manage your Solana wallet and devnet SOL directly from USO. All commands wrap the Solana CLI and route through WSL when Stealth Mode is active.
                        </p>

                        <div className="docs-grid">
                            <MiniCard title="Show wallet address" cmd="uso address" copyId="wa-addr" />
                            <MiniCard title="Check SOL balance" cmd="uso balance" copyId="wa-bal" />
                            <MiniCard title="Balance of specific address" cmd="uso balance <address>" copyId="wa-bal2" />
                            <MiniCard title="Airdrop 2 SOL" cmd="uso airdrop 2" copyId="wa-air1" />
                            <MiniCard title="Airdrop to specific address" cmd="uso airdrop 5 <address>" copyId="wa-air2" />
                        </div>

                        <Warning title="Airdrops only work on Devnet/Testnet.">
                            <br />Make sure your Solana CLI cluster is set correctly:
                            <pre style={{ marginTop: '0.5rem', fontFamily: 'Fira Code, monospace', fontSize: '0.85rem', color: '#fde047' }}>solana config set --url devnet</pre>
                        </Warning>
                    </section>

                    {/* ── DEVELOPER MODE ── */}
                    <section id="devmode" className="docs-section">
                        <h2 className="docs-heading">
                            <span className="docs-icon-box" style={{ color: '#4ade80', background: 'rgba(74,222,128,0.1)' }}><Play size={22} /></span>
                            Developer Mode
                        </h2>
                        <p className="docs-text">
                            The commands you'll use every day during active development.
                        </p>

                        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem', color: 'white' }}>Local Test Validator</h3>
                        <CodeBlock lang="bash" copyText="uso val" copyId="dev-val">
                            <div style={{ color: '#666', marginBottom: '0.4rem' }}># Start validator</div>
                            <div style={{ marginBottom: '0.75rem' }}><span style={{ color: '#eab308' }}>uso</span> val</div>
                            <div style={{ color: '#666', marginBottom: '0.4rem' }}># Reset ledger and start fresh</div>
                            <div style={{ marginBottom: '0.75rem' }}><span style={{ color: '#eab308' }}>uso</span> val --reset</div>
                            <div style={{ color: '#666', marginBottom: '0.4rem' }}># Pass any solana-test-validator flags</div>
                            <div><span style={{ color: '#eab308' }}>uso</span> val --bpf-program {'<ID>'} {'<program.so>'}</div>
                        </CodeBlock>

                        <Note icon={<Play size={16} />} title="Windows validator elevation" color="#4ade80">
                            If the validator fails with "Access Denied", USO automatically spawns an elevated Administrator
                            PowerShell window, applies Defender exclusions for {ic('solana-test-validator')}, and enables
                            Developer Mode for symlink support.
                        </Note>

                        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, margin: '1.5rem 0 0.75rem', color: 'white' }}>Full Dev Mode</h3>
                        <CodeBlock lang="bash" copyText="uso dev" copyId="dev-full">
                            <span style={{ color: '#eab308' }}>uso</span> dev
                        </CodeBlock>

                        <div className="docs-callout" style={{ borderColor: '#4ade80' }}>
                            <h3 style={{ color: '#4ade80' }}><Play size={18} /> What {ic('uso dev')} does</h3>
                            <ol style={{ paddingLeft: '1.25rem', marginTop: '0.75rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                <li>Detects if a local validator is running on port {ic('8899')}</li>
                                <li>Starts the validator if none is running (waits up to 60s for readiness)</li>
                                <li>Runs your full Anchor test suite</li>
                                <li>Watches {ic('programs/**/*.rs')} and {ic('tests/**/*.ts')} for file changes</li>
                                <li>Auto-reruns tests with a 2-second debounce on every save</li>
                            </ol>
                            <p style={{ color: 'var(--text-muted)', marginTop: '0.75rem', fontSize: '0.88rem' }}>
                                Press <kbd style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: 4, fontSize: '0.85em' }}>Ctrl+C</kbd> to stop everything.
                            </p>
                        </div>
                    </section>

                    {/* ── DIAGNOSTICS ── */}
                    <section id="diagnostics" className="docs-section">
                        <h2 className="docs-heading">
                            <span className="docs-icon-box" style={{ color: '#22c55e', background: 'rgba(34,197,94,0.1)' }}><Search size={22} /></span>
                            Diagnostics
                        </h2>
                        <p className="docs-text">
                            Run these commands whenever something isn't working. They'll tell you exactly what's missing or broken.
                        </p>

                        <h3 style={{ fontWeight: 600, marginBottom: '0.5rem', color: 'white' }}>{ic('uso doctor')}</h3>
                        <p className="docs-text">Inspects your environment:</p>
                        <CodeBlock lang="bash" copyText="uso doctor" copyId="diag-doc">
                            <span style={{ color: '#eab308' }}>uso</span> doctor
                        </CodeBlock>

                        <div className="docs-grid" style={{ marginBottom: '1.5rem' }}>
                            {['Git', 'Rust & Cargo', 'Solana CLI + PATH', 'Anchor version', 'WSL2 (Windows)', 'C++ Build Tools (Windows)', 'Existing wallet file'].map(item => (
                                <div key={item} className="docs-card" style={{ padding: '0.75rem 1rem' }}>
                                    <span style={{ color: '#22c55e', marginRight: '0.5rem' }}>✓</span>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>{item}</span>
                                </div>
                            ))}
                        </div>

                        <h3 style={{ fontWeight: 600, marginBottom: '0.5rem', color: 'white' }}>{ic('uso verify')}</h3>
                        <p className="docs-text">
                            Does a real end-to-end test: creates a temporary Anchor project, compiles it, and tears it down.
                            Run this after {ic('uso init')} to confirm your environment is fully operational.
                        </p>
                        <CodeBlock lang="bash" copyText="uso verify" copyId="diag-ver">
                            <span style={{ color: '#eab308' }}>uso</span> verify
                        </CodeBlock>

                        <Note icon={<ShieldCheck size={16} />} title="Windows: uso unblock" color="#60a5fa">
                            If builds fail with {ic('os error 4551')} (Smart App Control / Mark of the Web), run:
                            <div style={{ marginTop: '0.5rem' }}>
                                <code style={{ background: 'rgba(0,0,0,0.4)', padding: '0.4rem 0.75rem', borderRadius: 6, fontFamily: 'Fira Code, monospace', color: '#4ade80', display: 'inline-block' }}>
                                    uso unblock
                                </code>
                            </div>
                            This removes the Zone.Identifier (Mark of the Web) from all project files and {ic('~/.cargo/bin')}.
                        </Note>
                    </section>

                    {/* ── UNINSTALLATION ── */}
                    <section id="uninstall" className="docs-section">
                        <h2 className="docs-heading">
                            <span className="docs-icon-box" style={{ color: '#ef4444', background: 'rgba(239,68,68,0.1)' }}><Trash2 size={22} /></span>
                            Uninstallation
                        </h2>
                        <p className="docs-text">
                            Clean uninstallation for individual components or the full stack.
                        </p>

                        <div className="docs-grid">
                            <MiniCard title="Remove everything (interactive)" cmd="uso uninstall" copyId="un-all" />
                            <MiniCard title="Remove Rust" cmd="uso uninstall rust" copyId="un-rust" />
                            <MiniCard title="Remove Solana CLI" cmd="uso uninstall solana" copyId="un-sol" />
                            <MiniCard title="Remove Anchor" cmd="uso uninstall anchor" copyId="un-anc" />
                        </div>

                        <Warning title="Wallet safety: ">
                            The full {ic('uso uninstall')} will ask about removing your wallet at {ic('~/.config/solana/id.json')}.
                            You must type <strong style={{ color: '#ef4444' }}>DELETE</strong> to confirm.
                            Back up your secret key before proceeding if your wallet holds any funds.
                        </Warning>

                        <p className="docs-text" style={{ marginTop: '1rem' }}>Remove USO itself:</p>
                        <CodeBlock lang="bash" copyText="npm uninstall -g @xaidenlabs/uso" copyId="un-uso">
                            <span style={{ color: '#a855f7' }}>npm</span> uninstall -g <span style={{ color: '#4ade80' }}>@xaidenlabs/uso</span>
                        </CodeBlock>
                    </section>

                </main>
            </div>

            <Footer />
        </div>
    );
};

export default Docs;
