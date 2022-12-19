import React from 'react';
import {ColorSchemeName} from 'react-native';

export default React.createContext({
  theme: 'light',
  setTheme: (_: ColorSchemeName) => {},
  useSystemTheme: true,
  setUseSystemTheme: (_: boolean) => {},
});
