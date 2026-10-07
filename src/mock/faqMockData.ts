export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const MOCK_FAQ_DATA: FaqItem[] = [
  {
    id: '1',
    question: 'How do I book a Expert session?',
    answer:
      'Go to Expert, choose a Expert, select your preferred date and time, and confirm your booking.',
  },
  {
    id: '2',
    question: 'Can I reschedule my session?',
    answer:
      'Yes. Open your upcoming session and select Reschedule Session. Choose a new available date and time.',
  },
  {
    id: '3',
    question: 'How do I cancel my session?',
    answer:
      'Open your upcoming session, select Cancel Session, choose a reason, and confirm the cancellation.',
  },
  {
    id: '4',
    question: 'How do I join my online session?',
    answer:
      'Open your upcoming session and tap Join Session at the scheduled time.',
  },
  {
    id: '5',
    question: 'Is my Expert session private?',
    answer:
      'Yes. Your session information is treated as confidential and protected with appropriate security measures.',
  },
  {
    id: '6',
    question: 'Can I keep a private journal?',
    answer:
      'Yes. Your journal is designed as a private space for your thoughts, feelings, and personal growth.',
  },
  {
    id: '7',
    question: 'Can I edit or delete my journal entries?',
    answer: 'Yes. Open a journal entry and choose Edit or Delete.',
  },
];
