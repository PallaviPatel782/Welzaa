export interface PrivacySection {
  id: string;
  title: string;
  content: string;
  bullets?: string[];
}

export const MOCK_PRIVACY_SECTIONS: PrivacySection[] = [
  {
    id: '1',
    title: '1. Information We Collect',
    content: 'Depending on how you use Welzaa, we may collect information such as:',
    bullets: [
      'Name and profile information',
      'Mobile number',
      'Date of birth',
      'Location information',
      'Appointment and booking details',
      'Payment and transaction information',
      'Mood and journal information',
      'Feedback and support requests',
    ],
  },
  {
    id: '2',
    title: '2. How We Use Your Information',
    content: 'We may use information to:',
    bullets: [
      'Create and manage your account',
      'Provide Expert and wellness services',
      'Manage appointments',
      'Process payments',
      'Personalize your experience',
      'Improve our services',
      'Provide customer support',
      'Maintain safety and security',
    ],
  },
  {
    id: '3',
    title: '3. Journal Privacy',
    content:
      'Your journal is intended to be private. Journal entries should not be shared with Expert or other users unless you explicitly choose to use a sharing feature provided by the app.',
  },
  {
    id: '4',
    title: '4. Information Security',
    content:
      'We use reasonable security measures to protect your information from unauthorized access, misuse, or disclosure.',
  },
  {
    id: '5',
    title: '5. Your Choices',
    content:
      'You may be able to update your personal information and manage certain account or privacy settings through the app.',
  },
  {
    id: '6',
    title: '6. Third-Party Services',
    content:
      'Some features may use third-party service providers, such as payment or communication services. These providers may process information as required to provide their services.',
  },
  {
    id: '7',
    title: "7. Children's Privacy",
    content:
      'If a user is under 18, parent or legal guardian consent may be required before accessing applicable counselling services.',
  },
];
