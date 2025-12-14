import { useNavigate } from 'react-router-dom';
import { dimensions } from '../data/dimensions';

export default function Landing({ lang }) {
    const navigate = useNavigate();

    const content = {
        cn: {
            title: 'Devsona',
            subtitle: '专为 IT 从业者设计的性格测试。了解你的协作风格、驱动力、关注点和技术品味。',
            start: '开始测试',
            dimensionsParams: '四个维度'
        },
        en: {
            title: 'Devsona',
            subtitle: 'Personality test designed for IT professionals. Discover your collaboration style, drive, focus, and tech taste.',
            start: 'Start Test',
            dimensionsParams: 'The 4 Dimensions'
        }
    };

    const t = content[lang];

    return (
        <div className="container animate-fade-in" style={{ textAlign: 'center', marginTop: '5vh', paddingBottom: '4rem' }}>
            <div className="card" style={{ marginBottom: '3rem' }}>
                <h1 className="title">{t.title}</h1>
                <p className="subtitle">{t.subtitle}</p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
                    <button className="btn" onClick={() => navigate('/test')}>
                        {t.start}
                    </button>
                </div>

                <div style={{ marginTop: '1rem' }}>
                    <span
                        onClick={() => navigate('/types')}
                        style={{
                            cursor: 'pointer',
                            color: 'var(--secondary-color)',
                            textDecoration: 'underline',
                            fontSize: '0.9rem'
                        }}
                    >
                        {lang === 'cn' ? '查看所有类型' : 'View All Types'}
                    </span>
                </div>
            </div>

            <h2 style={{ marginBottom: '2rem', color: 'var(--text-color)' }}>{t.dimensionsParams}</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', textAlign: 'left' }}>
                {dimensions.map(dim => (
                    <div key={dim.key} className="card" style={{ padding: '1.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary-color)', textAlign: 'center' }}>{dim.label[lang]}</h3>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem' }}>
                            <div style={{ flex: 1, paddingRight: '1rem' }}>
                                <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--text-color)' }}>{dim.left.char}</strong>
                                <span style={{ fontWeight: '600', color: 'var(--secondary-color)' }}>{dim.left.label[lang]}</span>
                                <p style={{ fontSize: '0.85rem', color: '#666', margin: '0.5rem 0 0 0' }}>{dim.left.desc[lang]}</p>
                            </div>

                            <div style={{ width: '1px', height: '60px', background: 'var(--border-color)' }}></div>

                            <div style={{ flex: 1, paddingLeft: '1rem', textAlign: 'right' }}>
                                <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--text-color)' }}>{dim.right.char}</strong>
                                <span style={{ fontWeight: '600', color: 'var(--secondary-color)' }}>{dim.right.label[lang]}</span>
                                <p style={{ fontSize: '0.85rem', color: '#666', margin: '0.5rem 0 0 0' }}>{dim.right.desc[lang]}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '3rem', color: '#444', fontSize: '0.9rem' }}>
                <p>16 Personalities for Developers</p>
            </div>
        </div>
    );
}
