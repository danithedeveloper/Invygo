import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store/ConfigureStore';

// Define a type for the slice state
interface AppConfigState {
  showSplashScreen: boolean;
}

// Define the initial state using that type
const initialState: AppConfigState = {
  showSplashScreen: true,
};

export const appConfigSlice = createSlice({
  name: 'AppConfig',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setShowSplashScreen: (state, action) => {
      return {
        ...state,
        showSplashScreen: action.payload.isShow,
      };
    },
  },
});

export const {setShowSplashScreen} = appConfigSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const showSplashScreen = (state: RootState) =>
  state.AppConfig.showSplashScreen;

export default appConfigSlice.reducer;
