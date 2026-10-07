export interface FilterConfig {
  monthName: string;
  start: number;
  end: number;
  rangeText: string;
  mood: string;
  emoji?: string;
}

export const MOCK_MOOD_MONTH_NAMES = [
  'November 2026',
  'December 2026',
  'January 2027',
];

export const MOCK_MOOD_FILTER_CONFIGS: Record<string, FilterConfig> = {
  'Last 7 days': {
    monthName: 'December 2026',
    start: 24,
    end: 30,
    rangeText: '24th Dec - 30th Dec',
    mood: 'Happy',
  },
  'Last 30 days': {
    monthName: 'December 2026',
    start: 1,
    end: 30,
    rangeText: '1st Dec - 30th Dec',
    mood: 'Excited',
  },
  'Last Month': {
    monthName: 'November 2026',
    start: 1,
    end: 30,
    rangeText: '1st Nov - 30th Nov',
    mood: 'Neutral',
  },
  'Date Range': {
    monthName: 'December 2026',
    start: 10,
    end: 20,
    rangeText: '10th Dec - 20th Dec',
    mood: 'Happy',
  },
  'This Month': {
    monthName: 'December 2026',
    start: 6,
    end: 15,
    rangeText: '6th Dec - 15th Dec',
    mood: 'Happy',
  },
};

