import {combineReducers, configureStore} from '@reduxjs/toolkit';
import rootSaga from '../sagas';
import createSagaMiddleware from 'redux-saga';
import AppConfigSlice from '../reducers/AppConfigSlice';
import RegisterSlice from '../reducers/RegisterSlice';

const rootReducer = combineReducers({
  AppConfig: AppConfigSlice,
  Register: RegisterSlice,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
