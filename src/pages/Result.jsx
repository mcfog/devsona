import { useLocation, useNavigate, useParams, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { types } from '../data/types';
import { dimensions } from '../data/dimensions';
import { analysis } from '../data/analysis';
import Avatar from '../components/Avatar';

export default function Result({ lang }) {
    const { state } = useLocation();
    const { type: paramType } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    // Prefer state type (fresh result), fallback to param type (direct link)
    const type = (state && state.type) || paramType;
    const scores = state && state.scores;

    // Validate type
    const isValidType = type && types[type];

    // If invalid, redirect to home
    if (!isValidType) {
        return <Navigate to="/" replace />;
    }

    const resultData = types[type];
    const typeColor = resultData.color || '#f59e0b'; // Fallback color

    // --- Logic for Strongest / Weakest features ---

    // We need to persist these choices so they don't change on reload or direct link
    // We use URL hash for this: #s=I&w=S (Strongest=I, Weakest=S)

    const [analysisState, setAnalysisState] = useState({
        strongestChar: null, // 'I', 'E', etc.
        weakestKey: null,    // 'collaboration', 'drive', etc.
    });

    useEffect(() => {
        // 1. Try to read from Hash
        const hashParams = new URLSearchParams(location.hash.replace('#', '?'));
        const sHash = hashParams.get('s');
        const wHash = hashParams.get('w');

        if (sHash && wHash) {
            // Verify they are valid? (Skip for simplicity, just assume valid)
            setAnalysisState({ strongestChar: sHash, weakestKey: wHash });
        } else if (scores) {
            // 2. If no hash but we have scores, calculate and set hash
            const deltas = [];

            dimensions.forEach(dim => {
                const left = scores[dim.left.char];
                const right = scores[dim.right.char];
                const diff = Math.abs(left - right);
                const winnerChar = left >= right ? dim.left.char : dim.right.char;
                deltas.push({
                    dimKey: dim.key,
                    diff,
                    winnerChar,
                    dim
                });
            });

            // Find Max Delta (Strongest)
            const maxDiff = Math.max(...deltas.map(d => d.diff));
            const strongestCandidates = deltas.filter(d => d.diff === maxDiff);
            // Random tie-break
            const strongestPicked = strongestCandidates[Math.floor(Math.random() * strongestCandidates.length)];

            // Find Min Delta (Weakest/Flexible)
            // We must exclude the strongest one? Usually yes, but if all are same?
            // Let's just pick min from all.
            const minDiff = Math.min(...deltas.map(d => d.diff));
            const weakestCandidates = deltas.filter(d => d.diff === minDiff);
            // Random tie-break
            const weakestPicked = weakestCandidates[Math.floor(Math.random() * weakestCandidates.length)];

            // Update State
            setAnalysisState({
                strongestChar: strongestPicked.winnerChar,
                weakestKey: weakestPicked.dimKey
            });

            // Write to Hash (replace current entry to avoid history spam?)
            navigate(`#s=${strongestPicked.winnerChar}&w=${weakestPicked.dimKey}`, { replace: true, state: state });
        }
    }, [scores, location.hash, type, navigate, state]);


    // Helper to get analysis text
    const getStrongestText = () => {
        if (!analysisState.strongestChar) return '';
        // Reverse lookup dimension from char
        const dim = dimensions.find(d => d.left.char === analysisState.strongestChar || d.right.char === analysisState.strongestChar);
        if (!dim) return '';

        return analysis[dim.key].strong[analysisState.strongestChar][lang];
    };

    const getFlexibleText = () => {
        if (!analysisState.weakestKey) return '';
        return analysis[analysisState.weakestKey].flexible[lang];
    };

    // Helper for label
    const getStrongestLabel = () => {
        if (!analysisState.strongestChar) return '';
        const dim = dimensions.find(d => d.left.char === analysisState.strongestChar || d.right.char === analysisState.strongestChar);
        if (!dim) return '';
        const side = dim.left.char === analysisState.strongestChar ? 'left' : 'right';
        return dim[side].label[lang];
    }

    const getWeakestLabel = () => {
        if (!analysisState.weakestKey) return '';
        const dim = dimensions.find(d => d.key === analysisState.weakestKey);
        return dim ? dim.label[lang] : '';
    }

    const [showGuide, setShowGuide] = useState(false);

    return (
        <div className="container animate-fade-in" style={{ paddingBottom: '4rem' }}>

            {/* Type Card with Type-specific styling */}
            <div className="card" style={{ padding: '3rem 2rem', textAlign: 'center', borderTop: `6px solid ${typeColor}` }}>
                <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                    <Avatar type={type} size="200px" />
                </div>

                <div style={{ position: 'relative', display: 'inline-block' }}>
                    <h1 className="title" style={{ marginBottom: '0.5rem', fontSize: '3rem', color: typeColor }}>
                        {type}
                        <sup
                            onClick={() => setShowGuide(!showGuide)}
                            style={{
                                fontSize: '1rem',
                                color: 'var(--secondary-color)',
                                cursor: 'pointer',
                                opacity: 0.7,
                                marginLeft: '0.5rem',
                                verticalAlign: 'super',
                                border: '1px solid currentColor',
                                borderRadius: '50%',
                                width: '20px',
                                height: '20px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            title={lang === 'cn' ? '查看维度说明' : 'View Dimensions Guide'}
                        >
                            ?
                        </sup>
                    </h1>
                </div>

                <h2 style={{ fontSize: '1.8rem', color: 'var(--text-color)', marginTop: 0 }}>
                    {resultData.title[lang]}
                </h2>

                {/* Dimensions Guide (Collapsible) - Focused on current type only */}
                {showGuide && (
                    <div className="animate-fade-in" style={{
                        margin: '1rem auto 2rem auto',
                        padding: '1.5rem',
                        background: 'var(--bg-color)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '8px',
                        textAlign: 'left',
                        maxWidth: '600px'
                    }}>
                        <h3 style={{ marginTop: 0, fontSize: '1rem', color: 'var(--text-color)', marginBottom: '1rem' }}>
                            {lang === 'cn' ? `关于 ${type} 的维度解读` : `About ${type} Dimensions`}
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.8rem' }}>
                            {type.split('').map(char => {
                                // Find which dimension this char belongs to
                                const dim = dimensions.find(d => d.left.char === char || d.right.char === char);
                                if (!dim) return null;
                                const side = dim.left.char === char ? 'left' : 'right';
                                const info = dim[side];

                                return (
                                    <div key={char} style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                                        <span style={{ fontWeight: 'bold', color: typeColor, width: '20px', display: 'inline-block' }}>{char}</span>
                                        <strong style={{ color: 'var(--text-color)' }}> - {info.label[lang]}: </strong>
                                        <span style={{ color: 'var(--secondary-color)' }}>
                                            {info.desc[lang]}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                        <button
                            onClick={() => setShowGuide(false)}
                            style={{
                                marginTop: '1rem',
                                background: 'none',
                                border: 'none',
                                color: 'var(--secondary-color)',
                                textDecoration: 'underline',
                                cursor: 'pointer',
                                fontSize: '0.8rem',
                                padding: 0
                            }}
                        >
                            {lang === 'cn' ? '关闭' : 'Close'}
                        </button>
                    </div>
                )}

                <p style={{ fontSize: '1.1rem', color: typeColor, fontWeight: 'bold' }}>
                    {resultData.summary[lang]}
                </p>

                <div style={{ margin: '2rem 0', lineHeight: '1.8', textAlign: 'left', background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '8px' }}>
                    <p
                        style={{ marginTop: 0 }}
                        dangerouslySetInnerHTML={{ __html: resultData.description[lang] }}
                    />
                </div>

                {/* Dynamic Analysis Section (Shown if we have calculated state) */}
                {analysisState.strongestChar && analysisState.weakestKey && (
                    <div style={{ marginBottom: '3rem', textAlign: 'left', borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
                        <h3 style={{ color: 'var(--text-color)', marginBottom: '1.5rem', textAlign: 'center' }}>
                            {lang === 'cn' ? '深度辨析' : 'Deep Analysis'}
                        </h3>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                            {/* Strongest */}
                            <div style={{
                                background: `${typeColor}15`, // Low opacity background
                                padding: '1.5rem',
                                borderRadius: '8px',
                                borderLeft: `4px solid ${typeColor}`
                            }}>
                                <h4 style={{ margin: '0 0 0.5rem 0', color: typeColor }}>
                                    {lang === 'cn' ? '核心优势: ' : 'Core Advantage: '}
                                    {getStrongestLabel()}
                                </h4>
                                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-color)' }}>
                                    {getStrongestText()}
                                </p>
                            </div>

                            {/* Weakest (Flexibility) */}
                            <div style={{
                                background: 'rgba(168, 162, 158, 0.1)',
                                padding: '1.5rem',
                                borderRadius: '8px',
                                borderLeft: '4px solid #a8a29e'
                            }}>
                                <h4 style={{ margin: '0 0 0.5rem 0', color: '#a8a29e' }}>
                                    {lang === 'cn' ? '因地制宜: ' : 'Adaptive Trait: '}
                                    {getWeakestLabel()}
                                </h4>
                                <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-color)' }}>
                                    {getFlexibleText()}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Daily Routine Section */}
                {resultData.dailyRoutine && (
                    <div style={{ marginBottom: '3rem', textAlign: 'left' }}>
                        <h3 style={{ color: 'var(--text-color)', marginBottom: '1rem', textAlign: 'center' }}>
                            {resultData.dailyRoutine.title[lang]}
                        </h3>
                        <div style={{ background: 'var(--bg-color)', padding: '1.5rem', borderRadius: '8px', border: '1px dashed var(--border-color)' }}>
                            <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--secondary-color)', lineHeight: '1.8' }}>
                                {resultData.dailyRoutine.items[lang].map((item, idx) => (
                                    <li key={idx} style={{ marginBottom: '0.5rem' }}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}

                {/* Standard Details */}
                <div style={{ textAlign: 'left', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                    <DetailCard title={lang === 'cn' ? '工作模式' : 'Work Mode'} content={resultData.workMode[lang]} />
                    <DetailCard title={lang === 'cn' ? '核心价值' : 'Core Value'} content={resultData.value[lang]} />
                    <DetailCard
                        title={lang === 'cn' ? '潜在风险' : 'Potential Blind Spot'}
                        content={
                            // Prefer calculated strongest char, fallback to first letter of type
                            resultData.blindSpots[analysisState.strongestChar || type[0]][lang]
                        }
                        highlight
                    />
                </div>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button className="btn" onClick={() => navigate('/')} style={{ background: typeColor, color: '#fff' }}>
                        {lang === 'cn' ? '回到首页' : 'Home'}
                    </button>

                    <button className="btn btn-secondary" onClick={() => navigate('/test')}>
                        {lang === 'cn' ? '重新测试' : 'Retest'}
                    </button>
                </div>

                <div style={{ marginTop: '2rem' }}>
                    <span
                        onClick={() => navigate('/types')}
                        style={{
                            cursor: 'pointer',
                            color: 'var(--secondary-color)',
                            textDecoration: 'underline',
                            fontSize: '0.9rem'
                        }}
                    >
                        {lang === 'cn' ? '查看所有16种类型' : 'View All 16 Types'}
                    </span>
                </div>
            </div>
        </div>
    );
}

function DetailCard({ title, content, highlight }) {
    return (
        <div style={{
            background: highlight ? 'rgba(218, 54, 51, 0.1)' : 'var(--bg-color)',
            padding: '1.5rem',
            borderRadius: '8px',
            border: `1px solid ${highlight ? '#da3633' : 'var(--border-color)'}`
        }}>
            <h3 style={{ marginTop: 0, marginBottom: '0.8rem', fontSize: '1.1rem', color: highlight ? '#ff6b6b' : 'var(--text-color)' }}>{title}</h3>
            <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--secondary-color)' }}>{content}</p>
        </div>
    );
}
