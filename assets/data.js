(function (root, factory) {
  const data = factory();
  if (typeof module !== "undefined" && module.exports) {
    module.exports = data;
  }
  root.reviewData = data;
})(typeof self !== "undefined" ? self : this, function () {
  const interculturalConceptTopics = [
    { slug: "generalizations", title: "generalizations" },
    { slug: "objectivity", title: "objectivity" },
    { slug: "ethnocentrism", title: "ethnocentrism" },
    { slug: "human-communication", title: "human communication" },
    { slug: "symbol", title: "symbol" },
    { slug: "culture", title: "culture" },
    { slug: "world-view", title: "world-view" },
    { slug: "intercultural-communication-competence", title: "intercultural communication competence" },
    { slug: "deep-culture", title: "deep culture" },
    { slug: "social-organizations-institutions", title: "social organizations/institutions" },
    { slug: "family", title: "family" },
    { slug: "individual-collective-dimension", title: "individual/collective dimension" },
    { slug: "perception", title: "perception" },
    { slug: "belief", title: "belief" },
    { slug: "cultural-values", title: "cultural values" },
    { slug: "behaviors", title: "behaviors" },
    { slug: "cultural-patterns-value-orientations", title: "cultural patterns/value orientations" },
    { slug: "high-context-low-context", title: "high-context/low-context" },
    { slug: "context", title: "context" },
    { slug: "uncertainty-avoidance", title: "uncertainty avoidance" },
    { slug: "power-distance", title: "power distance" },
    { slug: "masculinity-femininity", title: "masculinity/femininity" },
    { slug: "face-facework", title: "face/facework" },
    { slug: "social-identities", title: "social identities" },
    { slug: "personal-identity", title: "personal identity" },
    { slug: "gender", title: "gender" },
    { slug: "ethnic-identity-ethnicity", title: "ethnic identity/ethnicity" },
    { slug: "national-character", title: "national character" },
    { slug: "ascribed-avowed-identities", title: "ascribed/avowed identities" },
    { slug: "language", title: "language" },
    { slug: "denotative-connotative-meaning", title: "denotative/connotative meaning" },
    { slug: "nonverbal-communication", title: "nonverbal communication" },
    { slug: "paralanguage", title: "paralanguage" },
    { slug: "proxemics", title: "proxemics" },
    { slug: "monochronic-polychronic-time", title: "monochronic/polychronic time" },
    { slug: "culture-shock", title: "culture shock" },
    { slug: "acculturation", title: "acculturation" },
    { slug: "stereotyping", title: "stereotyping" },
    { slug: "prejudices", title: "prejudices" },
    { slug: "racism", title: "racism" },
    { slug: "power", title: "power" },
  ];

  return {
    site: {
      title: "期末复习站",
      subtitle: "面向期末考试的精炼复习知识集合",
      owner: "Final Review",
      assetVersion: "20260525-expanded-concepts",
    },
    courses: [
      {
        slug: "intercultural-communication",
        title: "跨文化交际",
        code: "ICC",
        summary: "为期末考试复习整理跨文化交际核心概念，重点覆盖身份、语言、非语言、文化维度与适应过程。",
        examFocus: ["术语解释", "概念辨析", "理论框架", "案例分析"],
        sections: [
          {
            slug: "concepts",
            title: "概念",
            code: "Concepts",
            summary: "跨文化交际课程的 41 个核心概念，按期末复习需要整理为定义、提出人/代表学者、主要特征、跨文化交际意义和考试辨析。",
            topics: interculturalConceptTopics,
          },
        ],
        topics: interculturalConceptTopics,
      },
    ],
  };
});
