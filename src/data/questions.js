export const questions = [
  // I vs E (Collaboration)
  {
    id: 'ie_1',
    dimension: 'collaboration',
    text: { cn: '场景： 团队的技术讨论会上，对一个问题的解决方案争论不休。', en: 'Scenario: Heated debate on a solution during a team tech discussion.' },
    options: [
      { value: 'I', text: { cn: '先倾听各方观点，会后自己独立思考，再私下找负责人沟通。', en: 'Listen first, think independently later, then talk to the lead privately.' } },
      { value: 'E', text: { cn: '积极参与讨论，当场提出自己的观点并尝试说服他人或达成共识。', en: 'Participate actively, state your point, and try to reach consensus on the spot.' } }
    ]
  },
  {
    id: 'ie_2',
    dimension: 'collaboration',
    text: { cn: '场景： 接到一个复杂且富有挑战性的新任务。', en: 'Scenario: Received a complex and challenging new task.' },
    options: [
      { value: 'I', text: { cn: '感到兴奋，希望能自己独立负责，从头到尾攻克它。', en: 'Excited, hope to take charge independently and conquer it from start to finish.' } },
      { value: 'E', text: { cn: '感到兴奋，希望和几位同事一起合作，脑暴出最棒的方案。', en: 'Excited, hope to collaborate with colleagues and brainstorm the best solution.' } }
    ]
  },
  {
    id: 'ie_3',
    dimension: 'collaboration',
    text: { cn: '场景： 在编码时遇到了一个棘手的技术难题，卡住了。', en: 'Scenario: Stuck on a tricky technical problem while coding.' },
    options: [
      { value: 'I', text: { cn: '先自己查资料、看文档、调试代码，尝试独立解决。', en: 'Search docs, debug, and try to solve it independently first.' } },
      { value: 'E', text: { cn: '马上起身或发消息，找一位可能的专家同事一起讨论看看。', en: 'Immediately aks a colleague or expert to discuss it.' } }
    ]
  },
  {
    id: 'ie_4',
    dimension: 'collaboration',
    text: { cn: '场景： 团队计划引入一项新技术。', en: 'Scenario: The team plans to introduce a new technology.' },
    options: [
      { value: 'I', text: { cn: '自己先花时间深入研究，形成自己的判断后，再与团队分享。', en: 'Research deeply alone, form a judgment, then share with the team.' } },
      { value: 'E', text: { cn: '立即组织一次会议或讨论，和大家一起探索这项技术的优劣。', en: 'Immediately organize a meeting to explore pros and cons together.' } }
    ]
  },
  {
    id: 'ie_5',
    dimension: 'collaboration',
    text: { cn: '场景： 完成一项任务后，如何确认工作质量？', en: 'Scenario: How to verify work quality after finishing a task?' },
    options: [
      { value: 'I', text: { cn: '自己进行多轮细致的测试和Review，确信无误后再提交。', en: 'Perform detailed self-testing and review until confident, then submit.' } },
      { value: 'E', text: { cn: '更倾向于请同事帮忙进行代码评审或测试，相信集体的眼光。', en: 'Prefer asking colleagues for code review or testing, trusting the collective eye.' } }
    ]
  },
  {
      id: 'ie_6',
      dimension: 'collaboration',
      text: { cn: '场景： 工作中学习新知识的主要方式是？', en: 'Scenario: Main way of learning new knowledge at work?' },
      options: [
        { value: 'I', text: { cn: '自己找教程、看源码、做个人项目来练习。', en: 'Tutorials, source code reading, and personal projects.' } },
        { value: 'E', text: { cn: '喜欢和别人结对学习、参加技术分享会、和同事讨论。', en: 'Pair learning, tech talks, and discussing with colleagues.' } }
      ]
  },
  {
      id: 'ie_7',
      dimension: 'collaboration',
      text: { cn: '场景： 如何安排一个理想的工作日？', en: 'Scenario: An ideal workday arrangement?' },
      options: [
        { value: 'I', text: { cn: '希望有大量不被打扰的“静默”时间，能专注沉浸在自己的任务里。', en: 'Lots of uninterrupted "quiet" time to immerse in tasks.' } },
        { value: 'E', text: { cn: '希望有大量的互动时间，能和同事讨论、开会、配对编程。', en: 'Lots of interaction time, discussions, meetings, pair programming.' } }
      ]
  },
  {
      id: 'ie_8',
      dimension: 'collaboration',
      text: { cn: '场景： 在团队中，你更享受的角色是？', en: 'Scenario: Preferred role in the team?' },
      options: [
        { value: 'I', text: { cn: '某个关键模块的深度专家，大家有相关问题会来咨询你。', en: 'Deep expert of a key module, consulted for related issues.' } },
        { value: 'E', text: { cn: '团队信息的连接器，促进不同成员间的沟通与协作。', en: 'Connector of team information, facilitating communication and collaboration.' } }
      ]
  },
  {
      id: 'ie_9',
      dimension: 'collaboration',
      text: { cn: '场景： 项目复盘时，你认为最有效的方式是？', en: 'Scenario: Most effective way for project retrospective?' },
      options: [
        { value: 'I', text: { cn: '自己先书面总结得失，再与团队同步。', en: 'Written summary of pros/cons by yourself first, then sync with team.' } },
        { value: 'E', text: { cn: '直接召开复盘会议，大家口头畅所欲言，碰撞想法。', en: 'Direct meeting where everyone speaks freely and brainstorms.' } }
      ]
  },
  {
      id: 'ie_10',
      dimension: 'collaboration',
      text: { cn: '场景： 当你有一个改进工作效率的新想法时，你会？', en: 'Scenario: You have a new idea to improve efficiency.' },
      options: [
        { value: 'I', text: { cn: '先自己默默做出一个原型或方案，看到效果后再提出。', en: 'Silently build a prototype, propose after seeing results.' } },
        { value: 'E', text: { cn: '立即找相关同事聊聊这个想法，收集反馈并完善它。', en: 'Talk to colleagues immediately, collect feedback to refine it.' } }
      ]
  },
  {
      id: 'ie_11',
      dimension: 'collaboration',
      text: { cn: '场景： 公司组织了一场可自愿参加的技术沙龙。', en: 'Scenario: Optional tech salon organized by the company.' },
      options: [
        { value: 'I', text: { cn: '更倾向于自己去听，偶尔和讲者交流。', en: 'Prefer going alone, occasionally talking to the speaker.' } },
        { value: 'E', text: { cn: '肯定会叫上几个同事一起去，并会主动和周围的人交流。', en: 'Go with colleagues and actively mingle with others.' } }
      ]
  },
  {
      id: 'ie_12',
      dimension: 'collaboration',
      text: { cn: '场景： 你对“结对编程”的看法更接近？', en: 'Scenario: View on "Pair Programming"?' },
      options: [
        { value: 'I', text: { cn: '必要时可用，但长期而言会影响我的专注度和工作效率。', en: 'Useful when needed, but affects focus/efficiency long-term.' } },
        { value: 'E', text: { cn: '非常喜欢，它能产生更好的思路，减少错误，并促进知识共享。', en: 'Love it, generates better ideas, fewer errors, promotes sharing.' } }
      ]
  },
  {
      id: 'ie_13',
      dimension: 'collaboration',
      text: { cn: '场景： 在做出一个重要的技术决策前，你倾向于？', en: 'Scenario: Before making an important technical decision?' },
      options: [
        { value: 'I', text: { cn: '自己权衡利弊，做出决定并为此负责。', en: 'Weigh pros/cons yourself, decide and take responsibility.' } },
        { value: 'E', text: { cn: '咨询团队成员的意见，基于共识做出决定。', en: 'Consult team members, decide based on consensus.' } }
      ]
  },
  {
      id: 'ie_14',
      dimension: 'collaboration',
      text: { cn: '场景： 哪种认可方式让你更有成就感？', en: 'Scenario: Which recognition gives more sense of achievement?' },
      options: [
        { value: 'I', text: { cn: '“这个难题居然被你一个人搞定了，太厉害了！”', en: '"Amazing that you solved this hard problem all by yourself!"' } },
        { value: 'E', text: { cn: '“你们团队合作得真默契，项目完成得太出色了！”', en: '"Your team cooperation was great, excellent project completion!"' } }
      ]
  },
  {
      id: 'ie_15',
      dimension: 'collaboration',
      text: { cn: '场景： 项目间隙的一段空闲时间，你倾向于？', en: 'Scenario: Free time between projects?' },
      options: [
        { value: 'I', text: { cn: '自己看看技术文档、学点新东西，或者整理一下个人代码。', en: 'Read docs, learn something new, or organize personal code.' } },
        { value: 'E', text: { cn: '和同事聊聊天，组织一些团队建设或技术分享活动。', en: 'Chat with colleagues, organize teambuilding or tech sharing.' } }
      ]
  },

  // S vs P (Drive)
  {
      id: 'sp_1',
      dimension: 'drive',
      text: { cn: '场景： 评审同事的代码时，您会最先关注什么？', en: 'Scenario: Reviewing a colleague\'s code, what do you look at first?' },
      options: [
        { value: 'S', text: { cn: '代码的性能、可读性、架构是否优雅，是否符合技术规范。', en: 'Performance, readability, architectural elegance, standards.' } },
        { value: 'P', text: { cn: '功能逻辑是否正确，是否完美满足了用户需求和产品定义。', en: 'Correct logic, meeting user needs and product definition.' } }
      ]
  },
  {
      id: 'sp_2',
      dimension: 'drive',
      text: { cn: '场景： 需要为一个新功能进行技术选型，您更看重？', en: 'Scenario: Tech stack selection for a new feature?' },
      options: [
        { value: 'S', text: { cn: '技术的成熟度、社区活跃度、性能指标以及与现有架构的契合度。', en: 'Maturity, community, performance, architectural fit.' } },
        { value: 'P', text: { cn: '该技术能否帮助我们快速实现、验证业务假设，并灵活应对未来需求变化。', en: 'Speed of implementation, business validation, flexibility for changes.' } }
      ]
  },
  {
      id: 'sp_3',
      dimension: 'drive',
      text: { cn: '场景： 在开发过程中，什么会让您最有成就感？', en: 'Scenario: What gives you most achievement during development?' },
      options: [
        { value: 'S', text: { cn: '设计了一个极其优雅的解决方案，或者将系统性能优化了X%。', en: 'Designing an elegant solution or optimizing performance significantly.' } },
        { value: 'P', text: { cn: '看到自己开发的功能被大量用户使用并收到积极反馈。', en: 'Seeing the feature used by many users with positive feedback.' } }
      ]
  },
  {
      id: 'sp_4',
      dimension: 'drive',
      text: { cn: '场景： 面对一个“技术债务”，您的看法更接近？', en: 'Scenario: Attitude towards "Tech Debt"?' },
      options: [
        { value: 'S', text: { cn: '如鲠在喉，必须找时间重构，否则会影响未来的开发效率和系统稳定。', en: 'Must be refactored, otherwise it hinders efficiency and stability.' } },
        { value: 'P', text: { cn: '评估其对当前业务发展的影响，如果不严重，可以优先迭代新功能。', en: 'Assess business impact; if low, prioritize new features.' } }
      ]
  },
  {
      id: 'sp_5',
      dimension: 'drive',
      text: { cn: '场景： 在计划一次系统升级或重构时，您的主要理由是？', en: 'Scenario: Main reason for system upgrade/refactor?' },
      options: [
        { value: 'S', text: { cn: '当前的架构/技术已经陈旧，存在潜在风险，或无法满足未来的技术需求。', en: 'Old architecture/tech, potential risks, or future tech needs.' } },
        { value: 'P', text: { cn: '当前的系统已经阻碍了新业务的快速上线或影响了用户体验。', en: 'System blocking new business launch or affecting user experience.' } }
      ]
  },
  {
      id: 'sp_6',
      dimension: 'drive',
      text: { cn: '场景： 您更享受阅读哪类文章？', en: 'Scenario: Preferred type of articles?' },
      options: [
        { value: 'S', text: { cn: '《深入理解XX框架原理》、《XX数据库性能优化十大技巧》', en: '"Deep Dive into XX Framework", "10 DB Optimization Tips"' } },
        { value: 'P', text: { cn: '《XX产品增长复盘》、《如何用数据驱动产品决策》', en: '"Product Growth Review", "Data-Driven Product Decisions"' } }
      ]
  },
  {
      id: 'sp_7',
      dimension: 'drive',
      text: { cn: '场景： 当产品需求与技术方案出现矛盾时，您倾向于？', en: 'Scenario: Conflict between product requirement and tech solution?' },
      options: [
        { value: 'S', text: { cn: '坚持更优的技术方案，并试图说服产品经理修改需求。', en: 'Insist on better tech solution, try to persuade PM to change req.' } },
        { value: 'P', text: { cn: '优先满足业务需求，在技术层面寻找最快的实现路径。', en: 'Prioritize business need, find fastest technical path.' } }
      ]
  },
  {
      id: 'sp_8',
      dimension: 'drive',
      text: { cn: '场景： 您认为编写代码时，最重要的原则是？', en: 'Scenario: Most important principle when coding?' },
      options: [
        { value: 'S', text: { cn: '整洁、可维护、可扩展，符合设计模式。', en: 'Clean, maintainable, scalable, design patterns.' } },
        { value: 'P', text: { cn: '清晰、高效地实现业务逻辑，快速交付价值。', en: 'Clear, efficient business logic, fast value delivery.' } }
      ]
  },
  {
      id: 'sp_9',
      dimension: 'drive',
      text: { cn: '场景： 定义一个API接口时，您首要考虑的是什么？', en: 'Scenario: Defining an API interface?' },
      options: [
        { value: 'S', text: { cn: '接口的规范性、稳定性、安全性和版本管理策略。', en: 'Standardization, style, security, versioning.' } },
        { value: 'P', text: { cn: '接口是否易用，能否灵活支撑多变的业务场景和需求。', en: 'Usability, flexibility for various business scenarios.' } }
      ]
  },
  {
      id: 'sp_10',
      dimension: 'drive',
      text: { cn: '场景： 在解决一个生产环境的问题后，您会做什么？', en: 'Scenario: After solving a production issue?' },
      options: [
        { value: 'S', text: { cn: '撰写一份详细的事后分析报告，并推动修复潜在的架构缺陷以防止复发。', en: 'Detailed post-mortem, fix architecture defects to prevent recurrence.' } },
        { value: 'P', text: { cn: '第一时间通知业务方问题已解决，并关注问题对核心业务指标的影响是否恢复。', en: 'Notify business side immediately, check business metrics recovery.' } }
      ]
  },
  {
      id: 'sp_11',
      dimension: 'drive',
      text: { cn: '场景： 您更愿意如何介绍自己做的东西？', en: 'Scenario: How to introduce what you made?' },
      options: [
        { value: 'S', text: { cn: '“我用了XX技术，实现了YY架构，吞吐量达到了Z。”', en: '"I used XX tech, implemented YY architecture, reached Z throughput."' } },
        { value: 'P', text: { cn: '“我做的这个功能，解决了用户的XX痛点，使订单转化率提升了Y%。”', en: '"This feature solved user pain point XX, increased conversion by Y%."' } }
      ]
  },
  {
      id: 'sp_12',
      dimension: 'drive',
      text: { cn: '场景： 学习一项新技能时，您的主要动力是？', en: 'Scenario: Motivation for learning a new skill?' },
      options: [
        { value: 'S', text: { cn: '对技术本身的好奇心，以及它能否让我的技术栈更领先、更完整。', en: 'Curiosity, making tech stack more advanced/complete.' } },
        { value: 'P', text: { cn: '它能否应用到我当前的项目中，解决实际业务问题。', en: 'Whether it applies to current project and solves business problems.' } }
      ]
  },
  {
      id: 'sp_13',
      dimension: 'drive',
      text: { cn: '场景： 进行技术分享时，您更喜欢讲什么主题？', en: 'Scenario: Preferred topic for tech sharing?' },
      options: [
        { value: 'S', text: { cn: '源码剖析、性能调优、系统架构演进等纯技术话题。', en: 'Source analysis, performance tuning, architecture evolution.' } },
        { value: 'P', text: { cn: '如何用技术解决某个复杂的业务问题，或者一次成功的业务技术合作项目复盘。', en: 'Solving business problems with tech, or business-tech collaboration review.' } }
      ]
  },
  {
      id: 'sp_14',
      dimension: 'drive',
      text: { cn: '场景： 当业务方提出一个看似“技术含量不高”的需求时，您的想法是？', en: 'Scenario: Business requests a "low-tech" feature?' },
      options: [
        { value: 'S', text: { cn: '感到有些无趣，希望做更有技术挑战性的工作。', en: 'Boring, prefer more technically challenging work.' } },
        { value: 'P', text: { cn: '只要对用户有价值，就值得认真地把它做好。', en: 'Worth doing well if it has value for users.' } }
      ]
  },
  {
      id: 'sp_15',
      dimension: 'drive',
      text: { cn: '场景： 您认为技术的终极价值在于？', en: 'Scenario: Ultimate value of technology?' },
      options: [
        { value: 'S', text: { cn: '追求极致的效率、优雅和稳定性，构建出完美的系统。', en: 'Efficiency, elegance, stability, building perfect systems.' } },
        { value: 'P', text: { cn: '作为工具，高效、可靠地实现商业目标和用户价值。', en: 'Tool to achieve business goals and user value efficiently.' } }
      ]
  },

  // T vs B (Focus)
  {
      id: 'tb_1',
      dimension: 'focus',
      text: { cn: '场景： 接到一个开发新功能的任务时，您会首先做什么？', en: 'Scenario: First step when developing a new feature?' },
      options: [
        { value: 'T', text: { cn: '先思考这个功能在整体系统中的地位，规划模块划分和接口设计。', en: 'Think about system role, plan modules and interfaces.' } },
        { value: 'B', text: { cn: '从编写代码开始，构建最核心的功能块，在实现中逐步理清结构。', en: 'Start coding core functions, clarify structure during implementation.' } }
      ]
  },
  {
      id: 'tb_2',
      dimension: 'focus',
      text: { cn: '场景： 阅读一份技术文档或源码时，您习惯的方式是？', en: 'Scenario: Habit when reading docs or source code?' },
      options: [
        { value: 'T', text: { cn: '先看目录、架构图或概要设计，理解其整体结构和设计理念。', en: 'Table of contents, architecture diagrams, high-level design first.' } },
        { value: 'B', text: { cn: '直接切入自己最关心的核心章节或代码模块，深入细节。', en: 'Dive correctly into core chapters or code modules of interest.' } }
      ]
  },
  {
      id: 'tb_3',
      dimension: 'focus',
      text: { cn: '场景： 在解决一个复杂的技术问题时，您的切入点是？', en: 'Scenario: Starting point for a complex tech problem?' },
      options: [
        { value: 'T', text: { cn: '先定义问题的边界和根源，制定一个排查计划，再逐步验证。', en: 'Define boundaries/root cause, make a plan, verify step by step.' } },
        { value: 'B', text: { cn: '直接从最可疑的点开始动手调试和试验，通过现象反推原因。', en: 'Debug most suspicious point, deduce cause from phenomena.' } }
      ]
  },
  {
      id: 'tb_4',
      dimension: 'focus',
      text: { cn: '场景： 学习一门新技术时，您更喜欢？', en: 'Scenario: Preference when learning new tech?' },
      options: [
        { value: 'T', text: { cn: '先系统性地观看教程或阅读书籍，了解其设计哲学、核心概念和最佳实践。', en: 'Systematic tutorials/books, design philosophy, core concepts.' } },
        { value: 'B', text: { cn: '直接动手写一个“Hello World”或小项目，在踩坑中学习。', en: 'Write "Hello World" or small project, learn by doing.' } }
      ]
  },
  {
      id: 'tb_5',
      dimension: 'focus',
      text: { cn: '场景： 向别人解释一个复杂系统时，您会如何开始？', en: 'Scenario: How to explain a complex system?' },
      options: [
        { value: 'T', text: { cn: '先画一个架构框图，介绍各个模块的角色和相互关系。', en: 'Draw architecture diagram, explain module roles/relations.' } },
        { value: 'B', text: { cn: '从一个具体的功能流程或代码片段开始，讲解它是如何工作的。', en: 'Start from a concrete flow or code snippet, explain how it works.' } }
      ]
  },
  {
      id: 'tb_6',
      dimension: 'focus',
      text: { cn: '场景： 在编写一段复杂代码前，您通常会？', en: 'Scenario: Before writing complex code?' },
      options: [
        { value: 'T', text: { cn: '先写注释或伪代码，勾勒出整体的逻辑框架。', en: 'Write comments/pseudo-code, outline logical framework.' } },
        { value: 'B', text: { cn: '直接开始写真实的代码，让逻辑在编写过程中自然涌现。', en: 'Start writing real code, let logic emerge during writing.' } }
      ]
  },
  {
      id: 'tb_7',
      dimension: 'focus',
      text: { cn: '场景： 您认为理解一个系统最重要的部分是？', en: 'Scenario: Most important part to understand a system?' },
      options: [
        { value: 'T', text: { cn: '其顶层架构和数据流，这决定了系统的能力和限制。', en: 'Top-level architecture and data flow.' } },
        { value: 'B', text: { cn: '其核心算法的实现和关键细节，这决定了系统的最终表现。', en: 'Core algorithm implementation and key details.' } }
      ]
  },
  {
      id: 'tb_8',
      dimension: 'focus',
      text: { cn: '场景： 在团队讨论中，您的贡献更多在于？', en: 'Scenario: Your contribution in team discussions?' },
      options: [
        { value: 'T', text: { cn: '提出整体性的方案思路和框架性的建议。', en: 'Propose holistic solution ideas and framework suggestions.' } },
        { value: 'B', text: { cn: '指出具体实现中可能遇到的技术难点和细节陷阱。', en: 'Point out technical difficulties and detail traps in implementation.' } }
      ]
  },
  {
      id: 'tb_9',
      dimension: 'focus',
      text: { cn: '场景： 您更享受哪种类型的任务？', en: 'Scenario: Task type enjoyment?' },
      options: [
        { value: 'T', text: { cn: '设计一套新的技术方案或规范，供他人使用。', en: 'Design new tech solution or spec for others.' } },
        { value: 'B', text: { cn: '攻克一个技术难点，优化一段关键代码的性能。', en: 'Conquer tech difficulty, optimize key code performance.' } }
      ]
  },
  {
      id: 'tb_10',
      dimension: 'focus',
      text: { cn: '场景： 在评估一项工作时，您更关注？', en: 'Scenario: Evaluating work?' },
      options: [
        { value: 'T', text: { cn: '这项工作在宏观目标上的进展和整体完成度。', en: 'Progress on macro goals and overall completion.' } },
        { value: 'B', text: { cn: '这项工作的具体产出物在细节上的完美程度。', en: 'Perfection of details in specific outputs.' } }
      ]
  },
  {
      id: 'tb_11',
      dimension: 'focus',
      text: { cn: '场景： 当需要改进一个系统时，您首先想到的是？', en: 'Scenario: Improving a system?' },
      options: [
        { value: 'T', text: { cn: '是否可以对其进行架构上的重构，以从根本上解决问题。', en: 'Architectural refactoring to solve root causes.' } },
        { value: 'B', text: { cn: '是否可以先优化某个具体模块的代码或算法，快速见效。', en: 'Optimize specific module code/algo for quick results.' } }
      ]
  },
  {
      id: 'tb_12',
      dimension: 'focus',
      text: { cn: '场景： 您认为在项目中，什么阶段最具有挑战性？', en: 'Scenario: Most challenging project phase?' },
      options: [
        { value: 'T', text: { cn: '最初的技术选型和架构设计阶段，因为这决定了后续的一切。', en: 'Initial tech selection/architecture design.' } },
        { value: 'B', text: { cn: '最后的攻坚和优化阶段，因为所有细节问题都会在此暴露。', en: 'Final push and optimization, where details appear.' } }
      ]
  },
  {
      id: 'tb_13',
      dimension: 'focus',
      text: { cn: '场景： 在理解一个新的业务领域时，您会？', en: 'Scenario: Understanding a new business domain?' },
      options: [
        { value: 'T', text: { cn: '先了解其整体的商业模式和核心业务流程。', en: 'Understand overall business model and core processes.' } },
        { value: 'B', text: { cn: '先深入一个具体的业务场景，搞懂其中的每一个操作步骤。', en: 'Dive into a specific scenario, understand every step.' } }
      ]
  },
  {
      id: 'tb_14',
      dimension: 'focus',
      text: { cn: '场景： 您认为一份好的设计文档最重要的特质是？', en: 'Scenario: Good design document?' },
      options: [
        { value: 'T', text: { cn: '有一个清晰、高层级的架构图和对设计决策的阐述。', en: 'Clear high-level diagram and design decision explanation.' } },
        { value: 'B', text: { cn: '包含了关键流程的详细说明和接口的精确定义。', en: 'Detailed key flow description and precise interface definition.' } }
      ]
  },
  {
      id: 'tb_15',
      dimension: 'focus',
      text: { cn: '场景： 在修复一个bug后，您会如何总结？', en: 'Scenario: After fixing a bug?' },
      options: [
        { value: 'T', text: { cn: '思考这个bug是否揭示了系统架构层面的某种缺陷。', en: 'Does this bug reveal an architectural defect?' } },
        { value: 'B', text: { cn: '仔细复盘这个bug具体的触发条件和代码中的错误逻辑。', en: 'Review specific trigger conditions and incorrect logic.' } }
      ]
  },

  // C vs X (Style)
  {
      id: 'cx_1',
      dimension: 'style',
      text: { cn: '场景： 进行技术选型时，您更倾向于？', en: 'Scenario: Tech selection preference?' },
      options: [
        { value: 'C', text: { cn: '选择成熟、稳定、有良好社区支持的技术，风险低。', en: 'Mature, stable, good community support, low risk.' } },
        { value: 'X', text: { cn: '选择新兴、前沿、有潜力的技术，即使它还不够成熟。', en: 'Emerging, bleeding-edge, potential, even if immobile.' } }
      ]
  },
  {
      id: 'cx_2',
      dimension: 'style',
      text: { cn: '场景： 面对一个已经可用的解决方案，您的想法是？', en: 'Scenario: Facing an existing working solution?' },
      options: [
        { value: 'C', text: { cn: '不断重构和优化它，追求更高的代码质量和更优雅的设计。', en: 'Refactor and optimize for quality and elegance.' } },
        { value: 'X', text: { cn: '思考是否可以用一种全新的、不同的方法来重做，可能会更好。', en: 'Think about redoing with a totally new approach.' } }
      ]
  },
  {
      id: 'cx_3',
      dimension: 'style',
      text: { cn: '场景： 您如何看待“重复造轮子”？', en: 'Scenario: View on "Reinventing the wheel"?' },
      options: [
        { value: 'C', text: { cn: '通常不赞同，应优先使用久经考验的现有方案，避免浪费和风险。', en: 'Disapprove, use proven solutions to avoid waste/risk.' } },
        { value: 'X', text: { cn: '认为有时很有必要，因为可以更好地满足特定需求，并能从中深入学习。', en: 'Necessary sometimes for specific needs and learning.' } }
      ]
  },
  {
      id: 'cx_4',
      dimension: 'style',
      text: { cn: '场景： 在项目中，您更看重交付物的哪种特质？', en: 'Scenario: Valued deliverable trait?' },
      options: [
        { value: 'C', text: { cn: '内在质量的卓越与可靠，尽可能减少潜在缺陷。', en: 'Intrinsic quality and reliability, minimizing defects.' } },
        { value: 'X', text: { cn: '应对变化的灵活性与可迭代性，便于根据反馈快速调整。', en: 'Flexibility and iterability for fast adjustment.' } }
      ]
  },
  {
      id: 'cx_5',
      dimension: 'style',
      text: { cn: '场景： 学习新技术的主要动力是？', en: 'Scenario: Motivation for learning new tech?' },
      options: [
        { value: 'C', text: { cn: '为了更深入地精通我当前使用的技术栈，成为专家。', en: 'Deepen expertise in current stack to be an expert.' } },
        { value: 'X', text: { cn: '为了拓展技术视野，了解不同的可能性，防止技术栈固化。', en: 'Expand horizons, know possibilities, prevent stagnation.' } }
      ]
  },
  {
      id: 'cx_6',
      dimension: 'style',
      text: { cn: '场景： 工作中最大的乐趣来源于？', en: 'Scenario: Greatest joy in work?' },
      options: [
        { value: 'C', text: { cn: '将一件事做到极致，产出令人惊叹的、稳健的作品。', en: 'Doing one thing to perfection, producing robust work.' } },
        { value: 'X', text: { cn: '不断尝试新事物，解决前所未有的新挑战。', en: 'Trying new things, solving unprecedented challenges.' } }
      ]
  },
  {
      id: 'cx_7',
      dimension: 'style',
      text: { cn: '场景： 您如何对待项目中的“技术债务”？', en: 'Scenario: "Tech debt" attitude?' },
      options: [
        { value: 'C', text: { cn: '技术债务会腐蚀系统的长期健康，必须优先安排资源系统性偿还。', en: 'Corrodes long-term health, must pay back systematically.' } },
        { value: 'X', text: { cn: '技术债务是为了加速验证业务假设而做出的必要权衡，可以接受其存在。', en: 'Necessary tradeoff for speed, acceptable.' } }
      ]
  },
  {
      id: 'cx_8',
      dimension: 'style',
      text: { cn: '场景： 您更欣赏哪种技术成就？', en: 'Scenario: Admired technical achievement?' },
      options: [
        { value: 'C', text: { cn: '维护一个十年几乎无需改动但仍稳定运行的系统。', en: 'Maintain a system stable for 10 years without much change.' } },
        { value: 'X', text: { cn: '成为团队中第一个引入并成功落地某项革命性技术的人。', en: 'First to introduce and land a revolutionary tech.' } }
      ]
  },
  {
      id: 'cx_9',
      dimension: 'style',
      text: { cn: '场景： 在解决一个技术难题时，您的风格是？', en: 'Scenario: Style when solving a tech problem?' },
      options: [
        { value: 'C', text: { cn: '采用已知的、可靠的方法，一步步稳健地解决。', en: 'Use known, reliable methods, solve step-by-step.' } },
        { value: 'X', text: { cn: '寻找非常规的、巧妙的“黑科技” 来破解它。', en: 'Find unconventional, clever "hacks" to crack it.' } }
      ]
  },
  {
      id: 'cx_10',
      dimension: 'style',
      text: { cn: '场景： 您认为一个好的技术氛围应该是？', en: 'Scenario: Good tech atmosphere?' },
      options: [
        { value: 'C', text: { cn: '拥有严谨的代码规范、评审流程和稳定的技术栈。', en: 'Strict standards, review process, stable stack.' } },
        { value: 'X', text: { cn: '鼓励技术尝试和失败，充满探索和讨论新事物的热情。', en: 'Encourage trial and failure, passion for exploration.' } }
      ]
  },
  {
      id: 'cx_11',
      dimension: 'style',
      text: { cn: '场景： 在项目开始时，您对“需求变更”的态度是？', en: 'Scenario: Attitude towards "Requirement Changes"?' },
      options: [
        { value: 'C', text: { cn: '期望需求尽可能明确和稳定，以便能制定出完整、周密的实施计划。', en: 'Expect clear/stable reqs for detailed planning.' } },
        { value: 'X', text: { cn: '对需求变更持开放态度，认为修改和调整是逼近最佳解决方案的自然过程。', en: 'Open to changes, natural process to reach best solution.' } }
      ]
  },
  {
      id: 'cx_12',
      dimension: 'style',
      text: { cn: '场景： 您更喜欢的工作节奏是？', en: 'Scenario: Preferred work pace?' },
      options: [
        { value: 'C', text: { cn: '长期而专注地投入一个项目，不断打磨。', en: 'Long-term focused investment in one project.' } },
        { value: 'X', text: { cn: '快速切换于不同的任务或项目之间，保持新鲜感。', en: 'Fast switching between tasks/projects.' } }
      ]
  },
  {
      id: 'cx_13',
      dimension: 'style',
      text: { cn: '场景： 对于代码注释和文档，您的看法是？', en: 'Scenario: View on comments and documentation?' },
      options: [
        { value: 'C', text: { cn: '至关重要，是保证项目可维护性和传承性的基石。', en: 'Crucial, cornerstone of maintainability and heritage.' } },
        { value: 'X', text: { cn: '代码本身应该尽量清晰易懂，文档适度即可，有时甚至代码改太快文档会跟不上。', en: 'Code should be self-explanatory, docs moderate.' } }
      ]
  },
  {
      id: 'cx_14',
      dimension: 'style',
      text: { cn: '场景： 在职业生涯中，您更希望成为？', en: 'Scenario: Career aspiration?' },
      options: [
        { value: 'C', text: { cn: '某一两个技术领域的公认权威（Guru），深度无人能及。', en: 'Guru in 1-2 fields, unmatched depth.' } },
        { value: 'X', text: { cn: '技术多面手（Generalist），对众多技术都有涉猎并能灵活运用。', en: 'Generalist, knowing and applying many techs.' } }
      ]
  },
  {
      id: 'cx_15',
      dimension: 'style',
      text: { cn: '场景： 您认为技术的价值在于？', en: 'Scenario: Value of technology?' },
      options: [
        { value: 'C', text: { cn: '提供可靠、可信赖的服务，是数字世界的基石。', en: 'Reliable, trusted services, foundation of digital world.' } },
        { value: 'X', text: { cn: '创造新的可能性，是推动变革和进步的引擎。', en: 'Create possibilities, engine of change and progress.' } }
      ]
  }
];
