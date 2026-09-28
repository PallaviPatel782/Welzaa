import React from 'react';

export type ExpertType = 'welzaa' | 'marketplace';

export interface QualificationItem {
  degree: string;
  institute: string;
}

export interface SpecialtyTag {
  label: string;
  icon?: string;
}

export interface ExpertData {
  id: string;
  name: string;
  title: string;
  categoryTag: string;
  mode: string;
  isAvailableToday?: boolean;
  rating: number;
  reviewCount: number;
  price: number;
  type: ExpertType;
  AvatarSvg?: React.FC<any>;
  aboutMe?: string;
  specialties?: SpecialtyTag[];
  consultationModes?: string;
  languages?: string[];
  ageGroups?: string;
  qualifications?: QualificationItem[];
  nextSlot?: string;
  sessionDuration?: string;
}

export interface CategoryOption {
  id: string;
  name: string;
  IconComp: React.FC<any>;
  bgColor: string;
}

export type FilterTab =
  | 'specialization'
  | 'mode'
  | 'price'
  | 'rating'
  | 'language';

export interface FilterCriteria {
  specializations: string[];
  mode: 'Online' | 'Offline' | 'Both';
  priceMin: number;
  priceMax: number;
  ratingMin: number;
  languages: string[];
}
