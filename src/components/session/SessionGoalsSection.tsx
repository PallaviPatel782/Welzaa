import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText } from '../common';
import { theme } from '../../config/theme';
import { GoalItem } from '../../types/session';
import TargetIconSvg from '../../assets/icons/targetIcon.svg';

interface SessionGoalsSectionProps {
  goals?: GoalItem[];
}

export const SessionGoalsSection: React.FC<SessionGoalsSectionProps> = ({ goals }) => {
  const goalList = goals && goals.length > 0 ? goals : [
    {
      id: '1',
      title: '1. Practice 5 Minute Morning Meditation',
      subtitle: 'Daily 5 min',
    },
    {
      id: '2',
      title: '2. Journal Your Thoughts',
      subtitle: "Write 3 things you're grateful for",
    },
  ];

  return (
    <View style={styles.goalsSection}>
      <View style={styles.goalsHeaderRow}>
        <TargetIconSvg width={20} height={20} />
        <AppText style={styles.goalsTitle}>Goals & Action Plan</AppText>
      </View>

      {goalList.map((goal, index) => (
        <React.Fragment key={goal.id || index}>
          {index > 0 && <View style={styles.goalDivider} />}
          <View style={styles.goalItem}>
            <AppText style={styles.goalItemTitle}>{goal.title}</AppText>
            <AppText style={styles.goalItemSubtitle}>{goal.subtitle}</AppText>
          </View>
        </React.Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  goalsSection: {
    marginTop: 8,
  },
  goalsHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  goalsTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 14,
    color: theme.colors.dark,
  },
  goalItem: {
    paddingVertical: 10,
  },
  goalDivider: {
    height: 1,
    backgroundColor: theme.colors.borderLight,
  },
  goalItemTitle: {
    fontFamily: theme.fonts.medium,
    fontSize: 13,
    color: theme.colors.dark,
    marginBottom: 2,
  },
  goalItemSubtitle: {
    fontFamily: theme.fonts.regular,
    fontSize: 11.5,
    color: theme.colors.gray,
  },
});
