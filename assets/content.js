(function (root) {
  const entries = {
    "generalizations": {
      definition: "概括性判断是根据有限观察总结出的群体倾向，用来帮助理解文化差异，但不能当成对每个个体的绝对判断。",
      points: ["基于有限资料，推广到较大群体。", "可以作为跨文化分析的起点。", "必须保持开放，遇到新证据要修正。"],
      watch: ["generalization 不等于 stereotype。前者可修正，后者僵化。", "考试看到 limited data、larger group、tendency，通常指 generalization。"],
      memory: "概括是起点，不是结论。"
    },
    "objectivity": {
      definition: "客观性指判断尽量基于事实、证据和可观察信息，减少个人情绪、偏见和文化立场的干扰。",
      points: ["强调 facts、evidence、observable behavior。", "跨文化分析中要先描述，再解释，最后评价。", "客观不是没有立场，而是能意识到自己的立场。"],
      watch: ["不要把自己的文化习惯当作客观标准。", "与 ethnocentrism 相反，objectivity 要求暂停价值评判。"],
      memory: "先看事实，再下判断。"
    },
    "ethnocentrism": {
      definition: "民族中心主义是以自己的文化作为评价其他文化的标准，并倾向于认为本文化更正常、更优越。",
      points: ["核心是 self-culture as standard。", "容易导致误解、偏见和文化优越感。", "跨文化交际中需要用文化相对主义和客观性来克服。"],
      watch: ["不是单纯热爱本文化，而是用本文化压倒性地评价他者。", "考试常见关键词：superior、judge other cultures、own culture as center。"],
      memory: "把自己的文化当尺子量所有文化，就是 ethnocentrism。"
    },
    "human-communication": {
      definition: "人类沟通是人们在特定情境中借助符号分享意义的动态过程。",
      points: ["dynamic process：沟通不断变化。", "symbols：语言、动作、图像等都可承载意义。", "meaning sharing：目标是让意义被理解。", "setting/context：情境影响表达和解释。"],
      watch: ["沟通不是简单传递信息，而是共同建构意义。", "跨文化沟通失败常来自符号意义和语境理解不同。"],
      memory: "communication = symbols + meaning + context + process。"
    },
    "symbol": {
      definition: "符号是承载意义的形式，可以是语言、手势、图像、物品或行为，用来表达人的思想、感受和经验。",
      points: ["符号本身和意义之间通常是约定关系。", "同一符号在不同文化中可能有不同意义。", "语言是最重要的符号系统之一。"],
      watch: ["符号不是意义本身，而是意义的载体。", "跨文化误解常来自对同一符号的不同解释。"],
      memory: "没有共享符号，就没有可理解的沟通。"
    },
    "culture": {
      definition: "文化是一个群体共享、习得并代际传递的生活方式和意义系统，包括价值观、信念、行为规范、制度和物质产物。",
      points: ["learned：文化不是天生的。", "shared：被群体成员共同理解。", "transmitted：通过语言、家庭、教育等传递。", "dynamic：文化会变化，不是固定不变。"],
      watch: ["文化既有可见层面，也有深层价值和假设。", "不要把文化等同于国家；国家内部也有差异。"],
      memory: "文化是人们学会如何生活、解释世界和与人相处的系统。"
    },
    "world-view": {
      definition: "世界观是一个文化群体对现实、人性、自然、时间、命运和人与世界关系的基本看法。",
      points: ["属于深层文化，常常不被直接说出。", "影响价值判断、行为动机和沟通方式。", "宗教、哲学、历史经验都会塑造世界观。"],
      watch: ["world-view 不只是个人观点，而是群体共享的深层理解框架。", "理解世界观有助于解释行为背后的 why。"],
      memory: "世界观回答：世界是什么样的，人应该怎样活。"
    },
    "intercultural-communication-competence": {
      definition: "跨文化交际能力是在跨文化情境中有效并恰当地实现沟通目标的能力。",
      points: ["motivation：愿意沟通和理解他者。", "knowledge：了解文化、语境和沟通规则。", "skills：倾听、解释、调适和解决冲突。", "effectiveness + appropriateness：既达成目标，又符合情境。"],
      watch: ["只懂文化知识不等于有能力，还需要动机和技能。", "恰当性比“说得流利”更重要。"],
      memory: "ICC = motivation + knowledge + skills。"
    },
    "deep-culture": {
      definition: "深层文化是文化中不易被看见的价值观、信念、世界观和基本假设，解释人们为什么这样行动。",
      points: ["比食物、服装、节日等表层文化更难观察。", "常通过家庭、制度、宗教、教育等长期塑造。", "决定一个文化对对错、美丑、身份、关系的根本看法。"],
      watch: ["deep culture 关注 why，不只是 what。", "跨文化冲突往往发生在深层价值不一致时。"],
      memory: "表层文化看行为，深层文化看原因。"
    },
    "social-organizations-institutions": {
      definition: "社会组织或社会制度是文化中稳定组织人际关系、分配角色和维持秩序的结构，如家庭、教育、宗教、政府和经济制度。",
      points: ["帮助个体获得身份和归属。", "规定角色、责任和权力关系。", "是文化传递和社会化的重要渠道。"],
      watch: ["institution 不一定是具体建筑，而是稳定的社会规则和组织方式。", "家庭通常被视为最基本的社会制度。"],
      memory: "社会制度把个人组织成可合作的社会。"
    },
    "family": {
      definition: "家庭是基于血缘、婚姻、收养或亲属关系形成的基本社会单位，是文化学习和身份形成的首要场所。",
      points: ["承担照料、经济支持和情感支持功能。", "传递语言、价值观、礼貌规则和性别角色。", "常区分 family of orientation 与 family of procreation。"],
      watch: ["不同文化对家庭边界、亲属责任和代际关系理解不同。", "家庭不仅是私人关系，也是文化制度。"],
      memory: "家庭是一个人最早接触文化的地方。"
    },
    "individual-collective-dimension": {
      definition: "个体主义/集体主义维度描述一个文化更强调个人独立和个人目标，还是群体归属和群体利益。",
      points: ["individualism：独立、自我表达、个人成就、个人权利。", "collectivism：相互依赖、群体和谐、责任、忠诚。", "影响称呼、决策、冲突处理和自我介绍方式。"],
      watch: ["它描述文化倾向，不代表每个个体都一样。", "集体主义不等于没有个人，个体主义也不等于自私。"],
      memory: "个人优先看 individualism，群体优先看 collectivism。"
    },
    "perception": {
      definition: "感知是人们选择、组织并解释信息，从而理解世界和构建现实的过程。",
      points: ["selection：注意到哪些信息。", "organization：如何分类和组织信息。", "interpretation：如何解释意义。", "文化会影响三步中的每一步。"],
      watch: ["perception 不是被动接收，而是主动建构。", "同一行为在不同文化感知中可能意义不同。"],
      memory: "我们不是直接看见世界，而是通过文化理解世界。"
    },
    "belief": {
      definition: "信念是人们认为真实或正确的观念，可以来自经验、宗教、教育、传统或社会群体。",
      points: ["可以有证据，也可以主要来自主观确信。", "群体共享的信念会成为文化的一部分。", "信念会支持价值观，并进一步影响行为。"],
      watch: ["belief 关注 true/false 的确信；value 关注 good/bad 的判断。", "信念不一定客观正确，但会真实影响行动。"],
      memory: "belief 是“我认为是真的”。"
    },
    "cultural-values": {
      definition: "文化价值观是一个文化群体共享的关于好坏、对错、重要与不重要的判断标准。",
      points: ["建立在共享信念之上。", "指导行为选择和社会评价。", "相对稳定，但会随社会变化而调整。"],
      watch: ["value 不是个人偏好，而是群体层面的指导原则。", "价值观常通过行为规范体现出来。"],
      memory: "value 是“什么值得追求”。"
    },
    "behaviors": {
      definition: "行为是文化信念和价值观在具体情境中的外在表现，包括语言行为、非语言行为和社会行动。",
      points: ["行为受文化、语境、身份和关系共同影响。", "同一行为在不同文化中可能合适或不合适。", "观察行为时要结合其背后的价值和情境。"],
      watch: ["不能只凭一次行为判断整个文化。", "behavior 是可见结果，belief/value 是内在原因。"],
      memory: "行为是价值观落地后的样子。"
    },
    "cultural-patterns-value-orientations": {
      definition: "文化模式或价值取向是一组相互关联的主流价值和行为倾向，用来概括一个文化处理关键问题的方式。",
      points: ["提供分析文化差异的框架。", "通常描述主流倾向，不等于个体特征。", "文化模式之间相互关联，并会动态变化。"],
      watch: ["不要把文化模式绝对化或标签化。", "Hofstede、Hall 等理论都可视为分析文化模式的工具。"],
      memory: "文化模式是理解文化差异的地图，不是每个人的身份证。"
    },
    "high-context-low-context": {
      definition: "高语境/低语境是 Hall 提出的沟通维度，区分信息主要依赖语境关系，还是依赖明确语言表达。",
      points: ["high-context：含蓄、间接、重关系、重非语言线索。", "low-context：直接、明确、重文字、重规则和信息清晰。", "高低不是价值高低，只是沟通方式差异。"],
      watch: ["高语境不是不用语言，低语境也不是没有语境。", "合同、说明书、清楚表达常对应低语境；暗示、面子、关系常对应高语境。"],
      memory: "高语境：意思在场景里；低语境：意思在话语里。"
    },
    "context": {
      definition: "语境是沟通发生的背景和条件，包括语言、物理、社会、文化、心理、时间和交际目的等因素。",
      points: ["影响语言和非语言行为的解释。", "帮助判断某句话或行为真正是什么意思。", "跨文化误解常来自语境判断不同。"],
      watch: ["context 不只是上下文，也不等于 culture。", "同一句话换场合、关系或语气，意义可能完全不同。"],
      memory: "语境决定意义。"
    },
    "uncertainty-avoidance": {
      definition: "不确定性规避是 Hofstede 文化维度之一，指文化成员面对模糊、未知和不可预测情况时感到不安的程度。",
      points: ["高不确定性规避：重规则、秩序、计划、安全感。", "低不确定性规避：能接受模糊、变化、弹性和探索。", "影响课堂要求、职场流程和社会规范。"],
      watch: ["不等于 risk avoidance；重点是对 ambiguity 和 uncertainty 的焦虑。", "也不等于 power distance，二者关注的问题不同。"],
      memory: "怕模糊、要规则，是高不确定性规避。"
    },
    "power-distance": {
      definition: "权力距离是 Hofstede 文化维度之一，指社会中权力较小成员接受并期待权力不平等分配的程度。",
      points: ["高权力距离：等级清楚、尊重权威、重头衔和身份。", "低权力距离：强调平等、参与、质疑和协商。", "影响师生关系、职场沟通和决策方式。"],
      watch: ["power distance 不是物理距离。", "定义重点是 less powerful members 是否接受权力不平等。"],
      memory: "认等级、敬权威，是高权力距离。"
    },
    "masculinity-femininity": {
      definition: "男性化/女性化是 Hofstede 文化维度之一，描述一个文化更重视竞争成就，还是关怀合作和生活质量。",
      points: ["masculinity：achievement、competition、assertiveness、material success。", "femininity：care、cooperation、modesty、quality of life。", "它讨论社会价值取向，不是男女比例。"],
      watch: ["男性化不等于男人掌权，女性化不等于女性统治。", "不要把 masculinity/femininity 与 individualism/collectivism 混淆。"],
      memory: "重竞争和成功是男性化，重关怀和生活质量是女性化。"
    },
    "face-facework": {
      definition: "面子是人在互动中希望维持的社会形象；面子功夫是维护、挽回或保护面子的沟通策略。",
      points: ["face 包括自尊、体面、他人评价和社会身份。", "facework 包括道歉、委婉表达、回避冲突、给台阶。", "高语境和集体主义文化通常更重视面子管理。"],
      watch: ["face 不是简单的 vanity，而是社会关系中的公共形象。", "直接批评、公开拒绝可能威胁他人面子。"],
      memory: "面子是形象，面子功夫是保护形象的做法。"
    },
    "social-identities": {
      definition: "社会身份是个体基于群体归属形成的身份，如国籍、民族、性别、宗教、阶层、职业等。",
      points: ["来自 group membership。", "影响人们如何看待自己，也影响他人如何对待自己。", "在跨文化沟通中常与权力、刻板印象和归属感相关。"],
      watch: ["一个人同时拥有多重社会身份。", "社会身份不是固定不变的，会随情境被强调或弱化。"],
      memory: "社会身份回答：我属于哪些群体。"
    },
    "personal-identity": {
      definition: "个人身份是个体独特的自我理解，包括性格、经历、能力、兴趣、价值选择和人生故事。",
      points: ["强调 uniqueness 和 personal history。", "与社会身份相互影响，但不完全等同。", "跨文化互动中个体差异不能被群体标签完全覆盖。"],
      watch: ["不要用社会身份替代个人身份。", "同一文化群体内部也有丰富个人差异。"],
      memory: "个人身份回答：我作为独特个体是谁。"
    },
    "gender": {
      definition: "性别是文化和社会对男性、女性及其他性别身份所赋予的角色、期待和行为规范。",
      points: ["gender 是社会文化建构，不等同于 biological sex。", "影响语言使用、礼貌规范、职业期待和家庭角色。", "不同文化对性别角色的边界不同。"],
      watch: ["不要把 gender 简化为生理差异。", "性别规范会随时代、群体和情境变化。"],
      memory: "sex 偏生理，gender 偏社会文化。"
    },
    "ethnic-identity-ethnicity": {
      definition: "族群身份是个体对某一族群的归属感；族群性通常与共同祖先、历史、语言、文化传统和群体记忆相关。",
      points: ["包括自我认同和他人识别。", "可通过语言、饮食、仪式、历史记忆等表达。", "在移民和多元文化社会中尤其重要。"],
      watch: ["ethnicity 不等于 race，也不等于 nationality。", "族群身份既有客观文化线索，也有主观归属感。"],
      memory: "族群身份强调共同文化传统和归属感。"
    },
    "national-character": {
      definition: "国民性格是对一个国家成员常见性格或行为倾向的概括性描述。",
      points: ["可作为了解国家文化叙事的入口。", "经常出现在旅游、媒体和跨文化比较中。", "必须谨慎使用，避免把国家标签套到个人身上。"],
      watch: ["national character 很容易滑向 stereotype。", "国家内部存在地区、阶层、族群和个人差异。"],
      memory: "国民性格可以参考，不能绝对化。"
    },
    "ascribed-avowed-identities": {
      definition: "赋予身份是别人强加或归类给你的身份；自认身份是你自己承认、选择或强调的身份。",
      points: ["ascribed identity：由他人、制度或社会标签赋予。", "avowed identity：个体主动声明或认同。", "二者不一致时容易产生误解或冲突。"],
      watch: ["别人怎么看你，不一定等于你怎么定义自己。", "跨文化沟通要尊重对方的 avowed identity。"],
      memory: "ascribed 是别人给的，avowed 是自己认的。"
    },
    "language": {
      definition: "语言是由符号和规则构成的意义系统，是文化传递、身份表达和社会互动的核心工具。",
      points: ["语言反映文化，也参与塑造文化。", "词汇、语法、称呼和礼貌形式都带有文化意义。", "语言选择会表达身份、距离、权力和关系。"],
      watch: ["会翻译字面意义不等于理解文化意义。", "语言差异不仅是词汇差异，也是思维和关系表达差异。"],
      memory: "语言是文化的主要符号系统。"
    },
    "denotative-connotative-meaning": {
      definition: "外延意义是词语的字面或词典意义；内涵意义是词语引发的情感、联想和文化含义。",
      points: ["denotative meaning：直接、基本、字面意义。", "connotative meaning：情感色彩、社会评价、文化联想。", "跨文化误解常来自内涵意义不同。"],
      watch: ["同一个词外延相近，内涵可能差异很大。", "翻译时不能只看 denotation，还要看 connotation。"],
      memory: "外延看字面，内涵看联想。"
    },
    "nonverbal-communication": {
      definition: "非语言沟通是不依靠词语本身传递意义的沟通方式，包括表情、眼神、姿势、手势、距离、触碰和时间使用等。",
      points: ["常常更依赖文化规则。", "可以补充、强调、替代或矛盾于语言信息。", "在高语境沟通中尤其重要。"],
      watch: ["非语言信号不是全球通用的。", "同一手势、眼神或沉默在不同文化中可能意义相反。"],
      memory: "不说话，也在沟通。"
    },
    "paralanguage": {
      definition: "副语言是语言内容之外的声音特征，如语调、音高、音量、语速、停顿、笑声和沉默。",
      points: ["影响一句话的态度和情绪意义。", "同一句话用不同语气可能表达赞美、讽刺或命令。", "沉默也可以是一种副语言信号。"],
      watch: ["paralanguage 属于 nonverbal communication，但与声音有关。", "不要只看 words，还要听 how it is said。"],
      memory: "副语言是话语的声音表情。"
    },
    "proxemics": {
      definition: "空间语言学研究人们如何使用距离和空间来表达关系、身份、亲密程度和权力。",
      points: ["由 Edward T. Hall 提出并发展。", "常见距离包括亲密距离、个人距离、社交距离和公共距离。", "文化会影响人们觉得多近才合适。"],
      watch: ["proxemics 不是 power distance。前者是空间距离，后者是权力不平等接受程度。", "距离过近或过远都可能造成跨文化不适。"],
      memory: "人和人站多远，也是一种文化信息。"
    },
    "monochronic-polychronic-time": {
      definition: "单时制/多时制是 Hall 提出的时间取向差异：单时制强调线性计划，多时制强调关系和灵活安排。",
      points: ["monochronic：一次做一件事，重日程、准时、效率。", "polychronic：多任务并行，重关系、弹性、情境变化。", "影响会议、约会、截止时间和工作方式。"],
      watch: ["多时制不是不守时，而是时间优先级不同。", "单时制也不是冷漠，只是更重计划和任务。"],
      memory: "M-time 看时间表，P-time 看关系网。"
    },
    "culture-shock": {
      definition: "文化冲击是进入陌生文化环境后，因规则、语言、价值和日常习惯不同而产生的压力、困惑和不适。",
      points: ["常见阶段：蜜月期、挫折期、恢复期、适应期。", "表现为孤独、焦虑、疲惫、误解和身份不稳定。", "通过学习文化规则、建立支持网络和调整期待可缓解。"],
      watch: ["culture shock 是适应过程的一部分，不代表失败。", "它强调短期心理和行为反应。"],
      memory: "熟悉的规则失效时，就容易文化冲击。"
    },
    "acculturation": {
      definition: "文化适应是不同文化群体持续接触后，个体或群体在价值、行为、身份和生活方式上发生调整的过程。",
      points: ["常见策略：integration、assimilation、separation、marginalization。", "既涉及主流文化学习，也涉及原文化保持。", "移民、留学和跨国工作中常见。"],
      watch: ["acculturation 比 culture shock 更长期。", "assimilation 是融入主流并弱化原文化，不等于 integration。"],
      memory: "文化冲击是反应，文化适应是过程。"
    },
    "stereotyping": {
      definition: "刻板印象是对某个群体形成固定、简化且过度概括的看法，并把它套用到个体身上。",
      points: ["是一种认知捷径。", "忽视个体差异和情境差异。", "可能看似中性或积极，但仍然会限制真实理解。"],
      watch: ["stereotype 比 generalization 更僵化、更难修正。", "考试关键词：fixed、oversimplified、all members。"],
      memory: "刻板印象把活人压成标签。"
    },
    "prejudices": {
      definition: "偏见是在充分了解之前，对某个群体或成员形成的负面态度、情绪或评价。",
      points: ["偏见主要是态度层面。", "常基于刻板印象，并可能导致歧视行为。", "可表现为恐惧、厌恶、排斥或轻视。"],
      watch: ["prejudice 是态度，discrimination 是行为。", "偏见不一定公开表达，但会影响判断。"],
      memory: "偏见是还没了解就先否定。"
    },
    "racism": {
      definition: "种族主义是基于种族分类对群体进行等级化，并通过观念、制度或行为造成特权和压迫的体系。",
      points: ["包含个人态度，也包含制度性不平等。", "常把身体特征与能力、价值或道德错误关联。", "与权力结构密切相关。"],
      watch: ["racism 不只是个人讨厌某群体，还可能是制度和结构问题。", "racism 通常涉及 prejudice + power。"],
      memory: "种族主义是把种族差异变成等级和权力差异。"
    },
    "power": {
      definition: "权力是影响他人行为、控制资源、定义意义和决定谁有话语权的能力。",
      points: ["可来自职位、知识、财富、制度、语言能力或文化资本。", "跨文化交际中，权力影响谁被听见、谁被解释、谁需要适应。", "权力既存在于个人关系，也存在于社会结构。"],
      watch: ["power 不等于 power distance。power 是影响力本身；power distance 是对权力不平等的接受程度。", "分析跨文化冲突时要看文化差异，也要看权力差异。"],
      memory: "权力决定谁能定义规则和意义。"
    }
  };

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function list(items) {
    return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  }

  function card(type, title, items) {
    return `
      <section class="card ${type}">
        <h2>${escapeHtml(title)}</h2>
        ${list(items)}
      </section>
    `;
  }

  function render(entry) {
    return `
      <div class="reply">
        <section class="tldr">
          <h2>核心定义</h2>
          <p>${escapeHtml(entry.definition)}</p>
        </section>
        <div class="grid grid-2">
          ${card("card-b", "考试抓手", entry.points)}
          ${card("card-o", "易混点", entry.watch)}
        </div>
        <blockquote>
          <p>${escapeHtml(entry.memory)}</p>
        </blockquote>
      </div>
    `;
  }

  const content = Object.fromEntries(
    Object.entries(entries).map(([slug, entry]) => [slug, render(entry)])
  );

  if (typeof module !== "undefined" && module.exports) {
    module.exports = content;
  }
  root.reviewContent = content;
})(typeof self !== "undefined" ? self : this);
