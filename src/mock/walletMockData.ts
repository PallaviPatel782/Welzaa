import { TransactionItemData } from '../screens/main/wallet/types';

export const DEFAULT_WALLET_BALANCE = '₹12,450';

export const QUICK_AMOUNTS = ['100', '500', '1000', '1500', '2000'];

export const MOCK_TRANSACTIONS: TransactionItemData[] = [
  {
    id: '1',
    title: 'Booking Refund',
    subtitle: 'Counselling Session',
    date: '15 Sep 2026, 11:32 AM',
    time: '11:32 AM',
    amount: '+₹100.00',
    type: 'refund',
    isPositive: true,
  },
  {
    id: '2',
    title: 'Counseling Session',
    subtitle: 'Dr. Anjali Sharma',
    date: '15 Sep 2026, 11:32 AM',
    time: '06:00 PM',
    amount: '-₹500.00',
    type: 'counseling',
    isPositive: false,
    doctorName: 'Dr. Anjali Sharma',
    category: 'Relationship counseling',
    duration: '45 Minutes',
    mode: 'Online Session',
    bookingId: 'WZ123',
  },
  {
    id: '3',
    title: 'Wallet Add Money',
    subtitle: 'UPI',
    date: '15 Sep 2026, 10:20 AM',
    time: '10:20 AM',
    amount: '+₹500.00',
    type: 'add',
    isPositive: true,
  },
  {
    id: '4',
    title: 'Booking Refund',
    subtitle: 'Counselling Session',
    date: '15 Sep 2026, 11:32 AM',
    time: '11:32 AM',
    amount: '+₹100.00',
    type: 'refund',
    isPositive: true,
  },
];

export const DEFAULT_TRANSACTION_DETAILS: TransactionItemData = {
  id: '2',
  title: 'Counseling Session',
  subtitle: 'Dr. Anjali Sharma / Relationship counseling',
  date: '16 Sep 2026',
  time: '06:00 PM',
  amount: '₹500',
  type: 'counseling',
  isPositive: false,
  duration: '45 Minutes',
  mode: 'Online Session',
  bookingId: 'WZ123',
  doctorName: 'Dr. Anjali Sharma',
};
