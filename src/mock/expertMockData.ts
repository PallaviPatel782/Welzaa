import { ExpertData, CategoryOption } from '../types';
import { theme } from '../config/theme';

import DrNikitaDharmaSvg from '../assets/images/DrNikitaDharma.svg';
import DrRahulMehtaSvg from '../assets/images/Dr.RahulMehta.svg';
import DrPriyaSinghSvg from '../assets/images/Dr.PriyaSingh.svg';

import CounselingSvg from '../assets/icons/Counseling.svg';
import RelationshipsSvg from '../assets/icons/Relationships.svg';
import NutritionSvg from '../assets/icons/Nutrition.svg';
import FitnessSvg from '../assets/icons/Fitness.svg';
import EducationSvg from '../assets/icons/Education.svg';
import CareerSvg from '../assets/icons/Career.svg';
import LegalSvg from '../assets/icons/Legal.svg';
import FinanceSvg from '../assets/icons/Finance.svg';
import SleepRestSvg from '../assets/icons/SleepRest.svg';
import ParentingSvg from '../assets/icons/Parenting.svg';
import StressSvg from '../assets/icons/Stress.svg';
import MindfulSvg from '../assets/icons/Mindful.svg';
import RecoverySvg from '../assets/icons/Recovery.svg';
import GriefSvg from '../assets/icons/Grief.svg';
import LGBTQSvg from '../assets/icons/LGBTQ.svg';
import GrowthSvg from '../assets/icons/Growth.svg';
import AnxietySvg from '../assets/icons/Anxiety.svg';
import SelfEsteemSvg from '../assets/icons/Self-Esteem.svg';
import TraumaSvg from '../assets/icons/Trauma.svg';
import BurnoutSvg from '../assets/icons/Burnout.svg';
import AddictionSvg from '../assets/icons/Addiction.svg';
import AngerSvg from '../assets/icons/Anger.svg';
import PhobiasSvg from '../assets/icons/Phobias.svg';
import ADHDSvg from '../assets/icons/ADHD.svg';

export const PRICE_STEPS = [
  { id: 0, label: '0', val: 0 },
  { id: 1, label: '₹1000', val: 1000 },
  { id: 2, label: '₹2500', val: 2500 },
  { id: 3, label: 'Any', val: 99999 },
];

export const RATING_STEPS = [
  { id: 0, label: '5', score: 5.0 },
  { id: 1, label: '4.5', score: 4.5 },
  { id: 2, label: '4.0', score: 4.0 },
  { id: 3, label: '3.5', score: 3.5 },
  { id: 4, label: 'Any', score: 0 },
];

export const ALL_CATEGORIES: CategoryOption[] = [
  { id: 'counseling', name: 'Counseling', IconComp: CounselingSvg, bgColor: theme.colors.softMint },
  { id: 'relationships', name: 'Relationships', IconComp: RelationshipsSvg, bgColor: theme.colors.softRose },
  { id: 'nutrition', name: 'Nutrition', IconComp: NutritionSvg, bgColor: theme.colors.softSage },
  { id: 'fitness', name: 'Fitness', IconComp: FitnessSvg, bgColor: theme.colors.softPeriwinkle },
  { id: 'education', name: 'Education', IconComp: EducationSvg, bgColor: theme.colors.softSkyBlue },
  { id: 'career', name: 'Career', IconComp: CareerSvg, bgColor: theme.colors.softLavender },
  { id: 'legal', name: 'Legal', IconComp: LegalSvg, bgColor: theme.colors.softWarmYellow },
  { id: 'finance', name: 'Finance', IconComp: FinanceSvg, bgColor: theme.colors.softAmber },
  { id: 'sleep_rest', name: 'Sleep & Rest', IconComp: SleepRestSvg, bgColor: theme.colors.softBlue },
  { id: 'parenting', name: 'Parenting', IconComp: ParentingSvg, bgColor: theme.colors.softSage },
  { id: 'stress', name: 'Stress', IconComp: StressSvg, bgColor: theme.colors.softRose },
  { id: 'mindful', name: 'Mindful', IconComp: MindfulSvg, bgColor: theme.colors.softMint },
  { id: 'recovery', name: 'Recovery', IconComp: RecoverySvg, bgColor: theme.colors.softSkyBlue },
  { id: 'grief', name: 'Grief', IconComp: GriefSvg, bgColor: theme.colors.softWarmYellow },
  { id: 'lgbtq', name: 'LGBTQ+', IconComp: LGBTQSvg, bgColor: theme.colors.softLavender },
  { id: 'growth', name: 'Growth', IconComp: GrowthSvg, bgColor: theme.colors.softSage },
  { id: 'anxiety', name: 'Anxiety', IconComp: AnxietySvg, bgColor: theme.colors.softMint },
  { id: 'self_esteem', name: 'Self-Esteem', IconComp: SelfEsteemSvg, bgColor: theme.colors.softSkyBlue },
  { id: 'trauma', name: 'Trauma', IconComp: TraumaSvg, bgColor: theme.colors.softRose },
  { id: 'burnout', name: 'Burnout', IconComp: BurnoutSvg, bgColor: theme.colors.softWarmYellow },
  { id: 'addiction', name: 'Addiction', IconComp: AddictionSvg, bgColor: theme.colors.softAmber },
  { id: 'anger', name: 'Anger', IconComp: AngerSvg, bgColor: theme.colors.softRose },
  { id: 'phobias', name: 'Phobias', IconComp: PhobiasSvg, bgColor: theme.colors.softLavender },
  { id: 'adhd', name: 'ADHD', IconComp: ADHDSvg, bgColor: theme.colors.softMint },
];

