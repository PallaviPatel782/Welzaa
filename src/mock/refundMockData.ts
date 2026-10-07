export interface RefundPolicySection {
  id: string;
  title: string;
  content: string;
}

export const MOCK_REFUND_POLICY_SECTIONS: RefundPolicySection[] = [
  {
    id: '1',
    title: '1. Session Cancellations & Refunds',
    content:
      'If you cancel an appointment within the eligible cancellation window, a full or partial refund will be credited back to your original payment method or Welzaa wallet.',
  },
  {
    id: '2',
    title: '2. Rescheduling Policy',
    content:
      'Sessions can be rescheduled up to 2 hours prior to the scheduled time without any additional fee.',
  },
  {
    id: '3',
    title: '3. Processing Time',
    content:
      'Approved refunds are processed within 5-7 business days depending on your bank or payment gateway.',
  },
  {
    id: '4',
    title: '4. Non-Refundable Cases',
    content:
      'No-shows or cancellations made after the session start time are non-refundable.',
  },
  {
    id: '5',
    title: '5. Contact Support',
    content:
      'For any queries or refund requests, please contact our support team at support@welzaa.com.',
  },
];
