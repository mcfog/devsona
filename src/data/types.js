export const types = {
    'ISTC': {
        title: { cn: '基础架构顾问', en: 'Infrastructure Consultant' },
        color: '#3b82f6', // Blue 500
        summary: { cn: '专注的深度构建者。致力于打造高性能、高可用和长期可维护的技术架构。', en: 'Focused deep builder. Dedicated to creating high-performance, high-availability, and maintainable technical architectures.' },
        workMode: { cn: '深入系统底层，独立解决复杂的技术难题，为产品打造坚实的底座。', en: 'Diving deep into the system, independently solving complex tech problems to build a solid foundation.' },
        value: { cn: '交付极致的技术质量与稳定性。', en: 'Delivers project stability and technical excellence.' },
        blindSpots: {
            I: { cn: '过度封闭：长期独自攻关可能导致代码难以被他人理解和接手。', en: 'Over-isolation: Long-term solitary work makes code hard for others to maintain.' },
            S: { cn: '技术洁癖：为了追求架构完美，可能会抵触业务需要的“临时折衷方案”。', en: 'Tech Purity: Resisting necessary business trade-offs for architectural perfection.' },
            T: { cn: '过度设计：可能为未来不仅存在的场景预留了过多的抽象接口。', en: 'Over-design: creating complex abstractions for scenarios that may never happen.' },
            C: { cn: '固步自封：倾向于使用验证过的老技术，对引入新工具持保守态度。', en: 'Stagnation: Preferring proven old tech, conservative about new tools.' }
        },
        dailyRoutine: {
            title: { cn: '深度沉浸的一天', en: 'A Day of Deep Immersion' },
            items: {
                cn: [
                    '09:00 - 检查系统监控大盘，分析昨晚服务抖动的根本原因。',
                    '10:30 - 戴上耳机，专注于重构核心模块，消除累积的技术债务。',
                    '15:00 - 撰写技术设计文档，详细定义接口规范和异常处理流程。',
                    '17:30 - 思考如何通过架构优化降低服务器成本。'
                ],
                en: [
                    '09:00 - Check monitoring dashboards, analyzing the Root Cause of metrics jitter.',
                    '10:30 - Headphones on. Refactoring core modules to eliminate technical debt.',
                    '15:00 - Writing technical design docs, defining interfaces and error handling.',
                    '17:30 - Thinking about how to reduce server costs via architectural optimization.'
                ]
            }
        },
        description: {
            cn: '你是一位追求<b>极致技术品质</b>的构建者。你不仅仅是在写代码，更是在设计精密的逻辑大厦。你关注系统的长久生命力，倾向于从<b>宏观架构</b>出发，独立思考并解决最棘手的底层问题。虽然你可能不常站在聚光灯下，但你打造的<b>稳健系统</b>是整个产品最可靠的依赖。',
            en: 'You are a builder pursuing <b>extreme technical quality</b>. You don\'t just write code; you design precise logical structures. Focusing on system longevity, you start from <b>macro architecture</b> to solve tough low-level problems. While not always in the spotlight, the <b>robust systems</b> you build are the product\'s most reliable dependency.'
        }
    },
    'ISTX': {
        title: { cn: '技术先知', en: 'Tech Prophet' },
        color: '#06b6d4', // Cyan 500
        summary: { cn: '前瞻的独立探索者。专注于研究前沿技术并将其实践于未来的架构中。', en: 'Forward-looking independent explorer. Focusing on researching frontier tech and applying it to future architectures.' },
        workMode: { cn: '独立探索新技术趋势，评估可行性，为团队指引未来的技术方向。', en: 'Exploring tech trends, assessing feasibility, guiding future tech direction.' },
        value: { cn: '引入前沿技术，保持团队的技术竞争力。', en: 'Introduces frontier tech, keeping the team competitive.' },
        blindSpots: {
            I: { cn: '象牙塔：构想的技术蓝图可能过于超前，难以与当前的业务系统兼容。', en: 'Ivory Tower: Tech visions too advanced to fit current business systems.' },
            S: { cn: '忽视成本：为了追求技术先进性，可能低估了迁移旧系统的代价。', en: 'Ignoring Cost: Underestimating migration costs for the sake of advanced tech.' },
            T: { cn: '空中楼阁：关注顶层概念，但可能忽略了落地时的工程细节。', en: 'Air Castles: Focusing on high-level concepts but missing implementation details.' },
            X: { cn: '喜新厌旧：容易被新框架吸引，可能导致项目中存在多种不兼容的技术栈。', en: 'Shiny Object: Easily attracted to new frameworks, leading to fragmented stacks.' }
        },
        dailyRoutine: {
            title: { cn: '探索未来的一天', en: 'A Day Exploring Future' },
            items: {
                cn: [
                    '09:00 - 阅读技术社区的热门文章，了解行业内最新的架构范式。',
                    '11:00 - 搭建一个 Demo 项目，验证将 AI 引入现有工作流的可能性。',
                    '14:00 - 绘制未来的系统演进路线图，规划从单体到微服务的迁移路径。',
                    '16:00 - 在代码中尝试使用语言的一项新特性，哪怕它还在 Beta 阶段。'
                ],
                en: [
                    '09:00 - Reading trending tech articles, learning the latest architectural paradigms.',
                    '11:00 - Building a Demo to test integrating AI into the current workflow.',
                    '14:00 - Drawing the system evolution roadmap (e.g., monolith to microservices).',
                    '16:00 - Trying a new language feature in code, even if it\'s still in Beta.'
                ]
            }
        },
        description: {
            cn: '你是一位充满<b>探索精神</b>的技术极客。你对于新技术有着敏锐的嗅觉，善于从独立的视角审视未来趋势，并思考其在现有系统中的应用。你的工作不仅是解决当下的问题，更是为未来<b>储备可能性</b>。你是团队通向技术的未来的桥梁，用<b>前瞻性</b>的眼光避免技术栈的僵化与过时。',
            en: 'You are a tech geek full of <b>exploratory spirit</b>. With a keen nose for new tech, you examine trends from an independent perspective. Your work isn\'t just solving today\'s problems, but <b>reserving possibilities</b> for tomorrow. You bridge the team to the tech future, preventing stagnation with <b>forward-looking</b> vision.'
        }
    },
    'ISBC': {
        title: { cn: '核心模块专家', en: 'Core Module Expert' },
        color: '#1d4ed8', // Blue 700
        summary: { cn: '极致的独立实干家。专注于攻克高难度的算法与底层实现细节。', en: 'Extreme independent doer. Focusing on conquering difficult algorithms and low-level implementation details.' },
        workMode: { cn: '屏蔽干扰，深钻代码细节，追求代码执行效率与逻辑的完美。', en: 'Blocking distractions, diving into details, pursuing efficiency and logic perfection.' },
        value: { cn: '解决最硬核的技术难题，优化核心性能。', en: 'Solves the hardest tech problems, optimizes core performance.' },
        blindSpots: {
            I: { cn: '沟通黑洞：在攻坚时极其专注，可能忽略了及时同步进度给团队。', en: 'Comm Black Hole: Intense focus allows forgetting to sync progress with the team.' },
            S: { cn: '局部最优：可能花费大量时间优化一个不影响全局性能的函数。', en: 'Local Optima: Spending too much time optimizing non-critical functions.' },
            B: { cn: '只见树木：过于关注位运算级别的细节，有时会忘记系统整体的目标。', en: 'Missing Forests: Focusing on bit-level details, forgetting the system goal.' },
            C: { cn: '完美主义：为了代码的整洁，可能会重写还在正常工作的逻辑。', en: 'Perfectionism: Rewriting working logic just to make the code cleaner.' }
        },
        dailyRoutine: {
            title: { cn: '专注攻坚的一天', en: 'A Day of Hardcore Focus' },
            items: {
                cn: [
                    '09:30 - 打开 IDE，直接定位到昨天未解决的那个复杂 Bug。',
                    '11:00 - 深入阅读第三方库的源码，寻找性能瓶颈的根源。',
                    '15:00 - 完成了一个复杂算法的优化，将执行时间缩短了 50%。',
                    '18:00 - 提交代码前反复检查每一个变量命名，确保其精准无误。'
                ],
                en: [
                    '09:30 - Open IDE, jump straight to that complex Bug from yesterday.',
                    '11:00 - Deep dive into library source code to find performance bottlenecks.',
                    '15:00 - Optimized a complex algorithm, cutting execution time by 50%.',
                    '18:00 - Double-checking every variable name for precision before committing.'
                ]
            }
        },
        description: {
            cn: '你是一位<b>深藏不露</b>的技术高手。你对底层原理有着深刻的理解，擅长在比特与字节的世界里闪转腾挪。你不太喜欢空谈理论，更愿意用<b>高质量的代码</b>说话。在面对那些让别人头疼的复杂逻辑和性能瓶颈时，你总能独立找到突破口。你是团队中解决<b>硬核问题</b>的终极武器。',
            en: 'You are a <b>hidden ace</b>. With deep understanding of low-level principles, you master the world of bits and bytes. You dislike empty theory, preferring to speak via <b>high-quality code</b>. Facing complex logic and bottlenecks that baffle others, you find the breakthrough. You are the ultimate weapon for <b>hardcore problems</b>.'
        }
    },
    'ISBX': {
        title: { cn: '独行极客', en: 'Lone Geek' },
        color: '#8b5cf6', // Violet 500
        summary: { cn: '灵活的独立解题者。专注于用巧妙、非常规的手段快速解决问题。', en: 'Flexible independent solver. Focusing on solving problems quickly with clever, unconventional means.' },
        workMode: { cn: '独立思考破局点，不拘泥于既定规则，寻找最短的解决路径。', en: 'Finding independent breakthroughs, breaking rules to find the shortest path.' },
        value: { cn: '提供创造性的解决方案，打破常规思维。', en: 'Provides creative solutions, breaking conventional thinking.' },
        blindSpots: {
            I: { cn: '独狼风格：代码带有强烈的个人色彩，可能缺乏必要的注释和文档。', en: 'Lone Wolf: Code has strong personal style but lacks docs/comments.' },
            S: { cn: '造轮子：遇到问题倾向于自己写个工具解决，而不是寻找现成库。', en: 'Wheel Reinvention: Writing your own tools instead of using existing libraries.' },
            B: { cn: '缺少全貌：为了解决局部痛点引入了复杂的技巧，可能增加系统整体复杂度。', en: 'Context Blindness: Complex tricks for local pain points increasing overall complexity.' },
            X: { cn: '难以维护：使用了太多的“黑魔法”技巧，让后来的维护者感到头疼。', en: 'Hard to Maintain: Using too much "black magic" that confuses future maintainers.' }
        },
        dailyRoutine: {
            title: { cn: '奇思妙想的一天', en: 'A Day of Whimsy' },
            items: {
                cn: [
                    '10:00 - 觉得某个手动流程太繁琐，顺手写个脚本自动化处理。',
                    '14:00 - 遇到一个框架限制，用一种非官方的 Hack 手段绕过了它。',
                    '16:00 - 快速搭建一个原型来验证刚刚想到的一个点子。',
                    '20:00 - 调整自己的开发环境配置，追求极致的操作效率。'
                ],
                en: [
                    '10:00 - Process too slow? Wrote a script to automate it.',
                    '14:00 - Hit a framework limit. Bypassed it with an unofficial Hack.',
                    '16:00 - Rapidly built a prototype to test a sudden idea.',
                    '20:00 - Tweaking dotfiles, seeking ultimate operational efficiency.'
                ]
            }
        },
        description: {
            cn: '你是一位充满<b>创造力</b>的技术黑客。你不喜欢被条条框框束缚，善于在现有规则之外寻找捷径。你拥有极强的动手能力和独立解决问题的能力，对于那些棘手的、非标准的难题，你总能给出<b>意想不到</b>的解决方案。虽然你的方法有时显得“野路子”，但你的<b>效率和灵活性</b>往往能给团队带来惊喜。',
            en: 'You are a <b>creative</b> tech hacker. Hating restrictions, you find shortcuts outside rules. With strong hands-on skills, you provide <b>unexpected solutions</b> to tricky problems. While your methods can be "unorthodox", your <b>efficiency and flexibility</b> often surprise the team.'
        }
    },
    'IPTC': {
        title: { cn: '业务架构师', en: 'Business Architect' },
        color: '#f59e0b', // Amber 500
        summary: { cn: '具备战略眼光的技术专家。专注于设计能够完美支撑业务愿景的系统架构。', en: 'Tech expert with strategic vision. Focusing on designing architectures that perfectly support business visions.' },
        workMode: { cn: '独立思考业务与技术的结合点，规划能够适应未来业务发展的技术蓝图。', en: 'Aligning business/tech, planning blueprints adaptable to future business growth.' },
        value: { cn: '确保技术架构与业务战略的高度对齐。', en: 'Ensures high alignment between tech architecture and business strategy.' },
        blindSpots: {
            I: { cn: '闭门造车：可能凭借经验预判业务需求，而未与业务方充分核对。', en: 'Assumption: Pre-judging business needs via experience without sufficient sync.' },
            P: { cn: '忽略底座：过于关注业务功能的实现，可能在这个阶段忽视了基础设施的升级。', en: 'Ignoring Infra: Focusing too much on features, neglecting infra upgrades.' },
            T: { cn: '过度抽象：为了适配所有可能的业务模式，设计了过于复杂的配置系统。', en: 'Over-abstraction: Designing complex configs to fit all possible business models.' },
            C: { cn: '缺乏惊喜：方案可能过于稳健保守，仅仅满足了需求但没有技术亮点。', en: 'Lack of Surprise: Solutions too conservative, meeting needs but lacking tech highlights.' }
        },
        dailyRoutine: {
            title: { cn: '宏观规划的一天', en: 'A Day of Macro Planning' },
            items: {
                cn: [
                    '09:00 - 研究产品路线图，思考下个季度的技术储备重点。',
                    '11:00 - 拒绝了一个虽然技术很酷、但对核心业务价值不大的重构提议。',
                    '15:00 - 编写架构设计文档，定义领域模型以匹配业务概念。',
                    '18:00 - 思考现有的系统瓶颈是否会阻碍半年后的业务扩张。'
                ],
                en: [
                    '09:00 - Studying the Product Roadmap, planning next quarter\'s tech reserves.',
                    '11:00 - Rejected a "cool" refactor that adds little core business value.',
                    '15:00 - Writing architecture docs, defining Domain Models to match business concepts.',
                    '18:00 - Thinking: Will current bottlenecks hinder business expansion in 6 months?'
                ]
            }
        },
        description: {
            cn: '你是一位<b>懂业务的技术架构师</b>。你不仅关注代码怎么写，更关注代码为谁而写、为何而写。你拥有将模糊的业务愿景转化为清晰<b>技术蓝图</b>的能力。你能够站在战略的高度，独立评估技术投入的回报率，确保每一行代码都在为<b>业务价值</b>添砖加瓦。你是连接商业目标与技术实现的战略枢纽。',
            en: 'You are a <b>business-savvy architect</b>. You care about who and why you code for, not just how. You translate vague visions into clear <b>tech blueprints</b>. From a strategic height, you assess ROI, ensuring every line contributes to <b>business value</b>. You are the strategic hub connecting business goals and tech implementation.'
        }
    },
    'IPTX': {
        title: { cn: '愿景验证者', en: 'Vision Validator' },
        color: '#fbbf24', // Amber 400
        summary: { cn: '敏捷的独立验证者。专注于使用技术手段快速验证产品创意的可行性。', en: 'Agile independent validator. Focusing on quickly validating product ideas via tech reliability.' },
        workMode: { cn: '独立构建高保真原型，在资源投入最小化的情况下验证商业假设。', en: 'Building MVPs independently to validate hypotheses with minimal resources.' },
        value: { cn: '极大降低产品创新的技术试错成本。', en: 'Drastically reduces technical trial-and-error costs for innovation.' },
        blindSpots: {
            I: { cn: '自嗨模式：容易沉溺于实现有趣的功能细节，而忘了验证这是否是用户需要的。', en: 'Self-Indulgence: Getting lost in fun details, forgetting if users actually need them.' },
            P: { cn: '一次性代码：为了追求快速上线，写了很多难以维护的“胶水代码”。', en: 'Disposable Code: Writing hard-to-maintain glue code for speed.' },
            T: { cn: '落地困难：原型中使用的某些技术方案可能在生产环境无法大规模落地。', en: 'Hard Landing: Tech used in prototypes might not scale in production.' },
            X: { cn: '频繁变卦：今天想用 React，明天想用 Vue，技术选型过于随性。', en: 'Flip-flopping: Choosing tech too casually (React today, Vue tomorrow).' }
        },
        dailyRoutine: {
            title: { cn: '快速构建的一天', en: 'A Day of Rapid Build' },
            items: {
                cn: [
                    '10:00 - 拿到一个新的产品点子，立即思考用什么技术栈能最快实现。',
                    '13:00 - 复用现有的开源组件，用半天时间搭出一个可交互的 Demo。',
                    '16:00 - 将 Demo 部署到测试环境，邀请产品同事体验并收集反馈。',
                    '20:00 - 脑子里已经开始构思下一个 Demo 的技术实现了。'
                ],
                en: [
                    '10:00 - Got a new product idea. Thinking: What stack builds this fastest?',
                    '13:00 - Reusing open source components, built an interactive Demo in half a day.',
                    '16:00 - Deployed Demo to staging. Inviting PMs to test and feedback.',
                    '20:00 - Already engineering the implementation of the next Demo in your head.'
                ]
            }
        },
        description: {
            cn: '你是一位<b>行动力极强</b>的实战派工程师。你相信“空谈误国，实干兴邦”，只有做出来的东西才具有说服力。你擅长利用现有的技术积本快速搭建<b>最小可行性产品</b>，帮助团队在投入大规模开发前低成本地验证想法。虽然你的代码可能不够完美，但你的<b>速度和直觉</b>是团队在探索期最宝贵的财富。',
            en: 'You are a <b>high-action</b> pragmatic engineer. You believe "talk is cheap, show me the code". You excel at using existing blocks to build <b>MVPs</b> rapidly, helping the team validate ideas cheaply. Your code might not be perfect, but your <b>speed and intuition</b> are invaluable assets during exploration.'
        }
    },
    'IPBC': {
        title: { cn: '业务逻辑专家', en: 'Business Logic Expert' },
        color: '#059669', // Emerald 600
        summary: { cn: '严谨的业务实现者。专注于精确理解并实现复杂的业务逻辑与流程。', en: 'Rigorous business implementer. Focusing on accurately understanding and implementing complex business logic.' },
        workMode: { cn: '独立负责端到端的业务模块，确保逻辑正确、数据一致且流程闭环。', en: 'Owning E2E modules independently, ensuring logic, data consistency, and flow closure.' },
        value: { cn: '保障关键业务系统的稳健运行与逻辑零失误。', en: 'Guarantees stability and zero logic errors in critical systems.' },
        blindSpots: {
            I: { cn: '缺乏沟通：遇到需求不清时倾向于按自己的理解做，而不是去询问清楚。', en: 'Lack of Sync: Assuming requirements instead of clarifying when unclear.' },
            P: { cn: '短期视野：为了满足本次业务上线，在代码中硬编码了某些逻辑。', en: 'Short-sighted: Hardcoding logic to meet the current launch deadline.' },
            B: { cn: '逻辑迷宫：为了覆盖所有角落情况，写出了过于复杂的判断逻辑。', en: 'Logic Maze: Writing overly complex conditionals to cover every edge case.' },
            C: { cn: '拒绝重构：认为代码只要能跑通业务就是好代码，不愿改动。', en: 'Refusing Refactor: "If it works, don\'t touch it." Resisting changes.' }
        },
        dailyRoutine: {
            title: { cn: '严丝合缝的一天', en: 'A Seamless Day' },
            items: {
                cn: [
                    '09:30 - 分析需求文档，将业务规则转化为伪代码或流程图。',
                    '14:00 - 编写单元测试，覆盖业务逻辑的所有分支。',
                    '16:30 - 调试一个数据不一致的问题，通过日志追踪到具体的逻辑漏洞。',
                    '18:00 - 确保所有测试通过，对交付的代码质量充满信心。'
                ],
                en: [
                    '09:30 - Analyzing requirements, converting rules into pseudocode/flowcharts.',
                    '14:00 - Writing unit tests covering all branch paths (Happy & Unhappy).',
                    '16:30 - Debugging data inconsistency. Traced the logic hole via logs.',
                    '18:00 - All tests passed. Confident in the quality of the delivered code.'
                ]
            }
        },
        description: {
            cn: '你是一位<b>值得信赖</b>的全栈开发者。你对业务逻辑有着极其敏锐的洞察力，能够将复杂的现实世界规则准确地映射到代码世界中。你不仅关注技术实现，更关注数据的一致性和业务流程的完整性。你的工作风格<b>严谨细致</b>，经你手实现的系统很少出现逻辑错误。你是连接业务需求与技术实现的<b>坚实桥梁</b>。',
            en: 'You are a <b>trusted</b> fullstack dev. With keen insight into business logic, you map complex real-world rules to code accurately. You care about tech, but also data consistency and flow integrity. Your style is <b>rigorous and detailed</b>; logic errors are rare in your work. You are the <b>solid bridge</b> between requirements and implementation.'
        }
    },
    'IPBX': {
        title: { cn: '业务增效者', en: 'Business Booster' },
        color: '#10b981', // Emerald 500
        summary: { cn: '实用的工具创造者。专注于利用技术手段提升业务运作或开发的效率。', en: 'Pragmatic tool creator. Focusing on using tech to boost business or dev efficiency.' },
        workMode: { cn: '独立发现效率瓶颈，自发开发工具、脚本或自动化流程来解决问题。', en: 'Identifying bottlenecks independently, building tools/scripts/automation to solve them.' },
        value: { cn: '用技术手段消除重复劳动，实现降本增效。', en: 'Eliminates repetitive work with tech, cutting costs.' },
        blindSpots: {
            I: { cn: '用户体验差：开发的内部工具功能强大但界面简陋，其他人难以上手。', en: 'Bad UX: Internal tools are powerful but ugly, hard for others to use.' },
            P: { cn: '缺乏合规：为了追求效率，脚本可能绕过了必要的安全检查。', en: 'Non-compliance: Scripts might bypass security checks for speed.' },
            B: { cn: '补丁思维：倾向于写“胶水脚本”来粘合系统，而不是去优化系统本身。', en: 'Patching: Writing glue scripts instead of fixing the system itself.' },
            X: { cn: '工具泛滥：引入了太多的小众工具，增加了新人的学习负担。', en: 'Tool Bloat: Introducing too many niche tools, burdening new hires.' }
        },
        dailyRoutine: {
            title: { cn: '自动化的一天', en: 'A Day of Automation' },
            items: {
                cn: [
                    '10:00 - 发现客服要在三个后台系统间切来切去，决定写个插件聚合信息。',
                    '13:30 - 研究一个新的低代码平台，评估是否能加速简单的业务后台开发。',
                    '15:00 - 编写一个 Python 脚本，自动化处理每周例行的数据抓取任务。',
                    '17:30 - 看着脚本在终端里自动跑完，满意地提交了代码。'
                ],
                en: [
                    '10:00 - Saw support staff toggling 3 systems. Decided to write an aggregator plugin.',
                    '13:30 - Evaluating a low-code platform to speed up simple admin dashboard dev.',
                    '15:00 - Writing a Python script to automate weekly data scraping tasks.',
                    '17:30 - Watching the script finish in the terminal. Committed with satisfaction.'
                ]
            }
        },
        description: {
            cn: '你是一位极其<b>务实</b>的技术专家，眼在你的眼里，任何重复的劳动都是对生命的浪费。你善于<b>发现问题</b>，并能迅速利用现有的技术组合开发出解决问题的工具。你不仅服务于最终用户，也通过技术手段服务于身边的同事，帮助大家从繁琐的事务中解脱出来。你是团队中的<b>效率倍增器</b>，用自动化思维重塑着工作流程。',
            en: 'You are a highly <b>pragmatic</b> tech expert. To you, repetitive work is a waste of life. You excel at <b>spotting problems</b> and quickly building tools to solve them. You serve not just users but also colleagues, freeing everyone from tedious tasks. You are the <b>efficiency multiplier</b>, reshaping workflows with automation thinking.'
        }
    },
    'ESTC': {
        title: { cn: '统一架构师', en: 'Unified Architect' },
        color: '#6366f1', // Indigo 500
        summary: { cn: '协作的规范制定者。专注于建立团队的技术标准、流程与最佳实践。', en: 'Collaborative standard setter. Focusing on establishing team tech standards, processes, and best practices.' },
        workMode: { cn: '主要通过评审、制定规范和指导他人来推动技术治理。', en: 'Driving tech governance via Reviews, defining specs, and mentoring.' },
        value: { cn: '消除团队协作中的摩擦，保证整体技术产出的一致性。', en: 'Eliminates collaboration friction, ensuring consistent tech output.' },
        blindSpots: {
            E: { cn: '会议过多：花费大量时间在对齐会议上，导致自己写代码的时间很少。', en: 'Too Many Meetings: Spending time aligning, leaving little time to code.' },
            S: { cn: '强行统一：要求所有项目使用同一套框架，忽略了小项目的特殊性。', en: 'Forced Unity: Demanding one framework for all, ignoring small projects.' },
            T: { cn: '流程繁琐：设立了过于严格的代码准入机制，可能拖慢开发节奏。', en: 'Complex Process: Strict gatekeeping slowing down dev speed.' },
            C: { cn: '扼杀冒进：可能会以“不符合规范”为由拒绝一些有风险的技术创新。', en: 'Risk Aversion: Rejecting risky innovations for "non-compliance".' }
        },
        dailyRoutine: {
            title: { cn: '标准化的一天', en: 'A Standardized Day' },
            items: {
                cn: [
                    '09:00 - 主持技术评审会，确保新项目的架构设计符合团队规范。',
                    '11:00 - 维护内部技术文档，更新 API 定义标准。',
                    '14:00 - 检查 CI 流水线报告，督促未通过代码规约的同事修改代码。',
                    '16:30 - 向团队解释为什么要禁止在业务层直接写 SQL，强调分层的重要性。'
                ],
                en: [
                    '09:00 - Hosting tech review, ensuring new project architecture meets specs.',
                    '11:00 - Maintaining internal Wiki, updating API standards.',
                    '14:00 - Checking CI reports, urging colleagues to fix style violations.',
                    '16:30 - Explaining why raw SQL in the service layer is banned, emphasizing layering.'
                ]
            }
        },
        description: {
            cn: '你是一位具有<b>领导力</b>的技术专家。你明白在大型团队中，统一的规范比个体的才华更重要。你善于通过<b>沟通与协作</b>来达成技术共识，致力于消除技术栈的混乱。你不仅是架构的设计者，更是规则的守护者。你的工作确保了团队能够像一支训练有素的军队一样，<b>高效、一致</b>地进行大规模软件开发。',
            en: 'You are a tech expert with <b>leadership</b>. You know consistent specs outweigh individual talent in large teams. You build consensus via <b>communication</b>, eliminating stack chaos. You are not just an architect, but a guardian of rules. Your work ensures the team fights like a disciplined army, delivering software <b>efficiently and consistently</b>.'
        }
    },
    'ESTX': {
        title: { cn: '技术布道师', en: 'Tech Evangelist' },
        color: '#8b5cf6', // Violet 500
        summary: { cn: '热情的变革推动者。专注于引入新技术并激励团队进行技术升级。', en: 'Passionate change agent. Focusing on introducing new tech and inspiring team upgrades.' },
        workMode: { cn: '组织技术分享、黑客松，在团队内部营造活跃的技术氛围。', en: 'Organizing sharing sessions, hackathons, fostering a lively tech atmosphere.' },
        value: { cn: '激活团队的技术热情，防止技术栈老化。', en: 'Validates team tech passion, preventing stack aging.' },
        blindSpots: {
            E: { cn: '光说不练：在会议上侃侃而谈新架构的好处，但自己不参与迁移的脏活。', en: 'All Talk: Preaching new arch benefits but avoiding the dirty migration work.' },
            S: { cn: '忽略业务：为了用新技术而重构，可能干扰了业务功能的正常迭代。', en: 'Ignoring Business: Refactoring just to use new tech, disrupting business.' },
            T: { cn: '宏大叙事：描绘的微服务蓝图太宏大，团队现有的运维能力跟不上。', en: 'Grand Narrative: Microservice blueprints too grand for current Ops capacity.' },
            X: { cn: '疲于奔命：频繁推动技术栈升级，让大家感到疲惫。', en: 'Hyping: Constantly pushing upgrades, exhausting the team.' }
        },
        dailyRoutine: {
            title: { cn: '充满激情的一天', en: 'A Passionate Day' },
            items: {
                cn: [
                    '10:00 - 在周会上演示一个新的微服务框架，展示它如何提升开发体验。',
                    '12:30 - 午餐时和同事激辩 Serverless 的优缺点。',
                    '15:00 - 组织内部的技术分享会，邀请不同小组分享最佳实践。',
                    '17:00 - 帮助兄弟团队排查问题，顺便安利了更好的监控工具。'
                ],
                en: [
                    '10:00 - Demoing a new microservice framework at weekly sync, showing DX gains.',
                    '12:30 - Heated lunch debate on Serverless pros/cons.',
                    '15:00 - Organizing internal tech talk, inviting squads to share best practices.',
                    '17:00 - Helping a sibling team debug, subtly pitching a better monitoring tool.'
                ]
            }
        },
        description: {
            cn: '你是一位<b>充满感召力</b>的技术领袖。你对技术充满热情，并且这种热情能够感染身边的人。你善于通过<b>分享与交流</b>打破信息孤岛，促进知识在团队间的流动。你不满足于现状，总是寻找更好的工具和方法。你是团队的<b>技术雷达</b>和催化剂，带领大家不断走出舒适区，拥抱技术的未来。',
            en: 'You are a <b>charismatic</b> tech leader. Your passion for tech is infectious. You break silos via <b>sharing and communication</b>, promoting knowledge flow. Never satisfied with the status quo, you seek better tools. You are the team\'s <b>tech radar</b> and catalyst, leading everyone out of comfort zones to embrace the future.'
        }
    },
    'ESBC': {
        title: { cn: '技术护航员', en: 'Tech Guardian' },
        color: '#3b82f6', // Blue 500
        summary: { cn: '耐心的质量守护者。专注于通过辅导和Code Review提升团队整体水平。', en: 'Patient quality guardian. Focusing on improving team level via mentoring and Code Review.' },
        workMode: { cn: '投入大量精力进行代码评审、结对编程，手把手指导初级工程师。', en: 'Heavy investment in PR reviews, pairing, and mentoring juniors.' },
        value: { cn: '保障代码质量底线，培养团队后备人才。', en: 'Guarantees code quality baseline, cultivates talent pool.' },
        blindSpots: {
            E: { cn: '好为人师：在评审意见中语气过于强硬，可能打击新人的积极性。', en: 'Preachy: Harsh tone in reviews might discourage juniors.' },
            S: { cn: '细节纠结：对代码格式、命名等细节要求过高，有时影响了上线速度。', en: 'Nitpicking: Excessively demanding on format/naming, slowing launches.' },
            B: { cn: '只见树叶：在Review时过于关注语法细节，忽略了更重要的架构逻辑。', en: 'Missing Woods: Focusing on syntax, missing architectural logic.' },
            C: { cn: '保守主义：对新人提出的创新写法持怀疑态度，倾向于传统的写法。', en: 'Conservatism: Skeptical of new styles, preferring traditional ways.' }
        },
        dailyRoutine: {
            title: { cn: '传道授业的一天', en: 'A Day of Mentoring' },
            items: {
                cn: [
                    '09:30 - 仔细阅读昨晚提交的所有 PR，每一行变动都不放过。',
                    '11:00 - 响应新人的求助，坐在他旁边进行一小时的结对编程。',
                    '14:00 - 修复一个导致测试不稳定的环境问题，保障大家开发顺畅。',
                    '16:30 - 完善团队的新人入职文档，总结常见坑点。'
                ],
                en: [
                    '09:30 - Scrutinizing all PRs from last night. Not missing a single line.',
                    '11:00 - Answering a junior\'s call. Pairing for an hour.',
                    '14:00 - Fixing a flaky test env issue to ensure smooth dev for everyone.',
                    '16:30 - Polishing Onboarding docs, summarizing common pitfalls.'
                ]
            }
        },
        description: {
            cn: '你是一位<b>亦师亦友</b>的技术骨干。你不仅关注自己写的代码，更关注团队整体输出的代码质量。你愿意花时间去<b>培养他人</b>，通过耐心的指导和严格的评审，帮助团队成员成长。你精通各种编码规范和最佳实践，是团队质量的守门员。你的存在，让团队的每一次交付都让人<b>放心</b>。',
            en: 'You are a <b>mentor-like</b> engineer. You care about the team\'s code quality, not just yours. Willing to <b>cultivate others</b>, you help members grow via patient guidance and strict reviews. Mastering specs and best practices, you are the quality goalkeeper. You make every delivery <b>trustworthy</b>.'
        }
    },
    'ESBX': {
        title: { cn: '技术催化师', en: 'Tech Catalyst' },
        color: '#8b5cf6', // Violet 500
        summary: { cn: '协作的问题解决者。专注于带领团队攻克突发难题或未知挑战。', en: 'Collaborative problem solver. Focusing on leading the team to tackle emergencies or unknown challenges.' },
        workMode: { cn: '在危机时刻挺身而出，组织多人协作排查，快速恢复系统。', en: 'Stepping up in crises, organizing collaborative debugging, restoring systems fast.' },
        value: { cn: '解决团队面临的阻碍，保障系统的韧性。', en: 'Removes blockers, ensures system resilience.' },
        blindSpots: {
            E: { cn: '过度讨论：面对故障可能喜欢拉大会议讨论，而不是先止血。', en: 'Over-Discussion: Calling big meetings during outages instead of stopping the bleeding.' },
            S: { cn: '临时方案：带头打了很多“补丁”，事后往往忘了将其优化为长期方案。', en: 'Band-aid Fixes: Leading patches, forgetting to optimize later.' },
            B: { cn: '局部视角：救火时可能只顾解决眼前的报错，没考虑到对上下游的影响。', en: 'Local View: Fixing the visible error but ignoring upstream/downstream impact.' },
            X: { cn: '工具狂热：引入了复杂的调试工具，有时工具本身比问题还难搞。', en: 'Tool Mania: Introducing complex debug tools that are harder than the bug.' }
        },
        dailyRoutine: {
            title: { cn: '并在作战的一天', en: 'A Day on the Battlefield' },
            items: {
                cn: [
                    '10:00 - 线上出现异常报警，迅速拉起应急响应小组。',
                    '13:30 - 组织大家复盘刚刚的故障，集思广益寻找改进措施。',
                    '15:30 - 引入一个新的全链路追踪工具，演示如何用它定位问题。',
                    '17:00 - 汇总各方的排查信息，向团队通报问题的最终结论。'
                ],
                en: [
                    '10:00 - Production alarm. Spinning up the War Room immediately.',
                    '13:30 - Organizing post-mortem, brainstorming improvements.',
                    '15:30 - Introducing a new distributed tracing tool, demoing how to pinpoint issues.',
                    '17:00 - Aggregating debug info, announcing the final conclusion to the team.'
                ]
            }
        },
        description: {
            cn: '你是一位善于<b>协作攻坚</b>的技术专家。你享受与人并肩作战解决问题的过程，越是棘手的情况越能激发你的斗志。你擅长<b>调动资源</b>，将合适的人放在合适的位置上共同解决难题。你精通故障排查和系统调优，是团队在危机时刻的主心骨。你是团队中的<b>粘合剂</b>，将大家团结在一起应对挑战。',
            en: 'You are a tech expert excelling at <b>collaborative conquest</b>. You enjoy solving problems side-by-side; tough situations ignite your spirit. You maximize resources, putting the right people on the problem. Mastering debugging and tuning, you are the backbone in crises. You are the <b>glue</b> uniting everyone against challenges.'
        }
    },
    'EPTC': {
        title: { cn: '体系构建者', en: 'System Builder' },
        color: '#d97706', // Amber 600
        summary: { cn: '跨界的规则制定者。专注于构建能够支撑复杂业务流的系统规范。', en: 'Cross-boundary rule setter. Focusing on building system specs supporting complex business flows.' },
        workMode: { cn: '与产品、运营深度协作，将复杂的实体关系抽象为清晰的技术模型。', en: 'Collaborating with PM/Ops, abstracting complex entities into clear tech models.' },
        value: { cn: '消除技术与业务之间的认知鸿沟，降低系统复杂度。', en: 'Bridges tech-business gaps, reducing system complexity.' },
        blindSpots: {
            E: { cn: '流程僵化：制定的开发流程过于繁琐，被业务方抱怨响应慢。', en: 'Rigid Process: Dev process too complex, business complains about speed.' },
            P: { cn: '模型洁癖：为了模型的通用性，拒绝了一些特殊的业务需求。', en: 'Model Purity: Rejecting special business needs for model genericity.' },
            T: { cn: '过度抽象：设计的中台系统太难接，业务方需要写大量适配代码。', en: 'Over-abstraction: Platform too hard to integrate, requiring heavy adapter code.' },
            C: { cn: '响应迟缓：坚持要先谈清楚所有规则再动手，不够敏捷。', en: 'Sluggishness: Insisting on clarifying all rules before starting. Not agile.' }
        },
        dailyRoutine: {
            title: { cn: '构建秩序的一天', en: 'A Day of Order' },
            items: {
                cn: [
                    '09:00 - 与产品经理讨论新业务，将其映射到现有的“状态机”模型中。',
                    '11:00 - 统一了全公司的“订单状态”定义，消除了歧义。',
                    '14:30 - 梳理跨团队的接口协作流程，明确了上下游的权责边界。',
                    '17:00 - 评审业务中台的 API 定义，确保其具备足够的扩展性。'
                ],
                en: [
                    '09:00 - Discussing new biz with PM, mapping it to the existing State Machine.',
                    '11:00 - Unified "Order Status" definitions company-wide, eliminating ambiguity.',
                    '14:30 - Refined cross-team API collaboration flows, clarifying responsibilities.',
                    '17:00 - Reviewing Business Platform API, ensuring scalability.'
                ]
            }
        },
        description: {
            cn: '你是一位<b>通晓业务</b>的架构师。你致力于在混乱的业务需求中建立<b>秩序</b>。你善于通过与不同角色的沟通，识别出业务的本质模式，并将其固化为技术平台或规范。你的工作不仅是解决当下的业务问题，更是构建一个能够支撑业务快速扩张的<b>坚实骨架</b>。你是技术团队中懂业务、业务团队中懂技术的关键人物。',
            en: 'You are a <b>business-savvy</b> architect. Dedicated to building <b>order</b> out of chaotic requirements. By communicating with diverse roles, you identify patterns and solidify them into platforms or specs. You don\'t just solve today\'s problems; you build a <b>skeleton</b> for expansion. You are the key person who knows business in tech, and tech in business.'
        }
    },
    'EPTX': {
        title: { cn: '创新催化师', en: 'Innovation Catalyst' },
        color: '#f59e0b', // Amber 500
        summary: { cn: '协作的敏捷推动者。专注于带领团队通过快速实验探索新的业务机会。', en: 'Collaborative agile driver. Focusing on leading the team to explore business opportunities via rapid experiments.' },
        workMode: { cn: '组织敏捷小组，快速迭代产品功能，用数据验证想法。', en: 'Organizing Squads, iterating features fast, validating ideas with data.' },
        value: { cn: '加速产品-技术迭代循环，寻找新的增长点。', en: 'Accelerates Product-Tech loops, finding new growth points.' },
        blindSpots: {
            E: { cn: '过度发散：脑暴会议开得很热闹，但缺乏具体的执行计划。', en: 'Too Divergent: Noisy brainstorming, no execution plan.' },
            P: { cn: '战线过长：同时让团队开了太多新坑，导致精力分散。', en: 'Over-extension: Opening too many projects, diluting focus.' },
            T: { cn: '技术黑洞：提出的创意技术实现成本极高，给团队带来巨大压力。', en: 'Tech Black Hole: Ideas with huge tech costs, pressuring the team.' },
            X: { cn: '缺乏定力：遇到困难就想换方向，导致项目频繁重构。', en: 'Lack of Grit: Changing direction at trouble, causing frequent refactors.' }
        },
        dailyRoutine: {
            title: { cn: '激发灵感的一天', en: 'A Day of Inspiration' },
            items: {
                cn: [
                    '10:00 - 组织设计、开发和测试一起进行需求梳理。',
                    '12:00 - 和大家一起吃午饭，聊出了一个优化用户体验的新点子。',
                    '15:00 - 带领突击小队上线了一个 A/B 测试实验。',
                    '17:30 - 鼓励大家关注实验数据：“无论结果如何，我们都学到了东西。”'
                ],
                en: [
                    '10:00 - Story Grooming with Design, Dev, and QA.',
                    '12:00 - Lunch brainstorm. Came up with a UX optimization idea.',
                    '15:00 - Led the squad to launch an A/B test.',
                    '17:30 - Encouraging focus on data: "Win or lose, we learned something."'
                ]
            }
        },
        description: {
            cn: '你是一位<b>充满活力</b>的技术领队。你不仅关注代码交付，更关注团队能否快速响应市场变化。你善于<b>营造氛围</b>，鼓励团队成员提出想法并快速尝试。你推崇“小步快跑，快速试错”的理念，致力于消除研发流程中的浪费。你是团队的<b>发动机</b>，驱动着产品和技术的高速旋转。',
            en: 'You are a <b>vibrant</b> tech lead. You care about responsiveness to market, not just code delivery. Creating an atmosphere, you encourage ideas and rapid trials. promoting "Small Steps, Fast Fail", you eliminate waste in dev flows. You are the <b>engine</b> driving the high-speed rotation of product and tech.'
        }
    },
    'EPBC': {
        title: { cn: '业务交付基石', en: 'Delivery Cornerstone' },
        color: '#10b981', // Emerald 500
        summary: { cn: '可靠的团队中坚。专注于与他人协作，稳定、高质量地交付业务需求。', en: 'Reliable team backbone. Focusing on collaborating to deliver business needs stably and with quality.' },
        workMode: { cn: '积极沟通确认需求，严谨执行开发与测试，确保零故障上线。', en: 'Communicating requirements, executing dev/test rigorously, ensuring zero-fault launches.' },
        value: { cn: '保障团队开发的确定性与交付信誉。', en: 'Guarantees development certainty and delivery reputation.' },
        blindSpots: {
            E: { cn: '过度承诺：不好意思拒绝产品经理的加塞需求，导致自己加班。', en: 'Over-promising: Can\'t say no to PM\'s ad-hoc requests, leading to overtime.' },
            P: { cn: '缺乏质疑：对需求照单全收，哪怕有些设计不合逻辑也照做。', en: 'Lack of Pushback: Implementing illogical designs without question.' },
            B: { cn: '机械执行：只关注把自己模块的代码写完，不关心整体业务价值。', en: 'Robotic Execution: Finishing code, ignoring overall business value.' },
            C: { cn: '温水青蛙：习惯了舒适区，对团队引入的新流程表现出消极抵抗。', en: 'Comfort Zone: Passive resistance to new processes.' }
        },
        dailyRoutine: {
            title: { cn: '稳健的一天', en: 'A Steady Day' },
            items: {
                cn: [
                    '09:15 - 准时参加每日站会，清晰同步进度和风险。',
                    '10:00 - 主动找产品经理确认一个模糊的交互逻辑。',
                    '14:00 - 配合测试同事修复 Bug，并补充了相关的单元测试。',
                    '17:30 - 确保今日计划的任务全部完成，代码合并主分支。'
                ],
                en: [
                    '09:15 - Daily standup on time. Syncing progress and risks.',
                    '10:00 - Proactively clarifying fuzzy UX logic with PM.',
                    '14:00 - Fixing bugs with QA, adding unit tests.',
                    '17:30 - Ensuring all planned tasks are done, code merged to main.'
                ]
            }
        },
        description: {
            cn: '你是一位<b>极其靠谱</b>的协作者。在团队中，你是那个让大家感到安心的存在。你从不掉链子，凡是承诺的事情一定会做到。你善于<b>沟通</b>，能够准确理解需求的意图，并通过扎实的技术将其实现。你可能不会总提出惊天动地的想法，但你的<b>稳定性</b>是团队能够持续前行的压舱石。',
            en: 'You are a <b>highly reliable</b> collaborator. You bring peace of mind to the team. You never drop the ball; promises are kept. Good at <b>communication</b>, you grasp intent and implement it solidly. You might not always have earth-shattering ideas, but your <b>stability</b> is the anchor keeping the team moving.'
        }
    },
    'EPBX': {
        title: { cn: '增长协作者', en: 'Growth Collaborator' },
        color: '#84cc16', // Lime 500
        summary: { cn: '数据的敏锐观察者。专注于通过技术和数据手段驱动业务增长。', en: 'Keen data observer. Focusing on driving business growth via tech and data.' },
        workMode: { cn: '与业务紧密配合，快速实施增长实验，用数据指导决策。', en: 'Partnering with business, implementing growth hacks fast, guiding decisions with data.' },
        value: { cn: '用技术手段直接提升业务指标，实现降本增效。', en: 'Directly boosts business metrics and efficiency via tech.' },
        blindSpots: {
            E: { cn: '数据噪音：对微小的数据波动过度反应，干扰团队判断。', en: 'Data Noise: Overreacting to minor data fluctuations, distracting the team.' },
            P: { cn: '缺乏深度：为了快速上线实验，写了很多“一次性代码”。', en: 'Lack of Depth: Writing "disposable code" for speed.' },
            B: { cn: '相关非因果：错误解读数据，可能会误导业务优化的方向。', en: 'False Causality: Misinterpreting data, misleading optimization.' },
            X: { cn: '实验狂魔：为了做实验而做实验，甚至干扰了核心业务流程。', en: 'Experiment Mania: Experiments disrupting core flows.' }
        },
        dailyRoutine: {
            title: { cn: '数据驱动的一天', en: 'A Data-Driven Day' },
            items: {
                cn: [
                    '09:30 - 查看数据大盘，发现昨天的优化策略让转化率提升了 5%。',
                    '11:00 - 和运营同事讨论如何用技术手段自动化触达用户。',
                    '15:00 - 快速开发一个工具，打通了 CRM 和营销系统的数据。',
                    '17:30 - 在群里用数据报表说话，证明了技术投入的价值。'
                ],
                en: [
                    '09:30 - Checking the dashboard. Yesterday\'s strategy boosed conversion by 5%.',
                    '11:00 - Discussing with Ops on automating user reach via tech.',
                    '15:00 - Rapidly developing a tool to connect CRM and Marketing data.',
                    '17:30 - Speaking with data reports in chat, proving the value of tech investment.'
                ]
            }
        },
        description: {
            cn: '你是一位<b>懂增长</b>的技术专家。你不再局限于被动地接收需求，而是主动思考如何用技术手段扩大业务成果。你精通数据分析、自动化工具和营销技术，能够发现业务流程中的低效环节并加以改进。你的工作直接与<b>业务价值</b>挂钩。你是团队中那个能帮公司<b>赚钱</b>和<b>省钱</b>的人。',
            en: 'You are a <b>growth-savvy</b> tech expert. Not satisfied with passive receiving, you actively think how tech scales business. Mastering analytics, automation, and MarTech, you improve inefficiencies. Your work links directly to <b>business value</b>. You are the one who helps the company <b>make money</b> and <b>save money</b>.'
        }
    }
};
