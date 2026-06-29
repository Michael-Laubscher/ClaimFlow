export const emailTestData = {
  user: {
    name: "John Doe",
    email: "john@test.com",
  },

  claim: {
    number: "CLM-10001",
  },

  quote: {
    number: "QT-10001",
    amount: "R2,000,000",
    business: "ABC Logistics",
    insuranceType: "Fleet Insurance",
    coverage: "R2,000,000",
  },

  contact: {
    message: "I'd like more information about your commercial vehicle insurance options.",
  },

  newsletter: {
    title: "Latest Insurance Updates",

    intro: "Stay informed with the latest developments in transport insurance, claims management, fleet protection and industry regulations.",

    newsPageUrl: "https://test/news",

    topics: [
      {
        title: "Industry News",
        description: "Latest developments impacting transport operators.",
        url: "https://test/news?category=industry-news",
      },

      {
        title: "Insurance Insights",
        description: "Expert guidance on protecting your fleet.",
        url: "https://test/news?category=insurance-insights",
      },

      {
        title: "Claims Advice",
        description: "Practical tips to improve claims outcomes.",
        url: "https://test/news?category=claims",
      },

      {
        title: "Risk Management",
        description: "Strategies to reduce incidents and losses.",
        url: "https://test/news?category=risk-management",
      },
    ],
  },
};
