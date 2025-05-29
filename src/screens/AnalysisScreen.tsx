import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const AnalysisScreen = () => {
  const screenWidth = Dimensions.get('window').width;

  const cycleData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [28, 29, 27, 28, 30, 28],
        color: (opacity = 1) => `rgba(255, 105, 180, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(255, 105, 180, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cycle Analysis</Text>
        <View style={styles.chartContainer}>
          <LineChart
            data={cycleData}
            width={screenWidth - 40}
            height={220}
            chartConfig={chartConfig}
            bezier
            style={styles.chart}
          />
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>28</Text>
            <Text style={styles.statLabel}>Average Cycle Length</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>5</Text>
            <Text style={styles.statLabel}>Average Period Length</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Health Insights</Text>
        <View style={styles.insightContainer}>
          <Text style={styles.insightTitle}>Cycle Regularity</Text>
          <Text style={styles.insightText}>
            Your cycle has been regular for the past 3 months, with an average length of 28 days.
          </Text>
        </View>

        <View style={styles.insightContainer}>
          <Text style={styles.insightTitle}>Common Symptoms</Text>
          <Text style={styles.insightText}>
            • Cramps (reported in 80% of cycles)
          </Text>
          <Text style={styles.insightText}>
            • Headaches (reported in 60% of cycles)
          </Text>
          <Text style={styles.insightText}>
            • Mood swings (reported in 70% of cycles)
          </Text>
        </View>

        <View style={styles.insightContainer}>
          <Text style={styles.insightTitle}>PCOS/PCOD Risk Assessment</Text>
          <Text style={styles.insightText}>
            Based on your symptoms and cycle patterns, you show a low risk of PCOS/PCOD.
            However, if you experience any of the following, please consult a healthcare provider:
          </Text>
          <Text style={styles.insightText}>
            • Irregular periods
          </Text>
          <Text style={styles.insightText}>
            • Excessive hair growth
          </Text>
          <Text style={styles.insightText}>
            • Sudden weight gain
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF69B4',
    marginBottom: 15,
  },
  chartContainer: {
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF69B4',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  insightContainer: {
    backgroundColor: '#F8F8F8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  insightTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF69B4',
    marginBottom: 10,
  },
  insightText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
    lineHeight: 22,
  },
});

export default AnalysisScreen; 