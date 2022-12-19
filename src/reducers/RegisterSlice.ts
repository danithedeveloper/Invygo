import {createSlice} from '@reduxjs/toolkit';
// import Participant, {mockParticipants} from '../data/Participant';

// Define a type for the slice state
interface AppConfigState {
  message: string;
  messageError: null;
  messageLoader: boolean;
}

// Define the initial state using that type
const initialState: AppConfigState = {
  message: '',
  messageError: null,
  messageLoader: false,
};

export const registerSlice = createSlice({
  name: 'RegisterParticipant',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setMessageLoader: (state, action) => {
      return {
        ...state,
        messageLoader: action.payload.loader,
      };
    },
    setMessageResponse: (state, action) => {
      return {
        ...state,
        messageLoader: false,
        message: action.payload.messageRes,
      };
    },
    setMessageError: (state, action) => {
      return {
        ...state,
        messageLoader: false,
        messageError: action.payload.error,
      };
    },
    resetMessageState: () => {
      return {
        message: '',
        messageError: null,
        messageLoader: false,
      };
    },
  },
});

// Other code such as selectors can use the imported `RootState` type
export const {
  setMessageLoader,
  setMessageResponse,
  setMessageError,
  resetMessageState,
} = registerSlice.actions;
export default registerSlice.reducer;