export const MOCK_EXPERTS: ExpertData[] = [
  {
    id: 'exp_1',
    name: 'Dr.Nikita Dharma',
    title: 'Clinical Psychologist',
    categoryTag: 'Relationship',
    mode: 'Online/Offline',
    isAvailableToday: true,
    rating: 4.3,
    reviewCount: 128,
    price: 2000,
    type: 'welzaa',
    AvatarSvg: DrNikitaDharmaSvg,
    aboutMe:
      'Dr. Ananya Sharma is a compassionate and experienced Clinical Psychologist dedicated to helping individuals better understand their emotions, overcome personal challenges, and build healthier coping strategies.',
    specialties: [
      { label: 'Couple Therapy' },
      { label: 'Depression' },
      { label: 'Breakups' },
    ],
    consultationModes: 'Video / Audio / Chat',
    languages: ['English', 'Hindi', 'Marathi'],
    ageGroups: '18+ Adults',
    qualifications: [
      {
        degree: 'M.Phil in Clinical Psychology',
        institute: 'Institute of Mental Health & Neurosciences',
      },
      {
        degree: 'M.A. in Psychology',
        institute: 'University of Pune',
      },
    ],
    nextSlot: 'Tomorrow, 10:00 AM',
    sessionDuration: 'for 45 mins consultation',
  },
  {
    id: 'exp_2',
    name: 'Dr.Rahul Mehta',
    title: 'Counseling Psychologist',
    categoryTag: 'Counseling',
    mode: 'Online',
    isAvailableToday: true,
    rating: 4.3,
    reviewCount: 128,
    price: 4000,
    type: 'welzaa',
    AvatarSvg: DrRahulMehtaSvg,
    aboutMe:
      'Dr. Rahul Mehta specializes in anxiety, stress management, and counseling for young adults looking for guidance in modern fast-paced work and life environments.',
    specialties: [
      { label: 'Stress Management' },
      { label: 'Anxiety' },
      { label: 'Work Life' },
    ],
    consultationModes: 'Video / Audio / Chat',
    languages: ['English', 'Hindi'],
    ageGroups: '18+ Adults',
    qualifications: [
      {
        degree: 'Ph.D. in Counseling Psychology',
        institute: 'Delhi University',
      },
      {
        degree: 'M.Sc. in Psychology',
        institute: 'Jamia Millia Islamia',
      },
    ],
    nextSlot: 'Today, 04:00 PM',
    sessionDuration: 'for 45 mins consultation',
  },
  {
    id: 'exp_4',
    name: 'Dr.Ananya Sharma',
    title: 'Senior Psychiatrist',
    categoryTag: 'Anxiety',
    mode: 'Online/Offline',
    isAvailableToday: true,
    rating: 4.8,
    reviewCount: 96,
    price: 3500,
    type: 'welzaa',
    AvatarSvg: DrNikitaDharmaSvg,
    aboutMe:
      'Dr. Ananya Sharma is a senior psychiatrist with over 10 years of clinical experience in mood disorders, trauma care, and personalized therapy.',
    specialties: [
      { label: 'Trauma' },
      { label: 'Mood Disorders' },
      { label: 'Anxiety' },
    ],
    consultationModes: 'Video / Audio / Chat',
    languages: ['English', 'Hindi', 'Bengali'],
    ageGroups: '18+ Adults',
    qualifications: [
      {
        degree: 'MD in Psychiatry',
        institute: 'AIIMS New Delhi',
      },
    ],
    nextSlot: 'Tomorrow, 11:30 AM',
    sessionDuration: 'for 60 mins consultation',
  },
  {
    id: 'exp_6',
    name: 'Dr.Aarav Kapoor',
    title: 'Family Therapist',
    categoryTag: 'Parenting',
    mode: 'Online',
    isAvailableToday: true,
    rating: 4.5,
    reviewCount: 112,
    price: 2500,
    type: 'welzaa',
    AvatarSvg: DrPriyaSinghSvg,
    aboutMe:
      'Experienced family therapist specializing in parent-child relationship building, adolescent guidance, and family communication dynamics.',
    specialties: [
      { label: 'Parenting' },
      { label: 'Family Therapy' },
      { label: 'Child Guidance' },
    ],
    consultationModes: 'Video / Audio',
    languages: ['English', 'Hindi', 'Punjabi'],
    ageGroups: 'All Ages',
    qualifications: [
      {
        degree: 'M.A. in Clinical Psychology',
        institute: 'Panjab University',
      },
    ],
    nextSlot: 'Tomorrow, 02:00 PM',
    sessionDuration: 'for 45 mins consultation',
  },
  {
    id: 'exp_3',
    name: 'Dr.Priya Singh',
    title: 'Counseling Psychologist',
    categoryTag: 'Nutrition',
    mode: 'Online/Offline',
    isAvailableToday: true,
    rating: 4.3,
    reviewCount: 128,
    price: 5000,
    type: 'marketplace',
    AvatarSvg: DrPriyaSinghSvg,
    aboutMe:
      'Dr. Priya Singh is a Marketplace Expert focusing on lifestyle counseling, eating behavior, and holistic mental wellness.',
    specialties: [
      { label: 'Nutrition Therapy' },
      { label: 'Wellness' },
      { label: 'Self Care' },
    ],
    consultationModes: 'Video / Audio / Chat',
    languages: ['English', 'Hindi'],
    ageGroups: '18+ Adults',
    qualifications: [
      {
        degree: 'M.Sc. in Foods & Nutrition',
        institute: 'SNDT Womens University',
      },
    ],
    nextSlot: 'Today, 06:00 PM',
    sessionDuration: 'for 45 mins consultation',
  },
  {
    id: 'exp_5',
    name: 'Dr.Vikram Malhotra',
    title: 'Career Counselor',
    categoryTag: 'Career',
    mode: 'Online',
    isAvailableToday: true,
    rating: 4.6,
    reviewCount: 72,
    price: 1800,
    type: 'marketplace',
    AvatarSvg: DrRahulMehtaSvg,
    aboutMe:
      'Certified career strategist helping professionals navigate career transitions, workplace burnout, and executive development.',
    specialties: [
      { label: 'Career Transition' },
      { label: 'Burnout' },
      { label: 'Leadership' },
    ],
    consultationModes: 'Video / Chat',
    languages: ['English', 'Hindi'],
    ageGroups: '18+ Adults',
    qualifications: [
      {
        degree: 'MBA & Certified Career Coach',
        institute: 'IIM Ahmedabad',
      },
    ],
    nextSlot: 'Tomorrow, 09:00 AM',
    sessionDuration: 'for 45 mins consultation',
  },
  {
    id: 'exp_7',
    name: 'Dr.Meera Patel',
    title: 'Clinical Psychologist',
    categoryTag: 'Stress',
    mode: 'Online/Offline',
    isAvailableToday: true,
    rating: 4.7,
    reviewCount: 145,
    price: 2200,
    type: 'marketplace',
    AvatarSvg: DrNikitaDharmaSvg,
    aboutMe:
      'Clinical specialist working with stress relief techniques, mindfulness practices, and cognitive behavioral therapy.',
    specialties: [
      { label: 'CBT' },
      { label: 'Stress' },
      { label: 'Mindfulness' },
    ],
    consultationModes: 'Video / Audio / Chat',
    languages: ['English', 'Hindi', 'Gujarati'],
    ageGroups: '18+ Adults',
    qualifications: [
      {
        degree: 'M.Phil in Medical Psychology',
        institute: 'NIMHANS',
      },
    ],
    nextSlot: 'Tomorrow, 03:00 PM',
    sessionDuration: 'for 45 mins consultation',
  },
  {
    id: 'exp_8',
    name: 'Dr.Siddharth Rao',
    title: 'Mental Health Expert',
    categoryTag: 'Mindful',
    mode: 'Online',
    isAvailableToday: true,
    rating: 4.4,
    reviewCount: 88,
    price: 3000,
    type: 'marketplace',
    AvatarSvg: DrRahulMehtaSvg,
    aboutMe:
      'Holistic practitioner integrating mindfulness-based cognitive therapy with modern emotional wellness practices.',
    specialties: [
      { label: 'Mindful Living' },
      { label: 'Meditation' },
      { label: 'Self-Esteem' },
    ],
    consultationModes: 'Video / Audio',
    languages: ['English', 'Hindi', 'Kannada'],
    ageGroups: '18+ Adults',
    qualifications: [
      {
        degree: 'M.Sc. Applied Psychology',
        institute: 'Christ University',
      },
    ],
    nextSlot: 'Tomorrow, 05:00 PM',
    sessionDuration: 'for 45 mins consultation',
  },
];
