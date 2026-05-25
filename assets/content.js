(function (root) {
  const entries = {
    "generalizations": {
      scholar: ["无单一提出人：这是社会科学研究和跨文化分析中的基础方法概念。"],
      definition: "概括性判断是根据有限观察、资料或经验总结出的群体倾向，用来帮助理解文化差异，但它只能说明可能性，不能当成对每个个体的绝对结论。",
      features: ["基于有限数据，却指向较大群体，因此必须承认例外。", "描述的是 tendency，而不是 law；它是可修正、可验证的分析起点。", "好的概括会说明范围、条件和证据来源，避免把群体说成完全一致。"],
      icc: ["跨文化交际需要一定概括，否则无法预判对方文化中的常见规则。", "概括可以帮助解释高语境、集体主义、权力距离等文化倾向。", "使用概括时要不断用具体语境和个体信息修正判断。"],
      exam: ["generalization 与 stereotype 的区别最常考：前者开放、可修正；后者僵化、过度简化。", "看到 limited data、larger group、tendency、pattern，通常是在考 generalization。", "答题时要加一句：概括不能替代个体差异。"],
      memory: "概括是理解文化的起点，不是给个人贴标签的终点。"
    },
    "objectivity": {
      scholar: ["无单一提出人：属于社会科学研究、跨文化观察和批判性思维中的基本原则。"],
      definition: "客观性指在解释文化现象时尽量基于事实、证据和可观察行为，减少个人情绪、偏见和本文化立场对判断的干扰。",
      features: ["强调 facts、evidence、observable behavior，而不是第一反应或道德优越感。", "基本步骤是先描述行为，再解释文化语境，最后谨慎评价。", "客观不是完全没有立场，而是能意识到自己的文化立场。"],
      icc: ["跨文化交际中，客观性可以减少误解和民族中心主义。", "面对陌生行为时，应先问“它在对方文化中有什么意义”，而不是立刻判断好坏。", "客观观察能帮助区分文化差异、个人性格差异和情境差异。"],
      exam: ["objectivity 常与 ethnocentrism 对比考：前者暂停评判，后者以本文化为标准评判他者。", "答题关键词：facts、evidence、bias、judgment、culture-bound perspective。", "不要把“客观”写成“没有任何价值观”；更准确是意识到并控制偏见。"],
      memory: "先看事实，再看语境，最后才下判断。"
    },
    "ethnocentrism": {
      scholar: ["William Graham Sumner 常被认为是将 ethnocentrism 系统用于社会科学讨论的重要学者。"],
      definition: "民族中心主义是以自己的文化作为衡量其他文化的中心标准，并倾向于认为本文化更正常、更正确或更优越。",
      features: ["核心是 own culture as the standard。", "表现为把本文化习惯当作常识，把他文化差异看成落后、奇怪或错误。", "它可能是显性的文化优越感，也可能隐藏在日常语言和评价中。"],
      icc: ["民族中心主义会阻碍倾听、造成误读，并强化偏见和刻板印象。", "它会让交际者忽略对方行为背后的文化价值和语境。", "跨文化能力要求用文化相对主义、客观性和同理心来降低民族中心倾向。"],
      exam: ["ethnocentrism 不是单纯热爱本文化，而是用本文化评价并压低其他文化。", "常见关键词：superior、judge other cultures、own culture、center、normal。", "案例题中看到“他们那样做很没礼貌，因为我们这里不会这样”，多半可分析为民族中心主义。"],
      memory: "把自己的文化当唯一尺子量所有文化，就是 ethnocentrism。"
    },
    "human-communication": {
      scholar: ["无单一提出人：属于传播学基础概念，跨文化交际教材通常把它定义为通过符号分享意义的动态过程。"],
      definition: "人类沟通是人们在特定情境中借助符号创造、分享和解释意义的动态过程。",
      features: ["dynamic process：沟通不是一次性传递，而是持续变化的互动。", "symbolic：语言、表情、手势、图像、沉默等都可能承载意义。", "contextual：意义受到场合、关系、身份、文化和时间影响。", "meaning-making：沟通的重点不是信息移动，而是意义被共同理解。"],
      icc: ["跨文化沟通失败常不是因为没有信息，而是因为双方对符号和语境的解释不同。", "理解沟通的动态性，有助于在误解出现后通过澄清、反馈和调适修复关系。", "跨文化交际关注的不只是说什么，还包括如何说、谁在说、在什么关系中说。"],
      exam: ["答定义时要包含 symbols、meaning、context、dynamic process。", "不要把 communication 简化成 message transmission；跨文化课程更重视 meaning interpretation。", "案例题可从 verbal、nonverbal、context、feedback 四个角度分析。"],
      memory: "communication = symbols + meaning + context + interaction。"
    },
    "symbol": {
      scholar: ["代表学者：Ferdinand de Saussure 和 Charles S. Peirce 是符号学中的重要学者；跨文化交际借用其“符号承载意义”的思路。"],
      definition: "符号是用来代表、表达或传递意义的形式，可以是词语、手势、图像、声音、物品、仪式或行为。",
      features: ["符号与意义之间通常是约定关系，不是天然固定关系。", "符号意义依赖共享文化规则；同一符号在不同文化中可能意义不同。", "符号既表达思想，也表达身份、关系、情绪和价值判断。"],
      icc: ["跨文化交际本质上是不同符号系统之间的意义协商。", "误解常来自对同一符号的不同解码，例如手势、颜色、称呼、沉默。", "学习他文化时要学习符号背后的文化意义，而不仅是表面形式。"],
      exam: ["symbol 不是 meaning 本身，而是 meaning 的载体。", "语言是最重要的符号系统之一，但不是唯一符号系统。", "答题可写：symbols are culture-bound and learned。"],
      memory: "符号是意义的外壳，文化决定怎样解读它。"
    },
    "culture": {
      scholar: ["经典学者：Edward B. Tylor 给出早期经典定义；Clifford Geertz 强调用意义系统解释文化。"],
      definition: "文化是一个群体共享、习得并代际传递的意义系统和生活方式，包括价值观、信念、规范、语言、制度、行为方式和物质产物。",
      features: ["learned：文化通过家庭、教育、语言和社会化获得，不是天生的。", "shared：文化被群体成员共同理解，但群体内部也有差异。", "transmitted：文化通过符号和制度传递给下一代。", "dynamic：文化会随历史、技术、迁移和权力关系变化。"],
      icc: ["文化影响人们如何理解自我、关系、时间、空间、权威、礼貌和冲突。", "跨文化交际研究的核心就是文化如何塑造沟通方式和意义解释。", "不能把文化等同于国家；国家内部也有地区、阶层、族群和代际差异。"],
      exam: ["答定义要写 learned、shared、transmitted、symbolic、dynamic。", "文化包含主观文化和客观文化：价值信念属于深层，食物服饰属于表层。", "案例题中要解释行为背后的 value、belief、norm，而不是只描述行为。"],
      memory: "文化是一个群体学会如何生活、解释世界和与人相处的系统。"
    },
    "world-view": {
      scholar: ["无单一提出人：worldview 是人类学、宗教学和跨文化交际中的基础概念。"],
      definition: "世界观是一个文化群体对现实、人性、自然、时间、命运、超自然力量以及人与世界关系的根本看法。",
      features: ["属于深层文化，常常被视为理所当然，不一定被明确说出。", "影响价值判断、道德判断、行为动机和沟通方式。", "通常由宗教、哲学、历史经验、家庭教育和社会制度共同塑造。"],
      icc: ["世界观差异会影响人们如何看待生死、成功、权威、自然、个人责任和社会关系。", "跨文化冲突常不是表层礼仪冲突，而是深层世界观冲突。", "理解世界观有助于回答“为什么他们会这样沟通和行动”。"],
      exam: ["world-view 不等于个人观点，而是群体共享的深层解释框架。", "它比 cultural values 更深，常为价值观提供基础。", "答题关键词：reality、human nature、nature、time、supernatural、relationship。"],
      memory: "世界观回答：世界是什么样的，人应该怎样活。"
    },
    "intercultural-communication-competence": {
      scholar: ["代表学者：Brian Spitzberg 强调有效性和恰当性；Darla Deardorff 强调态度、知识、技能与结果。"],
      definition: "跨文化交际能力是在跨文化情境中，能够以有效且恰当的方式理解他者、表达自我、调整行为并实现沟通目标的能力。",
      features: ["motivation：愿意接触、尊重和理解不同文化的人。", "knowledge：了解文化模式、语境规则、身份、语言和非语言差异。", "skills：倾听、观察、解释、移情、调适和处理冲突。", "effectiveness + appropriateness：既达成目标，又不破坏关系和情境规范。"],
      icc: ["跨文化交际能力不是背文化事实，而是在互动中灵活使用知识。", "它要求既能表达自己，也能理解对方文化中的合适表达方式。", "高能力者会避免民族中心主义、刻板印象和过度概括。"],
      exam: ["常考三要素：motivation、knowledge、communication skills。", "只会外语不等于有 intercultural competence。", "答题可写：effective means achieving goals; appropriate means fitting cultural context。"],
      memory: "ICC = 想沟通 + 懂差异 + 会调适。"
    },
    "deep-culture": {
      scholar: ["代表学者：Edward T. Hall 等文化研究者常用表层/深层文化区分来解释隐藏的文化规则。"],
      definition: "深层文化是文化中不容易直接观察的价值观、信念、世界观、基本假设和制度逻辑，它解释人们为什么这样行动。",
      features: ["不可见或半可见：不像食物、节日、服装那样容易观察。", "稳定而有影响力：长期塑造伦理观、家庭观、权威观、时间观和身份观。", "通常通过家庭、宗教、教育、社会制度和语言潜移默化地传递。"],
      icc: ["跨文化误解往往来自深层文化差异，而不只是语言错误。", "理解深层文化可以解释同一行为在不同文化中为什么有不同意义。", "跨文化交际分析要从表层行为追问深层价值和假设。"],
      exam: ["deep culture 关注 why，不只是 what。", "可与 surface culture 对比：表层看得见，深层解释行为原因。", "案例题中如涉及面子、权威、家庭责任、时间观，通常可从深层文化分析。"],
      memory: "表层文化看行为，深层文化看行为背后的理由。"
    },
    "social-organizations-institutions": {
      scholar: ["无单一提出人：社会制度是社会学、人类学和跨文化交际共同使用的基础概念。"],
      definition: "社会组织或社会制度是文化中稳定组织人际关系、分配角色、规范行为并维持社会秩序的结构，如家庭、教育、宗教、政府、经济和法律制度。",
      features: ["提供身份和归属：人们通过家庭、学校、宗教、职业等获得社会位置。", "分配角色和责任：规定谁应当做什么、谁有权决定。", "传递文化规范：制度是文化社会化的重要渠道。"],
      icc: ["不同社会制度会塑造不同的沟通规则，如师生关系、亲子关系、职场等级和宗教礼仪。", "制度差异会影响称呼、礼貌、决策、冲突解决和权力表达。", "跨文化案例不能只看个人行为，还要看制度背景。"],
      exam: ["institution 不等于建筑物，而是稳定的社会规则和组织方式。", "family 通常被视为最基本的社会制度。", "社会制度属于 deep structure of culture 的重要组成部分。"],
      memory: "社会制度把个人组织成有角色、有规则的社会。"
    },
    "family": {
      scholar: ["无单一提出人：家庭是人类学、社会学和跨文化交际中的基础社会制度概念。"],
      definition: "家庭是基于血缘、婚姻、收养、亲属关系或长期承诺形成的基本社会单位，是个体最早学习文化、语言、身份和关系规则的场所。",
      features: ["承担照料、经济支持、情感支持和社会化功能。", "传递语言、价值观、礼貌规则、宗教信念、性别角色和家庭责任观。", "家庭边界因文化而异，有些强调核心家庭，有些强调大家庭和亲属网络。"],
      icc: ["家庭观影响个人独立、婚姻选择、代际关系、养老责任和亲属称呼。", "跨文化交际中，家庭责任可能影响决策、时间安排和个人目标。", "理解家庭制度有助于解释个体主义/集体主义差异。"],
      exam: ["family of orientation 是出生和成长的家庭；family of procreation 是成年后组建的家庭。", "不要把西方核心家庭模式当成所有文化的标准。", "家庭既是私人关系，也是文化制度。"],
      memory: "家庭是一个人最早进入文化的地方。"
    },
    "individual-collective-dimension": {
      scholar: ["代表学者：Geert Hofstede 将 individualism/collectivism 列为文化维度；Harry Triandis 对个体主义和集体主义做了重要扩展。"],
      definition: "个体主义/集体主义维度描述一个文化更强调个人独立、自我表达和个人目标，还是更强调群体归属、相互依赖和群体利益。",
      features: ["individualism：强调个人权利、选择、自我实现、隐私和个人责任。", "collectivism：强调群体和谐、忠诚、责任、关系网络和相互依赖。", "这一维度影响自我介绍、决策方式、冲突处理、赞扬批评和礼貌策略。"],
      icc: ["个体主义文化中，直接表达个人意见可能被看作诚实和自信。", "集体主义文化中，维护关系和避免让群体丢面子可能比个人表达更重要。", "跨文化沟通时要判断对方更重个人立场还是群体关系。"],
      exam: ["它描述文化倾向，不代表每个个体都一样。", "集体主义不等于没有个人，个体主义也不等于自私。", "常与 high-context、facework、family responsibility 一起考。"],
      memory: "个人优先看 individualism，群体优先看 collectivism。"
    },
    "perception": {
      scholar: ["无单一提出人：感知是心理学和传播学基础概念，跨文化交际强调文化会影响感知过程。"],
      definition: "感知是人们选择、组织并解释信息，从而理解世界和建构现实的过程。",
      features: ["selection：人们会选择注意某些信息，忽略另一些信息。", "organization：人们会把信息分类、排序并放入已有认知框架。", "interpretation：人们根据经验、文化、情绪和语境解释意义。", "感知具有文化性和主观性，不是对现实的完全复制。"],
      icc: ["同一行为在不同文化感知中可能被解释为礼貌、冷淡、冒犯或真诚。", "跨文化误解常来自感知差异，而不是事实本身不同。", "提高跨文化能力需要意识到自己的感知过滤器。"],
      exam: ["三步：selection、organization、interpretation。", "perception 不是被动接收，而是主动建构。", "答题可写：culture shapes what we notice and how we interpret it。"],
      memory: "我们不是直接看见世界，而是通过文化理解世界。"
    },
    "belief": {
      scholar: ["无单一提出人：信念是心理学、社会学和文化研究中的基础概念。"],
      definition: "信念是人们认为真实、正确或可信的观念，可以来自经验、宗教、教育、传统、媒体或社会群体。",
      features: ["信念不一定有客观证据，但会真实影响人的判断和行为。", "当信念被群体共享并代际传递时，就会成为文化的一部分。", "信念常为价值观提供基础，例如对人性、命运、家庭或权威的看法。"],
      icc: ["不同信念会影响人们如何解释疾病、成功、责任、婚姻、教育和礼貌。", "跨文化交流中，如果只反驳对方行为而不理解其信念基础，容易引发冲突。", "理解信念有助于解释文化价值观和行为规范。"],
      exam: ["belief 关注 true/false 的确信；value 关注 good/bad、important/unimportant 的判断。", "信念不等于事实，但会驱动行为。", "案例中看到“他们相信……”通常可归入 belief。"],
      memory: "belief 是“我认为这是真的”。"
    },
    "cultural-values": {
      scholar: ["代表学者：Kluckhohn 与 Strodtbeck 的 value orientations 研究，以及 Hofstede 的文化维度都与文化价值观分析有关。"],
      definition: "文化价值观是一个文化群体共享的关于好坏、对错、重要与不重要、值得追求与应当避免的判断标准。",
      features: ["价值观建立在共享信念之上，并为行为选择提供方向。", "价值观相对稳定，会通过家庭、教育、制度和语言传递。", "价值观常体现在礼貌规范、决策方式、冲突处理和社会评价中。"],
      icc: ["不同文化价值观会影响人们对独立、和谐、权威、效率、面子、时间和成功的理解。", "跨文化冲突常发生在价值优先级不同的时候。", "理解文化价值观可以解释表面行为背后的判断标准。"],
      exam: ["value 不是个人偏好，而是群体层面的指导原则。", "belief 是“什么是真的”，value 是“什么是重要/好的”。", "答题时可把 values 与 behaviors 连起来：values guide behaviors。"],
      memory: "value 是文化告诉人们什么值得追求。"
    },
    "behaviors": {
      scholar: ["无单一提出人：行为是跨文化交际中观察文化差异的基本层面。"],
      definition: "行为是人们在具体情境中表现出来的语言行动、非语言行动和社会行动，是信念、价值观、规范和身份在交际中的外在体现。",
      features: ["行为是可观察的，但其意义需要结合文化语境解释。", "同一行为在不同文化中可能有不同合适性和不同含义。", "行为受文化、个人性格、关系、身份、权力和场合共同影响。"],
      icc: ["跨文化交际不能只看行为本身，还要问行为在该文化中意味着什么。", "非语言行为如眼神、距离、沉默、触碰尤其容易造成误解。", "分析行为要避免从一次经历推断整个文化。"],
      exam: ["behavior 是外在表现；belief/value 是内在原因。", "不能只凭一次行为判断整个群体。", "案例题应从 visible behavior 追溯 invisible values。"],
      memory: "行为是价值观落到具体场景里的样子。"
    },
    "cultural-patterns-value-orientations": {
      scholar: ["代表学者：Kluckhohn 与 Strodtbeck 提出价值取向框架；Hofstede、Hall 等也提供文化模式分析工具。"],
      definition: "文化模式或价值取向是一组相互关联的主流价值、信念和行为倾向，用来概括一个文化处理关键问题的方式。",
      features: ["它关注文化如何回答人性、人与自然、时间、活动、人际关系等基本问题。", "文化模式是对主流倾向的概括，不是每个个体的固定属性。", "不同文化模式之间相互关联，也可能在同一文化内部存在矛盾。"],
      icc: ["文化模式为分析跨文化差异提供框架，例如高低语境、权力距离、时间取向。", "它帮助解释沟通方式、冲突处理、组织管理和人际关系差异。", "使用文化模式时要避免标签化和决定论。"],
      exam: ["value orientations 强调文化如何选择优先价值。", "它是分析工具，不是给国家或个人下绝对结论。", "可与 Hofstede dimensions、Hall context/time orientation 联系答题。"],
      memory: "文化模式是理解差异的地图，不是每个人的身份证。"
    },
    "high-context-low-context": {
      scholar: ["提出人：Edward T. Hall。该理论属于 Hall 对文化与沟通方式研究的重要内容。"],
      definition: "高语境/低语境区分信息主要依赖语境、关系和共享背景来理解，还是主要依赖明确、直接的语言文字来理解。",
      features: ["high-context：含蓄、间接、重关系、重身份、重非语言线索和共享背景。", "low-context：直接、明确、重文字、重规则、重信息完整和清楚表达。", "高低不是价值高低，而是信息分布方式不同。"],
      icc: ["高语境沟通中，不理解关系、沉默、语气和场合就可能误读信息。", "低语境沟通中，如果表达不够明确，对方可能认为信息不足或不专业。", "跨文化交际中要判断“意思在话里”还是“意思在语境里”。"],
      exam: ["Hall，不是 Hofstede。", "合同、说明书、会议纪要、直接表达常对应低语境。", "暗示、面子、关系、沉默、非语言线索常对应高语境。"],
      memory: "高语境：意思在场景和关系里；低语境：意思在语言和文字里。"
    },
    "context": {
      scholar: ["无单一提出人：语境是传播学和语言学基础概念；Hall 的高低语境理论使其在跨文化交际中尤其重要。"],
      definition: "语境是沟通发生并被解释的背景条件，包括语言、物理、社会、文化、心理、时间、关系和交际目的等因素。",
      features: ["语言语境：前后文和话语内容。", "物理语境：地点、空间、环境和场合。", "社会文化语境：身份、关系、权力、价值观、习俗和禁忌。", "心理和时间语境：情绪、意图、时机、历史背景。"],
      icc: ["同一句话在不同语境中可能是称赞、讽刺、请求或批评。", "跨文化交际中，语境判断不同会导致礼貌、距离、沉默、拒绝方式被误解。", "高语境文化更依赖语境，低语境文化相对更依赖明确语言。"],
      exam: ["context 不只是 co-text；co-text 是语言上下文，context 范围更广。", "context 不等于 culture；culture 是语境的重要组成部分。", "答题关键词：background、setting、relationship、participants、meaning interpretation。"],
      memory: "语境决定意义，同一句话换个场合就可能换个意思。"
    },
    "uncertainty-avoidance": {
      scholar: ["提出人：Geert Hofstede。属于 Hofstede cultural dimensions theory。"],
      definition: "不确定性规避指一个文化中的成员面对不确定、模糊、未知和不可预测情境时感到焦虑或不适的程度。",
      features: ["高不确定性规避：重规则、计划、稳定、安全、明确流程和标准答案。", "低不确定性规避：更能接受模糊、变化、弹性、探索和非正式安排。", "它关注 ambiguity 和 uncertainty，不只是普通风险。"],
      icc: ["课堂中，高不确定性规避者可能希望老师明确评分标准和任务要求。", "职场中，高不确定性规避文化可能更依赖制度、合同、流程和审批。", "跨文化合作时，双方对计划和临时变化的接受度不同，容易产生摩擦。"],
      exam: ["Hofstede，不是 Hall。", "不要把 uncertainty avoidance 写成 risk avoidance；重点是对模糊未知的不适。", "与 power distance 区分：前者看未知和规则，后者看等级和权威。"],
      memory: "怕模糊、要规则，是高不确定性规避。"
    },
    "power-distance": {
      scholar: ["提出人：Geert Hofstede。属于 Hofstede cultural dimensions theory。"],
      definition: "权力距离指社会中权力较小的成员接受并期待权力不平等分配的程度。",
      features: ["高权力距离：等级明显、尊重权威、重身份头衔、下级较少公开挑战上级。", "低权力距离：强调平等、参与、协商、反馈和质疑权威。", "定义重点是 less powerful members 是否接受不平等，而不只是掌权者是否强势。"],
      icc: ["影响师生关系、亲子关系、职场沟通、会议发言和决策方式。", "高权力距离文化中，直接反驳老师或老板可能被视为不尊重。", "低权力距离文化中，不表达意见可能被视为缺乏参与。"],
      exam: ["power distance 不是 physical distance，也不是 proxemics。", "常见关键词：hierarchy、authority、status、titles、obedience、participation。", "与 uncertainty avoidance 区分：权力距离看等级，不确定性规避看模糊。"],
      memory: "认等级、敬权威，是高权力距离。"
    },
    "masculinity-femininity": {
      scholar: ["提出人：Geert Hofstede。属于 Hofstede cultural dimensions theory。"],
      definition: "男性化/女性化维度描述一个文化更重视竞争、成就、果断和物质成功，还是更重视关怀、合作、谦逊和生活质量。",
      features: ["masculinity：achievement、competition、assertiveness、success、material rewards。", "femininity：care、cooperation、modesty、quality of life、work-life balance。", "它讨论社会价值取向，不是男女数量，也不是简单的男性统治或女性统治。"],
      icc: ["影响职场评价、课堂竞争、冲突处理、赞美方式和成功观。", "男性化文化中，直接竞争和突出成绩可能更被鼓励。", "女性化文化中，照顾感受、维护平衡和合作更受重视。"],
      exam: ["Hofstede 维度之一。", "不要与 gender 混淆；gender 是社会性别身份和角色，masculinity/femininity 是文化价值取向。", "不要与 individualism/collectivism 混淆；前者看竞争/关怀，后者看个人/群体。"],
      memory: "重竞争和成功是男性化，重关怀和生活质量是女性化。"
    },
    "face-facework": {
      scholar: ["代表学者：Erving Goffman 系统讨论 face-work；Stella Ting-Toomey 将 face 与跨文化冲突和 face-negotiation theory 联系起来。"],
      definition: "面子是人在互动中希望维持的社会形象、尊严和被认可感；面子功夫是维护、保护、挽回或给予面子的沟通策略。",
      features: ["face 涉及自尊、体面、社会身份、他人评价和关系秩序。", "facework 包括道歉、委婉表达、回避公开冲突、给台阶、解释和补救。", "面子既可以是自己的形象，也可以是对方或群体的形象。"],
      icc: ["高语境和集体主义文化中，面子管理常与关系和群体和谐密切相关。", "公开批评、直接拒绝、当众纠错可能构成 face-threatening act。", "理解面子有助于解释间接表达、沉默、委婉拒绝和冲突回避。"],
      exam: ["face 不是简单 vanity，而是互动中的公共社会形象。", "facework 是策略，不是面子本身。", "常与 high-context、collectivism、politeness、conflict style 一起考。"],
      memory: "面子是形象，面子功夫是保护形象的沟通动作。"
    },
    "social-identities": {
      scholar: ["代表学者：Henri Tajfel 和 John Turner 的 Social Identity Theory 强调群体归属对自我概念的影响。"],
      definition: "社会身份是个体基于群体成员资格形成的自我认同和他人认知，如国籍、民族、性别、宗教、阶层、职业、年龄和语言群体。",
      features: ["来自 group membership，并与归属感、评价和情感意义相关。", "一个人同时拥有多重社会身份，且不同情境会激活不同身份。", "社会身份可能带来资源、权力、期待，也可能带来偏见和限制。"],
      icc: ["跨文化交际中，人们常先通过社会身份理解对方，例如国籍、口音、族群或性别。", "社会身份影响称呼、礼貌、话语权、被信任程度和被刻板化的风险。", "理解多重身份有助于避免把一个人简化成单一群体标签。"],
      exam: ["social identity 回答“我属于哪些群体”。", "与 personal identity 区分：社会身份强调群体归属，个人身份强调独特经历和个性。", "案例中涉及群体标签、身份归属、权力差异时可用该概念。"],
      memory: "社会身份是“我属于哪些群体”。"
    },
    "personal-identity": {
      scholar: ["无单一提出人：常与社会身份理论、自我概念研究和跨文化身份研究一起讨论。"],
      definition: "个人身份是个体对自身独特性的理解，包括性格、经历、能力、兴趣、价值选择、人生故事和自我定位。",
      features: ["强调 uniqueness 和 personal history。", "会受到文化和社会身份影响，但不能被群体标签完全替代。", "个人身份会随经历、关系和跨文化接触不断变化。"],
      icc: ["跨文化交际中，不能只用国籍、民族或性别推断一个人的全部行为。", "尊重个人身份意味着允许对方自我定义，而不是只按群体标签理解对方。", "个人身份与社会身份冲突时，容易出现误解或身份压力。"],
      exam: ["personal identity 回答“我作为独特个体是谁”。", "与 social identity 区分：personal = individual uniqueness；social = group membership。", "答题可写：culture shapes identity, but individuals are not identical to culture。"],
      memory: "个人身份是“我为什么是这个独特的我”。"
    },
    "gender": {
      scholar: ["无单一提出人：gender 是社会学、性别研究和跨文化交际中的基础概念；相关研究强调性别角色具有社会文化建构性。"],
      definition: "性别指社会和文化对男性、女性及其他性别身份所赋予的角色、期待、行为规范和身份意义。",
      features: ["gender 是社会文化建构，不完全等同于 biological sex。", "性别规范影响语言风格、礼貌方式、职业期待、家庭角色和身体表达。", "不同文化、时代、阶层和群体对性别角色的期待不同。"],
      icc: ["跨文化交际中，性别会影响谁可以说话、怎样说话、怎样表达情感和怎样进入公共空间。", "性别角色差异可能导致礼貌、距离、眼神、触碰和权威表达的误解。", "分析性别要同时看文化、权力和社会制度。"],
      exam: ["sex 偏生理，gender 偏社会文化角色。", "不要把 gender 写成固定天性；课程重点是文化如何塑造性别期待。", "可与 masculinity/femininity 区分：gender 是身份与角色，Hofstede 的 masculinity/femininity 是文化价值维度。"],
      memory: "sex 偏生理，gender 偏社会文化。"
    },
    "ethnic-identity-ethnicity": {
      scholar: ["代表学者：Fredrik Barth 强调族群边界；Jean Phinney 对 ethnic identity 发展研究影响较大。"],
      definition: "族群身份是个体对某一族群的归属感和认同；族群性通常与共同祖先、历史记忆、语言、文化传统、宗教、地域或群体边界有关。",
      features: ["包含自我认同，也包含他人和社会对其的识别。", "可以通过语言、饮食、服饰、仪式、节日、历史叙事和亲属关系表达。", "族群身份是动态的，会因迁移、同化、歧视、代际变化而变化。"],
      icc: ["族群身份影响语言选择、群体归属、被代表方式和跨群体关系。", "在移民、多元文化社会和少数族群经验中尤其重要。", "跨文化交际中要区分对方如何自我认同与外界如何归类。"],
      exam: ["ethnicity 不等于 race，也不等于 nationality。", "族群身份既有文化线索，也有主观归属感。", "可与 ascribed/avowed identity 联系：他人赋予的族群标签可能与本人自认不同。"],
      memory: "族群身份强调共同文化传统和归属感。"
    },
    "national-character": {
      scholar: ["无单一提出人：国民性格研究与文化与人格学派、国家文化比较有关；Ruth Benedict 等学者曾做过相关研究，但该概念争议较大。"],
      definition: "国民性格是对某一国家成员常见行为倾向、价值叙事或性格特征的概括性描述。",
      features: ["它通常来自历史叙事、媒体、教育、旅游经验和国家文化比较。", "可以帮助理解一个国家的主流自我形象或外部形象。", "但它高度概括，容易忽视国家内部的地区、阶层、族群、性别和个人差异。"],
      icc: ["跨文化交际中，国民性格常影响第一印象和期待。", "如果不加批判地使用，容易滑向刻板印象和民族中心主义。", "较好的用法是把它当作文化叙事线索，而不是判断个人的证据。"],
      exam: ["national character 很容易与 stereotype 混淆。", "答题时要强调它是概括，不可绝对化。", "不要把国家等同于单一文化；国家内部也有多元文化。"],
      memory: "国民性格可以参考，但不能套到每个人身上。"
    },
    "ascribed-avowed-identities": {
      scholar: ["无单一提出人：这是跨文化交际身份研究中的常用区分，常见于身份协商和跨文化交际教材。"],
      definition: "赋予身份是他人、制度或社会标签归类给你的身份；自认身份是你自己承认、选择、声明或强调的身份。",
      features: ["ascribed identity 来自外部归类，例如口音、肤色、姓名、国籍、性别或制度身份。", "avowed identity 来自自我定义，例如个人选择强调的族群、语言、职业或价值身份。", "两者一致时沟通较顺畅，不一致时容易产生误读、冒犯或身份冲突。"],
      icc: ["跨文化交际中，人们常根据外表或口音快速赋予身份。", "尊重对方的 avowed identity 是减少偏见和误解的重要原则。", "身份错认会影响信任、礼貌、权力关系和归属感。"],
      exam: ["ascribed = others give you；avowed = you claim for yourself。", "它与 stereotype 相关，但更关注身份归类与自我认同是否一致。", "案例中如果别人按标签定义某人，而本人不认同，可用该概念分析。"],
      memory: "ascribed 是别人给的身份，avowed 是自己认的身份。"
    },
    "language": {
      scholar: ["代表学者：Edward Sapir 和 Benjamin Lee Whorf 与语言相对论相关；跨文化交际强调语言与文化相互塑造。"],
      definition: "语言是由符号和规则构成的意义系统，是文化传递、身份表达、社会关系建构和跨文化沟通的核心工具。",
      features: ["语言反映文化：词汇、称呼、礼貌形式和隐喻体现文化价值。", "语言塑造经验：不同语言可能引导人们注意和分类世界的不同方面。", "语言表达身份、权力、亲疏、礼貌和群体归属。"],
      icc: ["跨文化沟通中，翻译字面意义不等于理解文化意义。", "语言差异会影响请求、拒绝、道歉、赞美、幽默和沉默的解释。", "双语或多语者常在语言选择中协商身份和关系。"],
      exam: ["语言是 culture 的主要符号系统，但不是文化的全部。", "Sapir-Whorf 常考语言与思维/文化关系。", "denotative meaning 与 connotative meaning 是语言意义分析的重点。"],
      memory: "语言不只是说话工具，也是文化和身份的载体。"
    },
    "denotative-connotative-meaning": {
      scholar: ["无单一提出人：这是语义学和符号学中的基础区分，跨文化交际用它解释词语文化含义差异。"],
      definition: "外延意义是词语的字面、词典或基本指称意义；内涵意义是词语引发的情感色彩、社会评价、文化联想和隐含态度。",
      features: ["denotative meaning 相对直接，回答“它指什么”。", "connotative meaning 更依赖文化经验，回答“它让人联想到什么、感觉如何”。", "同一词语外延相近，内涵可能因文化和语境而差异很大。"],
      icc: ["跨文化误解常来自只翻译外延，忽略内涵。", "颜色、动物、称呼、数字、礼貌词和幽默常带有强烈文化内涵。", "理解内涵意义有助于避免无意冒犯和错误联想。"],
      exam: ["外延看字面，内涵看联想和情感色彩。", "翻译题和案例题常考 connotation。", "不要把 connotation 写成“错误意义”；它是文化和情感层面的附加意义。"],
      memory: "denotation 是字面指称，connotation 是文化联想。"
    },
    "nonverbal-communication": {
      scholar: ["无单一提出人：非语言沟通是传播学重要领域；Edward T. Hall 对空间、时间和语境研究影响很大。"],
      definition: "非语言沟通是不依靠词语本身传递意义的沟通方式，包括表情、眼神、姿势、手势、身体距离、触碰、沉默、时间使用和外表等。",
      features: ["非语言信号常与文化规则密切相关。", "它可以补充、重复、强调、替代或矛盾语言信息。", "非语言信号通常多义，必须结合语境解释。"],
      icc: ["不同文化对眼神、微笑、沉默、触碰、距离和手势的解释可能不同。", "高语境沟通中，非语言线索尤其重要。", "跨文化交际中，非语言误读往往比词汇错误更容易伤害关系。"],
      exam: ["nonverbal 不等于 universal；很多非语言信号不是全球通用。", "paralanguage、proxemics、chronemics 都属于或关联非语言沟通。", "案例题可从 eye contact、gesture、silence、space、time 分析。"],
      memory: "不说话，也在沟通。"
    },
    "paralanguage": {
      scholar: ["代表学者：George L. Trager 的副语言研究常被视为 paralanguage 概念发展的重要来源。"],
      definition: "副语言是语言词义之外的声音特征，如语调、音高、音量、语速、停顿、重音、笑声、叹息和沉默。",
      features: ["它不改变词典意义，却会改变态度、情绪和关系意义。", "同一句话因语气不同，可以表达真诚、讽刺、命令、怀疑或亲密。", "副语言与文化密切相关，例如沉默、音量和停顿的合适程度不同。"],
      icc: ["跨文化交际中，语速、音量或沉默可能被误解为粗鲁、冷漠、自信或不诚实。", "副语言帮助判断话语背后的情绪和关系意图。", "听懂 words 不等于听懂 how it is said。"],
      exam: ["paralanguage 属于 nonverbal communication 中与声音有关的部分。", "不要把 paralanguage 写成 vocabulary 或 grammar。", "常考例子：tone、pitch、volume、rate、pause、silence。"],
      memory: "副语言是话语的声音表情。"
    },
    "proxemics": {
      scholar: ["提出人：Edward T. Hall。proxemics 是 Hall 对人际距离和空间使用的研究概念。"],
      definition: "空间语言学研究人们如何使用身体距离和空间安排来表达关系、身份、亲密程度、隐私、权力和文化规范。",
      features: ["Hall 常区分亲密距离、个人距离、社交距离和公共距离。", "空间距离的合适程度因文化、关系、场合、性别和权力而不同。", "空间使用不仅包括站多远，也包括座位安排、领地感和私人空间。"],
      icc: ["距离过近可能被认为冒犯或侵犯隐私，距离过远可能被认为冷淡或疏离。", "跨文化交际中，空间规则差异常出现在问候、排队、会议和课堂互动中。", "理解 proxemics 有助于解释身体距离带来的舒适或不适。"],
      exam: ["proxemics 是空间距离，不是 power distance。", "提出人是 Hall。", "关键词：space、distance、personal space、territory、intimacy。"],
      memory: "人和人站多远，也是一种文化信息。"
    },
    "monochronic-polychronic-time": {
      scholar: ["提出人：Edward T. Hall。该区分属于 Hall 对文化时间取向的研究。"],
      definition: "单时制/多时制描述文化如何组织时间：单时制强调线性计划和一次做一件事，多时制强调关系、弹性和多任务并行。",
      features: ["monochronic time：重日程、准时、计划、效率、顺序和截止时间。", "polychronic time：重关系、弹性、情境变化、多任务和人际义务。", "这不是守时与不守时的道德差异，而是时间优先级不同。"],
      icc: ["跨文化合作中，对迟到、会议时长、截止日期和临时变更的理解可能不同。", "单时制文化可能把时间看作可分割、可管理的资源。", "多时制文化可能把关系和情境需要置于固定日程之上。"],
      exam: ["Hall，不是 Hofstede。", "M-time 看 schedule；P-time 看 relationships。", "不要把 polychronic 简化成懒散或不守信用。"],
      memory: "M-time 看时间表，P-time 看关系网。"
    },
    "culture-shock": {
      scholar: ["代表学者：Kalervo Oberg 系统讨论 culture shock，是跨文化适应研究中最常引用的来源之一。"],
      definition: "文化冲击是进入陌生文化环境后，因为语言、规则、价值、社会线索和日常习惯不同而产生的压力、困惑、焦虑和适应困难。",
      features: ["常见阶段：蜜月期、挫折期、恢复期、适应期。", "表现为孤独、疲惫、焦虑、误解增多、身份不稳定和对原文化的强烈依恋。", "它通常是跨文化适应过程的一部分，不代表个人失败。"],
      icc: ["文化冲击说明文化规则在日常生活中具有强大影响。", "理解文化冲击可以帮助留学生、移民和跨国工作者建立合理期待。", "通过学习文化规则、建立支持网络、反思自我和调整沟通方式可以缓解。"],
      exam: ["culture shock 偏短中期心理和行为反应；acculturation 是更长期的文化适应过程。", "不要只写“想家”，要写 unfamiliar cultural environment 带来的 stress。", "常考阶段和缓解方式。"],
      memory: "熟悉的文化规则突然失效时，就会产生文化冲击。"
    },
    "acculturation": {
      scholar: ["经典定义来自 Redfield、Linton 和 Herskovits；John W. Berry 提出常用的四种文化适应策略。"],
      definition: "文化适应是不同文化群体持续接触后，个体或群体在价值观、行为、身份和生活方式上发生调整和变化的过程。",
      features: ["integration：保持原文化，同时参与新文化。", "assimilation：弱化原文化，主要融入主流文化。", "separation：保持原文化，较少参与新文化。", "marginalization：与原文化和新文化都缺乏稳定连接。"],
      icc: ["文化适应常见于移民、留学、跨国婚姻、跨国工作和少数族群处境。", "适应不只是个人努力，也受主流社会接纳程度、制度和权力关系影响。", "跨文化交际中，适应过程会改变语言选择、身份认同和社交网络。"],
      exam: ["acculturation 比 culture shock 更长期、更结构化。", "assimilation 不等于 integration：前者弱化原文化，后者双向保持和参与。", "Berry 四策略是高频考点。"],
      memory: "文化冲击是反应，文化适应是长期调整过程。"
    },
    "stereotyping": {
      scholar: ["代表学者：Walter Lippmann 将 stereotype 引入社会舆论和社会认知讨论。"],
      definition: "刻板印象是对某一群体形成固定、简化、过度概括的看法，并把这种看法直接套用到个体身上。",
      features: ["它是一种认知捷径，可以减少信息处理负担，但会牺牲准确性。", "它忽视群体内部差异和具体情境。", "刻板印象可以是负面的，也可以看似正面，但都会限制真实理解。"],
      icc: ["跨文化交际中，刻板印象会影响第一印象、期待、倾听方式和解释方向。", "它可能导致自证预言：人们只注意符合标签的信息。", "减少刻板印象需要接触真实个体、理解语境并保持可修正性。"],
      exam: ["stereotype 比 generalization 更僵化、更难修正。", "关键词：fixed、oversimplified、all members、label。", "刻板印象是认知层面；prejudice 是态度情绪层面；discrimination 是行为层面。"],
      memory: "刻板印象把复杂的人压成简单标签。"
    },
    "prejudices": {
      scholar: ["代表学者：Gordon Allport 的 The Nature of Prejudice 是偏见研究的重要经典。"],
      definition: "偏见是在充分了解之前，基于群体身份对某一群体或其成员形成的负面态度、情绪或评价。",
      features: ["偏见主要是 attitude，包含情绪和评价成分。", "它常建立在刻板印象之上，并可能导致歧视行为。", "偏见可能公开表达，也可能以隐性偏见形式影响判断。"],
      icc: ["跨文化交际中，偏见会降低信任、阻碍倾听，并让中性行为被负面解释。", "偏见常与权力、历史冲突、媒体叙事和社会制度相互强化。", "识别偏见需要区分事实观察与带有情绪评价的判断。"],
      exam: ["prejudice 是态度，stereotype 是认知，discrimination 是行为。", "prejudice 不一定已经表现为行动，但会影响解释和选择。", "看到 negative attitude before knowing enough，多半是 prejudice。"],
      memory: "偏见是还没了解，就先带着负面态度看人。"
    },
    "racism": {
      scholar: ["无单一提出人：racism 是社会学、历史学和批判种族研究中的核心概念，现代研究强调其与权力和制度有关。"],
      definition: "种族主义是基于种族分类对群体进行等级化，并通过观念、话语、制度或行为制造和维持特权、排斥与压迫的体系。",
      features: ["它把身体特征或被建构的种族类别与能力、道德、文明程度或社会价值错误关联。", "它不仅是个人偏见，也可能存在于法律、教育、住房、就业、媒体和语言结构中。", "racism 通常涉及 prejudice + power，即负面态度与权力结构结合。"],
      icc: ["跨文化交际中，种族主义影响谁被相信、谁有话语权、谁被要求适应、谁被代表。", "语言、玩笑、称呼和媒体形象都可能复制种族化意义。", "分析跨文化冲突时，需要同时看文化差异和权力不平等。"],
      exam: ["racism 不只是个人不喜欢某群体，还包括制度性和结构性层面。", "不要把 racism 简化成 race difference；重点是等级化和权力。", "与 prejudice 区分：偏见是态度，种族主义强调种族化权力体系。"],
      memory: "种族主义是把种族差异变成等级和权力差异。"
    },
    "power": {
      scholar: ["代表学者：Max Weber 将权力理解为让他人按自己意愿行动的可能性；Michel Foucault 强调权力也存在于话语和知识生产中。"],
      definition: "权力是影响他人行为、控制资源、制定规则、定义意义并决定谁有话语权的能力。",
      features: ["权力可来自职位、财富、知识、语言能力、制度、身份、文化资本或话语资源。", "权力既存在于个人互动中，也存在于组织、制度和社会结构中。", "权力不只压迫，也会塑造什么被认为是正常、正确和有价值。"],
      icc: ["跨文化交际不是平等真空中的文化差异交换，权力会影响谁需要适应谁。", "语言优势、主流文化地位、国籍、种族、性别和阶层都会影响交际权力。", "分析文化误解时，要同时看意义差异和权力差异。"],
      exam: ["power 不等于 power distance：power 是影响力本身，power distance 是对权力不平等的接受程度。", "答题关键词：resources、control、authority、discourse、voice、inequality。", "案例题中如果有人能定义规则、评价他人或要求他人适应，就涉及 power。"],
      memory: "权力决定谁能制定规则、解释意义和被认真听见。"
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

  function normalizeItems(items) {
    if (!items) return [];
    return Array.isArray(items) ? items : [items];
  }

  function list(items) {
    return `<ul>${normalizeItems(items).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
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
          ${card("card-p", "提出人 / 代表学者", entry.scholar)}
          ${card("card-b", "主要特征", entry.features)}
          ${card("card-g", "跨文化交际意义", entry.icc)}
          ${card("card-o", "考试辨析", entry.exam)}
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
