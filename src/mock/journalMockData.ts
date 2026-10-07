import { JournalEntry } from '../components/profile';

export const MOCK_DEFAULT_JOURNAL_ENTRY: JournalEntry = {
  id: '1',
  title: 'Gratitude & Growth',
  date: '12 Sep 2026',
  time: '10:24 AM',
  content:
    "Today I feel more grounded and hopeful. I'm thankful for the small steps I'm taking towards my goals. It wasn't an easy day, but I handled the challenges with more patience than before. I'm proud of myself for showing up, even when it was hard.",
  tag: 'Gratitude',
  mood: 'happy',
};

export const MOCK_JOURNAL_ENTRIES: JournalEntry[] = [
  MOCK_DEFAULT_JOURNAL_ENTRY,
  {
    id: '2',
    title: 'Small Wins',
    date: '08 Sep 2026',
    time: '07:24 AM',
    content: 'Completed my morning meditation today.',
    tag: 'Meditation',
    mood: 'happy',
  },
];

