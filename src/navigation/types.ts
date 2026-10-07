export type AuthStackParamList = {
  Splash: undefined;
  Welcome: undefined;
  Signup: undefined;
  Login: undefined;
  Otp: {
    mobileNumber: string;
    authMode: 'signup' | 'login' | 'parentConsent';
    is18Plus?: boolean;
  };
  ParentConsent: undefined;
  LocationAccess: undefined;
  ProfileSetup: {
    selectedLocation?: string;
  };
  YourConcerns: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Expert: undefined;
  AI: undefined;
  Session: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
  Sos: undefined;
  Notification: undefined;
  ExpertDetail: {
    expertId?: string;
    expert?: any;
  };
  Wallet: undefined;
  AddMoney: undefined;
  TransactionDetails: {
    transaction?: {
      id: string;
      title: string;
      subtitle: string;
      date: string;
      time: string;
      amount: string;
      type: 'refund' | 'counseling' | 'add';
      isPositive: boolean;
      doctorName?: string;
      category?: string;
      duration?: string;
      mode?: string;
      bookingId?: string;
    };
  };
  ReferAFriend: undefined;
  PersonalInformation: {
    isMinor?: boolean;
  } | undefined;
  MoodHistory: undefined;
  JournalEntries: undefined;
  NewJournalEntry: undefined;
  JournalDetail: {
    entry?: any;
  } | undefined;
  EditJournalEntry: {
    entry?: any;
  } | undefined;
  WellnessArticleDetail: {
    article?: any;
  } | undefined;
  SendFeedback: undefined;
  Faq: undefined;
  AboutUs: undefined;
  PrivacyPolicy: undefined;
  TermsConditions: undefined;
  SessionDetails: {
    session?: any;
  } | undefined;
  JoinSession: {
    session?: any;
    isMinor?: boolean;
  } | undefined;
  VideoCall: {
    session?: any;
    isMinor?: boolean;
  } | undefined;
  RescheduleSession: {
    session?: any;
    isEligible?: boolean;
  } | undefined;
  CancelSession: {
    session?: any;
    isEligible?: boolean;
  } | undefined;
  RefundPolicy: undefined;
  SessionChat: {
    session?: any;
    doctorName?: string;
  } | undefined;
  BookSessionMarketplace: {
    expert?: any;
  } | undefined;
  BookSessionWelzaaInstant: {
    category?: any;
    expert?: any;
  } | undefined;
  SelectTimeSlot: {
    expert?: any;
    sessionType?: 'instant' | 'schedule';
    consultancyMode?: 'online' | 'offline';
  } | undefined;
  ApplyCoupon: {
    expert?: any;
    bookingData?: any;
  } | undefined;
  PaymentOptions: {
    expert?: any;
    bookingData?: any;
  } | undefined;
  SessionBooked: {
    expert?: any;
    bookingData?: any;
    isQuestionnaireCompleted?: boolean;
  } | undefined;
  GetToKnowYou: {
    expert?: any;
    bookingData?: any;
    initialAnswers?: any;
  } | undefined;
  FindingExpert: {
    expert?: any;
    bookingData?: any;
  } | undefined;
};

