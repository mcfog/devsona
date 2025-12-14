import { useNavigate } from 'react-router-dom';
import { types } from '../data/types';
import Avatar from '../components/Avatar';

export default function AllTypes({ lang }) {
    const navigate = useNavigate();
    const typeKeys = Object.keys(types);

    return (
        <div className="container animate-fade-in" style={{ paddingBottom: '4rem' }}>
            <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <h1 className="title">{lang === 'cn' ? '16种性格类型' : '16 Personality Types'}</h1>
                <button className="btn btn-secondary" onClick={() => navigate('/')}>
                    {lang === 'cn' ? '返回首页' : 'Home'}
                </button>
            </header>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '2rem'
            }}>
                {typeKeys.map(key => {
                    const data = types[key];
                    const color = data.color || '#666';

                    return (
                        <div
                            key={key}
                            className="card"
                            onClick={() => navigate(`/result/${key}`)}
                            style={{
                                cursor: 'pointer',
                                padding: '1.5rem',
                                margin: 0,
                                borderTop: `4px solid ${color}`,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'transform 0.2s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ marginBottom: '1rem', pointerEvents: 'none' }}>
                                <Avatar type={key} size="120px" />
                            </div>
                            <h2 style={{ color, margin: '0 0 0.5rem 0', fontSize: '1.5rem' }}>{key}</h2>
                            <p style={{ margin: 0, fontSize: '1rem', fontWeight: 'bold', color: 'var(--text-color)' }}>
                                {data.title[lang]}
                            </p>
                            <p style={{ margin: '0.8rem 0 0 0', fontSize: '0.9rem', color: 'var(--secondary-color)', textAlign: 'center' }}>
                                {data.summary[lang]}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
