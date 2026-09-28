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
};
