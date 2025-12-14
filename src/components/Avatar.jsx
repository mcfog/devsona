import React from 'react';
import { types } from '../data/types';

export default function Avatar({ type, size = '200px' }) {
    if (!type) return null;

    // Safety check for color, fallback to grey
    const resultData = types[type] || {};
    const baseColor = resultData.color || '#666';

    // Deterministic pseudo-random number generator
    const seed = type.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const rand = (index) => {
        const x = Math.sin(seed + index) * 10000;
        return x - Math.floor(x);
    };

    // Shape Definitions
    const SHAPE_TYPES = ['circle', 'rect', 'triangle', 'rhombus', 'star'];

    // Shuffle shapes to ensure uniqueness
    const availableShapes = [...SHAPE_TYPES];
    // Fisher-Yates shuffle with our seed
    for (let i = availableShapes.length - 1; i > 0; i--) {
        const j = Math.floor(rand(i + 100) * (i + 1));
        [availableShapes[i], availableShapes[j]] = [availableShapes[j], availableShapes[i]];
    }

    // We pick top 3 distinct shapes
    const selectedShapes = availableShapes.slice(0, 3);

    // Config for balanced layout
    // 0: Center, Large
    // 1: Top-Rightish
    // 2: Bottom-Leftish
    const layers = [
        { scale: 0.9, x: 0, y: 0, opacity: 0.35, rotation: rand(10) * 360 },
        { scale: 0.5, x: 40, y: -40, opacity: 0.55, rotation: rand(11) * 360 },
        { scale: 0.6, x: -30, y: 40, opacity: 0.55, rotation: rand(12) * 360 }
    ];

    const renderShape = (shapeType, layer, index) => {
        const commonProps = {
            fill: baseColor,
            opacity: layer.opacity,
            transform: `translate(${100 + layer.x}, ${100 + layer.y}) rotate(${layer.rotation}) scale(${layer.scale})`,
            style: { mixBlendMode: 'screen' }
        };

        // All shapes defined approx 100x100 centered at 0,0
        switch (shapeType) {
            case 'circle':
                return <circle key={index} cx="0" cy="0" r="50" {...commonProps} />;
            case 'rect':
                return <rect key={index} x="-50" y="-50" width="100" height="100" rx="10" {...commonProps} />;
            case 'triangle':
                return <polygon key={index} points="0,-60 55,40 -55,40" {...commonProps} />;
            case 'rhombus':
                return <polygon key={index} points="0,-60 50,0 0,60 -50,0" {...commonProps} />;
            case 'star':
                // Simple 5-point star
                return <polygon key={index} points="0,-60 14,-15 60,-15 25,10 38,55 0,30 -38,55 -25,10 -60,-15 -14,-15" {...commonProps} />;
            default:
                return null;
        }
    };

    return (
        <div style={{ width: size, height: size, margin: '0 auto' }}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    borderRadius: '50%',
                    background: `${baseColor}15`,
                    border: `4px solid ${baseColor}30`,
                    boxShadow: `0 8px 30px ${baseColor}20`,
                    overflow: 'hidden' // Ensure shapes don't bleed
                }}
            >
                {/* Background Pattern */}
                <circle cx="100" cy="100" r="90" fill="none" stroke={baseColor} strokeWidth="1" strokeDasharray="5 5" opacity="0.2" />

                {/* Render Selected Shapes */}
                {selectedShapes.map((shape, idx) => renderShape(shape, layers[idx], idx))}

                {/* Contrast Overlay for Text Readability */}
                <defs>
                    <filter id="textShadowFull">
                        <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.4" />
                    </filter>
                </defs>

                {/* Type Text */}
                <text
                    x="100"
                    y="118" // Vertically centered approx
                    textAnchor="middle"
                    fill="#fff"
                    stroke={baseColor}
                    strokeWidth="2"
                    paintOrder="stroke"
                    fontSize="50"
                    fontWeight="900"
                    fontFamily="monospace"
                    filter="url(#textShadowFull)"
                    style={{ letterSpacing: '4px' }}
                >
                    {type}
                </text>
            </svg>
        </div>
    );
}
