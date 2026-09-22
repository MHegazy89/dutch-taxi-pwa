import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nuvanda.taximaster',
  appName: 'TaxiMaster TVT',
  webDir: 'out',
  server: {
    androidScheme: 'https',
    cleartext: true,
  },
  backgroundColor: '#0b6687',
  android: {
    allowMixedContent: true,
    backgroundColor: '#0b6687',
  },
  plugins: {
    StatusBar: {
      overlaysWebView: false,
      backgroundColor: '#0b6687',
      style: 'DARK',
    },
  },
};

export default config;
