import React from 'react';
import {Container, Divider, Text, TextField} from '../../elements';
import styles from './styles';
import {View} from 'react-native';
import List from '../../elements/List';
import {RegisterParticipantRequestDao} from '../../../data/requests/RegisterParticipantRequestDao';
import ListRowItem from '../../elements/List/ListRowItem';
import {useNavigation} from '@react-navigation/native';
import {Participant} from '../../../data/Participant';

type RSVPScreenProps = {};

const RSVPDetailsScreen: React.FC<RSVPScreenProps> = props => {
  const _key = props.route.params.dataKey;
  const participantsList_: RegisterParticipantRequestDao[] = [
    {
      id: '1',
      name: 'abc',
      age: 12,
      locality: 'aaa',
      dateOfBirth: ' new Date()',
      profession: 'proff',
      noOfGuests: 2,
      address: 'dakjdn ada',
    },
    {
      id: '2',
      name: 'xyz',
      age: 123,
      locality: 'aaa4',
      dateOfBirth: 'aaaa date',
      profession: 'proff44',
      noOfGuests: 24,
      address: 'dakjdn ad44a',
    },
  ];

  const participant: RegisterParticipantRequestDao | undefined =
    participantsList_.find(it => it.id == _key);

  return (
    <View style={{flex: 1}}>
      <Text>{participant?.name}</Text>
      <Text>{participant?.profession}</Text>
      <Text>{participant?.age}</Text>
    </View>
  );
};
export default RSVPDetailsScreen;
