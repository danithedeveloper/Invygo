import React from 'react';
import {Divider, TextField} from '../../elements';
import styles from './styles';
import {View} from 'react-native';
import List from '../../elements/List';
import {RegisterParticipantRequestDao} from '../../../data/requests/RegisterParticipantRequestDao';
import ListRowItem from '../../elements/List/ListRowItem';
import {useNavigation} from '@react-navigation/native';

type RSVPScreenProps = {};

const RSVPScreen: React.FC<RSVPScreenProps> = () => {
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

  const [participantsList, setParticipantsList] =
    React.useState<Array<RegisterParticipantRequestDao>>(participantsList_);
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const navigation = useNavigation();
  const onChangeSearch = (query: string) => setSearchQuery(query);

  // React.useEffect(() => {
  //   console.log('TEXt', searchQuery);
  //   console.log('participantsList_', participantsList);
  //   const searchRes: Array<RegisterParticipantRequestDao> =
  //     participantsList.filter(participant =>
  //        participant.name == searchQuery;
  //     );
  //   console.log('searchRes', searchRes);
  //   if (searchRes.length > 0) {
  //     setParticipantsList(searchRes);
  //   } else {
  //     setParticipantsList(participantsList);
  //   }![](../../../../../../../../../var/folders/82/jxlg31ys1d361682rmz7z5680000gn/T/simulator_screenshot_AC5A3DB0-FB32-4C04-BA22-DA308853DE33.png)
  // }, [searchQuery]);

  React.useEffect(() => {
    //if (participantsList.length > 0 && searchQuery.length > 0) {
    console.log('in if', searchQuery);
    console.log('in if participantsList', participantsList_);
    const searchRes: Array<RegisterParticipantRequestDao> =
      participantsList_.filter(
        participant =>
          participant.name.toLowerCase().includes(searchQuery.toLowerCase()), // == searchQuery.toLowerCase(),
      );
    console.log('searchRes', searchRes);
    setParticipantsList(searchRes);
    // if (searchRes.length > 0) {
    //   setParticipantsList(searchRes);
    // } else {
    //   setParticipantsList(participantsList_);
    // }
    // }else {
    //
    // }
  }, [searchQuery]);

  const _prepareListData = (participants: RegisterParticipantRequestDao[]) => {
    return participants.map(item => {
      const {id, name, locality} = item;
      return {
        id,
        title: name,
        subTitle: locality,
      };
    });
  };


  const _renderListHeader = () => {
    return (
      <>
        <View style={styles.searchTextFieldContainer}>
          <TextField
            onChangeText={onChangeSearch}
            placeholder="Enter Locality or Name"
            leftIcon="search"
          />
        </View>
        <Divider />
      </>
    );
  };

  return (
    <List
      data={_prepareListData(participantsList)}
      ListHeaderComponent={_renderListHeader()}
      renderItem={({item}) => {
        return (
          <ListRowItem
            title={item.title}
            subTitle={item.subTitle}
            onPress={() => {
              // let navigationParams = {
              //   id: item.id,
              // };
              // navigation.navigate('RSVPDetailsScreen', navigationParams);

            }}
          />
        );
      }}
    />
  );
};
export default RSVPScreen;
