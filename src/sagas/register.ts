import Url from '../constants/Url';
import {call, put, StrictEffect, takeLatest} from 'redux-saga/effects';
import {ActionTypes} from '../constants/Actions';
//import {Message} from '../data/Message';
import {
  setMessageError,
  setMessageLoader,
  setMessageResponse,
} from '../reducers/RegisterSlice';
import {RegisterParticipantRequestDao} from '../data/requests/RegisterParticipantRequestDao';
import {api} from '../Network/Api';

const getMessage = (regReqData: RegisterParticipantRequestDao) => {
  console.log('get message called', regReqData);
  return api({
    method: 'post',
    url: Url.message.getMessage.path,
    data: regReqData,
  });
};

function* initiateRegisterParticipant(action: any): any {
  yield put(setMessageLoader({loading: true}));
  const msgReqData: RegisterParticipantRequestDao = action.msgReqData;
  console.log('msgReqData', msgReqData);
  let messageResponse = yield call(getMessage, msgReqData);
  console.log('messageResponse', messageResponse);
  if (messageResponse.status == 200) {
    let _message: any = messageResponse;
    console.log('MSG', _message);
    yield put(setMessageResponse({messageRes: _message}));
  } else {
    console.log('Error==', messageResponse.errors);
    yield put(setMessageError({error: messageResponse.errors}));
  }

  console.log('REs', messageResponse);
  //yield put('ss:Ss');
  // const {userObj} = action

  // let signUpUserResponse: ServerResponse = yield call(signUpUser, action, userObj)
  // // console.log("signUpUserResponse", signUpUserResponse)
  // if (signUpUserResponse.status == 200) {
  //
  //     yield put(setSignUpUserResponse({
  //         signUp: signUpUserResponse,
  //         message: signUpUserResponse.message
  //     }))
  // } else {
  //     // console.log("signUpUserResponse-in else", signUpUserResponse)
  //     yield put(setSignUpUserError({
  //         errorMessage: signUpUserResponse.errorMessage,
  //         errors: signUpUserResponse.errors
  //     }))
  // }
}

export default function* watcherSaga(): Generator<StrictEffect> {
  yield takeLatest(
    ActionTypes.REGISTER_PARTICIPANT,
    initiateRegisterParticipant,
  );
}
