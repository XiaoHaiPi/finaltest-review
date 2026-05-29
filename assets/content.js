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
    },
    "cultural-identity": {
      scholar: ["代表学者：Fong、Ting-Toomey、Chung、Klyukanov 和 Dervin 都从群体归属、符号意义和互动建构角度讨论 cultural identity。"],
      definition: "文化身份是个体对某一文化群体的归属感、情感意义和自我定位，也包括他人通过语言、传统、规范和符号行为对其文化归属的识别。",
      features: ["文化身份是抽象、复杂、动态并由社会建构的。", "它包含共同传统、遗产、语言、规范、符号性言语与非言语行为。", "它不是固定标签，而是在自我称呼与他人归类之间不断协商。"],
      icc: ["文化身份会塑造人们对合适交际行为、身份展示和沟通风格的期待。", "跨文化互动中，身份期待不同可能引发焦虑、误解甚至冲突。", "理解文化身份有助于避免把个体简化为国籍或族群标签。"],
      exam: ["cultural identity 常考定义、动态性和社会建构性。", "可与 social identity 区分：cultural identity 更强调共享符号系统、文化传统和归属感的情感意义。", "案例题中涉及身份展示、归属感和他人归类时可调用。"],
      memory: "文化身份是我如何归属某种文化，以及别人如何识别这种归属。"
    },
    "silence": {
      scholar: ["无单一提出人：silence 属于非语言交际研究中的重要概念，常与 Hall 的高低语境理论一起分析。"],
      definition: "沉默是交际过程中没有使用话语但仍可能承载意义的非语言行为，它可以提供思考、情绪控制、反馈、礼貌或不满表达的空间。",
      features: ["沉默可以表示深思、尊重、尴尬、拒绝、同意、不满或等待，意义依赖语境。", "高语境文化通常更能通过沉默、停顿和非语言线索传递意义。", "低语境文化可能更容易把沉默理解为缺乏回应、信息不足或不礼貌。"],
      icc: ["跨文化交际中，沉默的误读会导致对礼貌、态度和能力的错误判断。", "分析沉默时要同时看关系、权力、场合、文化语境和交际目的。", "沉默也可作为反馈，让双方判断观点是否清楚或是否重要。"],
      exam: ["silence 属于 nonverbal communication。", "不要把沉默一律解释为无话可说；它可能是礼貌、思考或冲突回避。", "案例中看到对方不回答、停顿或回避直接表态，可从 high-context 与 facework 分析。"],
      memory: "沉默不是没有意义，而是意义没有用话语说出来。"
    },
    "intercultural-ethics": {
      scholar: ["无单一提出人：ethics 是跨文化交际中处理价值冲突和道德选择的基础工具。"],
      definition: "伦理是在面对困难道德选择时用来判断和行动的原则工具；跨文化语境中的伦理尤其关注如何在冲突权利、文化差异和共同人性之间作出负责选择。",
      features: ["伦理选择常发生在没有唯一正确答案、需要平衡竞争性权利的时候。", "跨文化伦理要求尊重个体价值、承认差异合理性，并意识到沟通具有影响力。", "它不等于简单迎合任何文化，也不等于用本文化标准压倒他文化。"],
      icc: ["跨文化交际中的伦理帮助人们避免民族中心主义、文化霸权和无原则相对主义。", "它要求交际者在尊重差异的同时承担自己行动的后果。", "讨论文化冲突时，伦理视角可以补充权力、身份和价值分析。"],
      exam: ["ethics 可与 cultural relativism、universalism 一起考。", "关键词：moral choices、competing rights、responsibility、respect。", "案例题结尾提出建议时，可加入尊重个体、寻找共同点和承认差异。"],
      memory: "伦理是在文化差异中负责任地做选择。"
    },
    "cultural-relativism": {
      scholar: ["代表学者：Franz Boas 和后续人类学传统常与文化相对主义联系在一起。"],
      definition: "文化相对主义认为伦理系统和文化规范会因文化而异，不同系统各有其内部合理性，不能简单用单一文化标准判断所有文化。",
      features: ["它反对民族中心主义，要求把行为放回其文化语境中理解。", "它强调不同文化系统都可能有效，而非天然高低有别。", "过度相对主义可能难以处理伤害、压迫或基本权利冲突。"],
      icc: ["文化相对主义能帮助交际者暂缓评价、理解差异并减少误解。", "它鼓励先问“这一行为在对方文化中意味着什么”，再作判断。", "在伦理困境中，需要与普遍主义、人权和责任意识一起平衡。"],
      exam: ["relativism 与 universalism 是一对高频对比。", "relativism 强调文化语境和多种伦理系统的有效性。", "不要写成“任何行为都必须接受”；更准确是先理解语境，再进行审慎伦理判断。"],
      memory: "文化相对主义先把行为放回文化语境中理解。"
    },
    "cultural-universalism": {
      scholar: ["无单一提出人：universalism 是伦理学和跨文化伦理讨论中的基础立场。"],
      definition: "文化普遍主义认为无论人、语境、时间或地点如何，都存在适用于所有文化的普遍伦理原则或基本规范。",
      features: ["它与文化相对主义相对，强调跨文化的共同道德底线。", "它常用于讨论基本人权、人的尊严、公正和不可伤害等问题。", "过度普遍主义可能忽视具体文化语境，并被误用为本文化优越感。"],
      icc: ["普遍主义帮助跨文化交际者在差异之外寻找共同伦理基础。", "它可以防止以文化差异为名合理化伤害、压迫和不平等。", "实际分析中应结合语境理解与共同原则，避免相对主义或民族中心主义两个极端。"],
      exam: ["universalism 强调 immutable universal ethical precepts。", "与 relativism 区分：前者找共同伦理原则，后者强调文化内部合理性。", "案例题涉及权利冲突时，可用 relativism + universalism 平衡分析。"],
      memory: "文化普遍主义相信差异之外仍有共同伦理底线。"
    }
  };

  const sourceDefinitions = {
    "generalizations": {
      en: [
        "Generalizations are based on limited data and then applied to a larger population. In intercultural communication, this means ascribing characteristics to a larger group based on attributes displayed by a smaller group.",
        "Cultural generalizations should be viewed as approximations, qualified rather than absolute, and supported by a variety of sources."
      ],
      zh: [
        "概括是基于有限数据并应用到更大人群的判断。在跨文化交际中，它指根据较小群体表现出的特征推断较大群体的特征。",
        "文化概括应被看作近似判断，需要限定条件，不能绝对化，并应尽量由多种来源支持。"
      ]
    },
    "objectivity": {
      en: [
        "Objectivity means being not influenced by personal feelings, interpretations, or prejudice, and being based on facts.",
        "It requires approaching each new situation with an open mind, suspending judgment, and learning to value distinct groups regardless of culture, race, ethnicity, religion, country, or gender."
      ],
      zh: [
        "客观性指判断不受个人感受、解释或偏见影响，而是以事实为基础。",
        "它要求以开放心态面对新情境，暂缓主观判断，并学习尊重不同文化、种族、族群、宗教、国家或性别群体。"
      ]
    },
    "ethnocentrism": {
      en: [
        "Ethnocentrism is the habit of overemphasizing one's own culture as a template for assessing other cultures.",
        "More specifically, it is the belief that one's own culture is superior to all others."
      ],
      zh: [
        "民族中心主义是过度强调自身文化，并把它当作评价其他文化模板的习惯。",
        "更具体地说，它是一种认为自己的文化优于其他所有文化的信念。"
      ]
    },
    "human-communication": {
      en: [
        "Human communication is a dynamic process in which people attempt to share their thoughts with other people through the use of symbols in particular settings."
      ],
      zh: [
        "人类沟通是一个动态过程，在这个过程中，人们在特定情境中借助符号与他人分享自己的想法。"
      ]
    },
    "symbol": {
      en: [
        "In human communication, a symbol is an expression that stands for or represents something else.",
        "Communication involves attaching meaning to symbolic events generated by another person, whether those symbols are intentional or unintentional."
      ],
      zh: [
        "在人类沟通中，符号是代表或指代其他事物的一种表达形式。",
        "沟通包含对他人产生的符号性事件赋予意义；这些符号可以是有意的，也可以是无意的。"
      ]
    },
    "culture": {
      en: [
        "Culture is a set of human-made objective and subjective elements that increased survival and satisfaction in an ecological niche and became shared among people who could communicate with a common language in the same time and place.",
        "Culture also means that a group has established symbols and rules for using those symbols."
      ],
      zh: [
        "文化是一组人为创造的客观和主观要素；这些要素曾提升特定生态环境中人们的生存概率和满足感，并在同一时空、使用共同语言的人群中共享。",
        "文化也意味着一个群体建立了一套符号，以及使用这些符号的规则。"
      ]
    },
    "world-view": {
      en: [
        "World view is the way a people interpret reality and events, including their images of themselves and how they relate to the world around them.",
        "It works as an overarching philosophy of how the world operates and often functions automatically and unconsciously."
      ],
      zh: [
        "世界观是一个群体解释现实和事件的方式，包括他们如何看待自己，以及如何理解自己与周围世界的关系。",
        "它像一种关于世界如何运作的总体哲学，常常以自动、无意识的方式发挥作用。"
      ]
    },
    "intercultural-communication-competence": {
      en: [
        "Most research on intercultural communication competence includes being motivated, having a fund of knowledge to draw on, and possessing certain communication skills."
      ],
      zh: [
        "大多数关于跨文化交际能力的研究都包括三个方面：具有交际动机，拥有可调用的知识储备，并具备一定的沟通技能。"
      ]
    },
    "deep-culture": {
      en: [
        "The key to how members of a culture view the world can be found in that culture's deep structure.",
        "Deep structure consists of conscious and unconscious assumptions about how the world works; it unifies a culture, makes it unique, and explains the how and why of collective action."
      ],
      zh: [
        "理解一个文化成员如何看待世界的关键，可以在该文化的深层结构中找到。",
        "深层结构由关于世界如何运作的有意识和无意识假设构成；它凝聚文化，使文化具有独特性，并解释集体行动的方式和原因。"
      ]
    },
    "social-organizations-institutions": {
      en: [
        "Social organizations, or social institutions, are the groups and affiliations that members of a culture turn to for lessons about the most important aspects of life.",
        "They create social structure, help members meet basic needs, and coalesce members into a cohesive unit; influential examples include family, state or community, and religion or worldview."
      ],
      zh: [
        "社会组织或社会制度，是文化成员用来学习生活中最重要方面的群体和归属关系。",
        "它们创造社会结构，帮助成员满足基本需求，并把成员凝聚成整体；重要例子包括家庭、国家或社区、宗教或世界观。"
      ]
    },
    "family": {
      en: [
        "A family is any sexually expressive, parent-child, or other kin relationship in which people, usually related by ancestry, marriage, or adoption, form an economic unit, care for the young, attach their identity to the group, and commit to maintaining that group over time.",
        "Most people encounter a family of orientation and a family formed when they take a mate; they may also belong to nuclear or extended family patterns."
      ],
      zh: [
        "家庭是基于性关系、亲子关系或其他亲属关系形成的群体，成员通常通过血缘、婚姻或收养相连，并形成经济单位、照料幼者、把身份与群体相连，且长期维持该群体。",
        "多数人会经历出身家庭和成年后组建的家庭；同时还可能处于核心家庭或大家庭模式之中。"
      ]
    },
    "individual-collective-dimension": {
      en: [
        "The individual-collective dimension is a culture's tendency to encourage people to be unique and independent or conforming and interdependent.",
        "Individualistic cultures value the individual over the group; collective cultures emphasize the needs and goals of the group and view people primarily as members of groups and collectives."
      ],
      zh: [
        "个体主义/集体主义维度指一种文化倾向于鼓励人们独特、独立，还是顺从、相互依赖。",
        "个体主义文化重视个人高于群体；集体主义文化强调群体的需求和目标，并把人主要看作群体或集体的成员。"
      ]
    },
    "perception": {
      en: [
        "Perception is how we make sense of the world and how we construct reality.",
        "The process involves selectively attending to stimuli, organizing or categorizing selected information, and assigning meaning; sociocultural factors such as beliefs, values, and attitudes provide templates for that meaning."
      ],
      zh: [
        "感知是我们理解世界、建构现实的方式。",
        "这一过程包括有选择地注意刺激、组织或分类被选择的信息，并赋予意义；信念、价值观和态度等社会文化因素会为意义解释提供模板。"
      ]
    },
    "belief": {
      en: [
        "A belief is a concept or idea that an individual or group holds to be true.",
        "Beliefs represent subjective conviction in the truth of something, with or without proof; shared beliefs can become cultural norms or values."
      ],
      zh: [
        "信念是个人或群体认为真实的概念或观念。",
        "信念代表人们对某事为真的主观确信，不论是否有证据；被共享的信念可能发展为文化规范或价值观。"
      ]
    },
    "cultural-values": {
      en: [
        "Beliefs form the foundation of values; what people consider desirable for themselves and their society is a product of their values.",
        "Cultural values provide guidelines for deciding what is good or bad, desirable or undesirable, right or wrong, and appropriate or inappropriate in human activity."
      ],
      zh: [
        "信念构成价值观的基础；人们认为对自己和社会而言什么是可取的，来自其价值观。",
        "文化价值观为人们判断人类活动中什么是好坏、可取或不可取、对错、合适或不合适提供准则。"
      ]
    },
    "behaviors": {
      en: [
        "Behaviors are the outward manifestations of internalized beliefs and values.",
        "Culture has a regulatory influence on behavior by defining accepted deportment in different social contexts and specifying age-appropriate and gender-specific conduct."
      ],
      zh: [
        "行为是内化的信念和价值观的外在表现。",
        "文化会调节行为，规定不同社会情境中被接受的举止，并界定符合年龄和性别期待的行为。"
      ]
    },
    "cultural-patterns-value-orientations": {
      en: [
        "Cultural patterns, sometimes called value orientations, are an umbrella term for cultural values that characterize the dominant group within a culture.",
        "They refer to culturally based beliefs, values, attitudes, and behaviors shared by members of a particular culture; these patterns are integrated, dynamic, and sometimes contradictory."
      ],
      zh: [
        "文化模式，有时也叫价值取向，是用来概括一个文化中主导群体文化价值观的总称。",
        "它指特定文化成员共享的、以文化为基础的信念、价值观、态度和行为；这些模式相互关联、动态变化，也可能存在矛盾。"
      ]
    },
    "high-context-low-context": {
      en: [
        "In high-context communication, much of the information is already in the person or context, while very little is in the explicit coded message.",
        "In low-context communication, most information is vested in the explicit code; high-context cultures rely more on context, inference, gestures, and what is not said, while low-context cultures rely more on words."
      ],
      zh: [
        "在高语境沟通中，大量信息已经存在于人、关系或语境之中，明确编码的话语只承载较少信息。",
        "在低语境沟通中，大部分信息依靠明确编码的语言来传递；高语境文化更依赖语境、推断、手势和未说出口的内容，低语境文化更依赖语言文字。"
      ]
    },
    "context": {
      en: [
        "Hall saw context as the information that surrounds an event.",
        "His work showed that cultures are often characterized by high-context or low-context communication."
      ],
      zh: [
        "霍尔把语境看作围绕某个事件的信息。",
        "他的研究表明，文化常常可以用高语境或低语境沟通来描述。"
      ]
    },
    "uncertainty-avoidance": {
      en: [
        "Uncertainty avoidance is the extent to which members of a culture feel threatened by ambiguous or unknown situations.",
        "High uncertainty avoidance cultures reduce unpredictability through rules, regulations, planning, rituals, and established conventions; low uncertainty avoidance cultures accept uncertainty more easily and tend to be flexible, tolerant, and less constrained by social protocol."
      ],
      zh: [
        "不确定性规避指一种文化的成员在多大程度上会受到模糊或未知情境的威胁。",
        "高不确定性规避文化通过规则、制度、计划、仪式和既定惯例来减少不可预测性；低不确定性规避文化更容易接受不确定性，更灵活、宽容，也较少受社会礼仪束缚。"
      ]
    },
    "power-distance": {
      en: [
        "Power distance concerns how societies manage the fact that people are unequal.",
        "It is the extent to which the less powerful members of institutions and organizations within a country expect and accept that power is distributed unequally."
      ],
      zh: [
        "权力距离关注社会如何处理人们并不平等这一事实。",
        "它指一个国家内机构和组织中权力较小的成员，对权力不平等分配的期待和接受程度。"
      ]
    },
    "masculinity-femininity": {
      en: [
        "Hofstede uses masculinity and femininity to refer to the degree to which masculine or feminine traits are valued and revealed.",
        "Masculinity emphasizes assertiveness, toughness, and material success; femininity emphasizes modesty, tenderness, care, and quality of life for both men and women."
      ],
      zh: [
        "霍夫斯泰德用男性化和女性化来指男性化或女性化特质被重视和展现的程度。",
        "男性化强调果断、强硬和物质成功；女性化强调男女都应谦逊、温和、关怀他人并重视生活质量。"
      ]
    },
    "face-facework": {
      en: [
        "Face is the public self-image a person projects to other people, or how one is perceived by others.",
        "Facework refers to coordinated practices through which communicators build, maintain, protect, threaten, acquire, or give face."
      ],
      zh: [
        "面子是一个人向他人呈现的公共自我形象，也就是别人如何看待你。",
        "面子功夫指交际者用来建立、维持、保护、威胁、获得或给予面子的一系列协调性沟通实践。"
      ]
    },
    "social-identities": {
      en: [
        "Social identities are represented by the many groups you belong to, such as racial, ethnic, occupational, age, hometown, and other groups.",
        "They result from being a member of some social groups and a nonmember of others."
      ],
      zh: [
        "社会身份由你所属的许多群体来体现，例如种族、族群、职业、年龄、家乡等群体。",
        "它来自一个人属于某些社会群体，同时不属于另一些社会群体这一事实。"
      ]
    },
    "personal-identity": {
      en: [
        "Personal identity is what sets you apart from other in-group members and marks you as special or unique.",
        "It can come from innate talent, special achievement, or intangible traits such as personality."
      ],
      zh: [
        "个人身份是使你区别于内群体其他成员，并标记你特殊性或独特性的东西。",
        "它可以来自天赋、特殊成就，也可以来自性格等无形特质。"
      ]
    },
    "gender": {
      en: [
        "Gender identity is different from biological sex or sexual identity, which is derived from anatomy at birth.",
        "Gender is a socially constructed concept that refers to how a particular culture differentiates masculine and feminine social roles."
      ],
      zh: [
        "性别身份不同于生物性别或性身份，后者来自出生时的身体解剖特征。",
        "性别是一个社会建构概念，指特定文化如何区分男性化和女性化的社会角色。"
      ]
    },
    "ethnic-identity-ethnicity": {
      en: [
        "Ethnic identity, or ethnicity, is derived from a sense of shared heritage, history, traditions, values, similar behaviors, geographical area of origin, and in some cases language.",
        "It may come from a nation-state or from a cultural grouping that transcends national borders and is grounded in shared cultural practices and beliefs."
      ],
      zh: [
        "族群身份或族群性来自对共同遗产、历史、传统、价值观、相似行为、原属地域以及有时共同语言的感受。",
        "它可能来自民族国家，也可能来自跨越国界、以共同文化实践和信念为基础的文化群体。"
      ]
    },
    "national-character": {
      en: [
        "National character implies that members of a nation, despite ethnic, racial, religious, or individual differences, resemble one another in certain fundamental matters of belief and conduct more than they resemble members of other nations."
      ],
      zh: [
        "国民性格指一个国家的成员虽然存在族群、种族、宗教或个人差异，但在某些基本信念和行为方面彼此相似，并且这种相似性超过他们与其他国家成员的相似性。"
      ]
    },
    "ascribed-avowed-identities": {
      en: [
        "Identities can be classified as ascribed or avowed based on how they are acquired, meaning whether an identity is obtained involuntarily or voluntarily.",
        "Racial, ethnic, and sexual identities assigned at birth are often ascribed; an identity such as being a particular university student is avowed because it is voluntarily chosen."
      ],
      zh: [
        "身份可以根据获得方式分为赋予身份和自认身份，也就是身份是非自愿获得还是自愿获得。",
        "出生时被指定的种族、族群和性身份通常属于赋予身份；作为某所大学学生这样的身份属于自认身份，因为它是自愿选择的。"
      ]
    },
    "language": {
      en: [
        "Language may be thought of as an organized system of symbols, both verbal and nonverbal, used in a common and uniform way by people who can manipulate these symbols to express thoughts and feelings."
      ],
      zh: [
        "语言可以被理解为一个有组织的符号系统，包含语言和非语言符号，由能够操控这些符号的人以共同且一致的方式用来表达思想和情感。"
      ]
    },
    "denotative-connotative-meaning": {
      en: [
        "Denotative meaning is the literal, conventional meaning that most people in a culture have agreed is the meaning of a symbol.",
        "Connotative meaning is the private, emotional meaning a word evokes, reflecting personal and cultural experiences and often creating difficulty in intercultural exchanges."
      ],
      zh: [
        "外延意义是一个文化中大多数人约定的符号字面、常规意义。",
        "内涵意义是词语唤起的私人、情感性意义，反映个人和文化经验，并常在跨文化交流中造成理解困难。"
      ]
    },
    "nonverbal-communication": {
      en: [
        "Nonverbal communication involves all nonverbal stimuli in a communication setting that are generated by both the source and the source's use of the environment and that have potential message value for the source and/or receiver.",
        "It includes intentional and unintentional messages and the reciprocal relationship between verbal and nonverbal messages."
      ],
      zh: [
        "非语言沟通包括交际情境中由信息来源及其对环境的使用所产生的所有非语言刺激，这些刺激对发送者和/或接收者具有潜在信息价值。",
        "它包括有意和无意的信息，也包括语言信息与非语言信息之间的相互关系。"
      ]
    },
    "paralanguage": {
      en: [
        "Paralanguage includes all oral cues in the stream of spoken utterances except the words themselves.",
        "Most classifications divide it into vocal qualities, vocal characterizers, and vocal segregates."
      ],
      zh: [
        "副语言包括口语话流中除词语本身之外的所有口头线索。",
        "多数分类把它分为嗓音质量、嗓音特征和嗓音分离成分。"
      ]
    },
    "proxemics": {
      en: [
        "Proxemics is the study of the message system created by distance and space in communication.",
        "Hall defines proxemics as the interrelated observations and theories of human use of space as a specialized elaboration of culture; today it includes personal space, seating, and furniture arrangement."
      ],
      zh: [
        "空间语言学研究沟通中由距离和空间形成的信息系统。",
        "霍尔把空间语言学定义为关于人类如何使用空间的一组相互关联的观察和理论，认为空间使用是文化的特殊展开；今天它包括个人空间、座位和家具安排。"
      ]
    },
    "monochronic-polychronic-time": {
      en: [
        "Hall proposed that cultures organize time in two broad ways: monochronic time and polychronic time.",
        "M-time views time as linear, sequential, segmented, and schedule-based, with one thing done at a time; P-time treats relationships rather than tasks as central, uses time flexibly, and may involve several people or activities at once."
      ],
      zh: [
        "霍尔提出，文化大体上以两种方式组织时间：单时制和多时制。",
        "单时制把时间看作线性、连续、可分割并由日程安排管理，强调一次做一件事；多时制以关系而非任务为中心，灵活使用时间，并可能同时处理多人或多项活动。"
      ]
    },
    "culture-shock": {
      en: [
        "A sojourner entering a new cultural environment for a sustained period usually experiences some degree of culture shock.",
        "Culture shock reactions may be affective, behavioral, and cognitive, including disorientation, rejection, homesickness, withdrawal, irritation, fatigue, and sometimes depression."
      ],
      zh: [
        "旅居者在较长时间进入新的文化环境时，通常会经历某种程度的文化冲击。",
        "文化冲击的反应可能体现在情感、行为和认知层面，包括迷失方向、被排斥感、想家、退缩、烦躁、疲惫，有时甚至抑郁。"
      ]
    },
    "acculturation": {
      en: [
        "Acculturation is the process of learning to become functional and comfortable in a new cultural setting.",
        "It can be understood as a continuing process of stress, adaptation, and growth in which sojourners develop and incorporate the cultural norms needed to function competently."
      ],
      zh: [
        "文化适应是学习在新的文化环境中有效生活并感到舒适的过程。",
        "它可以理解为一个持续的压力、适应和成长过程；旅居者在其中发展并吸收必要的文化规范，以便在新环境中胜任生活和交际。"
      ]
    },
    "stereotyping": {
      en: [
        "Stereotyping is a complex form of categorization that mentally organizes one's experiences with and guides behavior toward a particular group of people.",
        "A stereotype is a cognitive structure containing the perceiver's knowledge, beliefs, and expectancies about some human social groups; problems arise when people overgeneralize."
      ],
      zh: [
        "刻板印象是一种复杂的分类形式，它在心理上组织人们与某一群体有关的经验，并引导人们对该群体的行为。",
        "刻板印象是一种认知结构，包含感知者对某些人类社会群体的知识、信念和期待；当人们过度概括时就会产生问题。"
      ]
    },
    "prejudices": {
      en: [
        "Prejudice is an unfounded attitude toward an outgroup based on comparison with one's ingroup.",
        "It is often displayed through group labels, hostile humor, or vocabulary that stresses the superiority of one group over another, and negative feelings and attitudes are central to it."
      ],
      zh: [
        "偏见是基于与内群体比较而形成的、针对外群体的无根据态度。",
        "它常通过群体标签、敌对幽默或强调某一群体优越于另一群体的词汇表现出来，负面情感和态度是其核心部分。"
      ]
    },
    "racism": {
      en: [
        "Racism appears in both blatant and subtle forms at organizational and personal levels.",
        "Minority groups may be subjected to racism because of perceived biological differences, usually physical appearance; racism excludes selected groups from social, economic, and educational institutions and damages both identities and social cohesion."
      ],
      zh: [
        "种族主义既可能以公开形式出现，也可能以隐蔽形式存在于组织层面和个人层面。",
        "少数群体可能因为被感知到的生理差异，尤其是外貌差异而遭受种族主义；种族主义会把特定群体排除在社会、经济和教育制度之外，并损害身份认同和社会凝聚力。"
      ]
    },
    "power": {
      en: [
        "Max Weber considered power as the ability to exert one's will even in the face of opposition.",
        "More broadly, power is the ability to cause things to happen, to control what happens, and to prevent things one does not want to happen."
      ],
      zh: [
        "马克斯·韦伯把权力理解为即使面对反对也能贯彻自身意志的能力。",
        "更广义地说，权力是促使事情发生、控制发生的事情，以及防止不希望发生的事情的能力。"
      ]
    }
  };

  const memorizationNotes = {
    "human-communication": [
      { title: "Definition / 定义", items: [
        { en: "Communication, our ability to share ideas and feelings, is the basis of all human contact.", zh: "交际是分享想法和感受的能力，也是所有人类联系的基础。" },
        { en: "Human communication is a dynamic process in which people attempt to share their thoughts with others through symbols in particular settings.", zh: "人类交际是一个动态过程，人们在特定环境中通过符号与他人分享思想。" }
      ] },
      { title: "Elements / 要素", items: [
        { en: "source", zh: "源" },
        { en: "encoding", zh: "编码" },
        { en: "message", zh: "信息" },
        { en: "channel", zh: "信道" },
        { en: "receiver", zh: "接收者" },
        { en: "decoding", zh: "解码" },
        { en: "feedback", zh: "反馈" },
        { en: "noise", zh: "噪声" }
      ] },
      { title: "Characteristics / 特点", items: [
        { en: "Communication is dynamic, symbolic, contextual, self-reflective, irreversible, consequential, and complex.", zh: "交际是动态的、符号性的、有语境的、自我反省的、不可逆的、有后果的、复杂的。" }
      ] },
      { title: "Functions / 功能", items: [
        { en: "Communication helps fulfill interpersonal needs.", zh: "交际有助于满足人际需求。" },
        { en: "Communication assists with person perception.", zh: "交际有助于人的认知。" },
        { en: "Communication establishes cultural and personal identities.", zh: "交际确立文化身份和个人身份。" },
        { en: "Communication has persuasive qualities.", zh: "交际具有说服力。" }
      ] }
    ],
    "culture": [
      { title: "Definition / 定义", items: [
        { en: "Culture is a set of human-made objective and subjective elements that increased survival and satisfaction in an ecological niche and became shared among people with a common language living in the same time and place.", zh: "文化是一组人为的客观和主观因素，它们曾提高特定生态位中的生存可能性和满足感，并在同一时空、使用共同语言的人群中共享。" }
      ] },
      { title: "Function / 功能", items: [
        { en: "Culture lays out a somewhat predictable world and offers a blueprint for how to behave and what results to anticipate.", zh: "文化展示一个相对可预测的世界，并为如何行为以及预期何种结果提供蓝图。" }
      ] },
      { title: "Characteristics / 特点", items: [
        { en: "Culture is shared.", zh: "文化是共享的。" },
        { en: "Culture is transmitted from generation to generation.", zh: "文化代代相传。" },
        { en: "Culture is based on symbols.", zh: "文化以符号为基础。" },
        { en: "Culture is learned.", zh: "文化是习得的。" },
        { en: "Culture is dynamic.", zh: "文化是动态的。" }
      ] },
      { title: "Elements / 要素", items: [
        { en: "worldview, religion, history, values, social organizations, language, important ideals", zh: "世界观、宗教、历史、价值观、社会组织、语言、重要观念。" }
      ] }
    ],
    "intercultural-communication-competence": [
      { title: "Basic Components / 基本组成", items: [
        { en: "Motivation can be extrinsic or intrinsic.", zh: "动机可以是外在的，也可以是内在的。" },
        { en: "Knowledge works with motivation and requires gathering a fund of knowledge about other cultures.", zh: "知识与动机协同发挥作用，要求人们主动积累关于其他文化的知识。" },
        { en: "Skills are the specific behaviors used to make a communication encounter successful.", zh: "技巧是为使交际成功而采取的具体行为。" }
      ] },
      { title: "Knowledge Types / 知识类型", items: [
        { en: "content knowledge", zh: "内容知识" },
        { en: "procedural knowledge", zh: "程序知识" }
      ] },
      { title: "Exam Focus / 考试重点", items: [
        { en: "Most research includes motivation, knowledge, and communication skills.", zh: "多数研究都把动机、知识和交际技巧作为跨文化交际能力的核心。" }
      ] }
    ],
    "family": [
      { title: "Definition / 定义", items: [
        { en: "A family is a sexually expressive, parent-child, or other kin relationship in which people form an economic unit, care for the young, attach identity to the group, and commit to maintaining it over time.", zh: "家庭是性关系、亲子关系或其他亲属关系形成的群体，成员形成经济单位、照顾孩子、把身份与群体相连，并承诺长期维持该群体。" }
      ] },
      { title: "Forms / 分类", items: [
        { en: "nuclear family: parent or parents and child or children as one unit", zh: "核心家庭：父母和孩子构成一个单位。" },
        { en: "extended family: typically includes grandparents and relatives", zh: "大家庭：通常包括祖父母和亲戚。" }
      ] },
      { title: "Functions / 功能", items: [
        { en: "reproductive, economic, socialization, language acquisition, and identity functions", zh: "繁殖功能、经济功能、社会化功能、语言习得功能和身份功能。" }
      ] },
      { title: "Significance / 意义", items: [
        { en: "The family supplies basic physical needs and is the first carrier of essential cultural information.", zh: "家庭不仅满足孩子基本物质需求，也是孩子作为文化成员所需重要信息的第一个载体。" },
        { en: "Cultural variants include gender roles, individualism and collectivism, individualism and the family, and collectivism and the family.", zh: "家庭互动的文化变体包括性别角色、个人主义与集体主义、个人主义家庭观和集体主义家庭观。" }
      ] }
    ],
    "perception": [
      { title: "Characteristics / 特点", items: [
        { en: "Perception is selective.", zh: "认知是有选择性的。" },
        { en: "Perception is learned.", zh: "认知是后天习得的。" },
        { en: "Perception is culturally determined.", zh: "认知由文化决定。" },
        { en: "Perception is consistent.", zh: "认知具有一致性，一旦形成解释通常不易改变。" },
        { en: "Perception is inaccurate.", zh: "认知并不完全准确，人们会通过受文化、价值观和经历影响的主观镜头看世界。" }
      ] }
    ],
    "belief": [
      { title: "Definition / 定义", items: [
        { en: "A belief is a concept or idea that an individual or group holds to be true.", zh: "信念是个人或群体认为真实的概念或想法。" }
      ] },
      { title: "Characteristics / 特点", items: [
        { en: "Beliefs represent subjective conviction in the truth of something, with or without proof.", zh: "信念代表我们对某事真实性的主观确信，无论是否有证据。" },
        { en: "Shared beliefs can represent cultural norms and values.", zh: "共同信念可以代表文化规范和价值观。" }
      ] },
      { title: "Function / 功能", items: [
        { en: "Beliefs can associate people with like-minded individuals and reinforce conviction.", zh: "信念可以使人们与志同道合者联系，并强化确信感。" }
      ] }
    ],
    "cultural-values": [
      { title: "Definition / 定义", items: [
        { en: "What people consider desirable for themselves and for society is a product of values.", zh: "人们认为对自己和社会而言可取的东西，是价值观的产物。" }
      ] },
      { title: "Characteristics / 特点", items: [
        { en: "Values are broad-based, enduring, relatively stable, and operate consciously and subconsciously.", zh: "价值观基础广泛、经久稳定，并在有意识和潜意识层面发挥作用。" }
      ] },
      { title: "Function and Significance / 功能与意义", items: [
        { en: "Values permeate and characterize a culture.", zh: "价值观渗透并表征文化。" },
        { en: "Cultural values establish expected behavior modes and criteria for judging conduct.", zh: "文化价值观建立行为模式和评价行为的标准。" },
        { en: "They help members decide what is good or bad, right or wrong, appropriate or inappropriate.", zh: "它们帮助文化成员判断好坏、对错、合适与否。" }
      ] }
    ],
    "behaviors": [
      { title: "Definition / 定义", items: [
        { en: "Behaviors are the outward manifestations of internalized beliefs and values.", zh: "行为是内化的信念和价值观的外在表现。" }
      ] },
      { title: "Relation to Culture / 与文化的关系", items: [
        { en: "Culture has a regulatory influence on behaviors.", zh: "文化对行为具有调节和规范作用。" }
      ] },
      { title: "Relation to ICC / 与跨文化交际的关系", items: [
        { en: "Beliefs and values exert influence on people's communicative behaviors.", zh: "信念和价值观会影响人们的交际行为。" }
      ] }
    ],
    "cultural-identity": [
      { title: "Scholars' Definitions / 学者定义", items: [
        { en: "Fong defines cultural identity through a shared system of symbolic verbal and nonverbal behavior meaningful to members with belonging, traditions, heritage, language, and norms.", zh: "Fong 从共享的象征性言语与非言语行为系统、归属感、传统、遗产、语言和行为规范来界定文化身份。" },
        { en: "Ting-Toomey and Chung define cultural identity as the emotional significance attached to belonging or affiliation with a larger culture.", zh: "Ting-Toomey 和 Chung 把文化身份定义为人们赋予对更大文化归属或依附感的情感意义。" },
        { en: "Klyukanov sees cultural identity as membership in a group sharing the same symbolic meanings.", zh: "Klyukanov 将文化身份视为共享相同象征意义的群体成员身份。" },
        { en: "Dervin defines cultural identity as what people construct whenever they are in contact with other human beings.", zh: "Dervin 认为文化身份是在与他人接触中不断建构出来的东西。" }
      ] },
      { title: "Function / 功能", items: [
        { en: "Identity is increasingly a negotiation between what you call yourself and what others are willing to call you.", zh: "身份越来越成为你如何称呼自己与别人愿意如何称呼你之间的协商。" },
        { en: "Cultural identity shapes expectations of appropriate communicative behaviors in social settings.", zh: "文化身份塑造人们对不同社会场景中合适交际行为的理解与期待。" },
        { en: "Different expectations for identity display and communication style can create anxiety, misunderstandings, and conflict.", zh: "身份展示和沟通风格期待不同，可能造成焦虑、误解和冲突。" }
      ] }
    ],
    "language": [
      { title: "Definition / 定义", items: [
        { en: "Language is an organized system of verbal and nonverbal symbols used in a common way to express thoughts and feelings.", zh: "语言是一个有组织的符号系统，包括语言符号和非语言符号，人们以共同方式使用它们表达思想和情感。" }
      ] },
      { title: "Functions / 功能", items: [
        { en: "Social interaction: language allows speaking, reading, writing, listening, thinking, emotion expression, stress relief, and invoking assistance.", zh: "社会互动：语言使说、读、写、听、思考、表达情绪、缓解压力和寻求帮助成为可能。" },
        { en: "Social cohesion: a common language helps people form groups and cooperate.", zh: "社会凝聚：共同语言帮助人们形成群体并合作。" },
        { en: "Expression of identity: language constructs individual, group, and cultural identity.", zh: "身份表达：语言是建构个人、群体和文化身份的主要机制。" }
      ] },
      { title: "Characteristics / 特点", items: [
        { en: "Words are only symbols.", zh: "词语只是符号。" },
        { en: "Words are arbitrary.", zh: "词语具有任意性。" },
        { en: "Words evoke denotative and connotative meanings.", zh: "词语能唤起外延意义和内涵意义。" }
      ] }
    ],
    "generalizations": [
      { title: "Definition / 定义", items: [
        { en: "Generalizations are based on limited data and then applied to a larger population.", zh: "概括基于有限数据，再应用到更大群体。" },
        { en: "In intercultural communication, this means ascribing characteristics to a larger group based on attributes displayed by a smaller group.", zh: "在跨文化交际中，它指根据较小群体表现出的属性，把特征归于更大群体。" }
      ] }
    ],
    "symbol": [
      { title: "Definition / 定义", items: [
        { en: "A symbol is an expression that stands for or represents something else.", zh: "符号是代表或指代其他事物的一种表达。" },
        { en: "Both intentional and unintentional symbolic events involve attaching meaning to what another person generates.", zh: "无论符号事件是有意还是无意，人们都会对他人产生的符号事件附加意义。" }
      ] }
    ],
    "world-view": [
      { title: "Definition / 定义", items: [
        { en: "Worldview is the way a people interpret reality and events, including their images of themselves and how they relate to the world around them.", zh: "世界观是人们解释现实和事件的方式，包括他们对自身的印象以及与周围世界的关系。" }
      ] },
      { title: "Characteristics and Function / 特点与功能", items: [
        { en: "Worldviews are automatic and unconscious, like culture itself.", zh: "世界观像文化本身一样，常是自动和无意识的。" },
        { en: "Worldview provides underpinnings for perception and makes sense of life.", zh: "世界观为认知和现实体验提供基础，并使生活变得有意义。" }
      ] }
    ],
    "deep-culture": [
      { title: "Definition / 定义", items: [
        { en: "Deep structure consists of conscious and unconscious assumptions about how the world works; it unifies a culture, makes it unique, and explains the how and why of collective action.", zh: "深层结构由关于世界如何运作的有意识和无意识假设构成；它统一文化、使文化独特，并解释集体行为的方式和原因。" }
      ] },
      { title: "Significance / 意义", items: [
        { en: "Deep structure institutions transmit culture's most important messages.", zh: "深层结构制度传递文化中最重要的信息。" },
        { en: "Deep structure institutions and their messages endure.", zh: "深层结构制度及其信息经久不衰。" },
        { en: "Deep structure institutions and their messages are deeply felt.", zh: "深层结构制度及其信息令人感触很深。" },
        { en: "Deep structure institutions supply much of a person's identity.", zh: "深层结构制度在很大程度上塑造个人身份。" }
      ] }
    ],
    "social-organizations-institutions": [
      { title: "Definition / 定义", items: [
        { en: "Social organizations represent the various social units within the culture.", zh: "社会组织代表文化中的各种社会单位。" }
      ] },
      { title: "Classification / 分类", items: [
        { en: "family, government, schools, tribes, clans, and other units", zh: "家庭、政府、学校、部落、氏族等社会单位。" }
      ] },
      { title: "Significance / 意义", items: [
        { en: "Develop patterned interactions and rules.", zh: "形成模式化互动和规则。" },
        { en: "Establish communication networks.", zh: "建立交际网络。" },
        { en: "Cultivate group cohesion.", zh: "培养群体凝聚力。" },
        { en: "Consistently satisfy individual basic needs.", zh: "持续满足个人基本需求。" }
      ] }
    ],
    "high-context-low-context": [
      { title: "Definition / 定义", items: [
        { en: "In high-context communication, most information is already in the person and little is in the explicit code.", zh: "高语境交际中，大部分信息已经存在于人和语境中，明确编码的信息较少。" },
        { en: "Low-context communication is the opposite: most information is vested in the explicit code.", zh: "低语境交际正相反，大部分信息归属于明确代码。" }
      ] },
      { title: "Characteristics / 特点", items: [
        { en: "High-context cultures rely on context; low-context cultures rely on words.", zh: "高语境文化依赖语境，低语境文化依赖文字和话语。" },
        { en: "High-context meaning is often not communicated through words.", zh: "高语境中的大部分意义往往不通过语言直接传达。" },
        { en: "Low-context cultures often have more population diversity and compartmentalized interpersonal contacts.", zh: "低语境文化通常人口多样性较高，人际联系也更分区化。" }
      ] },
      { title: "Function / 功能", items: [
        { en: "High-context cultures usually have similarity among members, creating shared perceptions, experiences, expectations, and social protocol.", zh: "高语境文化成员相似性较高，形成共享的感知、经验、期待和社会礼仪。" },
        { en: "People in high-context cultures can express and interpret emotions nonverbally more easily.", zh: "高语境文化中的人更容易用非语言方式表达和解释情绪。" }
      ] }
    ],
    "individual-collective-dimension": [
      { title: "Collectivism / 集体主义", items: [
        { en: "Collectivism is a culture's tendency to encourage people to be conforming and interdependent.", zh: "集体主义是鼓励人们遵从并相互依存的文化倾向。" },
        { en: "Collective cultures emphasize group needs and goals, interdependence, group achievement, and cooperation.", zh: "集体主义文化强调群体需求和目标、相互依赖、群体成就与合作。" }
      ] },
      { title: "Individualism / 个人主义", items: [
        { en: "Individualism is a culture's tendency to encourage people to be unique and independent.", zh: "个人主义是鼓励人们独特和独立的文化倾向。" },
        { en: "Individualistic cultures value uniqueness, independence, competition, self-determination, individual goals, and the I as a core identity.", zh: "个人主义文化重视独特性、独立、竞争、自我决定、个人目标，以及以“我”为核心的身份。" }
      ] }
    ],
    "uncertainty-avoidance": [
      { title: "Definition / 定义", items: [
        { en: "Uncertainty avoidance is the extent to which members of a culture feel threatened by ambiguous or unknown situations.", zh: "不确定性规避指文化成员在模糊或未知情境中感到威胁的程度。" }
      ] },
      { title: "High Uncertainty Avoidance / 高不确定性规避", items: [
        { en: "High uncertainty avoidance cultures reduce unpredictability and ambiguity through intolerance of deviant ideas, consensus, resistance to change, and traditional protocols.", zh: "高不确定性规避文化通过不容忍偏差观点、强调共识、抵制变化和坚持传统礼仪来减少不可预测性和模糊性。" }
      ] },
      { title: "Low Uncertainty Avoidance / 低不确定性规避", items: [
        { en: "Low uncertainty avoidance cultures accept uncertainty more easily, tolerate the unusual, value initiative, dislike hierarchy-related structure, take risks, and prefer fewer rules.", zh: "低不确定性规避文化更容易接受不确定，容忍异常，重视主动性，不喜欢等级结构，愿意冒险，并倾向较少规则。" }
      ] }
    ],
    "power-distance": [
      { title: "Definition / 定义", items: [
        { en: "Power distance is the extent to which less powerful members of institutions and organizations expect and accept unequal power distribution.", zh: "权力距离是机构和组织中权力较小成员对权力不平等分配的期待和接受程度。" }
      ] },
      { title: "High Power Distance / 高权力距离", items: [
        { en: "Members accept power as part of society and learn that people are not equal; hierarchy may be based on family name, education, age, profession, or organizational position.", zh: "成员接受权力是社会的一部分，并学习到人并不平等；等级可能基于姓氏、教育、年龄、职业或组织职位。" },
        { en: "Organizations commonly centralize power, recognize rank and status, follow authority lines, and make more authoritarian decisions.", zh: "组织通常权力集中，认可等级与地位，遵守权威路线，决策更具权威性。" }
      ] },
      { title: "Low Power Distance / 低权力距离", items: [
        { en: "Low power distance cultures minimize inequality, treat subordinates and superiors as equals, deemphasize titles, and prefer consultative consensus decision making.", zh: "低权力距离文化尽量减少不平等，下级和上级平等相待，不强调头衔，并倾向协商式共识决策。" }
      ] }
    ],
    "face-facework": [
      { title: "Face / 面子", items: [
        { en: "Face is the self-image a person projects to other people.", zh: "面子是一个人向他人展示的自我形象。" },
        { en: "In collectivistic cultures, group membership is a major source of identity and status and helps sustain harmonious in-group relationships.", zh: "在集体主义文化中，群体成员身份通常是身份和地位的主要来源，并有助于维持稳定和谐的内群体关系。" }
      ] },
      { title: "Facework / 面子功夫", items: [
        { en: "Facework consists of actions used to acquire or maintain face for oneself or give face to someone else.", zh: "面子功夫是为自己获得或维持面子，或给予他人面子而采取的行动。" },
        { en: "Collectivists often prefer avoidance and obligating measures in conflict because they consider mutual face and others' face.", zh: "面对冲突时，集体主义者常倾向回避和迁就，因为他们关注彼此面子和他人面子。" },
        { en: "Individualists tend to focus on self-face and favor confrontational, solution-oriented approaches.", zh: "个人主义者更关注自我面子，倾向对抗性和问题解决导向的方法。" }
      ] }
    ],
    "cultural-patterns-value-orientations": [
      { title: "Definition / 定义", items: [
        { en: "Cultural patterns, sometimes called value orientations, collectively describe the cultural values of the dominant group within a culture.", zh: "文化模式，有时称为价值取向，是用来整体描述某一文化中主导群体文化价值观的术语。" }
      ] },
      { title: "Characteristics / 特点", items: [
        { en: "Cultural patterns are integrated.", zh: "文化模式是综合的、相互关联的。" },
        { en: "Cultural patterns are dynamic.", zh: "文化模式是动态的。" },
        { en: "Cultural patterns can be contradictory.", zh: "文化模式可能相互矛盾。" }
      ] }
    ],
    "nonverbal-communication": [
      { title: "Definition / 定义", items: [
        { en: "Nonverbal communication involves all nonverbal stimuli in a communication setting that are generated by source and environment and have potential message value.", zh: "非言语交际包括交际环境中由来源和环境产生并具有潜在信息价值的所有非言语刺激。" },
        { en: "It includes intentional and unintentional messages and the reciprocal relationship between verbal and nonverbal messages.", zh: "它包括有意与无意的信息，以及语言信息和非语言信息之间的相互关系。" }
      ] },
      { title: "Functions / 功能", items: [
        { en: "Convey internal states.", zh: "传达内部状态。" },
        { en: "Create identity.", zh: "创造身份。" },
        { en: "Regulate interaction.", zh: "调节互动。" },
        { en: "Substitute for words.", zh: "替代文字。" }
      ] },
      { title: "Characteristics and Classes / 特点与分类", items: [
        { en: "Nonverbal communication is multichannel, often ambiguous, and influenced by numerous variables.", zh: "非语言交际是多渠道的，通常模棱两可，并受许多变量影响。" },
        { en: "Classes include body messages, appearance, body movement, space and distance, time, and silence.", zh: "分类包括肢体信息、外貌、身体动作、空间与距离、时间和沉默。" }
      ] }
    ],
    "monochronic-polychronic-time": [
      { title: "Definition / 定义", items: [
        { en: "Hall proposed that cultures organize time as monochronic time or polychronic time, best understood as points along a continuum.", zh: "霍尔提出文化以单时制或多时制组织时间，更现实的理解是把二者看作连续体上的点。" }
      ] },
      { title: "M-time / 单时制", items: [
        { en: "M-time views time as a scarce resource controlled through schedules and appointments, with one thing done at a time.", zh: "单时制把时间视为稀缺资源，通过日程和预约控制时间，并强调一次只做一件事。" },
        { en: "M-time values punctuality, product over process, and careful use of time.", zh: "单时制重视准时、结果优先于过程，以及审慎使用时间。" }
      ] },
      { title: "P-time / 多时制", items: [
        { en: "P-time cultures deal with life more holistically; time is less tangible and people can interact with several people or activities at once.", zh: "多时制文化更整体地处理生活；时间不那么有形，人们可以同时与多人互动或处理多项活动。" },
        { en: "This multitasking orientation helps explain more interruptions in Arabic, Asian, and Latin American conversations.", zh: "这种多任务倾向解释了阿拉伯、亚洲和拉美文化谈话中较多打断现象。" }
      ] }
    ],
    "silence": [
      { title: "Definition / 定义", items: [
        { en: "In interpersonal settings, silence provides an interval during which participants can think, suppress emotion, encode a lengthy response, begin another line of thought, emphasize words, express emotions, or indicate thoughtfulness.", zh: "在人际情境中，沉默为参与者提供时间去思考、抑制情绪、组织较长回应、开启另一思路、强调某些词语、表达情绪或表示深思熟虑。" },
        { en: "Silence also provides feedback about the clarity or significance of an idea in the overall exchange.", zh: "沉默也能提供反馈，提示某个想法在整体交流中的清晰度或重要性。" }
      ] }
    ],
    "proxemics": [
      { title: "Definition / 定义", items: [
        { en: "Proxemics is the study of the message system created by variation in distance between people.", zh: "人际距离学研究人与人之间距离变化所形成的信息系统。" },
        { en: "Hall defines proxemics as interrelated observations and theories of human use of space as a specialized elaboration of culture.", zh: "霍尔把人际距离学定义为关于人类使用空间的一组相互关联的观察和理论，认为空间使用是文化的特殊展开。" }
      ] },
      { title: "Focus / 关注点", items: [
        { en: "personal space, seating, and furniture arrangement", zh: "个人空间、座位安排和家具布置。" }
      ] }
    ],
    "culture-shock": [
      { title: "Definition / 定义", items: [
        { en: "Culture shock is precipitated by anxiety from losing familiar signs and symbols of social intercourse, such as words, gestures, facial expressions, customs, and norms.", zh: "文化冲击由失去熟悉的社会交往标志和符号所引起的焦虑触发，例如言语、手势、面部表情、习俗和规范。" },
        { en: "It disrupts routines, ego, and self-image.", zh: "它会强烈扰乱日常生活、自我和自我形象。" }
      ] },
      { title: "Process / 过程", items: [
        { en: "Culture shock is not one-time; it is a repetitive process of increasingly subtle immersion into a culture.", zh: "文化冲击不是一次性现象，而是不断、更细微地融入文化的重复过程。" },
        { en: "It often involves taking two steps forward and one step back.", zh: "它常表现为前进两步、后退一步。" }
      ] }
    ],
    "acculturation": [
      { title: "Definition / 定义", items: [
        { en: "Acculturation is the adoption of behavior patterns of the surrounding culture.", zh: "文化适应是采纳周围文化行为模式的过程。" },
        { en: "It is a continuing process of stress-adaptation-growth.", zh: "它是持续的“压力-适应-成长”过程。" },
        { en: "After entering a different culture, people experience stress and then learn to adapt if culture shock is not severe.", zh: "进入不同文化后，人们会在面对新程序、行为和交际标准时经历压力；如果文化冲击不严重，便开始学习适应新文化。" }
      ] }
    ],
    "ethnocentrism": [
      { title: "Definition / 定义", items: [
        { en: "Ethnocentrism is the notion that one's own culture is superior to any other.", zh: "民族中心主义认为自己的文化优于其他任何文化。" },
        { en: "It measures other cultures by the degree to which they live up to our cultural standards.", zh: "它用其他文化符合本文化标准的程度来衡量他文化。" },
        { en: "We are ethnocentric when viewing other cultures through the narrow lens of our own culture or social position.", zh: "当我们通过自身文化或社会位置的狭窄视角看待他文化时，就是民族中心主义。" }
      ] }
    ],
    "stereotyping": [
      { title: "Definition / 定义", items: [
        { en: "Stereotyping is a complex form of categorization that mentally organizes experiences and guides behavior toward a particular group.", zh: "刻板印象是一种复杂的分类形式，它在心理上组织经验，并引导人们对特定群体的行为。" },
        { en: "A stereotype is a cognitive structure containing knowledge, beliefs, and expectancies about social groups.", zh: "刻板印象是包含对某些社会群体的知识、信念和期待的认知结构。" }
      ] }
    ],
    "prejudices": [
      { title: "Definition / 定义", items: [
        { en: "Prejudices are deeply held negative feelings associated with a particular group, including anger, fear, aversion, and anxiety.", zh: "偏见是与特定群体相关的根深蒂固的负面感受，包括愤怒、恐惧、厌恶和焦虑。" }
      ] }
    ],
    "racism": [
      { title: "Definition / 定义", items: [
        { en: "Racism is an extension of stereotyping and prejudice: belief in the inherent superiority of a particular race.", zh: "种族主义是刻板印象和偏见的延伸，即相信某一种族具有固有优越性。" },
        { en: "It denies basic human equality and correlates ability with physical composition.", zh: "它否认人类基本平等，并把能力与身体构成联系起来。" }
      ] }
    ],
    "power": [
      { title: "Definition / 定义", items: [
        { en: "Max Weber considered power as the ability to exert one's will even in the face of opposition.", zh: "马克斯·韦伯认为权力是即使面对反对也能贯彻自身意志的能力。" },
        { en: "Power is the ability to cause things to happen, control what happens, and prevent things one does not want.", zh: "更广义地说，权力是促使事情发生、控制发生的事，并防止不想发生的事的能力。" }
      ] }
    ],
    "intercultural-ethics": [
      { title: "Definition / 定义", items: [
        { en: "Ethics is a tool used when making difficult moral choices.", zh: "伦理是做出困难道德选择时可以使用的工具。" },
        { en: "These choices often balance competing rights when there does not appear to be one correct answer.", zh: "当似乎没有唯一正确答案时，这些选择往往需要平衡相互竞争的权利。" }
      ] }
    ],
    "cultural-relativism": [
      { title: "Definition / 定义", items: [
        { en: "Cultural relativism is based on the belief that ethical systems vary among cultures, all systems are equally valid, and no single system is better than others.", zh: "文化相对主义相信伦理系统会因文化而异，所有系统同样有效，没有单一系统优于其他系统。" }
      ] }
    ],
    "cultural-universalism": [
      { title: "Definition / 定义", items: [
        { en: "Cultural universalism is opposed to relativism and maintains that immutable universal ethical precepts apply to all cultures regardless of people, context, time, or place.", zh: "文化普遍主义与相对主义相对，认为无论人、语境、时间或地点如何，都存在适用于所有文化的不变普遍伦理准则。" }
      ] }
    ]
  };

  const examReviewEntries = [
    {
      slug: "exam-chapter-1-globalization",
      title: "Chapter 1 全球化社会挑战",
      lead: "本章选择与简答重点在于说明全球化带来的相互依赖，以及跨文化交际研究面对的现实挑战。",
      sections: [
        {
          title: "全球化核心判断",
          items: [
            "Globalization has created an interdependent world community.",
            "Interdependency brings benefits, but also produces new international and intercultural challenges.",
            "Globalized communities must work across national and cultural borders to manage shared problems."
          ]
        },
        {
          title: "主要挑战类型",
          items: [
            "Social challenges: population growth, migration, urbanization, intercultural integration, aging populations and declining birthrates.",
            "Ecological concerns: competition for natural resources, water shortages, food scarcities, pelagic resources, and environmental degradation.",
            "Humanitarian and legal cooperation: disease control, disaster relief, international mishaps, transnational crime, cyber crime, and intellectual property.",
            "Political and security issues: international legal systems, scientific ethics, human rights, weapons of mass destruction, terrorism, peacekeeping, ethnic tensions, nationalism, and territorial disputes."
          ]
        },
        {
          title: "跨文化交际研究难点",
          items: [
            "Individual uniqueness: 每个个体都不只是文化标签。",
            "Generalizing: 需要概括文化倾向，但不能绝对化。",
            "Lack of objectivity: 观察他文化时容易受本文化立场影响。",
            "Compromise: 跨文化合作常需要协调不同价值和利益。"
          ]
        },
        {
          title: "考试提醒",
          items: [
            "Communication is not a panacea for all intercultural difficulties.",
            "选择题中看到 social, ecological, humanitarian/legal, political, security，可对应全球化挑战分类。",
            "简答题可按“全球化 -> 相互依赖 -> 挑战分类 -> 跨文化交际必要性”组织。"
          ]
        }
      ],
      memory: "全球化让世界互相依赖，也让跨文化沟通成为处理共同问题的基础能力。"
    },
    {
      slug: "exam-chapter-2-communication-culture",
      title: "Chapter 2 沟通与文化基础",
      lead: "本章围绕 communication 与 culture 两个基础概念，常考定义、功能、要素、特征和误区。",
      sections: [
        {
          title: "Communication 功能",
          items: [
            "Helps fulfill interpersonal needs.",
            "Assists in gathering information and person perception.",
            "Establishes cultural and personal identities.",
            "Allows people to influence others and has persuasive qualities."
          ]
        },
        {
          title: "沟通过程与特征",
          items: [
            "Components: source, encoding, message, channel, receiver, decoding, feedback, noise.",
            "Communication is dynamic, symbolic, contextual, self-reflective, irreversible, consequential, and complex.",
            "Definition focus: people share internal states or thoughts through symbols in particular settings."
          ]
        },
        {
          title: "常见误区",
          items: [
            "Communication can solve all problems.",
            "People are born good communicators.",
            "The message sent is always the message received.",
            "正确理解：沟通有帮助，但不自动消除文化差异、权力差异和解释差异。"
          ]
        },
        {
          title: "Culture 高频点",
          items: [
            "Culture reduces confusion and helps members predict what to expect from life.",
            "Characteristics: shared, transmitted from generation to generation, based on symbols, learned, and dynamic.",
            "Elements: worldview, religion, history, values, social organization, and language.",
            "Intercultural competence develops through motivation, knowledge, and communication skills."
          ]
        }
      ],
      memory: "Chapter 2 的核心链条是：沟通用符号分享意义，文化提供共享规则和解释框架。"
    },
    {
      slug: "exam-chapter-3-deep-structure-family",
      title: "Chapter 3 深层结构与家庭",
      lead: "本章重点是 deep structures of culture，尤其是 family 如何传递文化中最稳定、最深层的信息。",
      sections: [
        {
          title: "Deep Structures",
          items: [
            "Deep structures include family or clans, state or community, and religion or worldview.",
            "They perpetuate a culture's most significant beliefs and values.",
            "Their messages endure, are deeply felt, and supply much of a culture's identity."
          ]
        },
        {
          title: "家庭形式与变化",
          items: [
            "Two common family forms are nuclear family and extended family.",
            "Traditional definitions of family are undergoing major changes in the United States.",
            "Globalization and migration have changed traditional family structures around the world."
          ]
        },
        {
          title: "家庭功能",
          items: [
            "Reproduction and care.",
            "Economic support.",
            "Socialization and language acquisition.",
            "Transmission of values and religion.",
            "Identity formation and communication training."
          ]
        },
        {
          title: "家庭与文化传递",
          items: [
            "Families teach gender roles.",
            "Families shape views of individualism and collectivism.",
            "Families perpetuate perceptions of aging and the elderly.",
            "Families develop social skills and early rules of interaction."
          ]
        }
      ],
      memory: "深层结构解释文化为什么稳定；家庭是最早、最直接的文化传递者。"
    },
    {
      slug: "exam-chapter-4-perception-patterns",
      title: "Chapter 4 感知与文化模式",
      lead: "本章是选择题高频章，重点在 perception、belief-value-behavior 链条，以及 Hall、Hofstede、Kluckhohn & Strodtbeck 等文化模式。",
      sections: [
        {
          title: "Perception",
          items: [
            "Perception is the process whereby people convert external events and experiences into meaningful internal understanding.",
            "Perception is the primary mechanism by which people develop their worldview.",
            "Perception is selective, learned, culturally determined, consistent, and often inaccurate."
          ]
        },
        {
          title: "Beliefs, Values, Behaviors",
          items: [
            "Values are enduring attitudes about the preference for one belief over another.",
            "Behaviors are observable demonstrations of internally held beliefs and values.",
            "Beliefs and values influence communicative behavior, so case analysis should move from visible behavior to invisible values."
          ]
        },
        {
          title: "文化模式框架",
          items: [
            "Kluckhohn and Strodtbeck: human nature, perception of nature, time, activity, and relationships.",
            "Hall: high-context and low-context describe reliance on internalized information and context.",
            "Hofstede: individualism/collectivism, uncertainty avoidance, power distance, masculinity/femininity, long-term/short-term orientation.",
            "Minkov: industry/indulgence, monumentalism/flexumility, exclusionism/universalism.",
            "Gelfand: tight and loose cultures."
          ]
        },
        {
          title: "考试提醒",
          items: [
            "Cultural patterns are broad taxonomies for dominant beliefs and values, not labels for every person.",
            "When applying cultural patterns, remember people are more than culture; patterns are integrated, dynamic, and can be contradictory.",
            "Face and facework differ across cultures: collectivistic cultures often focus on other-face and mutual-face; individualistic cultures often focus on self-face."
          ]
        }
      ],
      memory: "Chapter 4 常考“谁提出什么框架”，同时要写明文化模式是概括，不是绝对标签。"
    },
    {
      slug: "exam-chapter-5-identity",
      title: "Chapter 5 身份",
      lead: "本章把 identity 看作抽象、动态、多面向的概念，重点考身份分类、形成方式和 ascribed/avowed identities。",
      sections: [
        {
          title: "身份核心理解",
          items: [
            "Identity is highly abstract, dynamic, multifaceted, and socially constructed.",
            "Identities can be categorized as human, social, and personal.",
            "Another classification uses personal, relational, and communal identities."
          ]
        },
        {
          title: "多重身份",
          items: [
            "Every individual has multiple identities: racial, gender, ethnic, national, regional, organizational, personal, cyber or fantasy, and others.",
            "The importance of any single identity depends on context.",
            "Concepts of identity within the same group can change over time."
          ]
        },
        {
          title: "身份形成与表达",
          items: [
            "Identity is acquired through interaction with other members of one's cultural group.",
            "Family has a primary influence on early identity formation.",
            "Identities are enacted through rites of passage, personal appearance, and participation in commemorative events."
          ]
        },
        {
          title: "跨文化交际要点",
          items: [
            "Competent intercultural communication is achieved when participants find commonality in ascribed and avowed identities.",
            "As society becomes increasingly multicultural, new concepts of cultural identity are evolving.",
            "案例题中要区分别人赋予的身份和自己声明的身份是否一致。"
          ]
        }
      ],
      memory: "身份不是固定标签，而是在文化、互动和语境中不断被协商。"
    },
    {
      slug: "exam-chapter-6-language",
      title: "Chapter 6 语言",
      lead: "本章重点是语言作为共享符号系统如何传递信息、表达身份，并产生外延意义和内涵意义。",
      sections: [
        {
          title: "语言功能",
          items: [
            "Language allows people to exchange information and abstract ideas.",
            "Language is an integral part of identity.",
            "Language helps construct individual, group, and cultural identity."
          ]
        },
        {
          title: "语言与符号",
          items: [
            "Language is a set of shared symbols used to create meaning.",
            "The relationship between a symbol and its meaning is often arbitrary.",
            "Words are symbols, not the objects or experiences themselves."
          ]
        },
        {
          title: "意义类型",
          items: [
            "Denotative meaning is the literal or conventional meaning.",
            "Connotative meaning is the emotional, private, or cultural association evoked by a word.",
            "跨文化误解常来自只翻译外延意义，忽视内涵意义。"
          ]
        }
      ],
      memory: "语言不仅传递信息，也传递身份、关系和文化联想。"
    },
    {
      slug: "exam-chapter-7-nonverbal",
      title: "Chapter 7 非语言沟通",
      lead: "本章选择题常考非语言沟通的重要性、文化性、身体信息、空间、时间、沉默和提升方法。",
      sections: [
        {
          title: "重要性与定义",
          items: [
            "People use nonverbal communication to express internal states, create identity, regulate interaction, repeat messages, and substitute actions for words.",
            "Nonverbal communication is culture bound.",
            "Nonverbal messages may be intentional or unintentional.",
            "Nonverbal messages can work alone or together with verbal messages."
          ]
        },
        {
          title: "特征",
          items: [
            "Nonverbal messages involve multichannel activity.",
            "They can be ambiguous.",
            "They are composed of numerous interacting variables.",
            "Nonverbal behaviors and culture are similar because both are learned, transmitted, and shared."
          ]
        },
        {
          title: "主要类别",
          items: [
            "Body messages: appearance, judgments of beauty, skin color, attire, kinesics, posture, gestures, facial expressions, eye contact, touch, and paralanguage.",
            "Space: personal space, seating, and furniture arrangement.",
            "Time: informal time and monochronic or polychronic orientation.",
            "Silence varies greatly across cultures."
          ]
        },
        {
          title: "提升方法",
          items: [
            "Keep interpretations tentative.",
            "Be conscious of context.",
            "Employ feedback.",
            "Know your own culture.",
            "Monitor your own nonverbal actions."
          ]
        }
      ],
      memory: "非语言沟通最容易被误读：先看语境，再谨慎解释。"
    },
    {
      slug: "exam-chapter-8-adaptation-ethics",
      title: "Chapter 8 适应、障碍与伦理",
      lead: "本章把 culture shock、acculturation、跨文化沟通障碍和 intercultural ethics 放在一起考。",
      sections: [
        {
          title: "文化冲击与适应",
          items: [
            "Venturing into a new culture can cause anxiety, emotional distress, and mental or physical fatigue.",
            "Culture shock can occur when moving from a familiar to an unfamiliar environment and finding established behavior patterns ineffective.",
            "U-curve model: honeymoon, disillusionment, recovery, adjustment.",
            "Culture shock can occur during the disillusionment stage."
          ]
        },
        {
          title: "Acculturation",
          items: [
            "Kim sees acculturation or cultural adjustment as a continuing process of stress-adaptation-growth.",
            "Adaptation strategies include learning the host culture and language.",
            "Avoid ethnocentrism.",
            "Maintain contact with your own culture."
          ]
        },
        {
          title: "沟通障碍",
          items: [
            "Preference for similarities.",
            "Dealing with uncertainty.",
            "Risk of withdrawal.",
            "Stereotyping tendencies.",
            "Problems of prejudice and racism.",
            "Issues of power."
          ]
        },
        {
          title: "伦理要点",
          items: [
            "Communication is an activity that has consequences, so communicators need ethics.",
            "Two major perspectives on ethics are relativism and universalism.",
            "Intercultural ethics ask people to respect the worth of all individuals, seek commonalities, recognize valid differences, and take responsibility for actions."
          ]
        }
      ],
      memory: "Chapter 8 的答题框架：冲击反应 -> 适应过程 -> 沟通障碍 -> 伦理责任。"
    }
  ];

  const unitSummaryReviewEntries = [
    {
      slug: "unit-summary-1-globalization",
      title: "Unit 1 Summary 全球化与跨文化交际挑战",
      lead: "根据 reference/跨文化交际/Unit1summary.md 整理，重点记住全球化带来的相互依赖、主要挑战类型，以及跨文化交际研究的边界。",
      sections: [
        {
          title: "Globalization and Interdependency 全球化与相互依赖",
          items: [
            { en: "Globalization has created an interdependent world community.", zh: "全球化创造了一个相互依赖的世界共同体。" },
            { en: "Interdependency has brought many benefits but also raised new challenges.", zh: "相互依赖带来许多好处，同时也提出新的挑战。" },
            { en: "The globalized community must work across national and cultural borders to manage growing and potential international problems.", zh: "全球化共同体必须跨越国家和文化边界，处理不断增加的和潜在的国际问题。" }
          ]
        },
        {
          title: "Global Challenges 全球化挑战",
          items: [
            { en: "Social challenges include population growth, migration, urbanization, and aging populations.", zh: "社会挑战包括人口增长、移民、城市化和人口老龄化。" },
            { en: "Ecological concerns consist of international competition for natural resources, including water and food stocks, and environmental changes/degradation.", zh: "生态关切包括围绕自然资源的国际竞争，如水资源、粮食储备，以及环境变化或退化。" },
            { en: "Nations will have to cooperate over humanitarian and legal issues, such as disease control, natural disaster relief, and transnational crime.", zh: "各国需要在人道和法律问题上合作，例如疾病控制、自然灾害救援和跨国犯罪。" },
            { en: "Political issues relating to international governance include the international legal system, ethics in scientific research, and human rights differences.", zh: "与国际治理有关的政治议题包括国际法律体系、科学研究伦理和人权差异。" },
            { en: "Security issues that require international coordination include weapons of mass destruction, terrorists, and emerging threats such as sectarian and ethnic tensions.", zh: "需要国际协调的安全议题包括大规模杀伤性武器、恐怖主义，以及教派和族群紧张等新威胁。" }
          ]
        },
        {
          title: "ICC Study Reminders 跨文化交际研究提醒",
          items: [
            { en: "Problems relating to the study of intercultural communication encompass individual uniqueness, generalizing, lack of objectivity, and compromise.", zh: "跨文化交际研究的问题包括个体独特性、概括、缺乏客观性和妥协。" },
            { en: "Communication is not a panacea for all intercultural difficulties.", zh: "沟通并不是解决所有跨文化困难的万能药。" }
          ]
        }
      ],
      memory: "Unit 1 可按“全球化 -> 相互依赖 -> 挑战分类 -> 沟通不是万能药”记忆。"
    },
    {
      slug: "unit-summary-2-communication-culture",
      title: "Unit 2 Summary 沟通、文化与跨文化能力",
      lead: "根据 reference/跨文化交际/U2summary.md 整理，重点覆盖 communication、culture 和 intercultural competence 三条主线。",
      sections: [
        {
          title: "Communication 沟通",
          items: [
            { en: "Communication helps fulfill interpersonal needs, assists in gathering information about other people, establishes cultural and personal identities, and allows you to influence other people.", zh: "沟通帮助满足人际需求，协助收集关于他人的信息，建立文化和个人身份，并使你能够影响他人。" },
            { en: "Communication is a dynamic process in which people attempt to share their internal states with other people through the use of symbols.", zh: "沟通是一个动态过程，人们通过符号尝试与他人分享自己的内在状态。" },
            { en: "The components of communication include source, encoding, message, channel, receiver, decoding, feedback, and noise.", zh: "沟通要素包括信息源、编码、信息、信道、接收者、解码、反馈和噪声。" },
            { en: "Communication is dynamic, symbolic, contextual, self-reflective, irreversible, has a consequence, and is complex.", zh: "沟通具有动态性、符号性、语境性、自我反思性、不可逆性、后果性和复杂性。" },
            { en: "Misconceptions about human communication are that it can solve all problems, that people are born good communicators, and that the message sent is the one that is received.", zh: "关于人类沟通的误解包括：沟通能解决所有问题、人天生就是优秀沟通者、发送的信息就是接收的信息。" }
          ]
        },
        {
          title: "Culture 文化",
          items: [
            { en: "Culture and communication are so intertwined that it is easy to think that culture is communication and that communication is culture.", zh: "文化与沟通紧密交织，因此人们很容易认为文化就是沟通，沟通就是文化。" },
            { en: "Culture is a set of human-made objective and subjective elements that in the past have increased the probability of survival and resulted in satisfaction for the participants in an ecological niche and thus became shared among those who could communicate with each other because they had a common language and lived in the same time and place.", zh: "文化是一组人为创造的客观和主观要素，它们过去提高了特定生态环境中人们的生存概率并带来满足感，因此在拥有共同语言、生活于同一时空并能相互沟通的人群中被共享。" },
            { en: "Culture informs its members regarding life; therefore, it reduces confusion and helps them predict what to expect from life.", zh: "文化向成员提供关于生活的信息，因此减少困惑，并帮助他们预测生活中可以期待什么。" },
            { en: "The central characteristics of culture are that it is shared, transmitted from generation to generation, based on symbols, learned, and dynamic.", zh: "文化的核心特征是共享、代际传递、以符号为基础、习得和动态变化。" },
            { en: "The elements that compose culture are worldview, religion, history, values, social organization, and language.", zh: "文化的构成要素包括世界观、宗教、历史、价值观、社会组织和语言。" }
          ]
        },
        {
          title: "Intercultural Competence 跨文化能力",
          items: [
            { en: "Intercultural competence can be developed if you are motivated, have a fund of knowledge about the other person, and possess certain communication skills.", zh: "如果具有动机、关于他人的知识储备以及一定沟通技能，跨文化能力就可以得到发展。" }
          ]
        }
      ],
      memory: "Unit 2 的核心公式：communication 用符号分享意义，culture 提供解释规则，ICC competence 需要 motivation + knowledge + skills。"
    },
    {
      slug: "unit-summary-3-deep-structure-family",
      title: "Unit 3 Summary 深层文化结构与家庭",
      lead: "根据 reference/跨文化交际/U3summary.md 整理，重点理解 deep structures 为什么稳定，以及 family 如何传递文化。",
      sections: [
        {
          title: "Deep Structures 深层结构",
          items: [
            { en: "The deep structures of a culture, which include such elements as family (clans), state (community), and religion (worldview), are important because they perpetuate a culture’s most significant beliefs and values. Their messages endure, are deeply felt, and help supply much of a culture’s identity.", zh: "文化的深层结构包括家庭或氏族、国家或社区、宗教或世界观；它们重要是因为会延续一种文化最重要的信念和价值观，其信息持久、深刻，并为文化身份提供重要来源。" }
          ]
        },
        {
          title: "Family Forms and Change 家庭形式与变化",
          items: [
            { en: "Families can take a variety of forms. The two most common are nuclear and extended.", zh: "家庭可以有多种形式，其中最常见的是核心家庭和大家庭。" },
            { en: "Traditional definitions of “family” are undergoing major changes in the United States.", zh: "在美国，传统的“家庭”定义正在经历重大变化。" },
            { en: "Globalization and shifting migration patterns in recent years have had major impacts on traditional family structures throughout the world.", zh: "近年来，全球化和迁移模式变化对世界各地的传统家庭结构产生了重大影响。" }
          ]
        },
        {
          title: "Family Functions 家庭功能",
          items: [
            { en: "Families perform a series of key functions in all cultures. These functions include reproduction, economics, socialization, language acquisition, values and religion, identity, and communication.", zh: "家庭在所有文化中都承担一系列关键功能，包括繁衍、经济、社会化、语言习得、价值观与宗教、身份和沟通。" },
            { en: "Cultures, by using the family as a transmitter of the key elements of culture, teach gender roles, inculcate views on individualism and collectivism, perpetuate perceptions of aging and the elderly, and develop social skills.", zh: "文化通过家庭传递关键文化要素，教授性别角色，灌输个体主义和集体主义观念，延续对老龄化和老年人的看法，并发展社会技能。" }
          ]
        }
      ],
      memory: "深层结构解释文化为什么能长期延续；家庭是最早、最直接的文化传递者。"
    },
    {
      slug: "unit-summary-4-perception-patterns",
      title: "Unit 4 Summary 感知、价值观与文化模式",
      lead: "根据 reference/跨文化交际/U4summary.md 整理，重点复习 perception、values/behaviors、Hall、Hofstede、Kluckhohn & Strodtbeck、facework 等高频框架。",
      sections: [
        {
          title: "Perception, Values and Behaviors 感知、价值与行为",
          items: [
            { en: "Perception may be defined as the process whereby people convert external events and experiences into meaningful internal understanding.", zh: "感知可以定义为人们把外部事件和经验转化为有意义的内部理解的过程。" },
            { en: "Perception is the primary mechanism by which you develop your worldview.", zh: "感知是形成世界观的主要机制。" },
            { en: "Perception is selective, learned, culturally determined, consistent, and often inaccurate.", zh: "感知具有选择性、习得性、文化决定性、一致性，并且常常不准确。" },
            { en: "Values are enduring attitudes about the preference for one belief over another. Behaviors are the observable demonstration of internally held beliefs and values.", zh: "价值观是关于一种信念优先于另一种信念的持久态度；行为是内在信念和价值观的可观察表现。" },
            { en: "Cultural pattern taxonomies are used to illustrate the dominant beliefs and values of a culture.", zh: "文化模式分类用于说明一种文化中的主导信念和价值观。" },
            { en: "When applying cultural patterns, you should keep in mind that we are more than our culture; cultural patterns are integrated, dynamic, and can be contradictory.", zh: "运用文化模式时要记住，人不只是文化；文化模式相互整合、动态变化，也可能彼此矛盾。" }
          ]
        },
        {
          title: "Cultural Pattern Taxonomies 文化模式框架",
          items: [
            { en: "According to Kohls, the dominant American cultural patterns include personal control over the environment, change, time and its control, equality, individualism/privacy, self-help, competition, future orientation, action/work orientation, informality, directness/openness/honesty, practicality/efficiency, and materialism/acquisitiveness.", zh: "根据 Kohls，主导性的美国文化模式包括控制环境、变化、时间及其控制、平等、个体主义/隐私、自助、竞争、未来取向、行动/工作取向、非正式、直接/开放/诚实、实用/效率和物质主义/占有欲。" },
            { en: "The Kluckhohn and Strodtbeck value orientation taxonomy includes (1) human nature, (2) the perception of nature, (3) time, (4) activity, and (5) relationships.", zh: "Kluckhohn 和 Strodtbeck 的价值取向分类包括：人性、人与自然、时间、活动和人际关系。" },
            { en: "In Hall’s context orientation, high-context and low-context describe the degree to which individuals rely on internalized information.", zh: "在 Hall 的语境取向中，高语境和低语境描述个体依赖内化信息的程度。" },
            { en: "A prominent taxonomy of diverse culture patterns that explains both perceptual and communication differences is Hofstede’s Values Dimension, which includes (1) individualism/collectivism, (2) uncertainty avoidance, (3) power distance, (4) masculinity/femininity, and (5) long-term/short-term orientation.", zh: "Hofstede 的价值维度是解释感知和沟通差异的重要文化模式分类，包括个体主义/集体主义、不确定性规避、权力距离、男性化/女性化和长期/短期取向。" },
            { en: "Work by Minkov has recently revealed the value dimensions of industry/indulgence, monumentalism/flexumility, and exclusionism/universalism.", zh: "Minkov 的研究提出了勤勉/放纵、纪念碑主义/灵活谦逊、排斥主义/普遍主义等价值维度。" },
            { en: "Gelfand and her colleagues have used empirical data to demonstrate the classifications of tight and loose cultures.", zh: "Gelfand 及其同事用实证数据说明了紧文化和松文化的分类。" }
          ]
        },
        {
          title: "Face and Facework 面子与面子功夫",
          items: [
            { en: "For Ting-Toomey, face and facework take different forms and are valued differently across cultures.", zh: "在 Ting-Toomey 看来，面子和面子功夫在不同文化中具有不同形式和不同价值。" },
            { en: "Face is a function of group affiliation in collectivistic cultures and is self-derived in individualistic cultures.", zh: "在集体主义文化中，面子与群体归属相关；在个体主义文化中，面子更多来自自我。" },
            { en: "In conflict situations, collectivistic cultures focus on other-face and mutual face, while individualistic cultures focus on self-face.", zh: "在冲突情境中，集体主义文化关注他人面子和相互面子，而个体主义文化关注自我面子。" }
          ]
        }
      ],
      memory: "Unit 4 是框架高频单元：感知解释世界，价值观指导行为，文化维度帮助分析差异，但不能替代个体判断。"
    },
    {
      slug: "unit-summary-5-identity",
      title: "Unit 5 Summary 身份与跨文化交际",
      lead: "根据 reference/跨文化交际/U5summary.md 整理，重点掌握 identity 的动态性、多重性、形成方式与 ascribed/avowed identities。",
      sections: [
        {
          title: "Identity Concept 身份概念",
          items: [
            { en: "Identity is a highly abstract, dynamic, multifaceted concept that defines who you are.", zh: "身份是一个高度抽象、动态、多面向的概念，用来界定你是谁。" },
            { en: "Identities can be categorized as human, social, and personal; another classification scheme uses personal, relational, and communal.", zh: "身份可以分为人类身份、社会身份和个人身份；另一种分类方式是个人身份、关系身份和共同体身份。" },
            { en: "Every individual has multiple identities—racial, gender, ethnic, national, regional, organizational, personal, and perhaps cyber/fantasy, and others—that act in concert. The importance of any single identity is a result of the context.", zh: "每个人都有多重身份，如种族、性别、族群、国家、地区、组织、个人，甚至网络/幻想身份等，这些身份共同发挥作用；任何单一身份的重要性取决于语境。" }
          ]
        },
        {
          title: "Formation and Performance 形成与表现",
          items: [
            { en: "Identity is acquired through interaction with other members of one’s cultural group. The family exerts a primary influence on early identity formation.", zh: "身份通过与自身文化群体其他成员的互动获得；家庭对早期身份形成具有首要影响。" },
            { en: "Identities are established through group membership and are enacted in various ways, including rites of passage, personal appearance, and participation in commemorative events. Concepts of identity within the same group can change over time.", zh: "身份通过群体成员资格建立，并通过成年礼、个人外表、参与纪念活动等方式表现出来；同一群体内部的身份观念也会随时间变化。" }
          ]
        },
        {
          title: "Intercultural Significance 跨文化交际意义",
          items: [
            { en: "Competent intercultural communication is achieved when the participants find commonality in ascribed and avowed identities.", zh: "当交际参与者能在赋予身份和自认身份之间找到共同点时，更容易实现有效的跨文化沟通。" },
            { en: "As society becomes increasingly multicultural, new concepts of cultural identity are evolving.", zh: "随着社会日益多元文化化，新的文化身份概念正在发展。" }
          ]
        }
      ],
      memory: "身份不是固定标签，而是在群体、家庭、互动和语境中不断被形成、表现和协商。"
    },
    {
      slug: "unit-summary-6-language",
      title: "Unit 6 Summary 语言、意义与翻译",
      lead: "根据 reference/跨文化交际/U6summary.md 整理，重点复习 language、symbol、meaning、language variation、interpretation 和语言使用能力。",
      sections: [
        {
          title: "Language and Meaning 语言与意义",
          items: [
            { en: "Language allows people to exchange information and abstract ideas, and it is an integral part of identity.", zh: "语言使人们能够交换信息和抽象观念，并且是身份的重要组成部分。" },
            { en: "Language is a set of shared symbols used to create meaning. The words that people use are not only symbolic, but the relationship between the symbol and the meaning is often arbitrary. Symbols can evoke both denotative and connotative meanings.", zh: "语言是一套用于创造意义的共享符号。人们使用的词语不仅具有符号性，而且符号与意义之间的关系常常是任意约定的。符号既能唤起外延意义，也能唤起内涵意义。" },
            { en: "A culture’s use of language influences how that culture perceives the world and communicates within that world.", zh: "一种文化对语言的使用会影响该文化如何感知世界并在其中进行沟通。" }
          ]
        },
        {
          title: "Language Variation and Culture 语言变体与文化",
          items: [
            { en: "There are usually variations within language groups, such as accents, dialects, argot, and slang.", zh: "语言群体内部通常存在变体，例如口音、方言、行话和俚语。" },
            { en: "Cultures differ in how people use language as can be seen in an examination of English, Spanish, Brazilian Portuguese, Chinese, Korean, Japanese, Arabic, and German.", zh: "不同文化在语言使用方式上存在差异，这可以从英语、西班牙语、巴西葡萄牙语、汉语、韩语、日语、阿拉伯语和德语等语言中看出。" }
          ]
        },
        {
          title: "Interpretation and Competence 口译、翻译与语言能力",
          items: [
            { en: "Interpreters work with spoken or signed language and translators work with written messages. Consecutive interpretation is when you stop every minute or so to allow the interpreter to relay your message in the other language. Simultaneous interpretation is done while the speakers are talking in their native language. A good interpreter should have knowledge of the target language, dialect, special terminology, and culture.", zh: "口译员处理口语或手语，笔译员处理书面信息。交替传译是说话者每隔一段时间停下来，让译员用另一种语言传达信息；同声传译是在说话者使用母语讲话时同步进行。优秀译员应了解目标语言、方言、专业术语和文化。" },
            { en: "New technologies have changed the ways people can now interpret different languages.", zh: "新技术已经改变了人们解释和转换不同语言的方式。" },
            { en: "Every culture has conversational taboos—restrictions against some topics in certain contexts.", zh: "每种文化都有会话禁忌，即在特定语境中对某些话题的限制。" },
            { en: "Competence in using language in an intercultural context can be improved if you learn a second language, are mindful of the surroundings, are aware of conversation taboos, monitor your speech rate, are aware of vocabulary differences and nonverbal feedback, and are responsive to variations in conversation styles.", zh: "在跨文化语境中使用语言的能力可以通过以下方式提高：学习第二语言，留意周围环境，了解会话禁忌，控制语速，注意词汇差异和非语言反馈，并对会话风格差异保持响应。" }
          ]
        }
      ],
      memory: "语言不仅是信息工具，也是身份、文化意义和关系规则的符号系统。"
    },
    {
      slug: "unit-summary-7-nonverbal",
      title: "Unit 7 Summary 非语言交际",
      lead: "根据 reference/跨文化交际/U7summary.md 整理，重点掌握非语言交际的功能、文化性、定义、特征、类别和改进方法。",
      sections: [
        {
          title: "Definition and Functions 定义与功能",
          items: [
            { en: "Nonverbal communication is important to the study of intercultural communication because people use nonverbal communication to express internal states, create identity, regulate interaction, repeat messages, and substitute actions for words.", zh: "非语言交际对跨文化交际研究很重要，因为人们用非语言交际表达内在状态、创造身份、调节互动、重复信息，并用动作替代语言。" },
            { en: "Nonverbal communication is culture bound.", zh: "非语言交际受文化制约。" },
            { en: "Nonverbal communication involves all nonverbal stimuli in a communication setting that (1) are generated by both the source and his or her use of the environment and (2) have potential message value for the source and/or the receiver.", zh: "非语言交际包括交际情境中的所有非语言刺激，这些刺激由信息来源及其对环境的使用产生，并且对发送者和/或接收者具有潜在信息价值。" },
            { en: "Nonverbal messages may be intentional or unintentional.", zh: "非语言信息可以是有意的，也可以是无意的。" },
            { en: "Nonverbal messages can work alone or in tandem with verbal messages.", zh: "非语言信息可以单独发挥作用，也可以与语言信息配合发挥作用。" }
          ]
        },
        {
          title: "Features and Categories 特征与类别",
          items: [
            { en: "When studying nonverbal communication, it should be remembered that nonverbal messages involve multichannel activity, can be ambiguous, and are composed of numerous interacting variables.", zh: "研究非语言交际时应记住，非语言信息涉及多通道活动，可能具有模糊性，并由许多相互作用的变量构成。" },
            { en: "Nonverbal behaviors and culture are similar in that both are learned, both are passed from generation to generation, and both involve shared understandings.", zh: "非语言行为与文化相似，因为二者都是习得的、代际传递的，并且都涉及共享理解。" },
            { en: "The body is a major source of nonverbal messages. These messages are communicated by means of general appearance, judgments of beauty, skin color, attire, body movements (kinesics), posture, gestures, facial expressions, eye contact, touch, and paralanguage.", zh: "身体是非语言信息的主要来源，这些信息通过整体外表、审美判断、肤色、服饰、身体动作（身势学）、姿态、手势、面部表情、眼神接触、触碰和副语言来传递。" },
            { en: "Cultures differ in their perception and use of personal space, seating, and furniture arrangement.", zh: "不同文化在个人空间、座位和家具安排的感知与使用上存在差异。" },
            { en: "A culture’s sense of time can be understood by learning how members of that culture view informal time and whether their orientation toward time is monochronic or polychronic.", zh: "理解一种文化的时间观，可以从该文化成员如何看待非正式时间，以及其时间取向是单时制还是多时制入手。" },
            { en: "The use of silence varies from culture to culture.", zh: "沉默的使用因文化而异。" }
          ]
        },
        {
          title: "Improvement Skills 提升方法",
          items: [
            { en: "You can improve your nonverbal communication skills by keeping your interpretations tentative, being conscious of the context, employing feedback, knowing your culture, and monitoring your nonverbal actions.", zh: "可以通过保持解释的试探性、注意语境、使用反馈、了解自身文化并监控自己的非语言行为来提升非语言交际能力。" }
          ]
        }
      ],
      memory: "非语言交际最容易被文化差异影响：看见动作以后，先结合语境，再谨慎解释。"
    },
    {
      slug: "unit-summary-8-adaptation-ethics",
      title: "Unit 8 Summary 文化适应、障碍与伦理",
      lead: "根据 reference/跨文化交际/U8summary.md 整理，重点复习 culture shock、acculturation、沟通障碍和 intercultural ethics。",
      sections: [
        {
          title: "Culture Shock and Adaptation 文化冲击与适应",
          items: [
            { en: "Venturing into a new culture can cause anxiety and emotional distress, resulting in mental and physical fatigue.", zh: "进入一种新文化可能引发焦虑和情绪困扰，并造成身心疲惫。" },
            { en: "Culture shock is a mental state that can occur when moving from a familiar to an unfamiliar environment and finding that established patterns of behavior are ineffective.", zh: "文化冲击是一种心理状态，可能发生在从熟悉环境进入陌生环境并发现既有行为模式失效时。" },
            { en: "According to the U-curve model, cultural adaptation has four phases: honeymoon, disillusionment, recovery, and adjustment. Culture shock can occur during the disillusionment stage.", zh: "根据 U 型曲线模型，文化适应有四个阶段：蜜月期、幻灭期、恢复期和适应期；文化冲击可能发生在幻灭期。" },
            { en: "Kim sees acculturation, or cultural adjustment, as a continuing process of stress-adaptation-growth.", zh: "Kim 将文化适应或文化调适看作压力、适应和成长的持续过程。" },
            { en: "Cultural adaptation strategies include learning about the host culture and its language, avoiding ethnocentrism, and maintaining contact with your own culture.", zh: "文化适应策略包括学习东道文化及其语言、避免民族中心主义，并保持与自身文化的联系。" }
          ]
        },
        {
          title: "Communication Obstacles 沟通障碍",
          items: [
            { en: "Obstacles to effective intercultural communication include a preference for similarities, dealing with uncertainty, the risk of withdrawal, stereotyping tendencies, problems of prejudice and racism, and issues of power.", zh: "有效跨文化交际的障碍包括偏好相似性、处理不确定性、退缩风险、刻板印象倾向、偏见和种族主义问题，以及权力问题。" },
            { en: "Prejudice is a strong feeling or attitude toward a particular social group or thing.", zh: "偏见是针对特定社会群体或事物的强烈感受或态度。" },
            { en: "Racism occurs when individuals believe that their race/ethnicity is superior to another race/ethnicity.", zh: "当个体认为自己的种族或族群优于其他种族或族群时，就会产生种族主义。" }
          ]
        },
        {
          title: "Intercultural Ethics 跨文化伦理",
          items: [
            { en: "Because communication is an activity that has a consequence, we must develop a communication ethic.", zh: "由于沟通是一种会产生后果的活动，我们必须发展沟通伦理。" },
            { en: "The two major perspectives on ethics are relativism and universalism.", zh: "伦理的两种主要观点是相对主义和普遍主义。" },
            { en: "An intercultural ethic asks you to be mindful of the power of communication, respect the worth of all individuals, seek commonalities among people and cultures, recognize the validity of differences, and take individual responsibility for your actions.", zh: "跨文化伦理要求人们意识到沟通的力量，尊重所有个体的价值，寻找人与文化之间的共同点，承认差异的合理性，并为自己的行为承担个人责任。" }
          ]
        }
      ],
      memory: "Unit 8 的答题链条：进入新文化 -> 文化冲击 -> 适应策略 -> 沟通障碍 -> 伦理责任。"
    }
  ];

  const summaryReviewEntries = [
    {
      slug: "summary-globalized-challenges",
      title: "Unit 1 全球化社会挑战",
      lead: "本单元总结全球化社会中的主要跨文化挑战，适合选择题按类别记忆。",
      sections: [
        {
          title: "Social Challenges",
          items: [
            "World population growth 世界人口增长",
            "Mass migration 大规模移民",
            "Urbanization 城市化",
            "Intercultural integration 跨文化整合",
            "Aging populations and declining birthrates 人口老龄化与出生率下降"
          ]
        },
        {
          title: "Ecological Concerns",
          items: [
            "Competition for natural resources 自然资源竞争",
            "Raw materials 原材料",
            "Water shortages 水资源短缺",
            "Food scarcities 食物短缺",
            "Pelagic resources 远洋资源",
            "Environmental changes or degradation 环境变化或退化"
          ]
        },
        {
          title: "Humanitarian, Legal, Political",
          items: [
            "Disease control 疾病控制",
            "Disaster relief 救灾",
            "International mishap 国际事故",
            "Transnational crime 跨国犯罪",
            "Cyber crime 网络犯罪",
            "Intellectual property 知识产权",
            "International legal system 国际法律体系",
            "Scientific advancement ethics 科技进步伦理",
            "Human rights issues 人权问题"
          ]
        },
        {
          title: "Security Issues",
          items: [
            "Weapons of mass destruction 大规模杀伤性武器",
            "Terrorism and piracy 恐怖主义和海盗",
            "Peacekeeping missions 维和任务",
            "Emerging threats 新出现的威胁",
            "Sectarian and ethnic tensions 教派与族群紧张",
            "Renascent nationalism 复兴的民族主义",
            "Contested territorial claims 有争议的领土要求"
          ]
        }
      ],
      memory: "全球化挑战可按社会、生态、人道/法律/政治、安全四组快速记忆。"
    },
    {
      slug: "summary-communication",
      title: "Communication 交流",
      lead: "交流是人类联系的基础，考试常考定义、功能、要素和特征。",
      sections: [
        {
          title: "Definition",
          items: [
            "Communication is the ability to share ideas and feelings and is the basis of all human contact.",
            "Human communication is a dynamic process in which people attempt to share thoughts with others through symbols in particular settings.",
            "中文：交流是分享想法和感受的能力；人类交际是在特定情境中借助符号分享思想的动态过程。"
          ]
        },
        {
          title: "Functions",
          items: [
            "Fulfills interpersonal needs 满足人际需求",
            "Assists with person perception 有助于人的认知",
            "Establishes cultural and personal identities 确立文化和个人身份",
            "Has persuasive qualities 具有说服力"
          ]
        },
        {
          title: "Elements",
          items: [
            "source 源",
            "encoding 编码",
            "message 信息",
            "channel 信道",
            "receiver 接收者",
            "decoding 解码",
            "feedback 反馈",
            "noise 噪声"
          ]
        },
        {
          title: "Characteristics",
          items: [
            "Dynamic process 动态过程",
            "Symbolic 有符号性",
            "Contextual 有语境性",
            "Self-reflective 自我反省",
            "Irreversible 不可逆",
            "Consequential 有后果",
            "Complex 复杂"
          ]
        }
      ],
      memory: "Communication = dynamic process + symbols + particular settings。"
    },
    {
      slug: "summary-culture",
      title: "Culture 文化",
      lead: "文化总结页突出定义、功能、构成要素和五个核心特征。",
      sections: [
        {
          title: "Definition",
          items: [
            "Culture is a set of human-made objective and subjective elements that increased survival probability and satisfaction in an ecological niche.",
            "These elements became shared among people who communicated through a common language and lived in the same time and place.",
            "中文：文化是一组人为的客观和主观因素，它们提升生存可能性并带来满足感，因此在共同语言和共同生活时空的人群中共享。"
          ]
        },
        {
          title: "Function",
          items: [
            "Culture lays out a somewhat predictable world.",
            "It provides a blueprint for how to behave.",
            "It also tells members what results they can anticipate from behavior.",
            "即使个体偏离文化蓝图，也知道文化对自己的期待。"
          ]
        },
        {
          title: "Elements",
          items: [
            "Worldview 世界观",
            "Religion 宗教",
            "History 历史",
            "Values 价值观",
            "Social organizations 社会组织",
            "Language 语言",
            "Important ideals 重要观念"
          ]
        },
        {
          title: "Characteristics",
          items: [
            "Culture is shared 文化是共享的",
            "Culture is transmitted from generation to generation 文化代代相传",
            "Culture is based on symbols 文化以符号为基础",
            "Culture is learned 文化是习得的",
            "Culture is dynamic 文化是动态的"
          ]
        }
      ],
      memory: "文化给人一张生活蓝图：怎样做、为什么做、做了会怎样。"
    },
    {
      slug: "summary-icc-competence",
      title: "Intercultural Communication Competence 跨文化交际能力",
      lead: "跨文化交际能力由动机、知识和技能构成，简答题可按三点展开。",
      sections: [
        {
          title: "Motivation 动机",
          items: [
            "Goals may be extrinsic or intrinsic.",
            "Extrinsic motivation includes practical rewards such as financial gain, respect, or power.",
            "Intrinsic motivation is more personal and harder to access, especially in intercultural contexts."
          ]
        },
        {
          title: "Knowledge 知识",
          items: [
            "Knowledge works together with motivation.",
            "A competent communicator is motivated enough to gather knowledge about other cultures.",
            "Two necessary kinds: content knowledge 内容知识 and procedural knowledge 程序知识."
          ]
        },
        {
          title: "Skills 技能",
          items: [
            "Skills are specific behaviors used to make communication encounters successful.",
            "可写观察、倾听、反馈、调适、移情、处理误解等具体沟通行为。",
            "能力不是只背文化事实，而是在互动中使用知识并调整行为。"
          ]
        }
      ],
      memory: "ICC competence = motivation + knowledge + skills。"
    },
    {
      slug: "summary-family",
      title: "Family 家庭",
      lead: "家庭是深层文化结构中的核心社会制度，常考定义、分类、功能和文化意义。",
      sections: [
        {
          title: "Definition",
          items: [
            "A family is any sexually expressive, parent-child, or other kin relationship, usually related by ancestry, marriage, or adoption.",
            "It forms an economic unit, cares for the young, attaches identity to the group, and commits to maintaining the group over time.",
            "中文：家庭通常由血缘、婚姻或收养连接，承担经济与照料功能，并让成员把身份与该群体相连。"
          ]
        },
        {
          title: "Forms",
          items: [
            "Nuclear family 核心家庭：a parent or parents and a child or children as one unit.",
            "Extended family 大家庭：typically includes grandparents and relatives."
          ]
        },
        {
          title: "Functions",
          items: [
            "Reproductive function 繁殖功能",
            "Economic function 经济功能",
            "Socialization function 社会化功能",
            "Language acquisition function 语言习得功能",
            "Identity function 身份功能"
          ]
        },
        {
          title: "Significance",
          items: [
            "The family supplies a child's basic physical needs.",
            "It is the first carrier of essential cultural information.",
            "Cultural variants in family interaction include gender roles, individualism, collectivism, individualism and the family, and collectivism and the family."
          ]
        }
      ],
      memory: "家庭是孩子进入文化的第一所学校。"
    },
    {
      slug: "summary-perception",
      title: "Perception 感知",
      lead: "感知是人们理解世界和建构现实的方式，特点是选择性、习得性和文化性。",
      sections: [
        {
          title: "Definition",
          items: [
            "Perception is how we make sense of the world and how we construct reality.",
            "中文：感知是我们理解世界和构建现实的方式。",
            "复习链条：belief -> value -> behaviors，可用于解释行为背后的文化原因。"
          ]
        },
        {
          title: "Characteristics",
          items: [
            "Selective: people focus on selected information and filter out the rest.",
            "Learned: life experiences teach people to see the world in a particular way.",
            "Culturally determined: culture teaches meanings behind experiences.",
            "Consistent: once people interpret something in a particular way, that interpretation resists change.",
            "Inaccurate: people view the world through a subjective lens shaped by culture, values, and experiences."
          ]
        }
      ],
      memory: "感知不是照相机，而是文化和经验共同塑造的解释过程。"
    },
    {
      slug: "summary-belief",
      title: "Belief 信念",
      lead: "信念是个人或群体认为真实的观念，是价值观和行为的重要基础。",
      sections: [
        {
          title: "Definition",
          items: [
            "A belief is a concept or idea that an individual or group holds to be true.",
            "中文：信念是个人或群体认为真实的概念或想法。"
          ]
        },
        {
          title: "Characteristics",
          items: [
            "Beliefs represent subjective conviction in the truth of something, with or without proof.",
            "A belief may be a product of faith or some biological or social explanation.",
            "Shared beliefs can represent cultural norms or values and characterize a large collective."
          ]
        },
        {
          title: "Function",
          items: [
            "People often associate with like-minded individuals.",
            "Shared belief communities reinforce personal conviction.",
            "跨文化分析中，理解信念有助于解释对方为什么认为某种行为合理。"
          ]
        }
      ],
      memory: "Belief 回答：我认为这是真的。"
    },
    {
      slug: "summary-values",
      title: "Values 价值观",
      lead: "价值观体现人们认为可取、重要、正确和合适的判断标准。",
      sections: [
        {
          title: "Definition",
          items: [
            "What people consider desirable for themselves and for the society they live in is a product of values.",
            "Values are enduring attitudes about the preference for one belief over another.",
            "中文：价值观决定人们认为对自己和社会而言什么是值得追求的。"
          ]
        },
        {
          title: "Characteristics",
          items: [
            "Broad-based 基础广泛",
            "Enduring 经久不衰",
            "Relatively stable 相对稳定",
            "Held consciously and subconsciously 可有意识或无意识地持有"
          ]
        },
        {
          title: "Function and Significance",
          items: [
            "Values permeate and characterize a culture.",
            "They establish expected and normative modes of behavior.",
            "They institute criteria for judging conduct.",
            "Cultural values help members decide what is good or bad, desirable or undesirable, right or wrong, and appropriate or inappropriate."
          ]
        }
      ],
      memory: "Value 回答：什么是好的、重要的、应该追求的。"
    },
    {
      slug: "summary-behaviors",
      title: "Behaviors 行为",
      lead: "行为是内化信念和价值观的外在表现，也是跨文化案例题最容易观察到的层面。",
      sections: [
        {
          title: "Definition",
          items: [
            "Behaviors are the outward manifestations of internalized beliefs and values.",
            "中文：行为是我们内化的信念和价值观的外在表现。"
          ]
        },
        {
          title: "Relation to Culture",
          items: [
            "Culture has a regulatory influence on behaviors.",
            "Culture tells members what conduct is acceptable in different contexts.",
            "文化会规定年龄、性别、场合和关系中什么行为是合适的。"
          ]
        },
        {
          title: "Relation to Intercultural Communication",
          items: [
            "Beliefs and values exert influence on communicative behaviors.",
            "跨文化交际分析不能停留在行为表面，要追问背后的信念和价值观。",
            "案例题可按 behavior -> value -> belief 的顺序分析。"
          ]
        }
      ],
      memory: "行为是看得见的文化结果，信念和价值观是看不见的原因。"
    },
    {
      slug: "summary-cultural-patterns",
      title: "Cultural Patterns 文化模式",
      lead: "文化模式或价值取向是概括主导群体文化价值观的框架，适合用于理论题和案例分析。",
      sections: [
        {
          title: "Definition",
          items: [
            "Cultural patterns, or value orientations, is an umbrella term used to collectively describe cultural values that characterize the dominant group within a culture.",
            "中文：文化模式是一个总括性术语，用于总体描述文化中占主导地位群体的文化价值观。"
          ]
        },
        {
          title: "常见框架",
          items: [
            "Kluckhohn and Strodtbeck value orientations.",
            "Hall's high-context and low-context orientation.",
            "Hofstede's cultural dimensions.",
            "Minkov's dimensions and Gelfand's tight or loose cultures.",
            "Ting-Toomey's face and facework can also connect to cultural patterns."
          ]
        },
        {
          title: "答题提醒",
          items: [
            "文化模式描述 dominant group 的主流倾向，不等于每个个体。",
            "文化模式可以帮助识别重复出现的价值优先级。",
            "使用时要避免文化决定论和刻板印象。"
          ]
        }
      ],
      memory: "文化模式是分析地图，不是个人标签。"
    },
    {
      slug: "summary-face-facework",
      title: "Face & Facework 面子与面子功夫",
      lead: "面子与面子功夫常和集体主义、个人主义、冲突处理、高语境沟通一起考。",
      sections: [
        {
          title: "Face Definition",
          items: [
            "Face is a metaphor for the self-image a person projects to other people.",
            "中文：面子是一个人向他人展示的自我形象。",
            "在集体主义文化中，群体成员身份通常是身份和地位的重要来源。"
          ]
        },
        {
          title: "Facework Definition",
          items: [
            "Facework consists of actions people engage in to acquire or maintain face for themselves or give face to someone else.",
            "中文：面子功夫包括为了自己获得或维持面子，或给别人面子而采取的行动。"
          ]
        },
        {
          title: "Conflict Function",
          items: [
            "Collectivists are more inclined toward avoidance and obligating measures when facing possible conflict.",
            "This comes from concern for mutual face and others' face.",
            "Individualists are primarily concerned with self-face and often favor confrontational and solution-oriented approaches."
          ]
        }
      ],
      memory: "面子关注形象，面子功夫关注保护、维护或给予形象的沟通策略。"
    },
    {
      slug: "summary-cultural-identity",
      title: "Cultural Identity 文化身份",
      lead: "文化身份是动态、复杂、社会建构的概念，重点掌握不同学者定义和跨文化交际意义。",
      sections: [
        {
          title: "核心理解",
          items: [
            "Identity is abstract, complex, dynamic, and socially constructed.",
            "Old views of fixed cultural identity or ethnicity are outdated.",
            "Identity is increasingly negotiated between what people call themselves and what others are willing to call them."
          ]
        },
        {
          title: "Scholars' Definitions",
          items: [
            "Fong: cultural identity is identification with a shared system of symbolic verbal and nonverbal behavior meaningful to members with belonging, traditions, heritage, language, and similar norms.",
            "Ting-Toomey and Chung: cultural identity is the emotional significance attached to belonging or affiliation with the larger culture.",
            "Klyukanov: cultural identity is membership in a group whose members share the same symbolic meanings.",
            "Dervin: cultural identity is what people construct whenever they are in contact with others."
          ]
        },
        {
          title: "Functions",
          items: [
            "Cultural identity remains a product of culture, no matter how it is acquired or enacted.",
            "It shapes expectations of appropriate communicative behavior in social settings.",
            "Different expectations for identity display and communication style can create anxiety, misunderstandings, and conflict."
          ]
        }
      ],
      memory: "文化身份不是固定答案，而是归属、符号、互动和他人认定共同协商出的结果。"
    },
    {
      slug: "summary-identity-types",
      title: "Identity Types 身份类型",
      lead: "本页集中复习社会身份、个人身份、性别身份和族群身份的定义。",
      sections: [
        {
          title: "Social Identities",
          items: [
            "Social identities are represented by the many groups one belongs to, such as racial, ethnic, occupational, age, and hometown groups.",
            "They result from being a member of some social groups and a nonmember of others.",
            "中文：社会身份来自个体所属和不所属的群体。"
          ]
        },
        {
          title: "Personal Identity",
          items: [
            "Personal identity is what sets a person apart from other in-group members and marks that person as special or unique.",
            "中文：个人身份强调个体区别于同群体成员的独特性。"
          ]
        },
        {
          title: "Gender Identity",
          items: [
            "Gender identity is a socially constructed concept.",
            "It refers to how a particular culture differentiates masculine and feminine social roles.",
            "中文：性别身份是社会建构的，关注文化如何区分男性化和女性化角色。"
          ]
        },
        {
          title: "Ethnic Identity",
          items: [
            "Ethnic identity, or ethnicity, is derived from shared heritage, history, traditions, values, similar behaviors, geographical area of origin, and language.",
            "中文：族群身份来自共同遗产、历史、传统、价值观、相似行为、地理来源和语言。"
          ]
        }
      ],
      memory: "社会身份看群体归属，个人身份看独特性，性别身份看文化角色，族群身份看共同传统。"
    },
    {
      slug: "summary-language",
      title: "Language 语言",
      lead: "语言是有组织的符号系统，承担社会互动、社会凝聚和身份表达功能。",
      sections: [
        {
          title: "Definition",
          items: [
            "Language is an organized system of symbols, both verbal and nonverbal, used in a common and uniform way by people who manipulate these symbols to express thoughts and feelings.",
            "The human brain and body are especially adapted for this complex symbol system.",
            "中文：语言是由语言和非语言符号组成的有组织符号系统，人们用它表达思想和情感。"
          ]
        },
        {
          title: "Functions",
          items: [
            "Social interaction: speaking, reading, writing, listening, thinking, expressing emotions, and relieving stress.",
            "Social cohesion: common language allows people to form groups and cooperate.",
            "Expression of identity: language constructs individual, group, and cultural identity."
          ]
        },
        {
          title: "Characteristics",
          items: [
            "Words are only symbols.",
            "Words are arbitrary.",
            "Words evoke denotative and connotative meanings.",
            "Language can categorize people by age, gender, social level, and economic level."
          ]
        }
      ],
      memory: "语言既是沟通工具，也是身份和文化意义的符号系统。"
    },
    {
      slug: "summary-verbal-nonverbal",
      title: "Verbal & Nonverbal Communication 言语与非言语交际",
      lead: "本页总结言语与非言语交际的关系，以及非语言交际的定义、功能、特点和分类。",
      sections: [
        {
          title: "Definition",
          items: [
            "Nonverbal communication involves all nonverbal stimuli in a communication setting generated by the source and the use of the environment, with potential message value for the source and/or receiver.",
            "The definition establishes boundaries and reflects how the process functions.",
            "Part of the functioning involves intentional and unintentional messages and the reciprocal relationship between verbal and nonverbal messages."
          ]
        },
        {
          title: "Functions",
          items: [
            "Convey internal states: attitudes, feelings, values, and emotions.",
            "Create identity: nonverbal symbols tell oneself and others who one is.",
            "Regulate interaction: nonverbal cues guide when conversation starts, when to speak, and when interaction ends.",
            "Substitute for words: actions can replace verbal utterances."
          ]
        },
        {
          title: "Characteristics",
          items: [
            "Nonverbal communication is a multichannel activity.",
            "Nonverbal communication is often ambiguous.",
            "Numerous variables influence nonverbal communication."
          ]
        },
        {
          title: "Classifications",
          items: [
            "Messages of the body 肢体信息",
            "Appearance 外表",
            "Body movement 身体动作",
            "Space and distance 空间和距离",
            "Time 时间",
            "Silence 沉默"
          ]
        }
      ],
      memory: "非语言沟通不是语言的附属品，它常常决定信息如何被理解。"
    }
  ];

  const itemTranslations = Object.fromEntries([
    ["masculinity：achievement、competition、assertiveness、success、material rewards。", "男性化：成就、竞争、果断、成功和物质回报。"],
    ["femininity：care、cooperation、modesty、quality of life、work-life balance。", "女性化：关怀、合作、谦逊、生活质量和工作生活平衡。"],
    ["ascribed = others give you；avowed = you claim for yourself。", "ascribed 指别人赋予你的身份；avowed 指你自己声明或认同的身份。"],
    ["Globalization has created an interdependent world community.", "全球化创造了一个相互依赖的世界共同体。"],
    ["Interdependency brings benefits, but also produces new international and intercultural challenges.", "相互依赖带来好处，也产生新的国际与跨文化挑战。"],
    ["Globalized communities must work across national and cultural borders to manage shared problems.", "全球化社会必须跨越国家和文化边界来处理共同问题。"],
    ["Social challenges: population growth, migration, urbanization, intercultural integration, aging populations and declining birthrates.", "社会挑战：人口增长、移民、城市化、跨文化整合、人口老龄化和出生率下降。"],
    ["Ecological concerns: competition for natural resources, water shortages, food scarcities, pelagic resources, and environmental degradation.", "生态关切：自然资源竞争、水资源短缺、食物短缺、远洋资源和环境退化。"],
    ["Humanitarian and legal cooperation: disease control, disaster relief, international mishaps, transnational crime, cyber crime, and intellectual property.", "人道与法律合作：疾病控制、灾害救援、国际事故、跨国犯罪、网络犯罪和知识产权。"],
    ["Political and security issues: international legal systems, scientific ethics, human rights, weapons of mass destruction, terrorism, peacekeeping, ethnic tensions, nationalism, and territorial disputes.", "政治与安全议题：国际法律体系、科学伦理、人权、大规模杀伤性武器、恐怖主义、维和、族群紧张、民族主义和领土争端。"],
    ["Communication is not a panacea for all intercultural difficulties.", "沟通并不是解决所有跨文化困难的万能药。"],
    ["Helps fulfill interpersonal needs.", "帮助满足人际需求。"],
    ["Assists in gathering information and person perception.", "帮助收集信息并形成对他人的认知。"],
    ["Establishes cultural and personal identities.", "建立文化身份和个人身份。"],
    ["Allows people to influence others and has persuasive qualities.", "使人们能够影响他人，并具有说服功能。"],
    ["Components: source, encoding, message, channel, receiver, decoding, feedback, noise.", "沟通要素：信息源、编码、信息、信道、接收者、解码、反馈和噪声。"],
    ["Communication is dynamic, symbolic, contextual, self-reflective, irreversible, consequential, and complex.", "沟通具有动态性、符号性、语境性、自我反思性、不可逆性、后果性和复杂性。"],
    ["Definition focus: people share internal states or thoughts through symbols in particular settings.", "定义重点：人们在特定情境中通过符号分享内在状态或思想。"],
    ["Communication can solve all problems.", "认为沟通可以解决所有问题。"],
    ["People are born good communicators.", "认为人天生就是优秀沟通者。"],
    ["The message sent is always the message received.", "认为发送的信息总是等同于接收的信息。"],
    ["Culture reduces confusion and helps members predict what to expect from life.", "文化减少困惑，并帮助成员预测生活中可以期待什么。"],
    ["Characteristics: shared, transmitted from generation to generation, based on symbols, learned, and dynamic.", "文化特征：共享、代际传递、以符号为基础、习得并动态变化。"],
    ["Elements: worldview, religion, history, values, social organization, and language.", "文化要素：世界观、宗教、历史、价值观、社会组织和语言。"],
    ["Intercultural competence develops through motivation, knowledge, and communication skills.", "跨文化能力通过动机、知识和沟通技能发展。"],
    ["Deep structures include family or clans, state or community, and religion or worldview.", "深层结构包括家庭或氏族、国家或社区、宗教或世界观。"],
    ["They perpetuate a culture's most significant beliefs and values.", "它们延续一种文化中最重要的信念和价值观。"],
    ["Their messages endure, are deeply felt, and supply much of a culture's identity.", "它们传递的信息持久而深刻，并为文化身份提供重要来源。"],
    ["Two common family forms are nuclear family and extended family.", "两种常见家庭形式是核心家庭和大家庭。"],
    ["Traditional definitions of family are undergoing major changes in the United States.", "在美国，传统家庭定义正在经历重大变化。"],
    ["Globalization and migration have changed traditional family structures around the world.", "全球化和迁移改变了世界各地的传统家庭结构。"],
    ["Reproduction and care.", "繁衍与照料。"],
    ["Economic support.", "经济支持。"],
    ["Socialization and language acquisition.", "社会化与语言习得。"],
    ["Transmission of values and religion.", "价值观和宗教的传递。"],
    ["Identity formation and communication training.", "身份形成与沟通训练。"],
    ["Families teach gender roles.", "家庭教授性别角色。"],
    ["Families shape views of individualism and collectivism.", "家庭塑造个体主义和集体主义观念。"],
    ["Families perpetuate perceptions of aging and the elderly.", "家庭延续对老龄化和老年人的看法。"],
    ["Families develop social skills and early rules of interaction.", "家庭培养社会技能和早期互动规则。"],
    ["Perception is the process whereby people convert external events and experiences into meaningful internal understanding.", "感知是人们把外部事件和经验转化为有意义的内部理解的过程。"],
    ["Perception is the primary mechanism by which people develop their worldview.", "感知是人们形成世界观的主要机制。"],
    ["Perception is selective, learned, culturally determined, consistent, and often inaccurate.", "感知具有选择性、习得性、文化决定性、一致性，并且常常不准确。"],
    ["Values are enduring attitudes about the preference for one belief over another.", "价值观是关于一种信念优先于另一种信念的持久态度。"],
    ["Behaviors are observable demonstrations of internally held beliefs and values.", "行为是内在信念和价值观的可观察表现。"],
    ["Beliefs and values influence communicative behavior, so case analysis should move from visible behavior to invisible values.", "信念和价值观影响交际行为，因此案例分析应从可见行为追溯到不可见价值。"],
    ["Kluckhohn and Strodtbeck: human nature, perception of nature, time, activity, and relationships.", "Kluckhohn 和 Strodtbeck：人性、人与自然、时间、活动和人际关系五种价值取向。"],
    ["Hall: high-context and low-context describe reliance on internalized information and context.", "Hall：高语境和低语境描述对内化信息和语境的依赖程度。"],
    ["Hofstede: individualism/collectivism, uncertainty avoidance, power distance, masculinity/femininity, long-term/short-term orientation.", "Hofstede：个体主义/集体主义、不确定性规避、权力距离、男性化/女性化、长期/短期取向。"],
    ["Minkov: industry/indulgence, monumentalism/flexumility, exclusionism/universalism.", "Minkov：勤勉/放纵、纪念碑主义/灵活谦逊、排斥主义/普遍主义。"],
    ["Gelfand: tight and loose cultures.", "Gelfand：紧文化与松文化。"],
    ["Cultural patterns are broad taxonomies for dominant beliefs and values, not labels for every person.", "文化模式是对主导信念和价值观的宽泛分类，不是贴在每个人身上的标签。"],
    ["When applying cultural patterns, remember people are more than culture; patterns are integrated, dynamic, and can be contradictory.", "运用文化模式时要记住，人不只是文化；文化模式相互整合、动态变化，也可能自相矛盾。"],
    ["Face and facework differ across cultures: collectivistic cultures often focus on other-face and mutual-face; individualistic cultures often focus on self-face.", "面子和面子功夫因文化而异：集体主义文化常关注他人面子和相互面子，个体主义文化常关注自我面子。"],
    ["Identity is highly abstract, dynamic, multifaceted, and socially constructed.", "身份是高度抽象、动态、多面向并由社会建构的概念。"],
    ["Identities can be categorized as human, social, and personal.", "身份可分为人类身份、社会身份和个人身份。"],
    ["Another classification uses personal, relational, and communal identities.", "另一种分类将身份分为个人身份、关系身份和共同体身份。"],
    ["Every individual has multiple identities: racial, gender, ethnic, national, regional, organizational, personal, cyber or fantasy, and others.", "每个人都有多重身份：种族、性别、族群、国家、地区、组织、个人、网络或幻想身份等。"],
    ["The importance of any single identity depends on context.", "任何单一身份的重要性都取决于语境。"],
    ["Concepts of identity within the same group can change over time.", "同一群体内部的身份观念也会随时间变化。"],
    ["Identity is acquired through interaction with other members of one's cultural group.", "身份通过与自身文化群体其他成员的互动获得。"],
    ["Family has a primary influence on early identity formation.", "家庭对早期身份形成具有首要影响。"],
    ["Identities are enacted through rites of passage, personal appearance, and participation in commemorative events.", "身份通过成年礼、个人外表和参与纪念性活动等方式被表现出来。"],
    ["Competent intercultural communication is achieved when participants find commonality in ascribed and avowed identities.", "当交际者能在赋予身份和自认身份之间找到共同点时，更容易实现有效的跨文化沟通。"],
    ["As society becomes increasingly multicultural, new concepts of cultural identity are evolving.", "随着社会日益多元文化化，新的文化身份概念也在发展。"],
    ["Language allows people to exchange information and abstract ideas.", "语言使人们能够交换信息和抽象观念。"],
    ["Language is an integral part of identity.", "语言是身份的重要组成部分。"],
    ["Language helps construct individual, group, and cultural identity.", "语言帮助建构个人、群体和文化身份。"],
    ["Language is a set of shared symbols used to create meaning.", "语言是一套用于创造意义的共享符号。"],
    ["The relationship between a symbol and its meaning is often arbitrary.", "符号与意义之间的关系常常是任意约定的。"],
    ["Words are symbols, not the objects or experiences themselves.", "词语是符号，不是事物或经验本身。"],
    ["Denotative meaning is the literal or conventional meaning.", "外延意义是字面意义或约定俗成的意义。"],
    ["Connotative meaning is the emotional, private, or cultural association evoked by a word.", "内涵意义是词语唤起的情感性、私人性或文化性联想。"],
    ["People use nonverbal communication to express internal states, create identity, regulate interaction, repeat messages, and substitute actions for words.", "人们用非语言沟通表达内在状态、创造身份、调节互动、重复信息，并用动作替代语言。"],
    ["Nonverbal communication is culture bound.", "非语言沟通受文化制约。"],
    ["Nonverbal messages may be intentional or unintentional.", "非语言信息可以是有意的，也可以是无意的。"],
    ["Nonverbal messages can work alone or together with verbal messages.", "非语言信息可以单独发挥作用，也可以与语言信息共同发挥作用。"],
    ["Nonverbal messages involve multichannel activity.", "非语言信息涉及多通道活动。"],
    ["They can be ambiguous.", "它们可能具有模糊性。"],
    ["They are composed of numerous interacting variables.", "它们由许多相互作用的变量构成。"],
    ["Nonverbal behaviors and culture are similar because both are learned, transmitted, and shared.", "非语言行为与文化相似，因为二者都是习得的、传递的、共享的。"],
    ["Body messages: appearance, judgments of beauty, skin color, attire, kinesics, posture, gestures, facial expressions, eye contact, touch, and paralanguage.", "身体信息：外表、审美判断、肤色、服饰、身势、姿态、手势、面部表情、眼神接触、触碰和副语言。"],
    ["Space: personal space, seating, and furniture arrangement.", "空间：个人空间、座位和家具安排。"],
    ["Time: informal time and monochronic or polychronic orientation.", "时间：非正式时间以及单时制或多时制取向。"],
    ["Silence varies greatly across cultures.", "沉默在不同文化中的使用差异很大。"],
    ["Keep interpretations tentative.", "保持解释的试探性。"],
    ["Be conscious of context.", "注意语境。"],
    ["Employ feedback.", "使用反馈。"],
    ["Know your own culture.", "了解自己的文化。"],
    ["Monitor your own nonverbal actions.", "监控自己的非语言行为。"],
    ["Venturing into a new culture can cause anxiety, emotional distress, and mental or physical fatigue.", "进入一种新文化可能造成焦虑、情绪压力以及身心疲惫。"],
    ["Culture shock can occur when moving from a familiar to an unfamiliar environment and finding established behavior patterns ineffective.", "从熟悉环境进入陌生环境，并发现原有行为模式失效时，可能产生文化冲击。"],
    ["U-curve model: honeymoon, disillusionment, recovery, adjustment.", "U 型曲线模型：蜜月期、幻灭期、恢复期和适应期。"],
    ["Culture shock can occur during the disillusionment stage.", "文化冲击可能出现在幻灭期。"],
    ["Kim sees acculturation or cultural adjustment as a continuing process of stress-adaptation-growth.", "Kim 将文化适应视为压力、适应和成长的持续过程。"],
    ["Adaptation strategies include learning the host culture and language.", "适应策略包括学习东道文化和语言。"],
    ["Avoid ethnocentrism.", "避免民族中心主义。"],
    ["Maintain contact with your own culture.", "保持与自身文化的联系。"],
    ["Preference for similarities.", "偏好相似性。"],
    ["Dealing with uncertainty.", "处理不确定性。"],
    ["Risk of withdrawal.", "退缩风险。"],
    ["Stereotyping tendencies.", "刻板印象倾向。"],
    ["Problems of prejudice and racism.", "偏见和种族主义问题。"],
    ["Issues of power.", "权力问题。"],
    ["Communication is an activity that has consequences, so communicators need ethics.", "沟通是一种会产生后果的活动，因此沟通者需要伦理意识。"],
    ["Two major perspectives on ethics are relativism and universalism.", "伦理的两种主要观点是相对主义和普遍主义。"],
    ["Intercultural ethics ask people to respect the worth of all individuals, seek commonalities, recognize valid differences, and take responsibility for actions.", "跨文化伦理要求人们尊重所有个体的价值，寻找共同点，承认合理差异，并为自己的行为负责。"],
    ["Communication is the ability to share ideas and feelings and is the basis of all human contact.", "交流是分享想法和感受的能力，也是所有人类联系的基础。"],
    ["Human communication is a dynamic process in which people attempt to share thoughts with others through symbols in particular settings.", "人类沟通是人们在特定情境中通过符号与他人分享思想的动态过程。"],
    ["Culture is a set of human-made objective and subjective elements that increased survival probability and satisfaction in an ecological niche.", "文化是一组人为创造的客观和主观要素，它们提高了特定生态环境中的生存概率和满足感。"],
    ["These elements became shared among people who communicated through a common language and lived in the same time and place.", "这些要素在使用共同语言、生活于同一时空的人群中被共享。"],
    ["Culture lays out a somewhat predictable world.", "文化呈现出一个相对可预测的世界。"],
    ["It provides a blueprint for how to behave.", "它提供了如何行动的蓝图。"],
    ["It also tells members what results they can anticipate from behavior.", "它也告诉成员可以从行为中预期什么结果。"],
    ["Goals may be extrinsic or intrinsic.", "目标可能是外在的，也可能是内在的。"],
    ["Extrinsic motivation includes practical rewards such as financial gain, respect, or power.", "外在动机包括经济收益、尊重或权力等实际回报。"],
    ["Intrinsic motivation is more personal and harder to access, especially in intercultural contexts.", "内在动机更加个人化，也更难理解，尤其是在跨文化情境中。"],
    ["Knowledge works together with motivation.", "知识与动机共同发挥作用。"],
    ["A competent communicator is motivated enough to gather knowledge about other cultures.", "有能力的沟通者会有足够动机去收集关于其他文化的知识。"],
    ["Skills are specific behaviors used to make communication encounters successful.", "技能是用来促成交际成功的具体行为。"],
    ["A family is any sexually expressive, parent-child, or other kin relationship, usually related by ancestry, marriage, or adoption.", "家庭是基于性关系、亲子关系或其他亲属关系形成的群体，成员通常通过血缘、婚姻或收养相连。"],
    ["It forms an economic unit, cares for the young, attaches identity to the group, and commits to maintaining the group over time.", "它形成经济单位，照料幼者，将身份与群体相连，并承诺长期维持该群体。"],
    ["The family supplies a child's basic physical needs.", "家庭满足孩子的基本身体需求。"],
    ["It is the first carrier of essential cultural information.", "家庭是重要文化信息的第一载体。"],
    ["Cultural variants in family interaction include gender roles, individualism, collectivism, individualism and the family, and collectivism and the family.", "家庭互动中的文化差异包括性别角色、个体主义、集体主义、个体主义与家庭、集体主义与家庭。"],
    ["Perception is how we make sense of the world and how we construct reality.", "感知是我们理解世界和建构现实的方式。"],
    ["Selective: people focus on selected information and filter out the rest.", "选择性：人们关注被选择的信息，并过滤其余信息。"],
    ["Learned: life experiences teach people to see the world in a particular way.", "习得性：生活经验教会人们以特定方式看待世界。"],
    ["Culturally determined: culture teaches meanings behind experiences.", "文化决定性：文化教会人们理解经验背后的意义。"],
    ["Consistent: once people interpret something in a particular way, that interpretation resists change.", "一致性：人们一旦以某种方式解释事物，这种解释通常不易改变。"],
    ["Inaccurate: people view the world through a subjective lens shaped by culture, values, and experiences.", "不准确性：人们通过受文化、价值观和经验影响的主观镜头看世界。"],
    ["A belief is a concept or idea that an individual or group holds to be true.", "信念是个人或群体认为真实的概念或观念。"],
    ["Beliefs represent subjective conviction in the truth of something, with or without proof.", "信念代表人们对某事为真的主观确信，无论是否有证据。"],
    ["A belief may be a product of faith or some biological or social explanation.", "信念可能来自信仰，也可能来自某种生物或社会解释。"],
    ["Shared beliefs can represent cultural norms or values and characterize a large collective.", "共享信念可以代表文化规范或价值观，并体现一个大群体的特征。"],
    ["People often associate with like-minded individuals.", "人们通常会与志同道合者交往。"],
    ["Shared belief communities reinforce personal conviction.", "共享信念的共同体会强化个人确信。"],
    ["What people consider desirable for themselves and for the society they live in is a product of values.", "人们认为对自己和所处社会而言什么是可取的，是价值观的产物。"],
    ["Values are enduring attitudes about the preference for one belief over another.", "价值观是关于一种信念优先于另一种信念的持久态度。"],
    ["Values permeate and characterize a culture.", "价值观渗透并体现一种文化。"],
    ["They establish expected and normative modes of behavior.", "它们建立被期待的、规范性的行为模式。"],
    ["They institute criteria for judging conduct.", "它们制定评价行为的标准。"],
    ["Cultural values help members decide what is good or bad, desirable or undesirable, right or wrong, and appropriate or inappropriate.", "文化价值观帮助成员判断什么是好坏、可取或不可取、对错、合适或不合适。"],
    ["Behaviors are the outward manifestations of internalized beliefs and values.", "行为是内化信念和价值观的外在表现。"],
    ["Culture has a regulatory influence on behaviors.", "文化对行为具有调节作用。"],
    ["Culture tells members what conduct is acceptable in different contexts.", "文化告诉成员在不同情境中什么行为是可接受的。"],
    ["Beliefs and values exert influence on communicative behaviors.", "信念和价值观会影响交际行为。"],
    ["Cultural patterns, or value orientations, is an umbrella term used to collectively describe cultural values that characterize the dominant group within a culture.", "文化模式或价值取向是一个总称，用来概括体现文化中主导群体特征的文化价值观。"],
    ["Kluckhohn and Strodtbeck value orientations.", "Kluckhohn 和 Strodtbeck 的价值取向。"],
    ["Hall's high-context and low-context orientation.", "Hall 的高语境与低语境取向。"],
    ["Hofstede's cultural dimensions.", "Hofstede 的文化维度。"],
    ["Minkov's dimensions and Gelfand's tight or loose cultures.", "Minkov 的文化维度，以及 Gelfand 的紧文化与松文化。"],
    ["Ting-Toomey's face and facework can also connect to cultural patterns.", "Ting-Toomey 的面子与面子功夫也可以与文化模式联系起来。"],
    ["Face is a metaphor for the self-image a person projects to other people.", "面子是一个人向他人呈现的自我形象的隐喻。"],
    ["Facework consists of actions people engage in to acquire or maintain face for themselves or give face to someone else.", "面子功夫包括人们为自己获得或维持面子，或给予他人面子而采取的行动。"],
    ["Collectivists are more inclined toward avoidance and obligating measures when facing possible conflict.", "面对可能的冲突时，集体主义者更倾向于回避和迁就策略。"],
    ["This comes from concern for mutual face and others' face.", "这源于对相互面子和他人面子的关注。"],
    ["Individualists are primarily concerned with self-face and often favor confrontational and solution-oriented approaches.", "个体主义者主要关注自我面子，常偏好对抗性和解决问题导向的方法。"],
    ["Identity is abstract, complex, dynamic, and socially constructed.", "身份是抽象、复杂、动态并由社会建构的。"],
    ["Old views of fixed cultural identity or ethnicity are outdated.", "把文化身份或族群身份看成固定不变的旧观点已经过时。"],
    ["Identity is increasingly negotiated between what people call themselves and what others are willing to call them.", "身份越来越成为自我称谓与他人愿意如何称呼之间的协商。"],
    ["Fong: cultural identity is identification with a shared system of symbolic verbal and nonverbal behavior meaningful to members with belonging, traditions, heritage, language, and similar norms.", "Fong：文化身份是对共享符号性语言和非语言行为系统的认同，这一系统对具有归属感、传统、遗产、语言和相似规范的成员有意义。"],
    ["Ting-Toomey and Chung: cultural identity is the emotional significance attached to belonging or affiliation with the larger culture.", "Ting-Toomey 和 Chung：文化身份是人们赋予自己对更大文化归属或联系的情感意义。"],
    ["Klyukanov: cultural identity is membership in a group whose members share the same symbolic meanings.", "Klyukanov：文化身份是成员共享相同符号意义的群体成员资格。"],
    ["Dervin: cultural identity is what people construct whenever they are in contact with others.", "Dervin：文化身份是人们在与他人接触时建构出来的东西。"],
    ["Cultural identity remains a product of culture, no matter how it is acquired or enacted.", "无论文化身份如何获得或表现，它仍然是文化的产物。"],
    ["It shapes expectations of appropriate communicative behavior in social settings.", "它塑造人们对不同社会场景中适当交际行为的期待。"],
    ["Different expectations for identity display and communication style can create anxiety, misunderstandings, and conflict.", "身份展示和沟通风格的不同期待可能造成焦虑、误解和冲突。"],
    ["Social identities are represented by the many groups one belongs to, such as racial, ethnic, occupational, age, and hometown groups.", "社会身份由一个人所属的许多群体体现，如种族、族群、职业、年龄和家乡群体。"],
    ["They result from being a member of some social groups and a nonmember of others.", "它们来自一个人属于某些社会群体，同时不属于另一些社会群体。"],
    ["Personal identity is what sets a person apart from other in-group members and marks that person as special or unique.", "个人身份使一个人区别于内群体其他成员，并标记其特殊性或独特性。"],
    ["Gender identity is a socially constructed concept.", "性别身份是社会建构的概念。"],
    ["It refers to how a particular culture differentiates masculine and feminine social roles.", "它指特定文化如何区分男性化和女性化社会角色。"],
    ["Ethnic identity, or ethnicity, is derived from shared heritage, history, traditions, values, similar behaviors, geographical area of origin, and language.", "族群身份或族群性来自共同遗产、历史、传统、价值观、相似行为、原属地域和语言。"],
    ["Language is an organized system of symbols, both verbal and nonverbal, used in a common and uniform way by people who manipulate these symbols to express thoughts and feelings.", "语言是由语言和非语言符号组成的有组织符号系统，人们以共同且一致的方式操控这些符号来表达思想和情感。"],
    ["The human brain and body are especially adapted for this complex symbol system.", "人类的大脑和身体尤其适应这种复杂符号系统。"],
    ["Social interaction: speaking, reading, writing, listening, thinking, expressing emotions, and relieving stress.", "社会互动：说、读、写、听、思考、表达情绪和缓解压力。"],
    ["Social cohesion: common language allows people to form groups and cooperate.", "社会凝聚：共同语言使人们能够形成群体并开展合作。"],
    ["Expression of identity: language constructs individual, group, and cultural identity.", "身份表达：语言建构个人、群体和文化身份。"],
    ["Words are only symbols.", "词语只是符号。"],
    ["Words are arbitrary.", "词语具有任意性。"],
    ["Words evoke denotative and connotative meanings.", "词语会唤起外延意义和内涵意义。"],
    ["Language can categorize people by age, gender, social level, and economic level.", "语言可以按年龄、性别、社会层次和经济层次对人进行分类。"],
    ["Nonverbal communication involves all nonverbal stimuli in a communication setting generated by the source and the use of the environment, with potential message value for the source and/or receiver.", "非语言沟通包括交际情境中由信息来源及其对环境的使用所产生的所有非语言刺激，这些刺激对发送者和/或接收者具有潜在信息价值。"],
    ["The definition establishes boundaries and reflects how the process functions.", "这一定义界定了非语言沟通的范围，并反映其过程如何发挥作用。"],
    ["Part of the functioning involves intentional and unintentional messages and the reciprocal relationship between verbal and nonverbal messages.", "其功能包括有意和无意的信息，以及语言信息与非语言信息之间的相互关系。"],
    ["Convey internal states: attitudes, feelings, values, and emotions.", "传达内在状态：态度、感受、价值观和情绪。"],
    ["Create identity: nonverbal symbols tell oneself and others who one is.", "创造身份：非语言符号告诉自己和他人自己是谁。"],
    ["Regulate interaction: nonverbal cues guide when conversation starts, when to speak, and when interaction ends.", "调节互动：非语言线索引导对话何时开始、何时发言以及何时结束。"],
    ["Substitute for words: actions can replace verbal utterances.", "替代语言：动作可以替代口头表达。"],
    ["Nonverbal communication is a multichannel activity.", "非语言沟通是一种多通道活动。"],
    ["Nonverbal communication is often ambiguous.", "非语言沟通常常具有模糊性。"],
    ["Numerous variables influence nonverbal communication.", "许多变量会影响非语言沟通。"]
  ]);

  const headingTranslations = {
    "Acculturation": "文化适应",
    "Beliefs, Values, Behaviors": "信念、价值观与行为",
    "Characteristics": "特点",
    "Classifications": "分类",
    "Conflict Function": "冲突中的功能",
    "Deep Structures": "深层结构",
    "Definition": "定义",
    "Ecological Concerns": "生态关切",
    "Elements": "要素",
    "English": "英文",
    "Ethnic Identity": "族群身份",
    "Face Definition": "面子定义",
    "Facework Definition": "面子功夫定义",
    "Forms": "形式",
    "Function": "功能",
    "Function and Significance": "功能与意义",
    "Functions": "功能",
    "Gender Identity": "性别身份",
    "Humanitarian, Legal, Political": "人道、法律与政治",
    "Perception": "感知",
    "Personal Identity": "个人身份",
    "Relation to Culture": "与文化的关系",
    "Relation to Intercultural Communication": "与跨文化交际的关系",
    "Scholars' Definitions": "学者定义",
    "Security Issues": "安全议题",
    "Significance": "重要性",
    "Social Challenges": "社会挑战",
    "Social Identities": "社会身份",
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

  function listItem(item) {
    const text = typeof item === "object" && item ? item.text || item.en || "" : item;
    const translation = typeof item === "object" && item ? item.zh : itemTranslations[text];
    return `
      <li>
        <span>${escapeHtml(text)}</span>
        ${translation ? `<small class="translation">${escapeHtml(translation)}</small>` : ""}
      </li>
    `;
  }

  function list(items) {
    return `<ul>${normalizeItems(items).map((item) => listItem(item)).join("")}</ul>`;
  }

  function heading(title) {
    const translation = headingTranslations[title];
    return `${escapeHtml(title)}${translation ? `<small>${escapeHtml(translation)}</small>` : ""}`;
  }

  function card(type, title, items) {
    return `
      <section class="card ${type}">
        <h2>${heading(title)}</h2>
        ${list(items)}
      </section>
    `;
  }

  function paragraphs(items) {
    return normalizeItems(items).map((item) => `<p>${escapeHtml(item)}</p>`).join("");
  }

  function sourceBlock(source) {
    if (!source) return "";
    return `
      <section class="card card-r source-definition">
        <h2>英文定义 / 中文翻译</h2>
        <div class="grid grid-2 source-grid">
          <div>
            <h3>${heading("English")}</h3>
            ${paragraphs(source.en)}
          </div>
          <div>
            <h3>中文翻译</h3>
            ${paragraphs(source.zh)}
          </div>
        </div>
      </section>
    `;
  }

  function memorizationBlock(sections) {
    if (!sections) return "";
    return `
      <section class="paper-section memorization-block">
        <div class="paper-section-head">
          <div>
            <h2>背诵版匹配要点</h2>
            <p>来自《跨文化交际背诵版(2)(1).docx》，按当前概念页逐项匹配。</p>
          </div>
          <span>DOCX</span>
        </div>
        <div class="grid grid-2">
          ${reviewCards(sections)}
        </div>
      </section>
    `;
  }

  const reviewCardTypes = ["card-b", "card-g", "card-o", "card-p", "card-r"];

  function reviewCards(sections) {
    return normalizeItems(sections)
      .map((section, index) => card(section.type || reviewCardTypes[index % reviewCardTypes.length], section.title, section.items))
      .join("");
  }

  function renderReviewEntry(entry) {
    return `
      <div class="reply">
        <section class="tldr">
          <h2>${escapeHtml(entry.title)}</h2>
          <p>${escapeHtml(entry.lead)}</p>
        </section>
        <div class="grid grid-2">
          ${reviewCards(entry.sections)}
        </div>
        ${entry.memory ? `<blockquote><p>${escapeHtml(entry.memory)}</p></blockquote>` : ""}
      </div>
    `;
  }

  const icc2023DefinitionOptions = [
    { value: "A", text: "proxemics" },
    { value: "B", text: "cultural patterns" },
    { value: "C", text: "symbol" },
    { value: "D", text: "perception" },
    { value: "E", text: "prejudice" },
    { value: "F", text: "behavior" },
    { value: "G", text: "ethnocentrism" },
    { value: "H", text: "face" },
    { value: "I", text: "belief" },
    { value: "J", text: "stereotype" },
  ];

  const icc2023DefinitionQuestions = [
    { no: 1, prompt: "the belief that one's culture is superior to all other's", answer: "G" },
    { no: 2, prompt: "how we make sense of the world and how we construct reality", answer: "D" },
    { no: 3, prompt: "a concept or idea that an individual or group holds to be true", answer: "I" },
    { no: 4, prompt: "an umbrella term collectively describing the cultural values of the dominant group within a culture", answer: "B" },
    { no: 5, prompt: "the interrelated observations and theories of man's use of space as a specialized elaboration of culture", answer: "A" },
    { no: 6, prompt: "an expression that stands for or represents something else", answer: "C" },
    { no: 7, prompt: "a complex form of categorization that mentally organizes one's experiences with and guides one's behavior toward a particular group of people", answer: "J" },
    { no: 8, prompt: "the self-image a person projects to other people", answer: "H" },
    { no: 9, prompt: "the outward manifestations of people's internalized beliefs and values", answer: "F" },
    { no: 10, prompt: "deeply held positive or negative feelings associated with a particular group", answer: "E" },
  ];

  const icc2023MultipleChoiceQuestions = [
    {
      no: 11,
      prompt: "Which of the following is NOT one of the most influential social organizations?",
      answer: "A",
      options: [
        ["A", "schools"],
        ["B", "family"],
        ["C", "community"],
        ["D", "religion"],
      ],
    },
    {
      no: 12,
      prompt: "Which of the following is NOT true about cultural patterns?",
      answer: "C",
      options: [
        ["A", "Cultural patterns are integrated."],
        ["B", "Cultural patterns are dynamic."],
        ["C", "All individuals within a cultural group share the dominant values of that culture."],
        ["D", "Cultural patterns can be contradictory."],
      ],
    },
    {
      no: 13,
      prompt: "Which of the following is NOT true about the characteristics of culture?",
      answer: "B",
      options: [
        ["A", "Culture is transmitted from generation to generation."],
        ["B", "Culture is unique."],
        ["C", "Culture is dynamic."],
        ["D", "Culture is based on symbols."],
      ],
    },
    {
      no: 14,
      prompt: "To develop our intercultural awareness, we need to bear in mind the following EXCEPT that _____.",
      answer: "C",
      options: [
        ["A", "each individual is unique"],
        ["B", "generalizations are based on limited data and may not be accurate"],
        ["C", "communication is a cure-all"],
        ["D", "some external conflicts can be resolved through mutual agreement"],
      ],
    },
    {
      no: 15,
      prompt: "Which of the following is NOT an element of communication?",
      answer: "D",
      options: [
        ["A", "noise"],
        ["B", "encoding"],
        ["C", "feedback"],
        ["D", "actions"],
      ],
    },
    {
      no: 16,
      prompt: "Which of the following is NOT a characteristic of perception?",
      answer: "A",
      options: [
        ["A", "It is dynamic."],
        ["B", "It is consistent."],
        ["C", "It is selective."],
        ["D", "It is inaccurate."],
      ],
    },
    {
      no: 17,
      prompt: "Which of the following is NOT true about family?",
      answer: "D",
      options: [
        ["A", "The family people are born into is called the family of orientation."],
        ["B", "Cultural values of the nuclear family are reflected in child-rearing practices."],
        ["C", "Individualistic families stress self-reliance and encourage autonomy."],
        ["D", "Members of the extended family have gathered only for love and care."],
      ],
    },
    {
      no: 18,
      prompt: "Which of the following is NOT an element of culture?",
      answer: "B",
      options: [
        ["A", "history"],
        ["B", "communication"],
        ["C", "worldview"],
        ["D", "values"],
      ],
    },
    {
      no: 19,
      prompt: "Which of the following is NOT included in Minkov's cultural dimensions?",
      answer: "C",
      options: [
        ["A", "industry vs indulgence"],
        ["B", "monumentalism vs flexumility"],
        ["C", "high-context vs low-context"],
        ["D", "exclusionism vs universalism"],
      ],
    },
    {
      no: 20,
      prompt: "Which of the following is NOT a function of the family?",
      answer: "A",
      options: [
        ["A", "information-carrier function"],
        ["B", "economic function"],
        ["C", "identity function"],
        ["D", "socialization function"],
      ],
    },
    {
      no: 21,
      prompt: "Which of the following is NOT the function of nonverbal communication?",
      answer: "C",
      options: [
        ["A", "conveying internal states"],
        ["B", "creating identity"],
        ["C", "enhancing social cohesion"],
        ["D", "regulating interaction"],
      ],
    },
    {
      no: 22,
      prompt: "In American culture, silence may be interpreted as _____.",
      answer: "D",
      options: [
        ["A", "assertiveness"],
        ["B", "enthusiasm"],
        ["C", "thoughtfulness"],
        ["D", "apathy"],
      ],
    },
    {
      no: 23,
      prompt: "Observing a friend approaching, you offer a broad smile as part of your greeting. This is an _____ act.",
      answer: "A",
      options: [
        ["A", "intentional"],
        ["B", "unintentional"],
        ["C", "unconscious"],
        ["D", "integrated"],
      ],
    },
    {
      no: 24,
      prompt: "In Northeast Asian countries like Korea and Japan, _____ is the traditional way of greeting.",
      answer: "A",
      options: [
        ["A", "bowing"],
        ["B", "embracing"],
        ["C", "kissing on the cheek"],
        ["D", "handshake"],
      ],
    },
    {
      no: 25,
      prompt: "Which does NOT belong to Phinney's Three Stage Identity Development?",
      answer: "B",
      options: [
        ["A", "unexamined ethnic identity"],
        ["B", "identity acceptance"],
        ["C", "ethnic identity search"],
        ["D", "ethnic identity achievement"],
      ],
    },
    {
      no: 26,
      prompt: "_____ culture is typical P-time culture.",
      answer: "B",
      options: [
        ["A", "Northern American"],
        ["B", "Latin American"],
        ["C", "Western European"],
        ["D", "Northern European"],
      ],
    },
    {
      no: 27,
      prompt: "Mr. Li, a Chinese immigrant in America, has adapted himself so well to American culture that he gradually lost his Chinese cultural identity. This process is called _____.",
      answer: "C",
      options: [
        ["A", "separation and segregation"],
        ["B", "integration"],
        ["C", "assimilation"],
        ["D", "marginalization"],
      ],
    },
    {
      no: 28,
      prompt: "When we enter into a new culture, we may view everything is exotic and feel very excited. So this is in _____ stage of cultural adjustment.",
      answer: "A",
      options: [
        ["A", "honeymoon"],
        ["B", "culture shock"],
        ["C", "recovery"],
        ["D", "effective functioning"],
      ],
    },
    {
      no: 29,
      prompt: "Which of the following does NOT belong to the similarities of verbal and nonverbal communication?",
      answer: "D",
      options: [
        ["A", "Both verbal and nonverbal communication use symbols to represent meanings."],
        ["B", "Human communication is viewed as a whole that combines verbal and nonverbal messages."],
        ["C", "Both verbal and nonverbal systems require a sender and a receiver to make communication complete."],
        ["D", "Nonverbal communication usually comes earlier in our life than verbal communication."],
      ],
    },
    {
      no: 30,
      prompt: "Which of the following statements about language is NOT true?",
      answer: "D",
      options: [
        ["A", "Language and culture are indispensable components of intercultural communication."],
        ["B", "One of the most difficult and persistent problems encountered in intercultural communication is that of language differences."],
        ["C", "It is common to find significant differences within a major language group."],
        ["D", "Language is the only way that we express our internal feelings."],
      ],
    },
  ];

  const hofstedeChart = [
    { code: "PDI", label: "Power Distance Index", us: 40, jp: 54 },
    { code: "IDV", label: "Individualism", us: 91, jp: 46 },
    { code: "MAS", label: "Masculinity", us: 62, jp: 95 },
    { code: "UAI", label: "Uncertainty Avoidance Index", us: 46, jp: 92 },
    { code: "LTO", label: "Long Term Orientation", us: 26, jp: 88 },
  ];

  function answerLabel(options, answer) {
    const option = options.find((item) => item.value === answer || item[0] === answer);
    if (!option) return answer;
    return option.text ? `${option.value}. ${option.text}` : `${option[0]}. ${option[1]}`;
  }

  function renderQuizControls(group) {
    return `
      <div class="paper-controls">
        <button class="practice-check-button" type="button" data-quiz-score="${escapeHtml(group)}">批改本部分</button>
        <button class="practice-check-button ghost" type="button" data-quiz-reset="${escapeHtml(group)}">重做</button>
        <p class="paper-score" data-quiz-score-result="${escapeHtml(group)}" aria-live="polite"></p>
      </div>
    `;
  }

  function renderDefinitionQuestion(question) {
    const answerText = answerLabel(icc2023DefinitionOptions, question.answer);
    return `
      <article class="quiz-question definition-question" data-quiz-question data-quiz-group="icc2023-definitions" data-answer="${escapeHtml(question.answer)}" data-answer-label="${escapeHtml(answerText)}">
        <div class="quiz-question-head">
          <span>${String(question.no).padStart(2, "0")}</span>
          <p>${escapeHtml(question.prompt)}</p>
        </div>
        <label class="quiz-select-label">
          <span>选择概念</span>
          <select data-quiz-select>
            <option value="">请选择</option>
            ${icc2023DefinitionOptions.map((option) => `<option value="${escapeHtml(option.value)}">${escapeHtml(option.value)}. ${escapeHtml(option.text)}</option>`).join("")}
          </select>
        </label>
        <p class="quiz-result" data-quiz-result aria-live="polite"></p>
      </article>
    `;
  }

  function renderMultipleChoiceQuestion(question, group = "icc2023-multiple", namePrefix = "icc2023-mc", renderOptions = {}) {
    const answerText = answerLabel(question.options, question.answer);
    const fixedOptions = renderOptions.fixedOptions ? ' data-quiz-fixed-options="true"' : "";
    return `
      <article class="quiz-question" data-quiz-question data-quiz-group="${escapeHtml(group)}" data-answer="${escapeHtml(question.answer)}" data-answer-label="${escapeHtml(answerText)}"${fixedOptions}>
        <div class="quiz-question-head">
          <span>${String(question.no).padStart(2, "0")}</span>
          <p>${escapeHtml(question.prompt)}</p>
        </div>
        <div class="quiz-options" role="radiogroup" aria-label="Question ${question.no}" data-quiz-options>
          ${question.options.map(([value, text]) => `
            <label class="quiz-option">
              <input type="radio" name="${escapeHtml(namePrefix)}-${question.no}" value="${escapeHtml(value)}" data-quiz-radio>
              <span class="quiz-option-letter">${escapeHtml(value)}</span>
              <span class="quiz-option-text">${escapeHtml(text)}</span>
            </label>
          `).join("")}
        </div>
        <p class="quiz-result" data-quiz-result aria-live="polite"></p>
      </article>
    `;
  }

  function renderHofstedeChart() {
    return `
      <section class="paper-chart" aria-labelledby="hofstede-chart-title">
        <div class="paper-chart-head">
          <h3 id="hofstede-chart-title">Scores of Hofstede's Cultural Dimensions</h3>
          <p>United States / Japan</p>
        </div>
        <div class="chart-legend" aria-label="图例">
          <span><i class="us"></i>United States</span>
          <span><i class="jp"></i>Japan</span>
        </div>
        <div class="bar-chart">
          ${hofstedeChart.map((item) => `
            <div class="bar-group">
              <div class="bars" aria-label="${escapeHtml(item.code)} ${escapeHtml(item.label)}: United States ${item.us}, Japan ${item.jp}">
                <span class="bar us" style="height:${item.us}%"><b>${item.us}</b></span>
                <span class="bar jp" style="height:${item.jp}%"><b>${item.jp}</b></span>
              </div>
              <strong>${escapeHtml(item.code)}</strong>
              <small>${escapeHtml(item.label)}</small>
            </div>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderWritingPractice() {
    return `
      <section class="paper-section writing-practice">
        <div class="paper-section-head">
          <div>
            <h2>III. Writing <small>40 points</small></h2>
            <p>Write an essay on <strong>Cultural Dimensions and Intercultural Communication</strong> based on the following chart.</p>
          </div>
          <span>about 200 words</span>
        </div>
        <div class="grid grid-2 writing-grid">
          <div>
            <ol class="writing-requirements">
              <li>Interpret the different cultural values between the United States and Japan according to Hofstede's cultural dimensions in the chart. <strong>10 points</strong></li>
              <li>Illustrate from two dimensions with two appropriate cases in different contexts to highlight how the differences influence their communicative styles. <strong>20 points</strong></li>
              <li>Draw a conclusion by providing suggestions on developing intercultural communication competence. <strong>10 points</strong></li>
            </ol>
            ${renderHofstedeChart()}
          </div>
          <div class="practice-item writing-box">
            <div class="practice-head">
              <span class="practice-no">Essay</span>
              <span class="practice-source">自写后对照评分要点</span>
            </div>
            <textarea data-writing-input="icc-2023-writing" rows="16" placeholder="在这里写约 200 词英文作文。"></textarea>
            <div class="practice-controls">
              <span class="word-counter" data-writing-words="icc-2023-writing">0 words</span>
            </div>
          </div>
        </div>
        <details>
          <summary>查看参考答案页评分要点</summary>
          <div class="score-rubric">
            <h3>结构与分值</h3>
            <ul>
              <li><strong>Introduction / chart interpretation, 10 points:</strong> 简明解释图中 Hofstede 五个文化维度数据。</li>
              <li><strong>Main body / two dimensions with cases, 20 points:</strong> 从五个文化维度中选择两个维度，结合具体案例分析，每个视角 10 分。</li>
              <li><strong>Conclusion / comments, 10 points:</strong> 总结全文，并提出提升跨文化交际能力的建议。</li>
            </ul>
            <h3>评分档次</h3>
            <ol>
              <li><strong>33-40:</strong> 内容非常丰富，分析和案例与图中信息关联性强，语言地道，句型灵活。</li>
              <li><strong>25-31:</strong> 内容十分丰富，分析和案例较好联系图中信息，语言准确，句型有变化。</li>
              <li><strong>17-24:</strong> 内容比较丰富，基本涵盖相关信息，关联性尚可，语言和句型表现一般。</li>
              <li><strong>9-16:</strong> 内容较为空洞，不能充分覆盖图中信息，关联性不强，语言错误较多。</li>
              <li><strong>1-8:</strong> 内容贫乏，抓不住图表关联信息，语言支离破碎，句型不完整。</li>
            </ol>
          </div>
        </details>
      </section>
    `;
  }

  const icc2025TrueFalseOptions = [
    ["A", "TRUE"],
    ["B", "FALSE"],
  ];

  const icc2025TrueFalseQuestions = [
    { no: 1, prompt: "Communication is not a panacea for all intercultural difficulties.", answer: "A" },
    { no: 2, prompt: "The message you send is the message received.", answer: "B" },
    { no: 3, prompt: "The elements that compose culture are worldview, religion, history, values, social organization, and language.", answer: "A" },
    { no: 4, prompt: "Even though you view the world through a subjective lens, your perception is accurate.", answer: "B" },
    { no: 5, prompt: "Culture and communication are so separate that we cannot think that culture is communication or communication is culture.", answer: "B" },
    { no: 6, prompt: "In conflict situations, collectivistic cultures focus on other-face and mutual face, while individualistic cultures focus on self-face.", answer: "A" },
    { no: 7, prompt: "Cyberidentity and fantasy identity belong to our social identity.", answer: "A" },
    { no: 8, prompt: "Nonverbal messages are always unintentional.", answer: "B" },
    { no: 9, prompt: "Nonverbal messages cannot work alone.", answer: "B" },
    { no: 10, prompt: "Cultures differ in their perception and use of personal space, seating, and furniture arrangement.", answer: "A" },
  ].map((question) => ({ ...question, options: icc2025TrueFalseOptions }));

  const icc2025MultipleChoiceQuestions = [
    {
      no: 11,
      prompt: "Only two generations of the parents and their unmarried children is the characteristic of ____.",
      answer: "D",
      options: [
        ["A", "the family of orientation"],
        ["B", "the family of marriage"],
        ["C", "the extended family"],
        ["D", "the nuclear family"],
      ],
    },
    {
      no: 12,
      prompt: "____ are the outward manifestations of our internalized beliefs and values.",
      answer: "A",
      options: [
        ["A", "Behaviours"],
        ["B", "Languages"],
        ["C", "Perceptions"],
        ["D", "Identities"],
      ],
    },
    {
      no: 13,
      prompt: "____ includes all oral cues in the stream of spoken utterances except the words themselves.",
      answer: "A",
      options: [
        ["A", "Paralanguage"],
        ["B", "Gesture"],
        ["C", "Scent"],
        ["D", "Morphology"],
      ],
    },
    {
      no: 14,
      prompt: "____ are represented by the many groups you belong to, such as racial, ethnic, occupational, age, hometown and numerous others.",
      answer: "B",
      options: [
        ["A", "Personal identities"],
        ["B", "Social identities"],
        ["C", "Human identities"],
        ["D", "Cultural identities"],
      ],
    },
    {
      no: 15,
      prompt: "____ involves all those nonverbal stimuli in a communication setting that are generated by both the source and his or her use of the environment and that have potential message value for the source and receiver.",
      answer: "C",
      options: [
        ["A", "Verbal Communication"],
        ["B", "Gesture"],
        ["C", "Nonverbal Communication"],
        ["D", "Facework"],
      ],
    },
    {
      no: 16,
      prompt: "Intercultural cooperation faces the following ecological concerns EXCEPT ____.",
      answer: "C",
      options: [
        ["A", "raw materials"],
        ["B", "water shortage"],
        ["C", "aging population"],
        ["D", "climate change"],
      ],
    },
    {
      no: 17,
      prompt: "Which of the following statements is NOT true about the features of Communication?",
      answer: "C",
      options: [
        ["A", "Communication is a dynamic process."],
        ["B", "Communication is symbolic."],
        ["C", "Communication has nothing to do with contexts."],
        ["D", "Communication cannot be reversed."],
      ],
    },
    {
      no: 18,
      prompt: "Which of the following statements is NOT true about the features of Culture?",
      answer: "D",
      options: [
        ["A", "Culture is shared."],
        ["B", "Culture is based on symbols."],
        ["C", "Culture is transmitted from generation to generation."],
        ["D", "Culture is innate."],
      ],
    },
    {
      no: 19,
      prompt: "The three most influential social organizations are ____.",
      answer: "A",
      options: [
        ["A", "family, state, religion"],
        ["B", "family, school, state"],
        ["C", "school, state, religion"],
        ["D", "state, religion, UN"],
      ],
    },
    {
      no: 20,
      prompt: "Which of the following is NOT the function of the family?",
      answer: "B",
      options: [
        ["A", "reproductive function"],
        ["B", "disciplinary function"],
        ["C", "identity function"],
        ["D", "language acquisition function"],
      ],
    },
    {
      no: 21,
      prompt: "Which of the following is NOT a characteristic of language?",
      answer: "C",
      options: [
        ["A", "Language is symbolic."],
        ["B", "Language is arbitrary."],
        ["C", "Language is static and unchanging."],
        ["D", "Language can evoke both denotative and connotative meanings."],
      ],
    },
    {
      no: 22,
      prompt: "Which of the following best describes monumentalism in the context of cultural identity?",
      answer: "D",
      options: [
        ["A", "A cultural orientation that values flexibility and humility."],
        ["B", "A cultural orientation that focuses on individual achievements."],
        ["C", "A cultural orientation that promotes universal treatment of all individuals."],
        ["D", "A cultural orientation that emphasizes unchangeable identities and strong values."],
      ],
    },
    {
      no: 23,
      prompt: "In the context of individualism, what does the term privacy refer to?",
      answer: "A",
      options: [
        ["A", "The right to be free from unwanted attention or intrusion."],
        ["B", "The need for constant social interaction."],
        ["C", "The importance of sharing personal information."],
        ["D", "The preference for group decision-making."],
      ],
    },
    {
      no: 24,
      prompt: "Which of the following scenarios is an example of an avowed identity?",
      answer: "A",
      options: [
        ["A", "A person identifies themselves as a feminist due to their personal beliefs."],
        ["B", "A person is recognized as a member of a particular race due to their physical appearance."],
        ["C", "A person is considered part of a social class based on their family's wealth."],
        ["D", "A person is identified by their nationality due to their place of birth."],
      ],
    },
    {
      no: 25,
      prompt: "Which of the following best describes the concept of denotative meaning in language?",
      answer: "B",
      options: [
        ["A", "The emotional or personal meaning of a word."],
        ["B", "The literal or agreed-upon meaning of a word."],
        ["C", "The historical origin of a word."],
        ["D", "The cultural significance of a word."],
      ],
    },
    {
      no: 26,
      prompt: "In the context of cultural identity, what does the term identity achievement refer to?",
      answer: "C",
      options: [
        ["A", "The initial stage of identity development"],
        ["B", "The stage where individuals reject their cultural heritage"],
        ["C", "The stage where individuals have a clear understanding of their cultural identity"],
        ["D", "The stage where individuals conform to the dominant culture"],
      ],
    },
    {
      no: 27,
      prompt: "Which of the following is NOT a category of identity discussed in the course?",
      answer: "D",
      options: [
        ["A", "Human identity"],
        ["B", "Social identity"],
        ["C", "Cyberidentity"],
        ["D", "Biological identity"],
      ],
    },
    {
      no: 28,
      prompt: "According to Kohls' list of American values, which of the following is NOT considered a dominant American cultural value?",
      answer: "A",
      options: [
        ["A", "Implicitness and indirectness"],
        ["B", "Self-Help"],
        ["C", "Materialism/Acquisitiveness"],
        ["D", "Individualism/Privacy"],
      ],
    },
    {
      no: 29,
      prompt: "Which of the following best describes the concept of \"cultural rules\" in nonverbal communication?",
      answer: "D",
      options: [
        ["A", "Rules for using technology in communication"],
        ["B", "Laws that govern the use of language"],
        ["C", "Guidelines for verbal communication"],
        ["D", "Unwritten rules that dictate how to use nonverbal behaviors"],
      ],
    },
    {
      no: 30,
      prompt: "Which of the following is NOT a recommendation for improving intercultural communication competence?",
      answer: "C",
      options: [
        ["A", "Learning a second language"],
        ["B", "Being mindful of cultural differences"],
        ["C", "Avoiding nonverbal communication"],
        ["D", "Being aware of conversational taboos"],
      ],
    },
    {
      no: 31,
      prompt: "We can describe identity as the following EXCEPT ____.",
      answer: "B",
      options: [
        ["A", "abstract"],
        ["B", "static"],
        ["C", "complex"],
        ["D", "multiple"],
      ],
    },
    {
      no: 32,
      prompt: "What does the term \"tight cultures\" refer to in Gelfand's research?",
      answer: "A",
      options: [
        ["A", "Cultures with strong social norms and little tolerance for deviation"],
        ["B", "Cultures with weak social norms and high tolerance for deviation"],
        ["C", "Cultures with high levels of individualism"],
        ["D", "Cultures with low levels of uncertainty avoidance"],
      ],
    },
    {
      no: 33,
      prompt: "Which of the following is NOT an example of the function of nonverbal communication of conveying internal states?",
      answer: "A",
      options: [
        ["A", "You share your deep secret with your friend."],
        ["B", "A mother sings a lullaby to her baby to sleep in a gentle tone."],
        ["C", "The lovers frequently exchange intimate glances at each other."],
        ["D", "You keep a distance of one meter from someone you just get to know"],
      ],
    },
    {
      no: 34,
      prompt: "Which of the following is NOT an example of how your actions, unintentionally, can send messages to others?",
      answer: "D",
      options: [
        ["A", "Frowning when the sun is in your eyes may make someone mistakenly believe that you are angry"],
        ["B", "Looking upset after receiving a phone call could make a person approaching you think that you are unhappy to see him or her"],
        ["C", "Touching someone's hand for an extended time could cause that person to think that you are flirting when that was not your intent"],
        ["D", "Observing a friend approaching, you offer a broad smile as part of your greeting."],
      ],
    },
    {
      no: 35,
      prompt: "Which of the following is NOT an obstacle to effective intercultural communication?",
      answer: "B",
      options: [
        ["A", "Stereotyping"],
        ["B", "Social protocols"],
        ["C", "Prejudice"],
        ["D", "Power"],
      ],
    },
  ];

  const icc2025CaseScenario = [
    {
      title: "Meeting Opening",
      items: [
        "The representative of Company A pushes a printed contract across the table. \"Here's our proposed agreement, including deliverables, timelines, and penalties for delays. Let's go through it point by point.\" The lead representative of Company B nods politely, takes the document, but does not open it immediately. \"Thank you for your thorough preparation. We will review this carefully.\"",
        "A manager of Company A asks the Japanese colleagues directly, \"Can you confirm acceptance by next Friday? We need to move quickly.\" Other members remain quiet, occasionally exchanging brief comments in Japanese. When pressed on specifics, they respond, \"This may require further discussion.\""
      ],
    },
    {
      title: "Discussion Phase",
      items: [
        "An engineer of Company A points to a clause, \"If testing is delayed beyond the deadline, Section 5.2 states a penalty. Do you agree?\" The Japanese side keeps silent. After a pause, the engineer rephrases, \"Is there a problem with this? We need a clear answer.\"",
        "The manager of Company B smiles and shifts focus, \"Your technical expertise is impressive. We value a strong, lasting partnership.\" After the meeting, the Japanese team leader quietly tells his assistant, \"We must consult with executive before proceeding.\""
      ],
    },
    {
      title: "Follow-Up Reactions",
      items: [
        "Company A's internal email: \"The Japanese side won't commit to anything. Are they avoiding the issues?\"",
        "Company B's internal memo: \"The Americans demand instant decisions, but unilateral commitments could disrupt harmony. Suggest informal discussions first.\""
      ],
    },
  ];

  const icc2025CaseQuestions = [
    {
      no: 36,
      score: "15 points",
      prompt: "How does Hall's theory explain the communication clash between the two teams? Provide two specific examples from the scenario that illustrate each culture's communication style.",
    },
    {
      no: 37,
      score: "25 points",
      prompt: "Using Hofstede's cultural dimensions, analyze why the Japanese team prioritizes group harmony and consensus over immediate decisions, while the American team expects clear, direct answers. (at least two relevant dimensions)",
    },
  ];

  function renderPastPaper2025CaseStudy() {
    return `
      <section class="paper-section writing-practice">
        <div class="paper-section-head">
          <div>
            <h2>III. Case Study Analysis <small>40 points</small></h2>
            <p>Read the scenario and write your answers. The reference page gives scoring points rather than a full model essay.</p>
          </div>
          <span>Q36 15 + Q37 25</span>
        </div>
        <div class="grid grid-2">
          <div>
            <article class="practice-item">
              <div class="practice-head">
                <span class="practice-no">Scenario</span>
                <span class="practice-source">Company A / Company B</span>
              </div>
              <h3>Negotiation Between an American Software Company (Company A) and a Japanese Firm (Company B)</h3>
              ${icc2025CaseScenario.map((section) => `
                <h3>${escapeHtml(section.title)}</h3>
                ${paragraphs(section.items)}
              `).join("")}
              <p><small>注：扫描件 Meeting Opening 中一处公司称谓/语法明显排印不通，页面按案例上下文校正为 Company A 直接向日方确认。</small></p>
            </article>
          </div>
          <div>
            ${icc2025CaseQuestions.map((question) => `
              <article class="practice-item writing-box">
                <div class="practice-head">
                  <span class="practice-no">Q${question.no}</span>
                  <span class="practice-source">${escapeHtml(question.score)}</span>
                </div>
                <p>${escapeHtml(question.prompt)}</p>
                <textarea data-writing-input="icc-2025-case-${question.no}" rows="9" placeholder="在这里整理英文答题要点。"></textarea>
                <div class="practice-controls">
                  <span class="word-counter" data-writing-words="icc-2025-case-${question.no}">0 words</span>
                </div>
              </article>
            `).join("")}
          </div>
        </div>
        <details>
          <summary>查看参考答案页评分要点</summary>
          <div class="score-rubric">
            <h3>36. High context vs. low context communication</h3>
            <ul>
              <li><strong>对高/低语境的阐释 10 分：</strong>American team 偏 low-context，依靠明确文本、合同条款、直接提问和清楚期限；Japanese team 偏 high-context，依靠关系、语境、沉默、委婉表达和会后内部协商。</li>
              <li><strong>举例 5 分：</strong>可写 Company A 逐条审合同、要求 next Friday 确认、追问 clear answer；Company B 点头、暂不打开合同、说 further discussion、保持沉默、建议 informal discussions。</li>
            </ul>
            <h3>37. Hofstede cultural dimensions</h3>
            <ul>
              <li><strong>High Uncertainty Avoidance vs. Low Uncertainty Avoidance：</strong>日方避免仓促承诺和不确定风险，需要进一步审查、咨询高层；美方更能接受快速推进和明确时间表。</li>
              <li><strong>Individualism vs. Collectivism：</strong>日方重视集体和谐、共识和长期关系，避免单方面承诺破坏 harmony；美方更强调任务、个人/团队责任和直接决策。</li>
              <li><strong>High Power Distance vs. Low Power Distance：</strong>日方倾向尊重等级和正式授权，需要 consult with executive；美方期待会议代表能当场给出清晰回应。</li>
              <li><strong>分值：</strong>每个知识点阐释 10 分，至少回答两个知识点，共 20 分；语言组织和语法 5 分。</li>
            </ul>
          </div>
        </details>
      </section>
    `;
  }

  function renderPastPaper2025() {
    return `
      <div class="reply past-paper">
        <section class="tldr">
          <h2>2025 年《跨文化交流》期末试卷自测</h2>
          <p>根据 /root/final-review-site/reference/跨文化交际/b12abb40f2b8be5b341e665c8306e1e4_2858693535548410278_m_25年跨文化交流期末考试卷.pdf 整理。扫描版无文字层，题目逐页核对；判断题、选择题可直接点选自测，案例分析保留评分要点。</p>
        </section>
        <div class="source-meta">
          <span>南京邮电大学 2024-2025 学年第二学期</span>
          <span>研究生英语《跨文化交流》期末试卷</span>
          <span>2025.5</span>
        </div>

        <section class="paper-section">
          <div class="paper-section-head">
            <div>
              <h2>I. True or False Questions <small>10 points</small></h2>
              <p>Mark A for TRUE and B for FALSE according to the textbook.</p>
            </div>
            <span>1 point each</span>
          </div>
          <div class="quiz-list">
            ${icc2025TrueFalseQuestions.map((question) => renderMultipleChoiceQuestion(question, "icc2025-true-false", "icc2025-tf", { fixedOptions: true })).join("")}
          </div>
          ${renderQuizControls("icc2025-true-false")}
          <details>
            <summary>当前参考答案</summary>
            <p data-quiz-answer-list="icc2025-true-false"></p>
          </details>
        </section>

        <section class="paper-section">
          <div class="paper-section-head">
            <div>
              <h2>II. Multiple Choice <small>50 points</small></h2>
              <p>Choose the best answer from the four choices to each question according to what you have learned in the course.</p>
            </div>
            <span>2 points each</span>
          </div>
          <div class="quiz-list">
            ${icc2025MultipleChoiceQuestions.map((question) => renderMultipleChoiceQuestion(question, "icc2025-multiple", "icc2025-mc")).join("")}
          </div>
          ${renderQuizControls("icc2025-multiple")}
          <details>
            <summary>当前参考答案</summary>
            <p data-quiz-answer-list="icc2025-multiple"></p>
          </details>
        </section>

        ${renderPastPaper2025CaseStudy()}
      </div>
    `;
  }

  function renderPastPaper2023() {
    const definitionAnswers = icc2023DefinitionQuestions.map((question) => `${question.no}-${question.answer}`).join(" ");

    return `
      <div class="reply past-paper">
        <section class="tldr">
          <h2>2023 年《跨文化交际》期末试卷自测</h2>
          <p>根据 /root/final-review-site/reference/跨文化交际/2023试卷.pdf 整理。题目保留英文原题，答案按最后一页参考答案校准；定义匹配和选择题可直接点选自测。</p>
        </section>
        <div class="source-meta">
          <span>南京邮电大学 2022-2023 学年第二学期</span>
          <span>研究生英语《跨文化交际》期末试卷</span>
          <span>2023.5</span>
        </div>

        <section class="paper-section">
          <div class="paper-section-head">
            <div>
              <h2>I. Definition <small>20 points</small></h2>
              <p>Choose the concepts from the box and match them with their definitions.</p>
            </div>
            <span>2 points each</span>
          </div>
          <div class="concept-bank">
            ${icc2023DefinitionOptions.map((option) => `<span><strong>${escapeHtml(option.value)}</strong>${escapeHtml(option.text)}</span>`).join("")}
          </div>
          <div class="quiz-list definition-list">
            ${icc2023DefinitionQuestions.map(renderDefinitionQuestion).join("")}
          </div>
          ${renderQuizControls("icc2023-definitions")}
          <details>
            <summary>当前参考答案</summary>
            <p data-quiz-answer-list="icc2023-definitions">${escapeHtml(definitionAnswers)}</p>
          </details>
        </section>

        <section class="paper-section">
          <div class="paper-section-head">
            <div>
              <h2>II. Multiple Choice <small>40 points</small></h2>
              <p>Choose the single best answer from the four choices for each question.</p>
            </div>
            <span>2 points each</span>
          </div>
          <div class="quiz-list">
            ${icc2023MultipleChoiceQuestions.map(renderMultipleChoiceQuestion).join("")}
          </div>
          ${renderQuizControls("icc2023-multiple")}
          <details>
            <summary>当前参考答案</summary>
            <p data-quiz-answer-list="icc2023-multiple"></p>
          </details>
        </section>

        ${renderWritingPractice()}
      </div>
    `;
  }

  const caseAnalysisEntries = [
    {
      slug: "case-age-status",
      title: "Case Study 1 Age and Status",
      lead: "一家数据处理公司中，年轻法裔加拿大员工和年长中国女同事因汇报安排、资料共享和地位理解发生冲突。",
      concepts: ["power distance", "age and status", "face", "high-context / low-context"],
      sections: [
        {
          title: "案例情境",
          items: [
            "年轻法裔加拿大男员工与一位持特殊签证、来自中国的年长女同事原本合作良好。",
            "新产品需要去首都向议员介绍，但中国女同事拒绝与年轻同事同行，也不愿共享关键数据。",
            "经理直接询问原因无果，后来先说明自己作为经理和公司发言人的困境，她才解释：自己年龄更长、资历更深，却要让年轻同事展示她辛苦完成的材料，这会降低自己的地位。"
          ]
        },
        {
          title: "讨论问题",
          items: [
            "What caused the conflict?",
            "If you were the general manager, what would you do to resolve it?"
          ]
        },
        {
          title: "矛盾冲突",
          items: [
            "年轻加拿大员工把双方看作平等合作伙伴，认为谁做报告主要取决于工作效率和个人能力。",
            "年长中国女同事把年龄、资历和实际贡献视为地位的重要来源，担心由年轻同事汇报会使自己丢面子、降低威信。",
            "直接追问原因没有得到清楚答复，双方误解进一步加深。"
          ]
        },
        {
          title: "原因分析",
          items: [
            "权力距离差异：加拿大更偏低权力距离，强调平等、能力和个人信用；中国文化更重年龄、经验、资历和等级差异。",
            "语境差异：加拿大偏低语境，期待明确说出原因；中国偏高语境，更倾向委婉回避、通过关系和处境表达不满。",
            "面子因素：在公开场合由年轻同事展示自己主要劳动成果，会被理解为地位和贡献没有得到承认。"
          ]
        },
        {
          title: "文化沟通 / 解决建议",
          items: [
            "经理应正式认可中国女同事的工作成果，让团队和外部听众知道关键数据和材料由她完成。",
            "可重新设计汇报角色，例如由她负责关键数据部分，年轻同事负责其他展示，避免贡献被遮蔽。",
            "跨文化合作中，涉及年龄、地位和资历时，应先用合适方式协商角色与署名，避免把本文化的平等观或等级观当作唯一标准。"
          ]
        }
      ],
      memory: "本案用权力距离、高低语境和面子解释：同一汇报安排，在一种文化中是效率分工，在另一种文化中可能是地位受损。"
    },
    {
      slug: "case-public-praise-japan",
      title: "Case Study 2 Praising Japanese in Public Workplaces",
      lead: "美国经理当众高度表扬日本员工，本意是肯定个人表现，却使员工尴尬沉默并离开。",
      concepts: ["individualism / collectivism", "facework", "high-context / low-context", "public praise"],
      sections: [
        {
          title: "案例情境",
          items: [
            "美国经理 Jones 在装配线前当众称赞日本员工 Sugimoto 工作出色，并希望其他员工以他为榜样。",
            "Sugimoto 表现得不安，只说自己只是做本职工作，随后沉默、脸红、点头并继续工作。",
            "Jones 期待对方说 thank you；Sugimoto 请求离开五分钟，Jones 因此认为日本员工对表扬反应奇怪且不礼貌。"
          ]
        },
        {
          title: "讨论问题",
          items: [
            "Why was the conversation not pleasant?",
            "Why did they react differently toward public praise?",
            "If you were Sugimoto, would you accept public praise?",
            "If you were Jones, how would you handle the situation more appropriately?"
          ]
        },
        {
          title: "矛盾冲突",
          items: [
            "美国经理把公开表扬理解为对个人能力和工作成果的认可。",
            "日本员工把当众突出个人看作把自己从集体中分离出来，可能破坏群体和谐并使自己失去面子。",
            "Sugimoto 用沉默和离开表达不适，Jones 却按低语境标准期待直接回应。"
          ]
        },
        {
          title: "原因分析",
          items: [
            "美国文化高度强调个人主义、个人成绩、竞争和自我价值实现；被上司公开赞扬通常会感到自豪，并以 thank you 回应。",
            "日本文化更强调集体主义、团队协作和群体和谐；当众单独表扬个人可能让被表扬者在同事面前尴尬。",
            "日本偏高语境，倾向用沉默、低头、离开等非语言方式表达不安；美国偏低语境，更期待直接语言反馈。"
          ]
        },
        {
          title: "文化沟通 / 解决建议",
          items: [
            "Jones 更合适的做法是私下表扬 Sugimoto，或在公开场合表扬整个团队。",
            "如果必须公开表扬，应强调其贡献如何帮助团队，而不是把他塑造成唯一优秀个体。",
            "Sugimoto 也可以理解美国式公开表扬的积极意图，并用简短礼貌话语降低误解。"
          ]
        }
      ],
      memory: "本案核心不是“表扬好不好”，而是个人成就与集体和谐在不同文化中的优先级不同。"
    },
    {
      slug: "case-british-manager-thailand",
      title: "Case Study 3 A British General Manager in Thailand",
      lead: "英国总经理到泰国上任后坚持要小型车，却被泰国团队安排奔驰，因为领导用车牵动整个组织等级秩序。",
      concepts: ["power distance", "hierarchy", "status symbol", "organizational culture"],
      sections: [
        {
          title: "案例情境",
          items: [
            "英国总经理到泰国后拒绝使用前任的车，要求 Suzuki 或 Mini，理由是曼谷交通拥堵，小车更方便。",
            "泰国财务经理多次表示奔驰很快能到，小车却要等很久；采购部门最后仍决定订奔驰。",
            "总经理在管理会议上追问原因，泰国管理团队解释：如果总经理都用小车，其他人几乎只能骑自行车上班。"
          ]
        },
        {
          title: "讨论问题",
          items: [
            "Why did the GM have difficulties in getting a Suzuki or Mini?",
            "Why did the management team say they could hardly come to work on bicycle?"
          ]
        },
        {
          title: "矛盾冲突",
          items: [
            "英国经理把车看作提升工作效率的工具，认为自己有自由选择适合交通状况的车。",
            "泰国团队把总经理用车看作组织等级和身份的象征；最高层用车降低，会迫使下级整体降级。",
            "同一选择在英国经理眼中是务实，在泰国员工眼中却可能破坏稳定等级秩序。"
          ]
        },
        {
          title: "原因分析",
          items: [
            "泰国文化等级观念较强，传统价值中包含家长制、权威崇拜和稳定等级关系。",
            "高权力距离文化中，领导者的身份象征维持组织秩序，也影响下级的地位安排。",
            "英国文化相对低权力距离，具体工作之外更强调平等、个人选择和工作效率。"
          ]
        },
        {
          title: "文化沟通 / 解决建议",
          items: [
            "跨国组织中的决策要同时考虑地理环境、当地文化习俗和主导成员的文化背景。",
            "如果英国经理坚持个人偏好，可能引发员工集体反感，甚至削弱其领导合法性。",
            "更稳妥的做法是先了解当地等级符号的含义，再通过解释、协商或折中方案处理效率与身份之间的冲突。"
          ]
        }
      ],
      memory: "本案说明，在高权力距离组织里，领导者的物品选择可能不只是个人选择，而是组织等级信号。"
    },
    {
      slug: "case-smile-apology",
      title: "Case Study 4 Understanding a Smile",
      lead: "中国经理 Jun Chen 道歉时保持微笑，美国经理 Peter 却认为这说明他毫无歉意。",
      concepts: ["nonverbal communication", "smile", "context", "emotion display rules"],
      sections: [
        {
          title: "案例情境",
          items: [
            "Jun Chen 工作失误给公司造成麻烦，于是到美国总经理 Peter 办公室正式道歉。",
            "Jun Chen 进门后一直微笑，反复表示非常抱歉并保证不会再犯。",
            "Peter 看到笑容后难以接受道歉，认为对方看起来一点也不抱歉；Jun Chen 则完全没想到微笑会被负面理解。"
          ]
        },
        {
          title: "讨论问题",
          items: [
            "Why did Jun Chen wear a smile when he made the apology?",
            "Was it reasonable that Peter became angry? Why?",
            "What different interpretations did they give to a smile in this situation?"
          ]
        },
        {
          title: "矛盾冲突",
          items: [
            "Jun Chen 用微笑显示礼貌、缓和气氛，并掩饰不安和歉疚。",
            "Peter 把道歉语境中的微笑理解为不尊重、不严肃和缺乏真诚。",
            "冲突来自同一非语言符号在不同文化和情境中的意义差异。"
          ]
        },
        {
          title: "原因分析",
          items: [
            "肢体语言包括手势、身势、服饰、音调、微笑、沉默、副语言、时间观和空间使用等，跨文化理解差异很常见。",
            "在中国语境中，微笑不仅表示快乐友好，也可能传达歉意、礼貌、求谅解，或用于遮掩尴尬不安。",
            "美国文化更强调真实、直接地表达情感，并期待内心情绪与外在表情一致；道歉时微笑会削弱诚意。"
          ]
        },
        {
          title: "文化沟通 / 解决建议",
          items: [
            "跨文化交际中不能想当然套用本文化对肢体语言的解释。",
            "涉及道歉、批评、拒绝等敏感语境时，应提前了解对方文化的礼仪禁忌和情绪表达规则。",
            "如果出现误解，双方应先澄清符号意图，而不是立即把对方行为判断为无礼或虚伪。"
          ]
        }
      ],
      memory: "微笑不是全球通用的“愉快”符号；在道歉语境中，它可能是礼貌，也可能被看成不真诚。"
    },
    {
      slug: "case-indirect-answer",
      title: "Case Study 5 Why Was His Answer Not Related to the Question?",
      lead: "美国人力资源经理询问中国员工五年职业规划，中国员工却绕开直接答案，引发双方抱怨。",
      concepts: ["high-context / low-context", "modesty", "face", "individualism / collectivism", "stereotype"],
      sections: [
        {
          title: "案例情境",
          items: [
            "Philips 照明公司美国人力资源经理看好一位中国员工，想了解他未来五年工作计划以及希望获得的职位。",
            "中国员工没有直接回答，而是长时间谈公司未来方向、晋升制度和自己目前的位置。",
            "美国经理感到困惑和恼火；中国员工则向贾经理抱怨美国人过于 aggressive。"
          ]
        },
        {
          title: "讨论问题",
          items: [
            "Why did the Chinese employee not give a clear and definite answer?",
            "What stereotype did the Chinese employee form toward Americans?",
            "How can Mr. Jia effectively solve the awkward situation?"
          ]
        },
        {
          title: "矛盾冲突",
          items: [
            "美国经理期待清晰、直接、自信地表达个人目标。",
            "中国员工认为直接说出职位目标会显得野心太强、高傲或唐突，也可能给自己留下丢面子的风险。",
            "双方都用本文化标准解释对方：美国经理觉得中国员工虚伪，中国员工觉得美国人直接、咄咄逼人。"
          ]
        },
        {
          title: "原因分析",
          items: [
            "中国文化重视谦逊、委婉、克制情绪和维护组织和谐，常把个人未来与公司未来联系起来表达。",
            "美国文化重视个人主义、独立、自我表达和职业发展目标；直接表达期望常被看作真诚和自信。",
            "中国人评价一个人往往更看他实际做了什么；美国经理则希望通过语言了解个人规划和发展意愿。"
          ]
        },
        {
          title: "文化沟通 / 解决建议",
          items: [
            "企业应提供东道国文化和跨文化交际培训，帮助外籍员工和本地员工理解彼此沟通方式。",
            "管理者应以宽容态度处理文化冲突，耐心沟通，而不是急于抱怨或否定。",
            "了解双方文化的中间人可以进行解释和调解；同时企业应建设包容性的共同企业文化，使员工找到共识。",
            "实际谈话中，可把问题设计得更具体、更给台阶，例如允许员工先谈团队目标，再逐步说明个人期待。"
          ]
        }
      ],
      memory: "本案体现高低语境、谦逊与直接表达的冲突：答非所问未必是不真诚，直接追问也未必是冒犯。"
    }
  ];

  const caseOriginalSources = {
    "case-age-status": {
      note: "按《跨文化交际案例分析(1).doc》原文分块排版，保留英文 Case description、Questions 以及文件中的中英文分析内容。",
      sections: [
        {
          title: "原始标题与导入",
          blocks: [`
            Case Study 1    Age and Status

            两位同事的矛盾使一家数据处理公司的总经理遇到了麻烦。一方是一位踌躇满志的法裔
            加拿大小伙子，另一方是一位有特许签证的年长的中国女性，而此前两人确实很好的合
            作伙伴
          `]
        },
        {
          title: "Case description",
          blocks: [`
            Case description:
               A manager in a data-processing company  was  having  difficulty  dealing
            with a conflict between a young, ambitious French Canadian male and his  co-
            worker, an older Chinese woman who was on a special  visa  from  China.  She
            had recently become uncooperative and had made it clear to the manager  that
            she would not be willing to travel to the  capital  with  her  co-worker  to
            hold discussion with legislators about a new product with great enthusiasm.
               When the manager asked her what the problem was, he  received  no  clear
            explanation. When he asked her co-worker, the young man had no  insights  to
            offer. The young French Canadian was  clearly  annoyed,  however,  that  the
            Chinese woman was refusing to  share  her  data  with  him.  That  meant  he
            couldn’t make the presentation to the legislators because she  had  all  the
            key data on her computer disks.
               The manager repeated questions to her but her “problem” got nowhere.  So
            he changed his approach. He began explaining his concerns, as manger and  as
            spokesperson for the company, about the upcoming meeting  with  legislators.
            His explanation about his position was  unemotional.  In  that  climate  she
            then felt she could explain her position. She revealed she  felt  that  that
            as an older, and to her mind, more senior person, she should not be sent  to
            the capitol with a  younger  employee  who  would  do  the  presentation  of
            material she had worked hard to develop. That  would  diminish  her  status,
            she felt. The general manger knew the root of his headache.
          `]
        },
        {
          title: "Questions",
          blocks: [`
            Questions:
            1.What do you think caused the conflict?
            2.What would you do to resolve the conflict if you were the general
            manager?
          `]
        },
        {
          title: "矛盾冲突",
          blocks: [`
            矛盾冲突
            这位年长的中国女士投入极大的热情和精力开发产品．却在最后的关键时刻拒绝与年轻
            的同事一同去向议员做推介：当经理和同事问其原因．她并未做任何明确的回答：而当
            经理改变策略，不再直接询问原因，而是迂回地讲起自己的困境时，她才道出自己的顾
            虑。在这位资深年长的中国女士看来，同一位比她年轻的同事一同去国会，并且由对方
            来做推介会影响到她的地位和威信，因此她无法同意：
          `]
        },
        {
          title: "原因分析",
          blocks: [`
            原因分析
            造成这一矛盾的文化因素有两方面．对地位、年龄的不同态度以及这种不同的表达方式
            。人对权力的认识因文化背景的不同而不同。根据霍夫斯特的调查研究，“低权力距离”
            国家的人强调个人的能力和信用，人与人之间权利和关系的平等，而．”高权力距离”国
            家，如中国、日本、纬国，强调地位、经验、年龄、资历等，人与人之间存在级别差距
            ；因此在这位年轻的加拿大人看来，在工作上他与这位女士是平等的合作伙伴，并没有
            地位的差别，自己也有能力参与项目并做最后报告。而在这位中国女士看来，以自己的
            年龄、资历、以及工作中的付出，与一个年轻人一同去国会，并且由对方来做报告对她
            来说是一件丢面子的事：
            另外．双方表达方式的不同也导致了矛盾的加深。根据霍尔的理论，加拿大是“低语境”
            国家，中国属于“高语境”文化国家，因此，当她的加拿大同事没有充分考虑到她所处的
            位置．而是直接问她原因时，这位中国女士采用了婉转回进的策略，没有直接说出自己
            的想法。而当经理改变方法迂回地说到自己的难处时，在这种语境下她才说出自己的顾
            虑。
          `, `
            Low  power  distance  "country  on  individual  ability  and   credit,   the
            relationship  between  rights  and  equality,  and."  high  power   distance
            "countries, such as China, Japan,  weft  kingdom,  emphasizing  the  status,
            experience, age, qualifications, existing gap between people level  。So  in
            the young Canadian  opinion,  in  the  work  he  and  the  woman  are  equal
            partners, and the difference  in  no  position,  also  has  the  ability  to
            participate in project and do the last report.  And  in  the  Chinese  women
            seem to, in their own age, qualifications, and work in pay, and a young  man
            together to congress, and by each other to do the report for her is  a  lose
            face:
            Outside. Both sides  expressing  way  different  led  to  the  deepening  of
            contradictions. According to the theory of hall,  Canada  is  "low  context"
            countries; China belongs to "high context" culture countries,
          `]
        },
        {
          title: "文化沟通",
          blocks: [`
            文化沟通
            当与不同文化背景、年龄、地位的人进行跨文化交流合作时，我们应当充分了解对方价
            值观中对这些个人因素的看法，决策前应采用合适的方式进行有效的协商，以便避免和
            化解因文化背景、价值观不同引起的矛盾。本案例中的经理在理解她的难处之后，可以
            在全公司内正式的公布这位女士的工作成果，给予高度的认可．同时在议会的报告中也
            应体现出其工作的重要意义，使之得，得到应有的重视。
          `, `
            This case of manager in understanding her difficulty after can  in  all  the
            company  released  within  the  formal  the  lady's  work,  to   give   high
            recognition. At the same time, in the parliamentary  report  should  reflect
            its importance, make, and get the attention it deserves.
          `]
        }
      ]
    },
    "case-public-praise-japan": {
      note: "按《跨文化交际案例分析(1).doc》原文分块排版，保留英文 Case description、Questions 以及文件中的中英文分析内容。",
      sections: [
        {
          title: "原始标题与导入",
          blocks: [`
            Case Study 2  Praising Japanese in Public Workplaces
            （在工作场所当众表扬日本人）
            琼斯先生（美国经理）
            当众表扬苏琦木拓（日本员工）工作做得很棒，本以为苏琦木拓会高兴的接受，却不料
            …..
          `]
        },
        {
          title: "Case description",
          blocks: [`
            Case description:
            American: Mr. Sugimoto, I have noticed that you are doing an  excellent  job
                    on the assembly line. I hope that the other workers notice  how  it
                    should be done.
            Japanese: (He is uneasy). Praise is not necessary. I am only doing  my  job.
                    (He hopes other Japanese workers do not hear.)
            American: You are the finesse, most  excellent,  dedicated  worker  we  have
                    ever had at the Jones Corporation.
            Japanese: (He blushed and nods his head several times, and keeps working.)
            American: Well, are you going to say “thank  you,”  Mr.  Sugimoto,  or  just
                    remain silent?
            Japanese: Excuse me, Mr. Jones … May I take leave for five minutes?
            American: Sure. (He is annoyed and watched Sugimoto exit). I  can’t  believe
                    how rude some Japanese workers are. They seem to  be  disturbed  by
                    praise and don’t answer you … just silent.
          `]
        },
        {
          title: "Questions",
          blocks: [`
            Questions:
                   Why was the conversation between Mr. Jones and Mr.  Sugimoto  not  so
               pleasant?
                   Why did they  have  such  different  reactions  towards  praising  in
               public workplaces?
                   If you were Mr. Sugimoto, would you accept praise from Mr.  Jones  in
               public workplaces?
                   If were Mr. Jones,  how  would  you  deal  with  the  situation  more
               appropriately?
            分析
          `]
        },
        {
          title: "矛盾冲突",
          blocks: [`
            矛盾冲突
            从对话中可以看出，琼斯先生认为在其他工人面前表扬苏奇木拓先生是对他工作的肯定
            ．也是对他个人的认可，苏奇木拓先生应该高兴地接受，不必遮遮掩掩不好意思，更不
            应该一句话不说就走了。但琼斯先生只是从美国强调个人的概念出发，却不熟悉日本人
            是如何看待个人和集体的关系，不知道如何向日本同事表示欣赏和赞扬．结果适得其反
            。琼斯先生和苏奇木拓交流失败的原因主要在于都对双方的文化了解不深，特别是双方
            对个人与集体关系的看法不同。
          `]
        },
        {
          title: "原因分析",
          blocks: [`
            原因分析
            在霍夫斯特的“个体取向与集体取向”53个国家和地区的列表中美国排在第一位．而日本
            排在22位，这意味着美国是非常强调个人主义的国家，而日本更注重的是集体。在美国
            鼓励个人创断，提倡竞争。个人会因业绩优异而受到上司表扬，这是一种典型的美国式
            做法。特别是如果在同事面前受到表扬，个人会觉得很自豪，因为成绩得到了上级的认
            可，同时也在同事中间表现了自己，实现了自我价值。在美国，受到表扬的人往往会说
            “谢谢”以作回答。The United States is very stressed individualism country,
            and Japan are more focused on their collective. In the United States
            encourages individual creative, advocating competition. Individual will and
            excellent performance by boss for praise, this is a kind of typical
            American practices. Especially if in front of my colleagues have been
            praised, people will feel very proud, because the results obtained superior
            approbate, and also in among colleagues showed, realize the ego value. In
            the United States, who praised will often say "thank you" to answer
            ".所以案例中的琼斯先生认为苏奇木拓先生也应该以这样的方式接受表扬。出乎他意抖
            的是，那位受到表扬的日本工人对他的表扬感到不安，没把表扬当回事：美国经理接着
            用更肯定的语气维续表扬他，如用英语中的最高级形容词“最优秀的”、“最杰出”、‘最勤
            奋”等等。使他更吃惊的是：他的这番赞扬之词使那位日本工人更1
            危脸，脸一下红了起来，只是理头干活．不再言语，仅仅点了两下头。对于这样的回答
            或拒绝表扬．美国经理实在是无法理解，也无法忍受这种沉默不语，于是直截了当地向
            他发问道：“你打算说声谢谢呢，还是要选择继续保待沉默呢？”责备他表现“没礼貌”。
          `, `
            The manager was unable to understand, also can't stand for the silent, then
            to straight out he hair asked: "are you going to say? Thank you, or to
            choose to continue the stay silent?" Blame him to show
            "rude".他所不知的是，日本是典型的集体主义国度，在日本个人要忠实于集体，集体内
            部的成员要团结一致不倾向于突出个人业绩．而是强调集体协作。所以当苏奇木拓先生
            在同事面前受到表扬时，非常地局促不安．只是低头干自己的事情，甚至要求要离开五
            分钟，没有正面给琼斯先生任何答复．因为他觉得这样把他和所属的集体分离开了．使
            他在同事面前失去了面子。另一方面．美国经理由于对日本文化特点的无知，公开表扬
            不仅把那位日本工人弄得无言以答，而且会失去在其他日本工人对他的尊敬。Japan
            is typical of collective socialist country, in Japanese individual should
            be faithful to the collective, the members of the collective to internal
            unity don't tend to outstanding individual performance. But emphasize the
            collective cooperation. So when SuJiMu Mr Extension in front of my
            colleagues when praised very ill at ease. Just do their own things down,
            even want to leave five minutes, no positive for Mr Jones any reply.
            Because he felt that he and the subordinate to the collective isolates. To
            his in front of my colleagues lost face. On the other hand. The manager
            because of Japanese culture characteristics of ignorance, public praise not
            only the Japanese workers make could answer, and will lose in the other
            Japanese workers to his respect.
          `, `
            从对话中也可以看出苏奇木拓先生不接受当众表扬，却只是保持沉默，甚至要走开，没
            有把他的不满当众表达出来。这样的行为使得琼斯先生认为日本员工不礼貌。这一交际
            失致和日美两国交流方式不同有很大关系。根据霍尔（Hail
            ）的“高语境”和”低语境”理论，日本是典型的高语境国家，交流方式含蓄委婉，不会轻
            易在众人面前表达不满，会更多的依赖于非言语交流．"High context" and "low
            context" theory, Japan is typical high context countries, communication
            implicative tactful, not easily in the presence of all express discontent,
            will be more dependent on non-verbal
            communication.如苏奇木拓先生不作回答保持沉庆，只是干自己的工作，以此表示对当
            众表扬的不满。而美国属于”低语境”国家，习惯直接的语言交流方式，. And the
            United States belongs to "low context" countries, used to direct language
            communication当苏奇木拓先生显得不安时，球斯先生却说“你打算说谢谢呢，还是要选
            择沉默？”。当苏奇木拓先生要求离开时，琼斯先生就认为没有任何回答就离开是不礼貌
            的。
          `]
        },
        {
          title: "文化沟通",
          blocks: [`
            文化沟通
            双方应该对彼此的文化有所了解，应该清楚两种文化对个人的不同看法和不同的交流方
            式．不要总是从自己的出发点看问题。琼斯先生应该知道最好不要当众表扬某个日本人
            ，而是应该私下单独表扬，或者会开表扬某个集体或团队；要清楚日本人的交流方式比
            较委婉间接，为了集体的和谐他们通常不会在公开场合表示不满。而苏奇木拓先生也应
            该了解美国时个人的重视，公开表扬个人是对他能力的认可；美国人更喜欢直接的语言
            交流，有什么想法要说出来，而不是要保持沉默或是回避
          `, `
            Both sides should understand the culture for each  other,  should  be  clear
            that two kinds of culture on personal different views and different  way  of
            communication. Don't always look at problems from their starting  point.  Mr
            Jones should know better not praise in public a Japanese, but should  praise
            alone, or will open praise a collective or team; Want to be clear about  the
            Japanese way of communication more tactful indirectly,  to  the  harmony  of
            collective  they  usually  don't  publicly  expressed  dissatisfaction.  And
            SuJiMu Mr Should know  the  extension  of  the  individual  attention  when,
            public praise for his personal ability is  the  approval;  Americans  prefer
            direct language exchange, have what idea to say, but not  to  remain  silent
            or avoid
          `]
        }
      ]
    },
    "case-british-manager-thailand": {
      note: "按《跨文化交际案例分析(1).doc》原文分块排版，保留英文 Case description、Questions 以及文件中的中英文分析内容。",
      sections: [
        {
          title: "原始标题与导入",
          blocks: [`
            Case 3  A British General Manager in Thailand 英国总经理在泰国
            一位英国总经理来到泰国上任，到任之初，没想到使用什么样的车上班这个小问题给他
            带来了不小的烦恼…….
          `]
        },
        {
          title: "Case description",
          blocks: [`
            Case description:
               A British general manager upon arrival in Thailand refused to take his
            predecessor’s car. The Thai finance manager asked the new GM what type of
            Mercedes he would like, then, The GM asked for a Suzuki or a Mini, anything
            that could be handled easily in the congested traffic in Bangkok.
               Three weeks later the GM called the finance manger and asked about
            prospects for the delivery of his car. The Thai lost his reserve for a
            moment and exclaimed: “we can get you a new Mercedes by tomorrow, but
            Suzuki take much, much longer.” The GM asked him to see what he could do to
            speed up the process. After four weeks the GM asked to see the purchase
            order for the car. The purchasing department replied that, because it would
            take so long to get a small car, they had decided to order a Mercedes.
               The GM’s patience had run out. At the first management meeting he
            brought the issue up and asked for an explanation. Somewhat shyly, the
            predominantly Thai management team explained that they could hardly come to
            work on bicycle.
          `]
        },
        {
          title: "Questions",
          blocks: [`
            Questions:
                   Why did the GM have difficulties in getting a Suzuki or Mini?
                   Why did the management team say they could hardly come to work on
               bicycle?
          `]
        },
        {
          title: "原因分析",
          blocks: [`
            原因分析
            泰国是等级观念很强的国家．泰国传统文化价值观的核心，如家长制、权威索拜，等级
            观念等是人们日常行为所公认的准则，甚至是一种“生活方式”人们认为社会等级制度时
            人有好处．所以不会向社会等级制度挑战。泰国的社会生活强调等级观念，依赖于等级
            关系。而在公司等社会机构中，强调正式的组织结构，各个等级保持一定的稳定性。Th
            ailand is hierarchy strong country. Thailand traditional cultural values of
            the core, such as the patriarchal system, and the authority and worship,
            level is the concept of the people daily behavior of accepted standards, or
            even a "lifestyle" people think social hierarchy system people have good.
            So will not give in to the social hierarchy challenge. Thailand's emphasis
            on social life hierarchy, rely on hierarchy relationship. And in the
            company and other social organizations, emphasizes formal organization
            structure, each level maintain certain
            stability.因此，在本案例中，最后泰国职员的解释是，如果总经理的用车降低水准，
            公司所有职员的用车要整体降级，The general manager of the lower level fruit
            transport, the company all staff transport to the whole
            downgraded,最终有些职员必须要骑自行车上班，而这是他们不愿也无法做到的。在英国
            文化的价位观中，权力之间的距离很小．具体工作之外，人们之间是平等的，公司中的
            领导者用车是为了工作，为了提高的业绩，因此英国经理看来．交通工具的选用是为了
            提高工作效率．每个人都有选择的自由，自己选用什么样的车与公司其他人无关。In
            British culture on the price, the distance between the power is small. The
            specific work outside, between people is equal, the leader is in order to
            transport the work, in order to improve the performance, so Britain the
            manager looked. Traffic tools in order to improve the work efficiency is
            choose. Everyone has the freedom of choice, oneself choose what kind of car
            company has nothing to do with others.
          `]
        },
        {
          title: "文化沟通",
          blocks: [`
            文化沟通
            本案例中，如果英国经理坚持一意孤行，很容易引起泰国员工的集体反感，会有被架空
            的危险。在跨国组织中，遇到这种情况应从实际环境，即地理环境及当地文化习俗，占
            主导成员的文化背境出发，考虑大多数人的习惯和意见，做出不影响团队成员工作积极
            性和工作业绩的决策
          `]
        }
      ]
    },
    "case-smile-apology": {
      note: "按《跨文化交际案例分析(1).doc》原文分块排版，保留英文 Case description、Questions 以及文件中的中英文分析内容。",
      sections: [
        {
          title: "原始标题与导入",
          blocks: [`
            case 4
            怎样理解微笑？
               微笑是友好的表示，理应得到友好的回应。但是，向别人道歉时微笑是否显得适当？
            不同国家的人有不同的理解。处理不当，很可能带来意想不到的结果……
          `]
        },
        {
          title: "Case description",
          blocks: [`
            Case description:
              Peter is the general manager of an American company  in  China.  Recently,
            Jun Chen, one of the Chinese managers made a mistake  at  work  that  caused
            some difficulties that required a lot of effort to fix. Jun  Chen  was  very
            upset about what had happened, and came to Peter’s office to make  a  formal
            apology. Jun Chen went into Peter’s office  after  being  told  to,  smiling
            before he spoke. “Peter, I’ve been feeling  very  upset  about  the  trouble
            I’ve caused for the company. I’m here  to  apologize  for  my  mistake.  I’m
            terribly sorry about it and I want you to know that  it  will  never  happen
            again.” Jun Chen said, looking at Peter with the smile he had  been  wearing
            since he walked into the office. Peter found it hard to accept the  apology.
            He looked at Jun Chen, and asked, “are you sure?”
              “Yes, I’m very sorry and I promise this  won’t  happen  again,”  Jun  Chen
            said, with a smile even broader than before.
              “I’m sorry I just can’t take your apology. You don’t look sorry  at  all!”
            Peter said angrily.
              Jun Chen’s face turned very red. He did not in the least expect  Peter  to
            take it negatively. He was desperate to make  himself  understood.  “Peter,”
            he managed to smile again, “trust me, no one can feel any more sorry than  I
            do about it.”
              Peter was almost furious by now, “If you’re that sorry, how can you  still
            smile?”
          `]
        },
        {
          title: "Questions",
          blocks: [`
            Questions for discussion”
                  Why did Jun Chen wear a smile when he made the apology?
                  Do you think it is reasonable that Peter became so angry with Jun
               Chen? Why?
                  What are the different interpretations for a smile by the two in this
               situation?
          `]
        },
        {
          title: "矛盾冲突",
          blocks: [`
            矛盾冲突
            本案例所体现的矛盾非常明显，是由于胶体语言使用的文化差异而导致的误解。不同文
            化对于微笑的理解是不同的。尤其是在道歉这种特殊的语境下。陈军向彼得道谦时，尽
            力微笑着说话以显示礼貌和诚意，而对于彼得来说，这种情况下微笑是不尊重的表砚，
            也是缺乏诚意的表现。This case that embodies the very obvious  contradiction,
            is because the colloid use of language  cultural  differences  and  lead  to
            misunderstandings.  Different  culture  for  smile   of   understanding   is
            different. Especially in the context of this special and  apologize.  Howell
            way to Peter Williams, trying  to  smile  to  speak  to  show  courtesy  and
            sincerity, and for Peter speaking,  this  situation  is  not  respect  watch
            smile yanping, also is the lack of sincerity of the performance.
          `]
        },
        {
          title: "原因分析",
          blocks: [`
            原因分析
            当陈军表达完自己的歉意时，脸上的笑容使彼得怀提他是否真心感到抱歉，以至于看着
            他追问了一句：”你确定吗？”。此时陈军并未意识到他们之间的交流已经由于自己错误
            使用胶体语言而产生了问题，笑容更加明显地答到自己确实感到很抱歉并保证不会再犯
            同样的错误。彼得非常气愤的表示不能接受他的道歇，这是令陈军万万没有想到的．彼
            得的反应也让他颇为不解，只能急忙为自己辩解．但仍不忘保持脸上的微笑，可想而知
            ．陈军的行为非但不能消除误解．取得彼得的访解，反而进一步火上浇油，激怒了彼得
            。
            在跨文化交流中，对肢体语言使用和理解的差异往往会导致许多问翅。肢体语言包括手
            势，身势．服饰．音调高低，微笑，沉默，副语言，对时间的不同观念及空间的使用等
            。笑容一般传达的是愉悦和友好的感情，可以表示欢迎、原谅、赞同、没有敌意等等。
            在此案例中，对于中国人陈军来说，微笑不仅仅只是快乐和友好的表示，也传递道歉与
            谅解的信息。同时由于中国人习惯用面部来遮掩感情，陈军也有借微笑掩饰自己的不安
            和歉疚的习惯。而对于美国人，这种做法并不能被接受。微笑削弱了道歉的诚意．美国
            人强调真实直接的表达情感，内心感情与外在表砚的统一。所以他们认为当一个人内心
            感到愧疚而致歉时，是不可能面带笑容的．否则只能说明道歉的真诚性值得怀疑。In
            cross-cultural communication, of body language use and understand the
            differences often led to many asked wings. Body language including
            gestures, body movements. Dress. Tone height, smiling, silent, vice
            language, about the time of conception and the use of space, etc. General
            communicate is cheerful smile and friendly affection, can say welcome,
            forgive, agree with, no hostile, and so on. In this case, to the Chinese
            for howell, smile not just happy and friendly, and said the information
            transfer apologize and understanding. At the same time because the Chinese
            used to face to cover feelings, howell also have borrow smile hide his
            agitation and the habit of guilt. For an American, this kind of practice
            and cannot be accepted. Smile weaken the apology of sincerity. American
            emphasis on real direct express feelings, emotions and external table
            inkstone unity. So they think that when a person feel guilty when excuse,
            is impossible to smiling. Otherwise can explain the sincere apology sexual
            suspect.
            There's an old Chinese saying "stretched out his hand and not dozen smiling
            face,
          `]
        },
        {
          title: "文化沟通",
          blocks: [`
            文化沟通
            要避免跨文化交际中产生由胶体语言使用不当而造成交流上的障碍和误解，解决本案例
            中出现的类似问题，必须提前了解对方国家的文化，了解同样的肢体语言在对方国家中
            是否有着同样的意义．尤其是对方文化中涉及礼节礼仪的方面有何禁忌和特别之处。切
            不能想当然的套用自己文化中肢体语言的含义，否则就可能出现本案例中得尴尬情况。
          `]
        }
      ]
    },
    "case-indirect-answer": {
      note: "按《跨文化交际案例分析(1).doc》原文分块排版，保留英文 Case description、Questions 以及文件中的中英文分析内容。",
      sections: [
        {
          title: "原始标题与导入",
          blocks: [`
            Case 5 Why Was His Answer Not Related to the Question?
            为何他答非所问？
               飞利浦照明公司的一位美国经理和一位颇具发展潜力的中国员工谈话，但这位中国员
            工总是答非所问，美国经理甚是疑惑……
          `]
        },
        {
          title: "Case description",
          blocks: [`
            Case description:
              An American manager  of  human  resource  in  Philips  lightening  company
            talked with a Chinese employee with great potential.  The  American  manager
            wanted to know the development design and the position  the  employee  wants
            to get in the company. But the Chinese employee did not answer the  question
            directly; instead he only  talked  about  the  company’s  future  direction,
            promotion system and his current position. He talked for a  long  time,  but
            did not give a definite and direct  answer.  The  manager  was  puzzled  and
            annoyed, because the same situation has occurred several times,  Later,  the
            manager complained to another human  resource  manager,  Mr.  Jia,  “I  only
            wanted to know the employee’s working plan in  the  next  5  years  and  the
            position he wants to get in the company,  but  why  I  cannot  get  a  clear
            answer?”. The Chinese  employee  also  complained  to  Mr.  Jia.,  “Why  are
            Americans so aggressive?” As the human resource manager in  a  multinational
            company, Mr. Jia knows that  a  different  manner  in  communication  brings
            about misunderstandings. So he did best to explain to the two sides, but  it
            is not easy to reduce the obstacle between them.
          `]
        },
        {
          title: "Question for discussion",
          blocks: [`
            Question for discussion:
                  Why did the Chinese employee not give a clear and definite answer?
          `]
        },
        {
          title: "原文答题段落",
          blocks: [`
            按照中国人的传统心理，这样的回答违反了中国人一向谦逊的心理习惯，太直接反而暴
            露出自己很有野心并高傲自大的缺陷，而谦虚可以给自己留有后路。尽管这位中国员工
            可能心里对未来有着宏伟的蓝图．但是他所处的文化背景主张克制情绪和情感。因此他
            在回答美国上司的问题时，没有直接说出自己的想法，而是谈了很多与公司未来发展有
            关的事，在他看来自己的做法是完全符合社会规范的，是谦虚的表现。According   to
            the traditional psychology of the  Chinese,  such  an  answer  violates  the
            Chinese people's habit of being humble. Being too  direct  will  reveal  the
            flaws of being very ambitious and arrogant, and being  humble  can  leave  a
            way out for  oneself.  Although  the  Chinese  employee  may  have  a  grand
            blueprint for the future. But his cultural  background  advocates  restraint
            of emotions and emotions. Therefore, when he answered the  question  of  the
            American boss, he did not directly express his thoughts. Instead, he  talked
            about a lot of things related to the future development of the  company.  In
            his opinion, his approach is completely in line with social norms and  is  a
            manifestation of humility.
          `, `
                  What stereotype did the Chinese employee from towards American?
            Chinese employees think Americans are too direct, outspoken and aggressive.
                  How can Mr. Jia effectively solve the awkward situation?
          `]
        },
        {
          title: "矛盾冲突",
          blocks: [`
            矛盾冲突

            这是一个体现东西方人际交流方式差异的案例。在这个案例中，文化冲突体现在：来自
            美国的人力资源经理看好一个中国雇员，因此和该雇员谈话，想知道他对自己的职业发
            展规划以及期望得到什么职位。而令他不解和恼怒的是，该雇员避而不谈该回答的问题
            却大谈公司的未来发展、晋升和他目前的职位。结果是两人都在背后互相抱怨，美国人
            认为中国雇员太虚伪，而中国雇员也认为美国人太直接、坦率、咄咄通人。Americans
            believe that Chinese employees too hypocritical, and Chinese employees  also
            think Americans too direct, frankly, our very aggressive.
          `]
        },
        {
          title: "原因分析",
          blocks: [`
            原因分析
            该案例中的一方是美国人，而那位员工是中国人。产生这样糟糕结果的一个主要原因是
            中美两国在人际交流方式上，具体来说是在回答问题的方式上，存在巨大差异，而当事
            双方却并没意识到这一点。这种文化差异体现在中国文化注重维护群体和谐的人际交流
            环境，而美国丈化则注重创造一个强调坚持个性的人际交流环境。
            如果这位中国员工从正面直接回答了人力资源经理的问题。比如．中国员工回答：”…
            …
            想在五年之内做到营销部经理的职位。”按照中国人的传统心理，这样的回答违反了中国
            人一向谦应、委婉的心理习惯，太直接反而暴露出自己很有野心并高傲自大的缺陷，而
            谦虚可以给自己留有后路，万一做不到那个理想的位子，也不至于丢面子．被人笑话。
            尽于这位中国员工可能心里对未来有着宏伟的蓝图．但是他所处的文化背景主张克制情
            绪和情感。因此他在回答美国上司的问题时，没有直接说出自己的想法．而是谈了很多
            与公司未来发展有关的事，在他看来自己的做法是完全符合社会规范的，是谦虚的表砚
            ，并且认为将自己的未来与公司的未来紧密相连有利于保持组织的和谐。这在中国人看
            来是再正常不过的了，直截了当地说出自己的薪水目标或是职位目标反而会被认为是具
            有野心的表砚。此外，中国人评价一个人，往往是清他究竟做了什么，而不是看他说了
            什么。The case of the party is American, and the staff is Chinese. Have
            this bad results of one of the main reasons is that China and the United
            States on the way in interpersonal communications, specifically is the way
            to answer questions, there are large differences, and both parties but
            didn't realize this. These cultural differences reflected in Chinese
            culture pays attention to maintenance group harmonious interpersonal
            communication environment, and the United States the cultural focuses on
            creating a it puts emphasis on the individual character of interpersonal
            communication environment.
          `, `
            If the Chinese employees directly from the  front  of  the  human  resources
            manager answered  the  question.  For  example.  Chinese  employees  answer:
            "...... think in five years do the Marketing Department  manager  position."
            According to Chinese traditional psychological,  such  answer  violation  of
            the Chinese people have always modest, the psychological  habits  should  be
            euphemism, too  direct  exposed  himself  instead  was  very  ambitious  and
            arrogance of the defect,  and  modest  can  give  his  left  posterior,  one
            thousand can't do the ideal seat, will not lose face. Be laughed at. Try  to
            the Chinese employees may be the in the mind  to  the  future  has  a  grand
            blueprint. But he is part of  the  culture  background  advocates  restraint
            moods and emotions. So he answered  in  the  boss's  problem,  not  directly
            speak his mind. But talked a lot  about  the  company's  future  development
            and, in his view it is fully comply with the social norms, is  modest  table
            ink stones, and that will be their future and the future of the  company  is
            closely connected to  keep  organizational  harmony.  This  in  the  Chinese
            people is normal but again, straight from the shoulder  to  say  his  salary
            objects or position goal but will is considered to be a ambitions watch  ink
            stones. In addition, the Chinese evaluation a person,  often  is  the  clear
            what    was    he    doing,    exactly,    and     not     at     what     he
            said.不论他把自己的理想、抱负描绘得何等宏伟；也不论他把自己的能力，素质说得如
            何天花乱坠．如果最后他做不到，这一切都只能成为别人的笑柄；美国人一向很直接明
            了，这也是他们一贯的思维方式。Americans have always very direct  and  clear,
            this           is           their           usual           way           of
            thinking.从美籍经理询问这位员工时于自己未来五年发展的打算，即想要在飞利浦做到
            什么样的职位可以看出，美国人注重个人在企业的发展状况。通过个人才华的施展和势
            力来取得企业的辉辉煌和达到理想目标。这也许与美国一贯提倡的个人主义有着莫大关
            系。他们重独立、多坦率，等级和身份观念淡薄，认为追求个人的利益是天经地义、无
            可厚非的，他们对中国式的重礼仪、身份和多委婉，却视为假装和缺乏真诚。美国文化
            提倡大胆直接表露自己想法。Americans  pay  attention  to  individual  in  the
            development of the enterprise. Through the  individual  talent  and  to  get
            their power of the enterprise is splendid and to achieve  the  ideal  target
            Fraser. This may and American advocates  for  the  individualism  has  great
            relationship. They heavy independent, outspoken, level and identity  concept
            light, argued that  the  pursuit  of  the  interest  of  the  individual  is
            perfectly justified,  understandable,  their  Chinese  heavy  to  etiquette,
            identity and more tactful,  but  as  pretend  and  lack  of  sincerity.  The
            American    culture    advocate    direct     to     reveal     his     bold
            ideas.在该案例中，美国的人力资源经理认为直截了当地说出自己的期望和要求并无不
            妥．反而是真诚和自信的表现，有利于中国员工实现人生的成功。相反，中国人习惯委
            婉的表达方式，直接说出自己的要求会显得不礼貌和唐突，他对于美国人的直白也很是
            不满。In this case, the human resources manager in the  United  States  felt
            that it was  okay  to  state  his  expectations  and  requirements  bluntly.
            Instead, it is the performance of sincerity and  self-confidence,  which  is
            conducive to the success of Chinese employees  in  life.  On  the  contrary,
            Chinese people are accustomed to  implicit  expressions,  and  it  would  be
            impolite and  abrupt  to  say  their  demands  directly.  He  is  also  very
            dissatisfied with the straightforwardness of Americans.
          `]
        },
        {
          title: "文化沟通",
          blocks: [`
            文化沟通
            由于谈话的不愉快使得美国经理和中国雇员都对彼此颇有微词，虽然美国经理的本意是
            想通过谈话了解这位中国雇员对于自己事业发展的规划，今后适时可能提拔他。值得一
            提的是，案例中的另一名人力资源主管贾先生已意识到两人相互误解的原因，并试图向
            两人解释，但是收效甚微，问题的关键是在于这两位当事人。但是如果有一个了解双方
            文化的中间人适当做出解释．应当是可以化解甚至是化解文化冲突的。The key to
            the problem is the two parties. But if there is a culture of appropriate to
            the middlemen to explain. Shall be eased even resolve cultural conflict.
            既然身处于一个国际化的大公司里，必然会面对有若不同文化背景的员工，如果想当然
            地认为所有人都与自己有若相同的价值观念和社会准则，那肯定是大错特错。因此首先
            必须培养文化教感性，意识到文化的差异性．这对于美国人和中国人都同样重要：
            只有了解了不同文化的基本状况，人们才能在与有着不同文化背景的人交往时保持宽容
            ，而不是一概否定、批评。本案例中的中美双方当事人由于对对方的文化缺乏必要了解
            ，因此在发生冲突时就缺乏宽容和耐心。
          `, `
            "You have to understand the basic situation of different cultures, people
            can have different cultural background and those whom they be tolerant, not
            deny, criticism. In this case the both parties because of the lack of
            necessary to know each other's culture, so in conflict is lack of tolerance
            and patience.
          `]
        },
        {
          title: "方案",
          blocks: [`
            方案
            The proper solution. First,  the  enterprise  staff  can  accept  the  local
            culture  in  host  countries  the  baptism  and   related   all   kinds   of
            intercultural communication training. Or the host country  company  directly
            for foreign staff wake a period of time  training;  Second,  the  enterprise
            should strive to build their own  culture,  calendar  year,  to  make  every
            staff fusion to enterprise culture inside.  Because,  usually  the  kind  of
            culture has a strong inclusiveness and fusion  power.  From  the  cases  can
            see, American vice President  and  Chinese  employees  in  the  enterprise's
            culture can't find consensus;
            适当的解决方案。一是企业员工可以在东道国接受当地文化的洗礼和相关的各类跨文化
            交际培训。或东道国公司直接为外籍员工唤醒一段时间的培训；其次，企业要努力建设
            自己的文化，历年，让每一位员工都融入到企业文化里面。因为，通常那种文化具有很
            强的包容性和融合力。从案例可以看出，美国副总裁和中国员工在企业文化上找不到共
            识；
            第三，作为经理，应该以宽容的态度来处理文化冲突，慢慢地和员工沟通，而不是“不耐
            烦”或抱怨；Third, as a manager, you  should  deal  with  cultural  conflicts
            with a tolerant attitude and communicate with employees slowly, rather  than
            "impatient" or complaining.
            四是通过第三方的调整和解释，弄清楚问题所在，解开副总裁与中国员工之间的疑惑和
            矛盾。Fourth,  through  the  third  party  of   the   adjustment   and   the
            explanation, make clear the problem, Solve  the  doubts  and  contradictions
            between vice presidents and Chinese employees.
          `]
        }
      ]
    }
  };

  const caseDescriptionSources = {
    "case-age-status": {
      title: "Case Study 1 Age and Status",
      intro: "两位同事的矛盾使一家数据处理公司的总经理遇到了麻烦。一方是一位踌躇满志的法裔加拿大小伙子，另一方是一位有特许签证的年长中国女性；此前两人确实是很好的合作伙伴。",
      paragraphs: [
        "A manager in a data-processing company was having difficulty dealing with a conflict between a young, ambitious French Canadian male and his co-worker, an older Chinese woman who was on a special visa from China. She had recently become uncooperative and had made it clear to the manager that she would not be willing to travel to the capital with her co-worker to hold discussion with legislators about a new product with great enthusiasm.",
        "When the manager asked her what the problem was, he received no clear explanation. When he asked her co-worker, the young man had no insights to offer. The young French Canadian was clearly annoyed, however, that the Chinese woman was refusing to share her data with him. That meant he couldn’t make the presentation to the legislators because she had all the key data on her computer disks.",
        "The manager repeated questions to her but her “problem” got nowhere. So he changed his approach. He began explaining his concerns, as manger and as spokesperson for the company, about the upcoming meeting with legislators. His explanation about his position was unemotional. In that climate she then felt she could explain her position. She revealed she felt that that as an older, and to her mind, more senior person, she should not be sent to the capitol with a younger employee who would do the presentation of material she had worked hard to develop. That would diminish her status, she felt. The general manger knew the root of his headache."
      ]
    },
    "case-public-praise-japan": {
      title: "Case Study 2 Praising Japanese in Public Workplaces",
      intro: "美国经理 Jones 当众表扬日本员工 Sugimoto，本以为对方会高兴接受，却引发尴尬和误解。",
      paragraphs: [
        "American: Mr. Sugimoto, I have noticed that you are doing an excellent job on the assembly line. I hope that the other workers notice how it should be done.",
        "Japanese: (He is uneasy). Praise is not necessary. I am only doing my job. (He hopes other Japanese workers do not hear.)",
        "American: You are the finesse, most excellent, dedicated worker we have ever had at the Jones Corporation.",
        "Japanese: (He blushed and nods his head several times, and keeps working.)",
        "American: Well, are you going to say “thank you,” Mr. Sugimoto, or just remain silent?",
        "Japanese: Excuse me, Mr. Jones … May I take leave for five minutes?",
        "American: Sure. (He is annoyed and watched Sugimoto exit). I can’t believe how rude some Japanese workers are. They seem to be disturbed by praise and don’t answer you … just silent."
      ]
    },
    "case-british-manager-thailand": {
      title: "Case 3 A British General Manager in Thailand",
      intro: "一位英国总经理到泰国上任后，没想到上班用车这个小问题给他带来不小的烦恼。",
      paragraphs: [
        "A British general manager upon arrival in Thailand refused to take his predecessor’s car. The Thai finance manager asked the new GM what type of Mercedes he would like, then, The GM asked for a Suzuki or a Mini, anything that could be handled easily in the congested traffic in Bangkok.",
        "Three weeks later the GM called the finance manger and asked about prospects for the delivery of his car. The Thai lost his reserve for a moment and exclaimed: “we can get you a new Mercedes by tomorrow, but Suzuki take much, much longer.” The GM asked him to see what he could do to speed up the process. After four weeks the GM asked to see the purchase order for the car. The purchasing department replied that, because it would take so long to get a small car, they had decided to order a Mercedes.",
        "The GM’s patience had run out. At the first management meeting he brought the issue up and asked for an explanation. Somewhat shyly, the predominantly Thai management team explained that they could hardly come to work on bicycle."
      ]
    },
    "case-smile-apology": {
      title: "Case Study 4 Understanding a Smile",
      intro: "微笑通常表示友好，但在道歉语境中，不同文化可能给出完全不同的解释。",
      paragraphs: [
        "Peter is the general manager of an American company in China. Recently, Jun Chen, one of the Chinese managers made a mistake at work that caused some difficulties that required a lot of effort to fix. Jun Chen was very upset about what had happened, and came to Peter’s office to make a formal apology. Jun Chen went into Peter’s office after being told to, smiling before he spoke. “Peter, I’ve been feeling very upset about the trouble I’ve caused for the company. I’m here to apologize for my mistake. I’m terribly sorry about it and I want you to know that it will never happen again.” Jun Chen said, looking at Peter with the smile he had been wearing since he walked into the office. Peter found it hard to accept the apology. He looked at Jun Chen, and asked, “are you sure?”",
        "“Yes, I’m very sorry and I promise this won’t happen again,” Jun Chen said, with a smile even broader than before.",
        "“I’m sorry I just can’t take your apology. You don’t look sorry at all!” Peter said angrily.",
        "Jun Chen’s face turned very red. He did not in the least expect Peter to take it negatively. He was desperate to make himself understood. “Peter,” he managed to smile again, “trust me, no one can feel any more sorry than I do about it.”",
        "Peter was almost furious by now, “If you’re that sorry, how can you still smile?”"
      ]
    },
    "case-indirect-answer": {
      title: "Case 5 Why Was His Answer Not Related to the Question?",
      intro: "飞利浦照明公司的一位美国经理和一位颇具发展潜力的中国员工谈话，但这位中国员工总是答非所问，美国经理甚是疑惑。",
      paragraphs: [
        "An American manager of human resource in Philips lightening company talked with a Chinese employee with great potential. The American manager wanted to know the development design and the position the employee wants to get in the company. But the Chinese employee did not answer the question directly; instead he only talked about the company’s future direction, promotion system and his current position. He talked for a long time, but did not give a definite and direct answer. The manager was puzzled and annoyed, because the same situation has occurred several times, Later, the manager complained to another human resource manager, Mr. Jia, “I only wanted to know the employee’s working plan in the next 5 years and the position he wants to get in the company, but why I cannot get a clear answer?”. The Chinese employee also complained to Mr. Jia., “Why are Americans so aggressive?” As the human resource manager in a multinational company, Mr. Jia knows that a different manner in communication brings about misunderstandings. So he did best to explain to the two sides, but it is not easy to reduce the obstacle between them."
      ]
    }
  };

  function caseEntrySection(entry, titlePattern) {
    return entry.sections.find((section) => titlePattern.test(section.title));
  }

  function caseEntryItems(entry, titlePattern) {
    const section = caseEntrySection(entry, titlePattern);
    return section ? section.items : [];
  }

  function structuredCaseSource(entry) {
    const source = caseDescriptionSources[entry.slug];
    return {
      note: "备用结构化案例数据；当前页面优先使用《案例分析.md》。",
      sourceLabel: "备用结构化案例数据",
      sections: [
        {
          kind: "source",
          title: "案例导入",
          paragraphs: [`${source.title} / ${entry.subtitle || ""}`.replace(/\s+\/\s*$/, ""), source.intro]
        },
        {
          kind: "source",
          title: "Case description",
          paragraphs: source.paragraphs
        },
        {
          kind: "questions",
          title: "Questions",
          items: caseEntryItems(entry, /讨论问题/)
        },
        {
          kind: "analysis",
          title: "矛盾冲突",
          items: caseEntryItems(entry, /矛盾冲突/)
        },
        {
          kind: "analysis",
          title: "原因分析",
          items: caseEntryItems(entry, /原因分析/)
        },
        {
          kind: "answer",
          title: "回答与解决建议",
          items: caseEntryItems(entry, /文化沟通|解决建议/)
        },
        {
          kind: "answer",
          title: "记忆提示",
          items: [entry.memory]
        }
      ]
    };
  }

  const caseStructuredSources = Object.fromEntries(
    caseAnalysisEntries.map((entry) => [entry.slug, structuredCaseSource(entry)])
  );

  const caseAnalysisMarkdownSource = String.raw`# Case Study 1    Age and Status

两位同事的矛盾使一家数据处理公司的总经理遇到了麻烦。一方是一位踌躇满志的法裔加拿大小伙子，另一方是一位有特许签证的年长的中国女性，而此前两人确实很好的合作伙伴

## Case description:
A manager in a data-processing company was having difficulty dealing with a conflict between a young, ambitious French Canadian male and his co-worker, an older Chinese woman who was on a special visa from China. She had recently become uncooperative and had made it clear to the manager that she would not be willing to travel to the capital with her co-worker to hold discussion with legislators about a new product with great enthusiasm.
When the manager asked her what the problem was, he received no clear explanation. When he asked her co-worker, the young man had no insights to offer. The young French Canadian was clearly annoyed, however, that the Chinese woman was refusing to share her data with him. That meant he couldn’t make the presentation to the legislators because she had all the key data on her computer disks.
The manager repeated questions to her but her “problem” got nowhere. So he changed his approach. He began explaining his concerns, as manger and as spokesperson for the company, about the upcoming meeting with legislators. His explanation about his position was unemotional. In that climate she then felt she could explain her position. She revealed she felt that that as an older, and to her mind, more senior person, she should not be sent to the capitol with a younger employee who would do the presentation of material she had worked hard to develop. That would diminish her status, she felt. The general manger knew the root of his headache.
## Questions:
1.What do you think caused the conflict?
2.What would you do to resolve the conflict if you were the general manager?

## 矛盾冲突
这位年长的中国女士投入极大的热情和精力开发产品．却在最后的关键时刻拒绝与年轻的同事一同去向议员做推介：当经理和同事问其原因．她并未做任何明确的回答：而当经理改变策略，不再直接询问原因，而是迂回地讲起自己的困境时，她才道出自己的顾虑。在这位资深年长的中国女士看来，同一位比她年轻的同事一同去国会，并且由对方来做推介会影响到她的地位和威信，因此她无法同意：

## 原因分析
造成这一矛盾的文化因素有两方面．对地位、年龄的不同态度以及这种不同的表达方式。人对权力的认识因文化背景的不同而不同。根据霍夫斯特的调查研究，“低权力距离”国家的人强调个人的能力和信用，人与人之间权利和关系的平等，而．”高权力距离”国家，如中国、日本、纬国，强调地位、经验、年龄、资历等，人与人之间存在级别差距；因此在这位年轻的加拿大人看来，在工作上他与这位女士是平等的合作伙伴，并没有地位的差别，自己也有能力参与项目并做最后报告。而在这位中国女士看来，以自己的年龄、资历、以及工作中的付出，与一个年轻人一同去国会，并且由对方来做报告对她来说是一件丢面子的事：
另外．双方表达方式的不同也导致了矛盾的加深。根据霍尔的理论，加拿大是“低语境”国家，中国属于“高语境”文化国家，因此，当她的加拿大同事没有充分考虑到她所处的位置．而是直接问她原因时，这位中国女士采用了婉转回进的策略，没有直接说出自己的想法。而当经理改变方法迂回地说到自己的难处时，在这种语境下她才说出自己的顾虑。
Low power distance "country on individual ability and credit, the relationship between rights and equality, and." high power distance "countries, such as China, Japan, weft kingdom, emphasizing the status, experience, age, qualifications, existing gap between people level 。So in the young Canadian opinion, in the work he and the woman are equal partners, and the difference in no position, also has the ability to participate in project and do the last report. And in the Chinese women seem to, in their own age, qualifications, and work in pay, and a young man together to congress, and by each other to do the report for her is a lose face:
Outside. Both sides expressing way different led to the deepening of contradictions. According to the theory of hall, Canada is "low context" countries; China belongs to "high context" culture countries,

## 文化沟通
当与不同文化背景、年龄、地位的人进行跨文化交流合作时，我们应当充分了解对方价值观中对这些个人因素的看法，决策前应采用合适的方式进行有效的协商，以便避免和化解因文化背景、价值观不同引起的矛盾。本案例中的经理在理解她的难处之后，可以在全公司内正式的公布这位女士的工作成果，给予高度的认可．同时在议会的报告中也应体现出其工作的重要意义，使之得，得到应有的重视。
This case of manager in understanding her difficulty after can in all the company released within the formal the lady's work, to give high recognition. At the same time, in the parliamentary report should reflect its importance, make, and get the attention it deserves.
 
# Case Study 2  Praising Japanese in Public Workplaces （在工作场所当众表扬日本人）
琼斯先生（美国经理） 当众表扬苏琦木拓（日本员工）工作做得很棒，本以为苏琦木拓会高兴的接受，却不料…..
## Case description:
American: Mr. Sugimoto, I have noticed that you are doing an excellent job on the assembly line. I hope that the other workers notice how it should be done.
Japanese: (He is uneasy). Praise is not necessary. I am only doing my job. (He hopes other Japanese workers do not hear.)
American: You are the finesse, most excellent, dedicated worker we have ever had at the Jones Corporation.
Japanese: (He blushed and nods his head several times, and keeps working.)
American: Well, are you going to say “thank you,” Mr. Sugimoto, or just remain silent?
Japanese: Excuse me, Mr. Jones … May I take leave for five minutes?
American: Sure. (He is annoyed and watched Sugimoto exit). I can’t believe how rude some Japanese workers are. They seem to be disturbed by praise and don’t answer you … just silent.
## Questions:
       Why was the conversation between Mr. Jones and Mr. Sugimoto not so pleasant?
       Why did they have such different reactions towards praising in public workplaces?
       If you were Mr. Sugimoto, would you accept praise from Mr. Jones in public workplaces?
       If were Mr. Jones, how would you deal with the situation more appropriately?


## 矛盾冲突
从对话中可以看出，琼斯先生认为在其他工人面前表扬苏奇木拓先生是对他工作的肯定．也是对他个人的认可，苏奇木拓先生应该高兴地接受，不必遮遮掩掩不好意思，更不应该一句话不说就走了。但琼斯先生只是从美国强调个人的概念出发，却不熟悉日本人是如何看待个人和集体的关系，不知道如何向日本同事表示欣赏和赞扬．结果适得其反。琼斯先生和苏奇木拓交流失败的原因主要在于都对双方的文化了解不深，特别是双方对个人与集体关系的看法不同。

## 原因分析
在霍夫斯特的“个体取向与集体取向”53个国家和地区的列表中美国排在第一位．而日本排在22位，这意味着美国是非常强调个人主义的国家，而日本更注重的是集体。在美国鼓励个人创断，提倡竞争。个人会因业绩优异而受到上司表扬，这是一种典型的美国式做法。特别是如果在同事面前受到表扬，个人会觉得很自豪，因为成绩得到了上级的认可，同时也在同事中间表现了自己，实现了自我价值。在美国，受到表扬的人往往会说“谢谢”以作回答。
The United States is very stressed individualism country, and Japan are more focused on their collective. In the United States encourages individual creative, advocating competition. Individual will and excellent performance by boss for praise, this is a kind of typical American practices. Especially if in front of my colleagues have been praised, people will feel very proud, because the results obtained superior approbate, and also in among colleagues showed, realize the ego value. In the United States, who praised will often say "thank you" to answer ".
所以案例中的琼斯先生认为苏奇木拓先生也应该以这样的方式接受表扬。出乎他意抖的是，那位受到表扬的日本工人对他的表扬感到不安，没把表扬当回事：美国经理接着用更肯定的语气维续表扬他，如用英语中的最高级形容词“最优秀的”、“最杰出”、‘最勤奋”等等。使他更吃惊的是：他的这番赞扬之词使那位日本工人更1 危脸，脸一下红了起来，只是理头干活．不再言语，仅仅点了两下头。对于这样的回答或拒绝表扬．美国经理实在是无法理解，也无法忍受这种沉默不语，于是直截了当地向他发问道：“你打算说声谢谢呢，还是要选择继续保待沉默呢？”责备他表现“没礼貌”。
The manager was unable to understand, also can't stand for the silent, then to straight out he hair asked: "are you going to say? Thank you, or to choose to continue the stay silent?" Blame him to show "rude".
他所不知的是，日本是典型的集体主义国度，在日本个人要忠实于集体，集体内部的成员要团结一致不倾向于突出个人业绩．而是强调集体协作。所以当苏奇木拓先生在同事面前受到表扬时，非常地局促不安．只是低头干自己的事情，甚至要求要离开五分钟，没有正面给琼斯先生任何答复．因为他觉得这样把他和所属的集体分离开了．使他在同事面前失去了面子。另一方面．美国经理由于对日本文化特点的无知，公开表扬不仅把那位日本工人弄得无言以答，而且会失去在其他日本工人对他的尊敬。
Japan is typical of collective socialist country, in Japanese individual should be faithful to the collective, the members of the collective to internal unity don't tend to outstanding individual performance. But emphasize the collective cooperation. So when SuJiMu Mr Extension in front of my colleagues when praised very ill at ease. Just do their own things down, even want to leave five minutes, no positive for Mr Jones any reply. Because he felt that he and the subordinate to the collective isolates. To his in front of my colleagues lost face. On the other hand. The manager because of Japanese culture characteristics of ignorance, public praise not only the Japanese workers make could answer, and will lose in the other Japanese workers to his respect.
从对话中也可以看出苏奇木拓先生不接受当众表扬，却只是保持沉默，甚至要走开，没有把他的不满当众表达出来。这样的行为使得琼斯先生认为日本员工不礼貌。这一交际失致和日美两国交流方式不同有很大关系。根据霍尔（Hail ）的“高语境”和”低语境”理论，日本是典型的高语境国家，交流方式含蓄委婉，不会轻易在众人面前表达不满，会更多的依赖于非言语交流．
"High context" and "low context" theory, Japan is typical high context countries, communication implicative tactful, not easily in the presence of all express discontent, will be more dependent on non-verbal communication.
如苏奇木拓先生不作回答保持沉庆，只是干自己的工作，以此表示对当众表扬的不满。而美国属于”低语境”国家，习惯直接的语言交流方式，. 
And the United States belongs to "low context" countries, used to direct language communication
当苏奇木拓先生显得不安时，球斯先生却说“你打算说谢谢呢，还是要选择沉默？”。当苏奇木拓先生要求离开时，琼斯先生就认为没有任何回答就离开是不礼貌的。
## 文化沟通
双方应该对彼此的文化有所了解，应该清楚两种文化对个人的不同看法和不同的交流方式．不要总是从自己的出发点看问题。琼斯先生应该知道最好不要当众表扬某个日本人，而是应该私下单独表扬，或者会开表扬某个集体或团队；要清楚日本人的交流方式比较委婉间接，为了集体的和谐他们通常不会在公开场合表示不满。而苏奇木拓先生也应该了解美国时个人的重视，公开表扬个人是对他能力的认可；美国人更喜欢直接的语言交流，有什么想法要说出来，而不是要保持沉默或是回避
Both sides should understand the culture for each other, should be clear that two kinds of culture on personal different views and different way of communication. Don't always look at problems from their starting point. Mr Jones should know better not praise in public a Japanese, but should praise alone, or will open praise a collective or team; Want to be clear about the Japanese way of communication more tactful indirectly, to the harmony of collective they usually don't publicly expressed dissatisfaction. And SuJiMu Mr Should know the extension of the individual attention when, public praise for his personal ability is the approval; Americans prefer direct language exchange, have what idea to say, but not to remain silent or avoid
 
# Case 3  A British General Manager in Thailand 英国总经理在泰国
一位英国总经理来到泰国上任，到任之初，没想到使用什么样的车上班这个小问题给他带来了不小的烦恼…….
## Case description:
A British general manager upon arrival in Thailand refused to take his predecessor’s car. The Thai finance manager asked the new GM what type of Mercedes he would like, then, The GM asked for a Suzuki or a Mini, anything that could be handled easily in the congested traffic in Bangkok.
Three weeks later the GM called the finance manger and asked about prospects for the delivery of his car. The Thai lost his reserve for a moment and exclaimed: “we can get you a new Mercedes by tomorrow, but Suzuki take much, much longer.” The GM asked him to see what he could do to speed up the process. After four weeks the GM asked to see the purchase order for the car. The purchasing department replied that, because it would take so long to get a small car, they had decided to order a Mercedes.
The GM’s patience had run out. At the first management meeting he brought the issue up and asked for an explanation. Somewhat shyly, the predominantly Thai management team explained that they could hardly come to work on bicycle.
## Questions:
       Why did the GM have difficulties in getting a Suzuki or Mini?
       Why did the management team say they could hardly come to work on bicycle?
## 原因分析
泰国是等级观念很强的国家．泰国传统文化价值观的核心，如家长制、权威索拜，等级观念等是人们日常行为所公认的准则，甚至是一种“生活方式”人们认为社会等级制度时人有好处．所以不会向社会等级制度挑战。泰国的社会生活强调等级观念，依赖于等级关系。而在公司等社会机构中，强调正式的组织结构，各个等级保持一定的稳定性。
Thailand is hierarchy strong country. Thailand traditional cultural values of the core, such as the patriarchal system, and the authority and worship, level is the concept of the people daily behavior of accepted standards, or even a "lifestyle" people think social hierarchy system people have good. So will not give in to the social hierarchy challenge. Thailand's emphasis on social life hierarchy, rely on hierarchy relationship. And in the company and other social organizations, emphasizes formal organization structure, each level maintain certain stability.因此，在本案例中，最后泰国职员的解释是，如果总经理的用车降低水准，公司所有职员的用车要整体降级，The general manager of the lower level fruit transport, the company all staff transport to the whole downgraded,最终有些职员必须要骑自行车上班，而这是他们不愿也无法做到的。在英国文化的价位观中，权力之间的距离很小．具体工作之外，人们之间是平等的，公司中的领导者用车是为了工作，为了提高的业绩，因此英国经理看来．交通工具的选用是为了提高工作效率．每个人都有选择的自由，自己选用什么样的车与公司其他人无关。
In British culture on the price, the distance between the power is small. The specific work outside, between people is equal, the leader is in order to transport the work, in order to improve the performance, so Britain the manager looked. Traffic tools in order to improve the work efficiency is choose. Everyone has the freedom of choice, oneself choose what kind of car company has nothing to do with others.
## 文化沟通
本案例中，如果英国经理坚持一意孤行，很容易引起泰国员工的集体反感，会有被架空的危险。在跨国组织中，遇到这种情况应从实际环境，即地理环境及当地文化习俗，占主导成员的文化背境出发，考虑大多数人的习惯和意见，做出不影响团队成员工作积极性和工作业绩的决策
 
第  页
 
# case 4 
怎样理解微笑？
微笑是友好的表示，理应得到友好的回应。但是，向别人道歉时微笑是否显得适当？不同国家的人有不同的理解。处理不当，很可能带来意想不到的结果……
## Case description:
  Peter is the general manager of an American company in China. Recently, Jun Chen, one of the Chinese managers made a mistake at work that caused some difficulties that required a lot of effort to fix. Jun Chen was very upset about what had happened, and came to Peter’s office to make a formal apology. Jun Chen went into Peter’s office after being told to, smiling before he spoke. “Peter, I’ve been feeling very upset about the trouble I’ve caused for the company. I’m here to apologize for my mistake. I’m terribly sorry about it and I want you to know that it will never happen again.” Jun Chen said, looking at Peter with the smile he had been wearing since he walked into the office. Peter found it hard to accept the apology. He looked at Jun Chen, and asked, “are you sure?”
  “Yes, I’m very sorry and I promise this won’t happen again,” Jun Chen said, with a smile even broader than before.
  “I’m sorry I just can’t take your apology. You don’t look sorry at all!” Peter said angrily.
  Jun Chen’s face turned very red. He did not in the least expect Peter to take it negatively. He was desperate to make himself understood. “Peter,” he managed to smile again, “trust me, no one can feel any more sorry than I do about it.”
  Peter was almost furious by now, “If you’re that sorry, how can you still smile?”
## Questions for discussion”
      Why did Jun Chen wear a smile when he made the apology?
      Do you think it is reasonable that Peter became so angry with Jun Chen? Why?
      What are the different interpretations for a smile by the two in this situation?
## 矛盾冲突
本案例所体现的矛盾非常明显，是由于胶体语言使用的文化差异而导致的误解。不同文化对于微笑的理解是不同的。尤其是在道歉这种特殊的语境下。陈军向彼得道谦时，尽力微笑着说话以显示礼貌和诚意，而对于彼得来说，这种情况下微笑是不尊重的表砚，也是缺乏诚意的表现。
This case that embodies the very obvious contradiction, is because the colloid use of language cultural differences and lead to misunderstandings. Different culture for smile of understanding is different. Especially in the context of this special and apologize. Howell way to Peter Williams, trying to smile to speak to show courtesy and sincerity, and for Peter speaking, this situation is not respect watch smile yanping, also is the lack of sincerity of the performance.
## 原因分析
当陈军表达完自己的歉意时，脸上的笑容使彼得怀提他是否真心感到抱歉，以至于看着他追问了一句：”你确定吗？”。此时陈军并未意识到他们之间的交流已经由于自己错误使用胶体语言而产生了问题，笑容更加明显地答到自己确实感到很抱歉并保证不会再犯同样的错误。彼得非常气愤的表示不能接受他的道歇，这是令陈军万万没有想到的．彼得的反应也让他颇为不解，只能急忙为自己辩解．但仍不忘保持脸上的微笑，可想而知．陈军的行为非但不能消除误解．取得彼得的访解，反而进一步火上浇油，激怒了彼得。
在跨文化交流中，对肢体语言使用和理解的差异往往会导致许多问翅。肢体语言包括手势，身势．服饰．音调高低，微笑，沉默，副语言，对时间的不同观念及空间的使用等。笑容一般传达的是愉悦和友好的感情，可以表示欢迎、原谅、赞同、没有敌意等等。在此案例中，对于中国人陈军来说，微笑不仅仅只是快乐和友好的表示，也传递道歉与谅解的信息。同时由于中国人习惯用面部来遮掩感情，陈军也有借微笑掩饰自己的不安和歉疚的习惯。而对于美国人，这种做法并不能被接受。微笑削弱了道歉的诚意．美国人强调真实直接的表达情感，内心感情与外在表砚的统一。所以他们认为当一个人内心感到愧疚而致歉时，是不可能面带笑容的．否则只能说明道歉的真诚性值得怀疑。
In cross-cultural communication, of body language use and understand the differences often led to many asked wings. Body language including gestures, body movements. Dress. Tone height, smiling, silent, vice language, about the time of conception and the use of space, etc. General communicate is cheerful smile and friendly affection, can say welcome, forgive, agree with, no hostile, and so on. In this case, to the Chinese for howell, smile not just happy and friendly, and said the information transfer apologize and understanding. At the same time because the Chinese used to face to cover feelings, howell also have borrow smile hide his agitation and the habit of guilt. For an American, this kind of practice and cannot be accepted. Smile weaken the apology of sincerity. American emphasis on real direct express feelings, emotions and external table inkstone unity. So they think that when a person feel guilty when excuse, is impossible to smiling. Otherwise can explain the sincere apology sexual suspect.
There's an old Chinese saying "stretched out his hand and not dozen smiling face,
## 文化沟通
要避免跨文化交际中产生由胶体语言使用不当而造成交流上的障碍和误解，解决本案例中出现的类似问题，必须提前了解对方国家的文化，了解同样的肢体语言在对方国家中是否有着同样的意义．尤其是对方文化中涉及礼节礼仪的方面有何禁忌和特别之处。切不能想当然的套用自己文化中肢体语言的含义，否则就可能出现本案例中得尴尬情况。
 
# Case 5 Why Was His Answer Not Related to the Question?
为何他答非所问？
飞利浦照明公司的一位美国经理和一位颇具发展潜力的中国员工谈话，但这位中国员工总是答非所问，美国经理甚是疑惑……
## Case description:
  An American manager of human resource in Philips lightening company talked with a Chinese employee with great potential. The American manager wanted to know the development design and the position the employee wants to get in the company. But the Chinese employee did not answer the question directly; instead he only talked about the company’s future direction, promotion system and his current position. He talked for a long time, but did not give a definite and direct answer. The manager was puzzled and annoyed, because the same situation has occurred several times, Later, the manager complained to another human resource manager, Mr. Jia, “I only wanted to know the employee’s working plan in the next 5 years and the position he wants to get in the company, but why I cannot get a clear answer?”. The Chinese employee also complained to Mr. Jia., “Why are Americans so aggressive?” As the human resource manager in a multinational company, Mr. Jia knows that a different manner in communication brings about misunderstandings. So he did best to explain to the two sides, but it is not easy to reduce the obstacle between them.

## Question for discussion:
Why did the Chinese employee not give a clear and definite answer?

按照中国人的传统心理，这样的回答违反了中国人一向谦逊的心理习惯，太直接反而暴露出自己很有野心并高傲自大的缺陷，而谦虚可以给自己留有后路。尽管这位中国员工可能心里对未来有着宏伟的蓝图．但是他所处的文化背景主张克制情绪和情感。因此他在回答美国上司的问题时，没有直接说出自己的想法，而是谈了很多与公司未来发展有关的事，在他看来自己的做法是完全符合社会规范的，是谦虚的表现。
According to the traditional psychology of the Chinese, such an answer violates the Chinese people's habit of being humble. Being too direct will reveal the flaws of being very ambitious and arrogant, and being humble can leave a way out for oneself. Although the Chinese employee may have a grand blueprint for the future. But his cultural background advocates restraint of emotions and emotions. Therefore, when he answered the question of the American boss, he did not directly express his thoughts. Instead, he talked about a lot of things related to the future development of the company. In his opinion, his approach is completely in line with social norms and is a manifestation of humility.

What stereotype did the Chinese employee from towards American?
Chinese employees think Americans are too direct, outspoken and aggressive.

How can Mr. Jia effectively solve the awkward situation?

## 矛盾冲突
这是一个体现东西方人际交流方式差异的案例。在这个案例中，文化冲突体现在：来自美国的人力资源经理看好一个中国雇员，因此和该雇员谈话，想知道他对自己的职业发展规划以及期望得到什么职位。而令他不解和恼怒的是，该雇员避而不谈该回答的问题却大谈公司的未来发展、晋升和他目前的职位。结果是两人都在背后互相抱怨，美国人认为中国雇员太虚伪，而中国雇员也认为美国人太直接、坦率、咄咄通人。
Americans believe that Chinese employees too hypocritical, and Chinese employees also think Americans too direct, frankly, our very aggressive.
## 原因分析
该案例中的一方是美国人，而那位员工是中国人。产生这样糟糕结果的一个主要原因是中美两国在人际交流方式上，具体来说是在回答问题的方式上，存在巨大差异，而当事双方却并没意识到这一点。这种文化差异体现在中国文化注重维护群体和谐的人际交流环境，而美国丈化则注重创造一个强调坚持个性的人际交流环境。
如果这位中国员工从正面直接回答了人力资源经理的问题。比如．中国员工回答：”… … 想在五年之内做到营销部经理的职位。”按照中国人的传统心理，这样的回答违反了中国人一向谦应、委婉的心理习惯，太直接反而暴露出自己很有野心并高傲自大的缺陷，而谦虚可以给自己留有后路，万一做不到那个理想的位子，也不至于丢面子．被人笑话。尽于这位中国员工可能心里对未来有着宏伟的蓝图．但是他所处的文化背景主张克制情绪和情感。因此他在回答美国上司的问题时，没有直接说出自己的想法．而是谈了很多与公司未来发展有关的事，在他看来自己的做法是完全符合社会规范的，是谦虚的表砚，并且认为将自己的未来与公司的未来紧密相连有利于保持组织的和谐。这在中国人看来是再正常不过的了，直截了当地说出自己的薪水目标或是职位目标反而会被认为是具有野心的表砚。此外，中国人评价一个人，往往是清他究竟做了什么，而不是看他说了什么。
The case of the party is American, and the staff is Chinese. Have this bad results of one of the main reasons is that China and the United States on the way in interpersonal communications, specifically is the way to answer questions, there are large differences, and both parties but didn't realize this. These cultural differences reflected in Chinese culture pays attention to maintenance group harmonious interpersonal communication environment, and the United States the cultural focuses on creating a it puts emphasis on the individual character of interpersonal communication environment.
If the Chinese employees directly from the front of the human resources manager answered the question. For example. Chinese employees answer: "...... think in five years do the Marketing Department manager position." According to Chinese traditional psychological, such answer violation of the Chinese people have always modest, the psychological habits should be euphemism, too direct exposed himself instead was very ambitious and arrogance of the defect, and modest can give his left posterior, one thousand can't do the ideal seat, will not lose face. Be laughed at. Try to the Chinese employees may be the in the mind to the future has a grand blueprint. But he is part of the culture background advocates restraint moods and emotions. So he answered in the boss's problem, not directly speak his mind. But talked a lot about the company's future development and, in his view it is fully comply with the social norms, is modest table ink stones, and that will be their future and the future of the company is closely connected to keep organizational harmony. This in the Chinese people is normal but again, straight from the shoulder to say his salary objects or position goal but will is considered to be a ambitions watch ink stones. In addition, the Chinese evaluation a person, often is the clear what was he doing, exactly, and not at what he said.
不论他把自己的理想、抱负描绘得何等宏伟；也不论他把自己的能力，素质说得如何天花乱坠．如果最后他做不到，这一切都只能成为别人的笑柄；美国人一向很直接明了，这也是他们一贯的思维方式。
Americans have always very direct and clear, this is their usual way of thinking.
从美籍经理询问这位员工时于自己未来五年发展的打算，即想要在飞利浦做到什么样的职位可以看出，美国人注重个人在企业的发展状况。通过个人才华的施展和势力来取得企业的辉辉煌和达到理想目标。这也许与美国一贯提倡的个人主义有着莫大关系。他们重独立、多坦率，等级和身份观念淡薄，认为追求个人的利益是天经地义、无可厚非的，他们对中国式的重礼仪、身份和多委婉，却视为假装和缺乏真诚。美国文化提倡大胆直接表露自己想法。
Americans pay attention to individual in the development of the enterprise. Through the individual talent and to get their power of the enterprise is splendid and to achieve the ideal target Fraser. This may and American advocates for the individualism has great relationship. They heavy independent, outspoken, level and identity concept light, argued that the pursuit of the interest of the individual is perfectly justified, understandable, their Chinese heavy to etiquette, identity and more tactful, but as pretend and lack of sincerity. The American culture advocate direct to reveal his bold ideas.
在该案例中，美国的人力资源经理认为直截了当地说出自己的期望和要求并无不妥．反而是真诚和自信的表现，有利于中国员工实现人生的成功。相反，中国人习惯委婉的表达方式，直接说出自己的要求会显得不礼貌和唐突，他对于美国人的直白也很是不满。
In this case, the human resources manager in the United States felt that it was okay to state his expectations and requirements bluntly. Instead, it is the performance of sincerity and self-confidence, which is conducive to the success of Chinese employees in life. On the contrary, Chinese people are accustomed to implicit expressions, and it would be impolite and abrupt to say their demands directly. He is also very dissatisfied with the straightforwardness of Americans.
## 文化沟通
由于谈话的不愉快使得美国经理和中国雇员都对彼此颇有微词，虽然美国经理的本意是想通过谈话了解这位中国雇员对于自己事业发展的规划，今后适时可能提拔他。值得一提的是，案例中的另一名人力资源主管贾先生已意识到两人相互误解的原因，并试图向两人解释，但是收效甚微，问题的关键是在于这两位当事人。但是如果有一个了解双方文化的中间人适当做出解释．应当是可以化解甚至是化解文化冲突的。
The key to the problem is the two parties. But if there is a culture of appropriate to the middlemen to explain. Shall be eased even resolve cultural conflict.
既然身处于一个国际化的大公司里，必然会面对有若不同文化背景的员工，如果想当然地认为所有人都与自己有若相同的价值观念和社会准则，那肯定是大错特错。因此首先必须培养文化教感性，意识到文化的差异性．这对于美国人和中国人都同样重要：
只有了解了不同文化的基本状况，人们才能在与有着不同文化背景的人交往时保持宽容，而不是一概否定、批评。本案例中的中美双方当事人由于对对方的文化缺乏必要了解，因此在发生冲突时就缺乏宽容和耐心。
"You have to understand the basic situation of different cultures, people can have different cultural background and those whom they be tolerant, not deny, criticism. In this case the both parties because of the lack of necessary to know each other's culture, so in conflict is lack of tolerance and patience.
## 方案
适当的解决方案。一是企业员工可以在东道国接受当地文化的洗礼和相关的各类跨文化交际培训。或东道国公司直接为外籍员工唤醒一段时间的培训；其次，企业要努力建设自己的文化，历年，让每一位员工都融入到企业文化里面。因为，通常那种文化具有很强的包容性和融合力。从案例可以看出，美国副总裁和中国员工在企业文化上找不到共识；
The proper solution. First, the enterprise staff can accept the local culture in host countries the baptism and related all kinds of intercultural communication training. Or the host country company directly for foreign staff wake a period of time training; Second, the enterprise should strive to build their own culture, calendar year, to make every staff fusion to enterprise culture inside. Because, usually the kind of culture has a strong inclusiveness and fusion power. From the cases can see, American vice President and Chinese employees in the enterprise's culture can't find consensus; 
第三，作为经理，应该以宽容的态度来处理文化冲突，慢慢地和员工沟通，而不是“不耐烦”或抱怨；
Third, as a manager, you should deal with cultural conflicts with a tolerant attitude and communicate with employees slowly, rather than "impatient" or complaining.
四是通过第三方的调整和解释，弄清楚问题所在，解开副总裁与中国员工之间的疑惑和矛盾。
Fourth, through the third party of the adjustment and the explanation, make clear the problem, Solve the doubts and contradictions between vice presidents and Chinese employees.`;

  const caseMarkdownSlugs = [
    "case-age-status",
    "case-public-praise-japan",
    "case-british-manager-thailand",
    "case-smile-apology",
    "case-indirect-answer",
  ];

  function markdownCaseSectionKind(title) {
    if (/case description/i.test(title)) return "source";
    if (/questions?|question for discussion/i.test(title)) return "questions";
    if (/矛盾冲突|原因分析/.test(title)) return "analysis";
    return "answer";
  }

  function normalizeMarkdownParagraphs(lines) {
    return lines
      .map((line) => line.trim())
      .filter((line) => line && !/^第\s*页$/.test(line));
  }

  function parseCaseAnalysisMarkdown(source) {
    const cases = [];
    let currentCase = null;
    let currentSection = null;

    source.replace(/\r/g, "").split("\n").forEach((line) => {
      const caseMatch = line.match(/^#\s+(.+)$/);
      if (caseMatch) {
        currentCase = { title: caseMatch[1].trim(), intro: [], sections: [] };
        cases.push(currentCase);
        currentSection = null;
        return;
      }

      if (!currentCase) return;

      const sectionMatch = line.match(/^##\s+(.+)$/);
      if (sectionMatch) {
        currentSection = { title: sectionMatch[1].replace(/[：:]$/, "").trim(), lines: [] };
        currentCase.sections.push(currentSection);
        return;
      }

      if (currentSection) {
        currentSection.lines.push(line);
      } else {
        currentCase.intro.push(line);
      }
    });

    return Object.fromEntries(
      cases.map((item, index) => {
        const slug = caseMarkdownSlugs[index];
        const sections = [
          {
            kind: "source",
            markdown: true,
            title: "案例导入",
            paragraphs: normalizeMarkdownParagraphs([item.title, ...item.intro]),
          },
          ...item.sections.map((section) => ({
            kind: markdownCaseSectionKind(section.title),
            markdown: true,
            title: section.title,
            paragraphs: normalizeMarkdownParagraphs(section.lines),
          })),
        ];

        return [slug, {
          note: "按《案例分析.md》完整整理，文档中已有的中文和英文段落均保留并分块排版。",
          sourceLabel: "案例分析.md",
          sections,
        }];
      })
    );
  }

  const caseMarkdownSources = parseCaseAnalysisMarkdown(caseAnalysisMarkdownSource);

  function normalizeCaseLines(text) {
    const lines = text.replace(/^\n+|\n+$/g, "").split("\n");
    const indents = lines
      .filter((line) => line.trim())
      .map((line) => line.match(/^\s*/)[0].length);
    const minIndent = indents.length ? Math.min(...indents) : 0;
    return lines.map((line) => line.slice(minIndent).replace(/\u00a0/g, " ").trimEnd());
  }

  function stripCaseSectionHeading(lines, sectionTitle) {
    const result = [...lines];
    const heading = String(sectionTitle || "").toLowerCase();
    while (result.length && !result[0].trim()) result.shift();
    if (!result.length) return result;

    const first = result[0].trim().replace(/：$/, ":").toLowerCase();
    const knownHeading = /^(case description|questions?|question for discussion|矛盾冲突|原因分析|文化沟通|方案|原文答题段落):?$/.test(first);
    if (first === heading || first === `${heading}:` || knownHeading) result.shift();
    return result;
  }

  function caseJoiner(previous, next) {
    if (!previous || previous.endsWith("-")) return "";
    const last = previous.slice(-1);
    const first = next.charAt(0);
    if (/[\u4e00-\u9fff，。！？；：、“”‘’）]/.test(last)) return "";
    if (/[\u4e00-\u9fff（“‘]/.test(first)) return "";
    return " ";
  }

  function caseParagraphs(block, sectionTitle) {
    const lines = stripCaseSectionHeading(normalizeCaseLines(block), sectionTitle);
    const paragraphs = [];
    let current = "";

    lines.forEach((line) => {
      const startsIndentedParagraph = /^\s{2,}\S/.test(line) && current;
      const trimmed = line.trim().replace(/\s+/g, " ");
      if (!trimmed) {
        if (current) {
          paragraphs.push(current);
          current = "";
        }
        return;
      }
      if (startsIndentedParagraph) {
        paragraphs.push(current);
        current = "";
      }
      current = current ? `${current}${caseJoiner(current, trimmed)}${trimmed}` : trimmed;
    });

    if (current) paragraphs.push(current);
    return paragraphs;
  }

  function renderCaseTextBlocks(section) {
    if (section.paragraphs && section.paragraphs.length) {
      return `<div class="case-text-block">${section.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}</div>`;
    }
    return section.blocks.map((block) => {
      const paragraphs = caseParagraphs(block, section.title);
      return `<div class="case-text-block">${paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}</div>`;
    }).join("");
  }

  function renderCaseItems(section) {
    return `
      <ul class="case-point-list">
        ${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    `;
  }

  function caseParagraphLanguage(paragraph) {
    const hasZh = /[\u4e00-\u9fff]/.test(paragraph);
    const hasEn = /[A-Za-z]/.test(paragraph);
    if (hasZh && hasEn) return "mixed";
    if (hasZh) return "zh";
    return "en";
  }

  function renderCaseLanguageBlocks(section) {
    return `
      <div class="case-lang-list">
        ${section.paragraphs.map((paragraph) => {
          const language = caseParagraphLanguage(paragraph);
          return `
            <article class="case-lang-block case-lang-${language}">
              <p>${escapeHtml(paragraph)}</p>
            </article>
          `;
        }).join("")}
      </div>
    `;
  }

  function isQuestionParagraph(paragraph) {
    return /^\d+[.)]/.test(paragraph) || /\?$/.test(paragraph) || /？$/.test(paragraph);
  }

  function renderMarkdownQuestions(section) {
    const paragraphs = section.paragraphs || [];
    if (paragraphs.length && paragraphs.every(isQuestionParagraph)) {
      return `
        <ol class="case-question-list">
          ${paragraphs.map((question) => `<li>${escapeHtml(question.replace(/^\d+[.)]\s*/, ""))}</li>`).join("")}
        </ol>
      `;
    }
    return renderCaseLanguageBlocks(section);
  }

  function caseQuestionItems(section) {
    if (section.items && section.items.length) return section.items;
    const items = [];
    let current = "";
    const lines = section.blocks.flatMap((block) => stripCaseSectionHeading(normalizeCaseLines(block), section.title));

    lines.forEach((line) => {
      const trimmed = line.trim().replace(/\s+/g, " ");
      if (!trimmed) return;
      const numbered = trimmed.match(/^(\d+)[.)]\s*(.+)$/);
      if (numbered) {
        if (current) items.push(current);
        current = numbered[2];
        return;
      }
      current = current ? `${current}${caseJoiner(current, trimmed)}${trimmed}` : trimmed;
    });

    if (current) items.push(current);
    return items;
  }

  function renderCaseQuestions(section) {
    const questions = caseQuestionItems(section);
    return `
      <ol class="case-question-list">
        ${questions.map((question) => `<li>${escapeHtml(question)}</li>`).join("")}
      </ol>
    `;
  }

  function caseSectionKind(section) {
    if (section.kind) return section.kind;
    const title = section.title;
    if (/原始标题与导入|case description/i.test(title)) return "source";
    if (/questions?|question for discussion/i.test(title)) return "questions";
    if (/矛盾冲突|原因分析/.test(title)) return "analysis";
    return "answer";
  }

  function renderCaseSection(section, kind) {
    return `
      <section class="case-doc-section case-doc-section-${kind}">
        <h4>${escapeHtml(section.title)}</h4>
        ${section.markdown && kind === "questions" ? renderMarkdownQuestions(section) : ""}
        ${!section.markdown && kind === "questions" ? renderCaseQuestions(section) : ""}
        ${section.markdown && kind !== "questions" && kind !== "source" ? renderCaseLanguageBlocks(section) : ""}
        ${section.markdown && kind === "source" ? renderCaseTextBlocks(section) : ""}
        ${!section.markdown && kind !== "questions" ? section.items ? renderCaseItems(section) : renderCaseTextBlocks(section) : ""}
      </section>
    `;
  }

  function renderCaseOriginalSource(source) {
    const groups = [
      { kind: "source", title: "英文原文 / Case Text", note: "保留案例标题、中文导入和英文 Case description。" },
      { kind: "questions", title: "Questions / 问题", note: "先单独列出源文件中的讨论问题。" },
      { kind: "analysis", title: "Analysis / 分析", note: "把矛盾冲突和文化原因从答案中分离出来。" },
      { kind: "answer", title: "Answers / 回答与处理方案", note: "保留原文中的问题回答、文化沟通和方案内容。" },
    ];

    return `
      <div class="case-doc-body">
        ${groups.map((group) => {
          const sections = source.sections.filter((section) => caseSectionKind(section) === group.kind);
          if (!sections.length) return "";
          return `
            <section class="case-doc-group case-doc-group-${group.kind}">
              <div class="case-doc-group-head">
                <h3>${escapeHtml(group.title)}</h3>
                <p>${escapeHtml(group.note)}</p>
              </div>
              <div class="case-doc-sections">
                ${sections.map((section) => renderCaseSection(section, group.kind)).join("")}
              </div>
            </section>
          `;
        }).join("")}
      </div>
    `;
  }

  function renderCaseEntry(entry) {
    const originalSource = caseMarkdownSources[entry.slug] || caseStructuredSources[entry.slug] || caseOriginalSources[entry.slug];

    if (originalSource) {
      return `
        <div class="reply case-analysis">
          <section class="tldr">
            <h2>${escapeHtml(entry.title)}</h2>
            <p>${escapeHtml(originalSource.note)}</p>
          </section>
          <div class="source-meta">
            <span>来源：${escapeHtml(originalSource.sourceLabel || "跨文化交际案例分析(1).doc")}</span>
            <span>原文、问题、分析、回答分区</span>
          </div>
          <div class="tags">
            ${entry.concepts.map((concept) => `<span class="tag tag-p">${escapeHtml(concept)}</span>`).join("")}
          </div>
          ${renderCaseOriginalSource(originalSource)}
        </div>
      `;
    }

    return `
      <div class="reply case-analysis">
        <section class="tldr">
          <h2>${escapeHtml(entry.title)}</h2>
          <p>${escapeHtml(entry.lead)}</p>
        </section>
        <div class="source-meta">
          <span>来源：跨文化交际案例分析(1).doc</span>
          <span>案例分析独立复习区</span>
        </div>
        <div class="tags">
          ${entry.concepts.map((concept) => `<span class="tag tag-p">${escapeHtml(concept)}</span>`).join("")}
        </div>
        <div class="grid grid-2">
          ${reviewCards(entry.sections)}
        </div>
        <blockquote>
          <p>${escapeHtml(entry.memory)}</p>
        </blockquote>
      </div>
    `;
  }

  const caseAnalysisExampleSteps = [
    "点出理论：This case reflects...",
    "对应行为：The American side..., while the Japanese side...",
    "解释冲突：The misunderstanding occurs because...",
    "给出建议：To improve communication...",
  ];

  const caseAnalysisExampleBlocks = [
    {
      no: "01",
      title: "Hall：高语境 vs 低语境",
      tags: ["high-context", "low-context", "directness", "silence"],
      zh: "这个案例体现了高语境文化和低语境文化的差异。美国团队采用低语境沟通方式，他们希望对方直接回答是否接受合同条款，并要求明确的时间表和决定。日本团队则更接近高语境沟通方式，他们用沉默、委婉表达和进一步讨论来传递保留意见。双方冲突的原因在于，美国团队把日本团队的沉默理解为逃避问题，而日本团队可能认为美国团队过于直接，忽视了关系和场合。",
      en: "This case reflects the difference between high-context and low-context communication. The American team uses a low-context style, expecting direct answers, clear deadlines, and explicit decisions about the contract. The Japanese team, however, follows a more high-context style, using silence, indirect expressions, and further discussion to show reservation. The clash occurs because the American side interprets silence as avoidance, while the Japanese side may see the American approach as too direct and insensitive to the relationship and context.",
    },
    {
      no: "02",
      title: "Hofstede：个体主义 vs 集体主义",
      tags: ["individualism", "collectivism", "responsibility", "consensus"],
      zh: "从 Hofstede 的个体主义和集体主义维度看，美国团队更强调个人责任和快速决策。他们希望代表能够直接表态，并对具体条款负责。日本团队更重视集体共识和群体和谐，所以他们不愿在会议中立刻做出单方面承诺。对日本团队来说，先和内部成员以及上级讨论，是维护团队一致性的必要步骤。",
      en: "From Hofstede’s dimension of individualism versus collectivism, the American team shows a more individualistic orientation. They value personal responsibility and quick decision-making, so they expect the representatives to give clear answers and take responsibility for specific clauses. The Japanese team is more collectivistic, placing greater emphasis on group consensus and harmony. Therefore, they avoid making unilateral commitments during the meeting. For them, internal consultation is necessary to maintain group agreement.",
    },
    {
      no: "03",
      title: "Hofstede：不确定性规避",
      tags: ["uncertainty avoidance", "rules", "risk", "consultation"],
      zh: "这个案例也可以用不确定性规避来解释。日本团队表现出较高的不确定性规避，他们不愿在信息尚未完全确认时立即接受合同条款，而是希望进一步讨论并征求高层意见。美国团队则更愿意通过合同、时间表和责任条款来推进事务。双方都想降低风险，但方式不同：美国团队依靠书面规则，日本团队依靠内部确认和共识。",
      en: "This case can also be explained through uncertainty avoidance. The Japanese team shows a relatively high level of uncertainty avoidance. They are unwilling to accept the contract immediately before all information is fully confirmed, and they prefer further discussion and consultation with senior executives. The American team tries to manage uncertainty through written contracts, timelines, and penalty clauses. Both sides want to reduce risk, but they do so in different ways: the Americans rely on explicit rules, while the Japanese rely on internal confirmation and consensus.",
    },
    {
      no: "04",
      title: "Hofstede：权力距离",
      tags: ["power distance", "hierarchy", "authority", "decision-making"],
      zh: "权力距离也有助于解释日本团队的反应。日本团队成员没有在会议中立即承诺，而是提到需要和高层进一步商议，这说明决策可能受到组织等级和权威结构的影响。在较高权力距离的文化中，下级通常不会轻易代表组织做出重大决定。相比之下，美国团队更期待会议代表拥有足够权限，并能当场给出明确答复。",
      en: "Power distance can also help explain the Japanese team’s response. The Japanese members do not make an immediate commitment in the meeting, and they mention the need to consult executives. This suggests that decision-making may be influenced by hierarchy and authority. In cultures with higher power distance, lower-level members are less likely to make major decisions on behalf of the organization. By contrast, the American team expects the representatives to have enough authority to give a clear answer during the meeting.",
    },
    {
      no: "05",
      title: "Hall：时间观念",
      tags: ["monochronic time", "relationship", "schedule", "patience"],
      zh: "从 Hall 的时间观念看，美国团队更接近单一时间文化。他们强调截止日期、流程和逐项讨论，希望按照计划推进谈判。日本团队则更重视关系建立和内部协调，时间安排相对更灵活。因此，美国团队认为对方效率低，而日本团队可能认为美国团队过于急迫。",
      en: "From Hall’s view of time, the American team is closer to a monochronic culture. They emphasize deadlines, procedures, and point-by-point discussion, expecting the negotiation to move according to schedule. The Japanese team pays more attention to relationship-building and internal coordination, so their approach to time is more flexible. As a result, the Americans may see the Japanese side as inefficient, while the Japanese side may see the Americans as too impatient.",
    },
    {
      no: "06",
      title: "Minkov：Monumentalism vs. Flexumility",
      tags: ["identity", "face", "values", "adaptation"],
      zh: "如果案例涉及身份、价值观或面子，也可以用 Minkov 的 monumentalism 和 flexumility。Monumentalism 强调稳定身份和坚定价值，因此人们可能更重视维护自我形象和群体尊严。Flexumility 更强调谦逊、适应和调整。在跨文化冲突中，如果一方过度坚持自身价值，另一方期待灵活协调，就可能产生误解。",
      en: "If the case involves identity, values, or face, Minkov’s dimension of monumentalism versus flexumility can be applied. Monumentalism emphasizes stable identity and strong values, so people may pay more attention to maintaining self-image and group dignity. Flexumility emphasizes humility, adaptation, and self-adjustment. In intercultural conflict, misunderstanding may arise when one side strongly insists on its own values while the other expects flexibility and adjustment.",
    },
  ];

  const caseAnalysisExampleCombo = {
    zh: "这个案例可以同时用 Hall 和 Hofstede 来分析。首先，从 Hall 的高低语境理论看，美国团队采用低语境沟通方式，强调直接、明确和书面条款；日本团队采用高语境沟通方式，更依赖沉默、委婉表达和场合信息。其次，从 Hofstede 的个体主义与集体主义维度看，美国团队重视个人责任和快速决策，而日本团队更重视集体共识和关系和谐。因此，双方的冲突并不是单纯的语言问题，而是深层文化价值和沟通风格差异造成的。",
    en: "This case can be analyzed through both Hall’s and Hofstede’s theories. First, according to Hall’s theory of high-context and low-context communication, the American team uses a low-context style, emphasizing directness, clarity, and written clauses. The Japanese team uses a high-context style, relying more on silence, indirect expressions, and contextual information. Second, from Hofstede’s dimension of individualism versus collectivism, the American team values personal responsibility and quick decision-making, while the Japanese team values group consensus and relational harmony. Therefore, the conflict is not merely a language problem, but a result of deeper cultural values and communication styles.",
  };

  function renderCaseExampleParagraphs(value) {
    return normalizeItems(value).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
  }

  function renderCaseExamplePair(zh, en, labels = { zh: "中文", en: "English" }) {
    return `
      <div class="case-example-pair">
        <article>
          <span>${escapeHtml(labels.zh)}</span>
          ${renderCaseExampleParagraphs(zh)}
        </article>
        <article>
          <span>${escapeHtml(labels.en)}</span>
          ${renderCaseExampleParagraphs(en)}
        </article>
      </div>
    `;
  }

  function renderCaseExampleBlock(block) {
    return `
      <article class="case-example-block">
        <div class="case-example-block-head">
          <span>${escapeHtml(block.no)}</span>
          <div>
            <h3>${escapeHtml(block.title)}</h3>
            <div class="tags">
              ${block.tags.map((tag) => `<span class="tag tag-p">${escapeHtml(tag)}</span>`).join("")}
            </div>
          </div>
        </div>
        ${renderCaseExamplePair(block.zh, block.en)}
      </article>
    `;
  }

  function renderCaseAnalysisExample() {
    return `
      <div class="reply case-analysis case-example">
        <section class="tldr">
          <h2>案例分析写法例子</h2>
          <p>把理论词、案例行为、冲突原因和改进建议连成一段，适合直接作为期末案例分析的答题骨架。</p>
        </section>
        <div class="source-meta">
          <span>来源：案例分析例子.md</span>
          <span>单页写法模板</span>
        </div>
        <section class="case-example-method" aria-labelledby="case-example-method-title">
          <div class="case-example-section-head">
            <p class="section-kicker">Answer Pattern / 答题顺序</p>
            <h2 id="case-example-method-title">先对理论，再扣行为</h2>
          </div>
          <ol class="case-example-steps">
            ${caseAnalysisExampleSteps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}
          </ol>
        </section>
        <section class="case-example-theories" aria-labelledby="case-example-theories-title">
          <div class="case-example-section-head">
            <p class="section-kicker">Theory Blocks / 理论套用段落</p>
            <h2 id="case-example-theories-title">常用分析角度</h2>
          </div>
          <div class="case-example-list">
            ${caseAnalysisExampleBlocks.map((block) => renderCaseExampleBlock(block)).join("")}
          </div>
        </section>
        <section class="case-example-combo" aria-labelledby="case-example-combo-title">
          <div class="case-example-section-head">
            <p class="section-kicker">Exam-ready Paragraph / 常用组合</p>
            <h2 id="case-example-combo-title">考试里最常用的一段组合</h2>
          </div>
          ${renderCaseExamplePair(caseAnalysisExampleCombo.zh, caseAnalysisExampleCombo.en)}
        </section>
      </div>
    `;
  }

  const splitCaseExampleSlugs = [
    "case-example-us-japan-negotiation",
    "case-example-chinese-student-us-classroom",
    "case-example-german-brazilian-project",
    "case-example-remote-email-tone",
    "case-example-indian-engineer-try",
    "case-example-swedish-manager-korea",
    "case-example-chinese-supplier-gift",
    "case-example-culture-shock",
    "case-example-stereotype",
    "case-example-face",
    "case-example-eye-contact",
  ];

  const splitCaseExampleTags = {
    "case-example-us-japan-negotiation": ["high-context", "low-context", "individualism", "collectivism"],
    "case-example-chinese-student-us-classroom": ["power distance", "silence", "classroom culture", "high-context"],
    "case-example-german-brazilian-project": ["monochronic time", "polychronic time", "task orientation", "relationship"],
    "case-example-remote-email-tone": ["online communication", "low-context", "relational signals", "tone"],
    "case-example-indian-engineer-try": ["high-context", "power distance", "indirect refusal", "follow-up questions"],
    "case-example-swedish-manager-korea": ["power distance", "hierarchy", "decision rights", "participation"],
    "case-example-chinese-supplier-gift": ["gift-giving", "business ethics", "relationship", "universalism"],
    "case-example-culture-shock": ["culture shock", "adaptation", "cultural cues", "social support"],
    "case-example-stereotype": ["stereotype", "generalization", "individual differences", "identity"],
    "case-example-face": ["face", "public criticism", "feedback", "harmony"],
    "case-example-eye-contact": ["nonverbal communication", "eye contact", "respect", "authority"],
  };

  const splitCaseExampleSource = String.raw`
**例子 1：美日商务谈判**

**English Case**  
An American software company is negotiating with a Japanese firm. The American representative gives the Japanese side a printed contract and asks them to discuss deliverables, deadlines and penalties point by point. When the Americans ask whether the Japanese side agrees with a penalty clause, the Japanese representatives remain silent and say that the issue may require further discussion. Later, the Americans think the Japanese side is avoiding the issue, while the Japanese side feels that instant decisions may damage harmony.

**中文案例**  
一家美国软件公司和一家日本公司谈判。美国代表把打印好的合同交给日方，要求逐项讨论交付内容、截止日期和违约处罚。当美方询问日方是否同意某个处罚条款时，日方代表保持沉默，并表示这个问题可能需要进一步讨论。会后，美方认为日方在回避问题，而日方认为立即决定可能破坏团队和谐。

**English Analysis**  
This case reflects a clash between low-context and high-context communication. The American side uses a low-context style because they depend on explicit words, written contracts and direct questions. For example, they ask the Japanese side to discuss deadlines and penalties point by point. The Japanese side uses a high-context style because they respond through silence, polite behavior and indirect language.

The reason for the conflict is that the two sides interpret the same behavior differently. The Americans see silence as avoidance, while the Japanese may use silence to show caution and respect. Hofstede’s dimensions also explain the problem. The Americans show individualism because they expect quick decisions and personal responsibility. The Japanese show collectivism because they value group consensus and harmony.

To solve the problem, the American side should give the Japanese team more time for internal discussion. The Japanese side should also explain its decision-making process more clearly. For example, they can say that they need to consult executives and will give a formal reply by a specific date.

**中文分析**  
这个案例体现了低语境沟通和高语境沟通之间的冲突。美方使用低语境沟通方式，因为他们依赖明确语言、书面合同和直接问题。例如，他们要求日方逐项讨论截止日期和违约处罚。日方使用高语境沟通方式，因为他们通过沉默、礼貌行为和委婉表达来回应。

冲突原因在于，双方对同一行为的理解不同。美国人把沉默理解为回避问题，而日本人可能用沉默表示谨慎和尊重。Hofstede 的文化维度也可以解释这个问题。美国人体现个体主义，因为他们期待快速决定和个人责任。日本人体现集体主义，因为他们重视群体共识和关系和谐。

解决方法是，美方应该给日方更多内部讨论的时间。日方也应该更清楚地说明自己的决策流程。例如，他们可以说明需要咨询高层，并承诺在某个具体日期前给出正式答复。

---

**例子 2：中国学生在美国课堂上沉默**

**English Case**  
A Chinese student studies in an American university. In class, the American teacher often encourages students to ask questions and challenge ideas. However, the Chinese student seldom speaks. The teacher thinks the student is not interested or not well prepared. The student feels confused because, in his view, listening carefully and avoiding direct disagreement with the teacher are ways to show respect.

**中文案例**  
一名中国学生在美国大学学习。课堂上，美国老师经常鼓励学生提问和挑战观点。但这名中国学生很少发言。老师认为他对课程不感兴趣，或者准备不足。学生则感到困惑，因为在他看来，认真听讲、避免直接反驳老师，是表达尊重的方式。

**English Analysis**  
This case can be analyzed through power distance and communication style. The American classroom reflects lower power distance because students are expected to speak freely, ask questions and challenge the teacher. The Chinese student may come from a culture with relatively higher power distance, where students show respect by listening carefully and avoiding public disagreement.

The misunderstanding occurs because silence has different meanings in different cultures. The American teacher may interpret silence as lack of interest. However, the Chinese student may see silence as politeness and self-control. Hall’s theory is also useful here. The American classroom is more low-context because students are expected to express ideas directly, while the Chinese student relies more on high-context behavior.

To solve the problem, the teacher should not judge the student only by verbal participation. The student should also adapt to the new classroom culture. For example, he can prepare one question before class or express a different opinion in a polite way.

**中文分析**  
这个案例可以用权力距离和沟通风格来分析。美国课堂体现较低权力距离，因为学生被期待自由发言、提问和挑战老师。中国学生可能来自相对较高权力距离的文化，在这种文化中，学生通过认真听讲和避免公开反驳来表达尊重。

误解产生的原因是，沉默在不同文化中含义不同。美国老师可能把沉默理解为缺乏兴趣。但中国学生可能把沉默看作礼貌和自我控制。Hall 的理论也能解释这个案例。美国课堂更偏低语境，因为学生需要直接表达观点，而中国学生更依赖高语境行为。

解决方法是，老师不应只根据课堂发言多少评价学生。学生也应该适应新的课堂文化。例如，他可以课前准备一个问题，或者用礼貌方式表达不同意见。

---

**例子 3：德国员工和巴西员工合作项目**

**English Case**  
A German employee and a Brazilian employee work on the same international project. The German employee makes a detailed schedule and expects all meetings to start on time. The Brazilian employee sometimes arrives a few minutes late because he is talking with clients or maintaining relationships. The German employee thinks the Brazilian colleague is careless, while the Brazilian employee thinks the German colleague is too rigid.

**中文案例**  
一名德国员工和一名巴西员工共同负责一个国际项目。德国员工制定了详细时间表，并希望所有会议准时开始。巴西员工有时会因为和客户交流、维护关系而晚到几分钟。德国员工认为巴西同事不够认真，而巴西员工认为德国同事过于僵硬。

**English Analysis**  
This case reflects different cultural attitudes toward time. According to Hall’s theory, the German employee shows a monochronic time orientation. He values punctuality, schedules and completing tasks step by step. For example, he makes a detailed schedule and expects meetings to start exactly on time. The Brazilian employee shows a more polychronic orientation because he treats time more flexibly and gives more attention to relationships.

The conflict happens because the two sides have different priorities. The German employee connects punctuality with professionalism and efficiency. The Brazilian employee may believe that maintaining client relationships is also important for the success of the project. Therefore, the disagreement is not only about time, but also about task orientation and relationship orientation.

To solve the problem, they should discuss time expectations clearly at the beginning of the project. For example, final deadlines and client meetings should be fixed, while some internal discussions can be more flexible. This can help them respect both efficiency and relationships.

**中文分析**  
这个案例体现了不同文化对时间的不同态度。根据 Hall 的理论，德国员工体现单一时间取向。他重视准时、计划和按步骤完成任务。例如，他制定详细时间表，并期待会议准时开始。巴西员工则更偏多元时间取向，因为他对时间更灵活，也更重视关系。

冲突发生的原因是，双方的优先事项不同。德国员工把准时和专业、效率联系在一起。巴西员工可能认为，维护客户关系对项目成功同样重要。因此，这个分歧不只是时间问题，也涉及任务导向和关系导向的差异。

解决方法是，双方应该在项目开始时明确讨论时间期待。例如，最终截止日期和客户会议应该固定，而部分内部讨论可以更灵活。这样既能尊重效率，也能尊重关系。


**例子 4：跨国远程团队里的邮件语气**

**English Case**  
An American project manager sends a message to a Chinese designer in an online team: Please revise the layout by Friday. The designer feels the message is cold and demanding because there is no greeting or explanation. The manager thinks the message is efficient and clear. Later, the designer delays replying, and the manager thinks she is not cooperative.

**中文案例**  
一名美国项目经理在远程团队中给中国设计师发消息：请在周五前修改版面。设计师觉得这条消息很冷淡、带有命令感，因为没有问候，也没有解释原因。经理则认为这条消息高效、清楚。后来，设计师迟迟没有回复，经理认为她不配合。

**English Analysis**  
This case shows how communication style can cause misunderstanding in online intercultural communication. The American manager uses a low-context style. He gives a direct task, a clear deadline and no extra relational language. For him, this is efficient and professional. However, the Chinese designer may expect more relational signals, such as a greeting, a reason or a softer tone.

The reason for the conflict is that online communication removes many nonverbal cues. In face-to-face communication, tone, facial expression and context can soften a message. In written messages, direct language may sound harsher than intended. The designer may interpret the message as disrespectful, while the manager may interpret her delayed reply as resistance.

To solve the problem, the team should build shared communication rules. For example, managers can add brief context and polite expressions when assigning tasks. Team members should also ask for clarification instead of assuming negative intentions.

**中文分析**  
这个案例体现了线上跨文化沟通中的风格差异。美国经理使用低语境沟通方式。他直接给出任务和截止日期，没有额外的关系性语言。对他来说，这样高效、专业。但中国设计师可能期待更多关系信号，比如问候、原因说明或更缓和的语气。

冲突原因在于，线上沟通减少了非言语线索。面对面交流中，语气、表情和场景可以缓和信息。但在文字消息里，直接语言可能显得比原意更生硬。设计师可能把消息理解为不尊重，而经理可能把迟迟不回复理解为抵触。

解决方法是，团队需要建立共同的沟通规则。例如，管理者分配任务时可以增加简短背景和礼貌表达。团队成员也应该主动确认意思，而不是直接假设对方有负面态度。

---

**例子 5：印度工程师对英国经理说 I will try**

**English Case**  
A British manager asks an Indian engineer whether a difficult task can be finished by Monday. The engineer answers, I will try. The manager understands this as a likely yes and reports the deadline to the client. However, the engineer actually means that the deadline is difficult and may not be possible. When the task is not finished, the manager feels misled.

**中文案例**  
一名英国经理问印度工程师，一个困难任务能否在周一前完成。工程师回答：我会尽力。经理把这理解为基本可以完成，并把截止日期告诉了客户。但工程师真正想表达的是，这个期限很困难，可能无法完成。任务没有按时完成后，经理觉得自己被误导了。

**English Analysis**  
This case can be analyzed through high-context communication and power distance. The British manager expects a clear yes or no answer. This reflects a more low-context style. The Indian engineer gives an indirect answer because he does not want to openly reject the manager’s request. His phrase I will try may carry a hidden warning.

The misunderstanding happens because the manager focuses on the literal meaning, while the engineer depends on contextual meaning. Power distance may also be involved. If the engineer sees the manager as an authority figure, he may avoid saying no directly. He may believe that indirectness is more polite and respectful.

To solve the problem, the manager should ask follow-up questions, such as what risks may prevent completion. The engineer should also state constraints more clearly. For example, he can say that he will try, but the task probably needs three more days.

**中文分析**  
这个案例可以用高语境沟通和权力距离来分析。英国经理期待明确的是或否，这体现了较低语境的沟通方式。印度工程师给出委婉回答，因为他不想直接拒绝经理的要求。他说我会尽力，可能其实是在暗示任务有风险。

误解发生的原因是，经理关注字面意思，而工程师依赖语境含义。权力距离也可能参与其中。如果工程师把经理看作权威人物，他可能会避免直接说不。他可能认为委婉表达更礼貌，也更尊重对方。

解决方法是，经理应该追问具体风险，比如有哪些因素会影响完成。工程师也应该更清楚地说明限制。例如，他可以说自己会尽力，但这个任务大概率还需要三天。

---

**例子 6：瑞典经理在韩国分公司推行平等管理**

**English Case**  
A Swedish manager works in a Korean branch office. She asks employees to call her by her first name and encourages them to make decisions independently. However, many Korean employees still wait for her instructions and avoid disagreeing with her in meetings. The manager thinks they lack initiative, while the employees feel uncertain because they do not know how much authority they really have.

**中文案例**  
一名瑞典经理在韩国分公司工作。她要求员工直接叫她名字，并鼓励他们独立做决定。但很多韩国员工仍然等待她的指示，也避免在会议上反对她。经理认为他们缺乏主动性，而员工感到不确定，因为他们不知道自己到底有多大权限。

**English Analysis**  
This case reflects a difference in power distance. Swedish workplace culture is often associated with lower power distance. The manager wants equality, open discussion and independent decision-making. For example, she asks employees to use her first name and speak freely. Korean employees may be more familiar with a clearer hierarchy, where managers give directions and employees avoid public disagreement.

The conflict happens because the manager assumes that equality will automatically make employees more active. However, the employees may interpret her lack of detailed instruction as ambiguity. They may also worry that disagreement in public could damage respect and group harmony.

To solve the problem, the manager should not only encourage openness but also define decision rights clearly. For example, she can explain which decisions employees can make alone and which require approval. Employees can gradually practice giving opinions in smaller meetings before speaking in large meetings.

**中文分析**  
这个案例体现了权力距离差异。瑞典职场文化通常更偏低权力距离。经理希望平等、开放讨论和独立决策。例如，她要求员工直接叫她名字，并自由表达意见。韩国员工可能更习惯清晰等级结构，在这种结构中，经理下达指示，员工避免公开反对。

冲突发生的原因是，经理以为平等管理会自然让员工更主动。但员工可能把缺少详细指示理解为不明确。他们也可能担心公开表达不同意见会影响尊重和群体和谐。

解决方法是，经理不只要鼓励开放，还要清楚说明决策权限。例如，她可以说明哪些决定员工可以独立完成，哪些需要审批。员工也可以先在小型会议中练习表达意见，再逐渐适应大型会议发言。

---

**例子 7：中国供应商给美国客户送贵重礼物**

**English Case**  
A Chinese supplier visits an American company before signing a contract. To show sincerity and respect, the supplier gives the American client an expensive gift. The Chinese supplier sees the gift as a way to build trust and a long-term relationship. However, the American client feels uncomfortable and worries that accepting the gift may violate company ethics rules.

**中文案例**  
一名中国供应商在签合同前拜访一家美国公司。为了表达诚意和尊重，供应商送给美国客户一份贵重礼物。中国供应商认为礼物是建立信任和长期关系的方式。但美国客户感到不舒服，并担心接受礼物可能违反公司的伦理规定。

**English Analysis**  
This case shows different cultural expectations about gift-giving and business relationships. The Chinese supplier may come from a relationship-oriented business culture, where gifts can express respect, goodwill and commitment to long-term cooperation. The American client may come from a rule-oriented business culture, where expensive gifts before a contract may be seen as inappropriate.

The conflict happens because the same gift carries different meanings. For the supplier, the gift is a social gesture. For the client, it may look like pressure or a conflict of interest. This can also be connected with universalism: the American company may expect the same ethical rule to apply to everyone, regardless of personal relationship.

To solve the problem, both sides should clarify gift policies before meetings. The supplier can choose a small symbolic gift instead of an expensive one. The American client can politely explain company rules without rejecting the relationship itself.

**中文分析**  
这个案例体现了商务关系和礼物文化的差异。中国供应商可能来自更重关系的商务文化，礼物可以表达尊重、善意和长期合作意愿。美国客户可能来自更重规则的商务文化，在合同签订前收贵重礼物可能被认为不合适。

冲突发生的原因是，同一份礼物承载了不同含义。对供应商来说，礼物是社交礼节。对客户来说，它可能像压力，也可能涉及利益冲突。这也可以联系 universalism：美国公司可能期待同一套伦理规则适用于所有人，而不因私人关系改变。

解决方法是，双方应该在会议前明确礼物政策。供应商可以选择小型象征性礼物，而不是贵重礼物。美国客户也可以礼貌解释公司规定，同时表明自己并不是拒绝合作关系。


**例子 8：文化冲击 Culture Shock**

**English Case**  
A Chinese student goes to the United States for graduate study. At first, she feels excited. After a few weeks, she becomes anxious because she cannot understand local jokes, classroom discussions and social invitations. She misses Chinese food and friends, and she begins to avoid social activities.

**中文案例**  
一名中国学生去美国读研究生。刚开始，她感到很兴奋。几周后，她开始焦虑，因为她听不懂当地笑话、课堂讨论和社交邀请。她想念中国食物和朋友，也开始避免参加社交活动。

**English Analysis**  
This case reflects culture shock. Culture shock refers to the anxiety and stress people experience when they enter an unfamiliar cultural environment. For example, the student cannot understand local humor, classroom interaction or social rules. These problems make daily communication difficult.

The reason is that she has lost many familiar cultural cues. In her own culture, she knows how to speak, behave and interpret others’ meanings. In the new culture, the same rules no longer work. Language barriers, different food, different teaching styles and weak social support all increase her stress.

To solve the problem, she should learn more about the host culture and stay connected with her own culture. For example, she can join campus activities, ask classmates about local customs, and keep regular contact with family and friends. Gradual adjustment can help her become more comfortable.

**中文分析**  
这个案例体现了文化冲击。文化冲击指人进入陌生文化环境后产生的焦虑和压力。例如，这名学生听不懂当地幽默、课堂互动和社交规则，这些问题让日常交流变得困难。

原因在于，她失去了很多熟悉的文化线索。在自己的文化中，她知道如何说话、如何行动、如何理解别人。但在新文化中，原来的规则不一定适用。语言障碍、饮食差异、教学方式差异和社会支持不足都会增加压力。

解决方法是，她应该了解东道国文化，同时保持与本国文化的联系。例如，她可以参加校园活动，向同学询问当地习俗，也可以定期和家人朋友联系。逐渐适应可以帮助她变得更自在。

---

**例子 9：刻板印象 Stereotype**

**English Case**  
An American student works on a group project with two Chinese classmates. Before the project begins, he assumes that the Chinese students must be quiet, hardworking and good at mathematics. During meetings, he assigns all data analysis work to them without asking about their interests or strengths.

**中文案例**  
一名美国学生和两名中国同学一起做小组项目。项目开始前，他认为中国学生一定安静、勤奋、擅长数学。开会时，他没有询问他们的兴趣和优势，就把所有数据分析工作都分配给他们。

**English Analysis**  
This case shows the problem of stereotype. A stereotype is a fixed and oversimplified idea about a group of people. The American student assumes that the Chinese classmates are naturally good at mathematics and data analysis. This assumption ignores their individual differences.

The reason for the misunderstanding is that he treats group identity as personal identity. Cultural generalizations can sometimes help people understand broad patterns, but they become harmful when they are applied to every individual. The Chinese students may feel limited or disrespected because their real abilities and preferences are not considered.

To solve the problem, the group should communicate openly before assigning tasks. For example, each member can explain what he or she is good at and what role he or she prefers. Intercultural communication requires people to avoid judging individuals only by national or ethnic identity.

**中文分析**  
这个案例体现了刻板印象问题。刻板印象是对某个群体固定、简化的看法。美国学生认为中国同学天然擅长数学和数据分析，这种判断忽视了他们的个体差异。

误解原因在于，他把群体身份当成了个人身份。文化概括有时可以帮助人理解大致模式，但如果把它套到每个人身上，就会产生问题。中国学生可能会感到被限制或不被尊重，因为他们真实的能力和偏好没有被考虑。

解决方法是，小组在分配任务前应该公开沟通。例如，每个成员可以说明自己擅长什么、希望承担什么角色。跨文化交际要求人们不能只根据国籍或族群身份评价个体。

---

**例子 10：面子 Face**

**English Case**  
During a meeting, an American manager directly tells a Chinese employee that his report is poorly organized and must be rewritten. The manager believes that direct feedback can improve work efficiency. However, the employee feels embarrassed because the criticism is made in front of other colleagues.

**中文案例**  
在一次会议上，一名美国经理直接告诉中国员工，他的报告结构很差，必须重写。经理认为直接反馈可以提高工作效率。但这名员工感到尴尬，因为批评是在其他同事面前提出的。

**English Analysis**  
This case can be analyzed through the concept of face. Face refers to the self-image a person wants to present to others. The American manager focuses on the task and gives direct feedback in public. For him, the criticism is about the report, not about the employee as a person.

The Chinese employee may interpret the public criticism differently. In a collectivistic culture, public image and relational harmony are often important. Being criticized in front of colleagues may threaten his face and make him feel ashamed. The conflict is caused by different expectations about feedback and respect.

To solve the problem, the manager can give negative feedback privately and use a softer tone. For example, he can first discuss what needs improvement and then offer specific suggestions. The employee can also ask for clearer standards so that the revision becomes task-focused rather than personal.

**中文分析**  
这个案例可以用面子概念来分析。面子指一个人希望在他人面前呈现的自我形象。美国经理关注任务，并在公开场合直接反馈。对他来说，批评针对的是报告，不是员工本人。

中国员工可能会用不同方式理解公开批评。在集体主义文化中，公众形象和关系和谐通常很重要。在同事面前被批评可能威胁他的面子，让他感到难堪。冲突来自双方对反馈和尊重的期待不同。

解决方法是，经理可以私下给出负面反馈，并使用更缓和的语气。例如，他可以讨论哪些地方需要改进，再提出具体建议。员工也可以询问更清楚的标准，让修改集中在任务本身，而不是个人评价上。

---

**例子 11：非言语沟通 Eye Contact**

**English Case**  
An American teacher talks with a Japanese student after class. The teacher notices that the student often looks down instead of making direct eye contact. The teacher thinks the student may be dishonest or not confident. The student, however, believes that avoiding long eye contact shows respect.

**中文案例**  
一名美国老师课后和一名日本学生谈话。老师发现学生经常低头，而不是直接看着老师。老师认为学生可能不诚实，或者缺乏自信。但学生认为，避免长时间直视对方是一种尊重。

**English Analysis**  
This case reflects cultural differences in nonverbal communication. Eye contact does not have the same meaning in every culture. In American culture, direct eye contact is often connected with confidence, honesty and attention. Therefore, the teacher may expect the student to look at him while speaking.

The Japanese student may follow a different nonverbal rule. In his cultural background, long direct eye contact with a teacher or authority figure may seem rude or aggressive. Looking down may be a way to show respect. The misunderstanding occurs because both sides interpret eye contact according to their own cultural rules.

To solve the problem, the teacher should avoid judging the student’s character only by eye contact. The student can also learn that moderate eye contact may be expected in American classrooms. Both sides need to understand that nonverbal messages are culturally learned.

**中文分析**  
这个案例体现了非言语沟通的文化差异。眼神接触在不同文化中含义不同。在美国文化中，直接眼神接触常和自信、诚实、专注联系在一起。因此，老师可能期待学生说话时看着自己。

日本学生可能遵循另一套非言语规则。在他的文化背景中，和老师或权威人物长时间对视可能显得不礼貌，甚至有攻击性。低头可能是表示尊重。误解发生的原因是，双方都按照自己的文化规则解释眼神接触。

解决方法是，老师不应只根据眼神接触判断学生性格。学生也可以了解，在美国课堂中适度眼神接触可能是被期待的。双方都需要明白，非言语信息也是由文化学习而来的。
`;

  function splitCaseExampleParagraphs(lines) {
    const paragraphs = [];
    let current = [];

    lines.forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || /^-{3,}$/.test(trimmed)) {
        if (current.length) {
          paragraphs.push(current.join(" "));
          current = [];
        }
        return;
      }
      current.push(trimmed);
    });

    if (current.length) paragraphs.push(current.join(" "));
    return paragraphs;
  }

  function parseSplitCaseExamples(source) {
    const cases = [];
    let current = null;
    let sectionKey = "";
    const sectionMap = {
      "English Case": "englishCase",
      "中文案例": "chineseCase",
      "English Analysis": "englishAnalysis",
      "中文分析": "chineseAnalysis",
    };

    source.replace(/\r/g, "").split("\n").forEach((line) => {
      const caseMatch = line.match(/^\*\*例子\s*(\d+)：(.+?)\*\*\s*$/);
      if (caseMatch) {
        current = {
          no: Number(caseMatch[1]),
          shortTitle: caseMatch[2].trim(),
          sections: { englishCase: [], chineseCase: [], englishAnalysis: [], chineseAnalysis: [] },
        };
        cases.push(current);
        sectionKey = "";
        return;
      }

      if (!current) return;

      const sectionMatch = line.match(/^\*\*(English Case|中文案例|English Analysis|中文分析)\*\*\s*$/);
      if (sectionMatch) {
        sectionKey = sectionMap[sectionMatch[1]];
        return;
      }

      if (sectionKey) current.sections[sectionKey].push(line);
    });

    return cases.map((item, index) => {
      const slug = splitCaseExampleSlugs[index] || `case-example-${item.no}`;
      return {
        slug,
        no: item.no,
        title: `例子 ${item.no}：${item.shortTitle}`,
        shortTitle: item.shortTitle,
        tags: splitCaseExampleTags[slug] || [],
        englishCase: splitCaseExampleParagraphs(item.sections.englishCase),
        chineseCase: splitCaseExampleParagraphs(item.sections.chineseCase),
        englishAnalysis: splitCaseExampleParagraphs(item.sections.englishAnalysis),
        chineseAnalysis: splitCaseExampleParagraphs(item.sections.chineseAnalysis),
      };
    });
  }

  const splitCaseExampleEntries = parseSplitCaseExamples(splitCaseExampleSource);

  function renderSplitCaseExample(entry) {
    const paddedNo = String(entry.no).padStart(2, "0");
    return `
      <div class="reply case-analysis case-example split-case-example">
        <section class="tldr">
          <h2>${escapeHtml(entry.title)}</h2>
          <p>拆自《案例分析例子.md》，本页保留英文案例、中文案例、英文分析和中文分析，便于逐题背诵和对照。</p>
        </section>
        <div class="source-meta">
          <span>来源：案例分析例子.md</span>
          <span>拆分例子 ${paddedNo} / ${splitCaseExampleEntries.length}</span>
        </div>
        <div class="tags">
          ${entry.tags.map((tag) => `<span class="tag tag-p">${escapeHtml(tag)}</span>`).join("")}
        </div>
        <section class="case-example-detail case-example-case">
          <div class="case-example-section-head">
            <p class="section-kicker">Case Text / 案例材料</p>
            <h2>${escapeHtml(entry.shortTitle)}</h2>
          </div>
          ${renderCaseExamplePair(entry.chineseCase, entry.englishCase, { zh: "中文案例", en: "English Case" })}
        </section>
        <section class="case-example-detail case-example-analysis">
          <div class="case-example-section-head">
            <p class="section-kicker">Analysis / 分析</p>
            <h2>理论对应、冲突原因与解决方法</h2>
          </div>
          ${renderCaseExamplePair(entry.chineseAnalysis, entry.englishAnalysis, { zh: "中文分析", en: "English Analysis" })}
        </section>
      </div>
    `;
  }

  function render(slug, entry) {
    return `
      <div class="reply">
        <section class="tldr">
          <h2>核心定义</h2>
          <p>${escapeHtml(entry.definition)}</p>
        </section>
        ${sourceBlock(sourceDefinitions[slug])}
        ${memorizationBlock(memorizationNotes[slug])}
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

  const conceptContent = Object.fromEntries(
    Object.entries(entries).map(([slug, entry]) => [slug, render(slug, entry)])
  );

  const examReviewContent = Object.fromEntries(
    examReviewEntries.map((entry) => [entry.slug, renderReviewEntry(entry)])
  );

  const unitSummaryReviewContent = Object.fromEntries(
    unitSummaryReviewEntries.map((entry) => [entry.slug, renderReviewEntry(entry)])
  );

  const summaryReviewContent = Object.fromEntries(
    summaryReviewEntries.map((entry) => [entry.slug, renderReviewEntry(entry)])
  );

  const pastPaperContent = {
    "icc-2025-final-exam": renderPastPaper2025(),
    "icc-2023-final-exam": renderPastPaper2023(),
  };

  const caseAnalysisContent = Object.fromEntries(
    caseAnalysisEntries.map((entry) => [entry.slug, renderCaseEntry(entry)])
  );

  const splitCaseExampleContent = Object.fromEntries(
    splitCaseExampleEntries.map((entry) => [entry.slug, renderSplitCaseExample(entry)])
  );

  const content = {
    ...conceptContent,
    ...examReviewContent,
    ...unitSummaryReviewContent,
    ...summaryReviewContent,
    ...pastPaperContent,
    "case-analysis-example": renderCaseAnalysisExample(),
    ...splitCaseExampleContent,
    ...caseAnalysisContent,
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = content;
  }
  root.reviewContent = content;
})(typeof self !== "undefined" ? self : this);
