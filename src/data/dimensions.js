export const dimensions = [
    {
        key: 'collaboration',
        label: { cn: '协作方式', en: 'Collaboration' },
        left: { char: 'I', label: { cn: '独奏者', en: 'Individual' }, desc: { cn: '倾向于独立思考和工作，享受专注。', en: 'Prefers independent thinking and work, enjoys focus.' } },
        right: { char: 'E', label: { cn: '协奏者', en: 'Team' }, desc: { cn: '倾向于团队合作和交流，享受互动。', en: 'Prefers teamwork and communication, enjoys interaction.' } }
    },
    {
        key: 'drive',
        label: { cn: '驱动力', en: 'Drive' },
        left: { char: 'S', label: { cn: '系统驱动', en: 'System' }, desc: { cn: '关注技术架构、代码质量和系统优雅性。', en: 'Focuses on architecture, code quality, and elegance.' } },
        right: { char: 'P', label: { cn: '产品驱动', en: 'Product' }, desc: { cn: '关注用户价值、业务目标和产品落地。', en: 'Focuses on user value, business goals, and delivery.' } }
    },
    {
        key: 'focus',
        label: { cn: '关注点', en: 'Focus' },
        left: { char: 'T', label: { cn: '自上而下', en: 'Top-down' }, desc: { cn: '先规划整体架构，再填充细节。', en: 'Plans architecture first, then fills in details.' } },
        right: { char: 'B', label: { cn: '自下而上', en: 'Bottom-up' }, desc: { cn: '从具体实现入手，逐步构建系统。', en: 'Starts with implementation, builds system step-by-step.' } }
    },
    {
        key: 'style',
        label: { cn: '风格', en: 'Style' },
        left: { char: 'C', label: { cn: '工匠', en: 'Craftsman' }, desc: { cn: '偏好深度、稳定性和精益求精。', en: 'Prefers depth, stability, and perfection.' } },
        right: { char: 'X', label: { cn: '探索者', en: 'Explorer' }, desc: { cn: '偏好广度、创新性和探索新知。', en: 'Prefers breadth, innovation, and exploration.' } }
    }
];
