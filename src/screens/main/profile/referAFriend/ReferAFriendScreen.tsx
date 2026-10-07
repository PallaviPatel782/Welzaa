import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScreenWrapper } from '../../../../components/layout';
import { AppHeader, BottomWave } from '../../../../components/common';
import { theme } from '../../../../config/theme';
import {
  ReferHeader,
  ReferralCodeCard,
  ReferralList,
} from '../../../../components/profile';
import { MOCK_REFERRALS } from '../../../../mock';
import { styles } from './styles';

export const ReferAFriendScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  return (
    <ScreenWrapper
      backgroundColor={theme.colors.white}
      edges={['top', 'left', 'right', 'bottom']}
      renderBackground={() => <BottomWave />}
    >
      <AppHeader title="Refer A Friend" onBackPress={() => navigation.goBack()} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <ReferHeader />
        <ReferralCodeCard referralCode="Welzaa123" />
        <ReferralList items={MOCK_REFERRALS} />
      </ScrollView>
    </ScreenWrapper>
  );
};
