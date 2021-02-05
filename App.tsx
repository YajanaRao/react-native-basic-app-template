import React from 'react';
import 'react-native-gesture-handler';
import { RecoilRoot } from 'recoil';
import AppContainer from './src/navigation/AppNavigation';

export interface AppProps {
}

export default function App(props: AppProps) {
  return (
    <RecoilRoot>
      <AppContainer />
    </RecoilRoot>
  );
}
