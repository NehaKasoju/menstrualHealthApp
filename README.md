# Menstrual Health App

A comprehensive iOS app for tracking menstrual cycles, symptoms, and overall reproductive health. This app helps users monitor their cycle, track symptoms, and identify potential health concerns like PCOS/PCOD.

## Features

- **Cycle Tracking**: Track your menstrual cycle with a beautiful calendar interface
- **Symptom Logging**: Record daily symptoms and mood changes
- **Health Analysis**: View insights about your cycle patterns and common symptoms
- **PCOS/PCOD Indicators**: Monitor potential signs of PCOS/PCOD
- **Data Visualization**: View your cycle data through interactive charts

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- npm or yarn
- Xcode (for iOS development)
- CocoaPods
- React Native CLI

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd menstrual-health-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Install iOS dependencies:
```bash
cd ios
pod install
cd ..
```

4. Start the Metro bundler:
```bash
npm start
# or
yarn start
```

5. Run the iOS app:
```bash
npm run ios
# or
yarn ios
```

## Development

The app is built using:
- React Native
- TypeScript
- React Navigation
- React Native Calendars
- React Native Chart Kit

## Project Structure

```
src/
  ├── screens/
  │   ├── HomeScreen.tsx
  │   ├── CycleTrackingScreen.tsx
  │   ├── SymptomsScreen.tsx
  │   └── AnalysisScreen.tsx
  ├── components/
  ├── navigation/
  └── utils/
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by popular period tracking apps like Flo
- Built with user privacy and data security in mind
- Designed to provide valuable health insights while maintaining user comfort 