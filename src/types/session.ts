import React from 'react';

export type SessionTab = 'upcoming' | 'completed' | 'cancelled';

export interface GoalItem {
  id: string;
  title: string;
  subtitle: string;
}

export interface SessionData {
  id: string;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  sessionType: string;
  price: string;
  duration: string;
  AvatarComponent: React.FC<any>;
  isInstant?: boolean;
  dateTime?: string;
  amountPaid?: string;
  bookingId?: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  summary?: string;
  goals?: GoalItem[];
  cancelledDate?: string;
  cancelReason?: string;
  cancelReasonSubtext?: string;
  additionalNote?: string;
}

export interface CancellationReason {
  id: string;
  title: string;
  subtext: string;
}
