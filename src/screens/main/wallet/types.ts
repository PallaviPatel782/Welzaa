export interface TransactionItemData {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time?: string;
  amount: string;
  type: 'refund' | 'counseling' | 'add';
  isPositive: boolean;
  doctorName?: string;
  category?: string;
  duration?: string;
  mode?: string;
  bookingId?: string;
}
