import {ActionTypes} from '../constants/Actions';
import {RegisterParticipantRequestDao} from '../data/requests/RegisterParticipantRequestDao';

export const registerParticipant = (
  regReqData: RegisterParticipantRequestDao,
) => ({
  type: ActionTypes.REGISTER_PARTICIPANT,
  regReqData,
});
