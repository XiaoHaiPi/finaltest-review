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

  function render(slug, entry) {
    return `
      <div class="reply">
        <section class="tldr">
          <h2>核心定义</h2>
          <p>${escapeHtml(entry.definition)}</p>
        </section>
        ${sourceBlock(sourceDefinitions[slug])}
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

  const summaryReviewContent = Object.fromEntries(
    summaryReviewEntries.map((entry) => [entry.slug, renderReviewEntry(entry)])
  );

  const content = {
    ...conceptContent,
    ...examReviewContent,
    ...summaryReviewContent,
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = content;
  }
  root.reviewContent = content;
})(typeof self !== "undefined" ? self : this);
