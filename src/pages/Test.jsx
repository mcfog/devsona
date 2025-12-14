import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getShuffledQuestions, calculateResult } from '../utils/calculator';

export default function Test({ lang }) {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    const [currentInfo, setCurrentInfo] = useState(-1); // -1 for instructions
    const [answers, setAnswers] = useState({});

    useEffect(() => {
        setQuestions(getShuffledQuestions());
    }, []);

    const handleAnswer = useCallback((value) => {
        if (currentInfo === -1) return; // Ignore if in instructions

        const currentQuestion = questions[currentInfo];
        const newAnswers = { ...answers, [currentQuestion.id]: value };
        setAnswers(newAnswers);

        if (currentInfo < questions.length - 1) {
            setCurrentInfo(prev => prev + 1);
        } else {
            // Finished
            const { type, scores } = calculateResult(newAnswers);
            navigate(`/result/${type}`, { state: { type, scores } });
        }
    }, [answers, currentInfo, questions, navigate]);

    // Keyboard support
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (currentInfo === -1) {
                if (e.key === 'Enter' || e.code === 'Space') {
                    setCurrentInfo(0);
                }
                return;
            }

            if (e.key.toLowerCase() === 'a') {
                handleAnswer(questions[currentInfo].options[0].value);
            } else if (e.key.toLowerCase() === 'b') {
                handleAnswer(questions[currentInfo].options[1].value);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentInfo, questions, handleAnswer]);

    const handleBack = () => {
        if (currentInfo > -1) {
            setCurrentInfo(prev => prev - 1);
        }
    };

    if (questions.length === 0) return <div className="container">Loading...</div>;

    // Instructions View
    if (currentInfo === -1) {
        return (
            <div className="container animate-fade-in" style={{ textAlign: 'center', marginTop: '10vh' }}>
                <div className="card">
                    <h1 className="title">{lang === 'cn' ? '测试说明' : 'Instructions'}</h1>
                    <div style={{ textAlign: 'left', lineHeight: '1.8', color: 'var(--text-color)', marginBottom: '2rem' }}>
                        {lang === 'cn' ? (
                            <ul>
                                <li>预计用时 <strong>3-5 分钟</strong>。</li>
                                <li>每道题有两个选项，请选择最符合你<strong>自然状态</strong>下的一项。</li>
                                <li>不要过多思考，凭直觉回答。</li>
                                <li>你可以使用键盘快捷键 <strong>A</strong> 和 <strong>B</strong> 快速作答。</li>
                                <li>如果需要修改上一题，可以点击“返回”按钮。</li>
                            </ul>
                        ) : (
                            <ul>
                                <li>Estimated time: <strong>3-5 minutes</strong>.</li>
                                <li>Select the option that best describes you in your <strong>natural state</strong>.</li>
                                <li>Answer intuitively, don't overthink.</li>
                                <li>You can use keyboard shortcuts <strong>A</strong> and <strong>B</strong>.</li>
                                <li>You can use the "Back" button to modify the previous answer.</li>
                            </ul>
                        )}
                    </div>
                    <button className="btn" onClick={() => setCurrentInfo(0)}>
                        {lang === 'cn' ? '开始答题' : 'Start'}
                    </button>
                </div>
            </div>
        );
    }

    // --- Visual Segmented Progress Logic ---
    const totalStages = 3;
    const stageSize = Math.ceil(questions.length / totalStages);
    const currentStage = Math.floor(currentInfo / stageSize); // 0-indexed stage

    const getSegmentFill = (stageIndex) => {
        if (stageIndex < currentStage) return '100%';
        if (stageIndex > currentStage) return '0%';
        // Current stage percent
        const currentInStage = (currentInfo % stageSize);
        // Add minimal fill to show activeness even at 0.
        // We want the bar to fill up as we progress through the chunk.
        // There are `stageSize` questions in this chunk.
        // If we are at question 0 of this chunk, ideally 0% bar? Or partial?
        // Let's make it proportional to (currentInStage) / stageSize.
        // But we want it to feel like "progress".
        return `${((currentInStage) / stageSize) * 100}%`;
    };

    const q = questions[currentInfo];
    // Remove "Scenario:" prefix if it exists in data
    const questionText = q.text[lang].replace(/^(Scenario:|场景：)\s*/i, '');

    return (
        <div className="container animate-fade-in" key={currentInfo}>

            {/* Visual 3-Phase Indicator */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '2rem' }}>
                {[0, 1, 2].map((idx) => (
                    <div key={idx} style={{
                        flex: 1,
                        height: '6px',
                        background: 'var(--border-color)',
                        borderRadius: '3px',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            width: getSegmentFill(idx),
                            height: '100%',
                            background: 'var(--primary-color)',
                            transition: 'width 0.3s ease'
                        }} />
                    </div>
                ))}
            </div>

            <div className="card">
                <p className="subtitle" style={{ fontSize: '1.25rem', color: 'var(--text-color)', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                    {questionText}
                </p>

                <div style={{ marginTop: '2rem' }}>
                    {q.options.map((opt, idx) => (
                        <button
                            key={idx}
                            className="option-btn"
                            onClick={() => handleAnswer(opt.value)}
                        >
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span style={{
                                    background: 'var(--border-color)',
                                    color: 'var(--text-color)',
                                    padding: '0.2rem 0.6rem',
                                    borderRadius: '4px',
                                    marginRight: '1rem',
                                    fontWeight: 'bold',
                                    fontSize: '0.9rem'
                                }}>
                                    {String.fromCharCode(65 + idx)}
                                </span>
                                <span style={{ flex: 1 }}>{opt.text[lang]}</span>
                            </div>
                        </button>
                    ))}
                </div>

                <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
                    <button
                        className="btn btn-secondary"
                        onClick={handleBack}
                        disabled={currentInfo === 0}
                        style={{ opacity: currentInfo === 0 ? 0.5 : 1, cursor: currentInfo === 0 ? 'not-allowed' : 'pointer' }}
                    >
                        {lang === 'cn' ? '上一题' : 'Back'}
                    </button>
                </div>
            </div>

            <div style={{ textAlign: 'center', color: 'var(--secondary-color)', fontSize: '0.8rem', marginTop: '1rem' }}>
                {lang === 'cn' ? '按 A 或 B 键快速选择' : 'Press A or B to select'}
            </div>
        </div>
    );
}
