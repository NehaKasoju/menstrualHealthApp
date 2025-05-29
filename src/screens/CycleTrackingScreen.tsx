import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { format } from 'date-fns';

const CycleTrackingScreen = () => {
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [cycleData, setCycleData] = useState({
    lastPeriod: '2024-03-01',
    cycleLength: 28,
    periodLength: 5,
  });

  const getMarkedDates = () => {
    const markedDates: any = {};
    const startDate = new Date(cycleData.lastPeriod);
    
    // Mark period days
    for (let i = 0; i < cycleData.periodLength; i++) {
      const periodDate = new Date(startDate);
      periodDate.setDate(startDate.getDate() + i);
      markedDates[format(periodDate, 'yyyy-MM-dd')] = {
        selected: true,
        selectedColor: '#FF69B4',
        marked: true,
      };
    }

    // Mark fertile window
    const ovulationDate = new Date(startDate);
    ovulationDate.setDate(startDate.getDate() + 14);
    for (let i = -3; i <= 3; i++) {
      const fertileDate = new Date(ovulationDate);
      fertileDate.setDate(ovulationDate.getDate() + i);
      if (!markedDates[format(fertileDate, 'yyyy-MM-dd')]) {
        markedDates[format(fertileDate, 'yyyy-MM-dd')] = {
          marked: true,
          dotColor: '#FFB6C1',
        };
      }
    }

    return markedDates;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.calendarContainer}>
        <Calendar
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={getMarkedDates()}
          theme={{
            todayTextColor: '#FF69B4',
            selectedDayBackgroundColor: '#FF69B4',
            arrowColor: '#FF69B4',
          }}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>Cycle Information</Text>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Last Period:</Text>
          <Text style={styles.value}>{cycleData.lastPeriod}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Cycle Length:</Text>
          <Text style={styles.value}>{cycleData.cycleLength} days</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Period Length:</Text>
          <Text style={styles.value}>{cycleData.periodLength} days</Text>
        </View>
      </View>

      <View style={styles.legendContainer}>
        <Text style={styles.legendTitle}>Legend</Text>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#FF69B4' }]} />
          <Text style={styles.legendText}>Period Days</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#FFB6C1' }]} />
          <Text style={styles.legendText}>Fertile Window</Text>
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
  calendarContainer: {
    padding: 10,
  },
  infoContainer: {
    padding: 20,
    backgroundColor: '#F8F8F8',
    margin: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF69B4',
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#666',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  legendContainer: {
    padding: 20,
    margin: 10,
  },
  legendTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF69B4',
    marginBottom: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10,
  },
  legendText: {
    fontSize: 14,
    color: '#666',
  },
});

export default CycleTrackingScreen; 