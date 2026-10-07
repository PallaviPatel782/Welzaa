export interface PolicySection {
  id: string;
  title: string;
  content: string;
}

export const MOCK_TERMS_CONDITIONS: PolicySection[] = [
  {
    id: '1',
    title: '1. Using Welzaa',
    content:
      'Welzaa provides access to Expert, wellness resources, journaling, mood tracking, and related services.',
  },
  {
    id: '2',
    title: '2. Expert Services',
    content:
      'Welzaa helps users connect with Expert. Expert services are provided by independent professionals. Welzaa is not a replacement for emergency medical or mental-health services.',
  },
  {
    id: '3',
    title: '3. Appointments',
    content:
      'You are responsible for providing accurate booking information. Please arrive on time for your scheduled session. Appointments may be rescheduled or cancelled according to the applicable cancellation policy.',
  },
  {
    id: '4',
    title: '4. Payments',
    content:
      'Payments must be completed through the available payment methods shown in the app. Refunds, cancellations, and wallet credits are handled according to the applicable payment policy.',
  },
  {
    id: '5',
    title: '5. User Account',
    content:
      'You are responsible for keeping your account information accurate and secure. Do not share your login or verification information with others.',
  },
  {
    id: '6',
    title: '6. Acceptable Use',
    content:
      'Do not misuse the app, provide false information, impersonate another person, or use Welzaa for unlawful activities.',
  },
  {
    id: '7',
    title: '7. Contact',
    content:
      'For questions about these terms, please contact Welzaa Support.',
  },
];
