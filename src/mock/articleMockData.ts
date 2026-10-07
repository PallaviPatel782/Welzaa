export interface ArticleSection {
  number: string;
  title: string;
  content: string;
}

export interface WellnessArticle {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  image: any;
  intro: string;
  sections: ArticleSection[];
}

export const MOCK_WELLNESS_ARTICLES: WellnessArticle[] = [
  {
    id: '1',
    title: '10 Simple Ways to Manage Anxiety',
    subtitle: 'Better mental health, happier you.',
    category: 'Mental Health',
    date: '12 Sep 2026 • 10:24 AM',
    readTime: '5 min read',
    image: require('../assets/illustrations/articles1.png'),
    intro:
      'Anxiety can feel overwhelming, but there are simple, effective ways to manage it. Here are 10 practical tips to help you feel calmer, more in control, and more like yourself again.',
    sections: [
      {
        number: '1',
        title: 'Breathe Deeply',
        content:
          'Try the 4-7-8 breathing technique: inhale for 4 seconds, hold for 7, exhale for 8. It helps calm your nervous system.',
      },
      {
        number: '2',
        title: 'Stay Present',
        content:
          'Focus on what you can control right now. Mindfulness can reduce racing thoughts and bring you back to the moment.',
      },
      {
        number: '3',
        title: 'Move Your Body',
        content:
          'Regular physical activity can help reduce stress and improve your mood.',
      },
    ],
  },
  {
    id: '2',
    title: 'The Power of Gratitude',
    subtitle: 'Small changes, big impacts on your mental well-being.',
    category: 'Self Care',
    date: '12 Sep 2026 • 10:24 AM',
    readTime: '4 min read',
    image: require('../assets/illustrations/articles2.png'),
    intro:
      'Practicing gratitude daily can transform your mindset, improve sleep quality, and foster deeper positive emotions.',
    sections: [
      {
        number: '1',
        title: 'Keep a Daily Journal',
        content:
          'Write down 3 things you are grateful for each morning or right before bed.',
      },
      {
        number: '2',
        title: 'Express Thanks to Others',
        content:
          'Send a quick note telling someone you appreciate them and value their presence.',
      },
      {
        number: '3',
        title: 'Savor Small Moments',
        content:
          'Pause and enjoy simple daily pleasures like a warm morning cup or sunny weather.',
      },
    ],
  },
  {
    id: '3',
    title: 'Mindfulness for Daily Stress',
    subtitle: 'Simple meditation tools for a busy lifestyle.',
    category: 'Mindfulness',
    date: '10 Sep 2026 • 04:15 PM',
    readTime: '6 min read',
    image: require('../assets/illustrations/articles1.png'),
    intro:
      'Mindfulness does not require hours of solitude. Brief check-ins throughout the day restore focus and emotional balance.',
    sections: [
      {
        number: '1',
        title: 'Body Scan Check-in',
        content:
          'Notice where you hold physical tension in your shoulders or neck and release it consciously.',
      },
      {
        number: '2',
        title: 'Single-Task Focus',
        content:
          'Focus on one task at a time without constantly switching between screens or notifications.',
      },
    ],
  },
];
