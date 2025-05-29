import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { format } from 'date-fns';

type Symptom = {
  id: string;
  name: string;
  selected: boolean;
};

type Mood = {
  id: string;
  name: string;
  emoji: string;
  selected: boolean;
};

const SymptomsScreen = () => {
  const [symptoms, setSymptoms] = useState<Symptom[]>([
    { id: '1', name: 'Cramps', selected: false },
    { id: '2', name: 'Headache', selected: false },
    { id: '3', name: 'Bloating', selected: false },
    { id: '4', name: 'Breast Tenderness', selected: false },
    { id: '5', name: 'Acne', selected: false },
    { id: '6', name: 'Fatigue', selected: false },
    { id: '7', name: 'Mood Swings', selected: false },
    { id: '8', name: 'Back Pain', selected: false },
  ]);

  const [moods, setMoods] = useState<Mood[]>([
    { id: '1', name: 'Happy', emoji: '😊', selected: false },
    { id: '2', name: 'Calm', emoji: '😌', selected: false },
    { id: '3', name: 'Irritable', emoji: '😤', selected: false },
    { id: '4', name: 'Anxious', emoji: '😰', selected: false },
    { id: '5', name: 'Sad', emoji: '😢', selected: false },
    { id: '6', name: 'Energetic', emoji: '⚡', selected: false },
  ]);

  const toggleSymptom = (id: string) => {
    setSymptoms(symptoms.map(symptom =>
      symptom.id === id ? { ...symptom, selected: !symptom.selected } : symptom
    ));
  };

  const toggleMood = (id: string) => {
    setMoods(moods.map(mood =>
      mood.id === id ? { ...mood, selected: !mood.selected } : mood
    ));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>
          {format(new Date(), 'MMMM d, yyyy')}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>How are you feeling today?</Text>
        <View style={styles.moodContainer}>
          {moods.map(mood => (
            <TouchableOpacity
              key={mood.id}
              style={[
                styles.moodButton,
                mood.selected && styles.moodButtonSelected,
              ]}
              onPress={() => toggleMood(mood.id)}>
              <Text style={styles.moodEmoji}>{mood.emoji}</Text>
              <Text style={styles.moodText}>{mood.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Symptoms</Text>
        <View style={styles.symptomsContainer}>
          {symptoms.map(symptom => (
            <TouchableOpacity
              key={symptom.id}
              style={[
                styles.symptomButton,
                symptom.selected && styles.symptomButtonSelected,
              ]}
              onPress={() => toggleSymptom(symptom.id)}>
              <Text style={[
                styles.symptomText,
                symptom.selected && styles.symptomTextSelected,
              ]}>
                {symptom.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PCOS/PCOD Indicators</Text>
        <View style={styles.pcosContainer}>
          <Text style={styles.pcosText}>
            • Irregular periods
          </Text>
          <Text style={styles.pcosText}>
            • Heavy bleeding
          </Text>
          <Text style={styles.pcosText}>
            • Acne
          </Text>
          <Text style={styles.pcosText}>
            • Weight gain
          </Text>
          <Text style={styles.pcosText}>
            • Hair growth
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
  dateContainer: {
    padding: 20,
    backgroundColor: '#FFE4E1',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 18,
    color: '#FF69B4',
    fontWeight: 'bold',
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
  moodContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  moodButton: {
    width: '30%',
    padding: 15,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  moodButtonSelected: {
    backgroundColor: '#FF69B4',
  },
  moodEmoji: {
    fontSize: 24,
    marginBottom: 5,
  },
  moodText: {
    fontSize: 14,
    color: '#666',
  },
  symptomsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  symptomButton: {
    width: '48%',
    padding: 15,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  symptomButtonSelected: {
    backgroundColor: '#FF69B4',
  },
  symptomText: {
    fontSize: 16,
    color: '#666',
  },
  symptomTextSelected: {
    color: '#fff',
  },
  pcosContainer: {
    backgroundColor: '#F8F8F8',
    padding: 15,
    borderRadius: 10,
  },
  pcosText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
});

export default SymptomsScreen; 