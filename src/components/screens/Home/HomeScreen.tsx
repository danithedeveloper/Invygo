import React from 'react';
import {
  ActivityLoader,
  Button,
  Container,
  DateTimePicker,
  Icon,
  RadioButton,
  Text,
  TextField,
} from '../../elements';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import useThemeColors from '../../../custom-hooks/useThemeColors';
import styles from './styles';
import {Participant} from '../../../data/Participant';
import {color} from '../../../constants';
import {Alert, SafeAreaView, View} from 'react-native';
import {RadioOption} from '../../elements/RadioButton/RadioButton';
import {participants} from '../../../data/Profession';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {registerParticipant} from '../../../actions/Register';

type HomeScreenProps = {};

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const {card} = useThemeColors();
  const dispatch = useAppDispatch();
  // let participant: Participant = {
  //   address: '',
  //   dateOfBirth: new Date(),
  //   id: '',
  //   name: '',
  //   noOfGuests: 0,
  //   profession: '',
  // };
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
    setValue,
  } = useForm<Participant>();

  // const onSubmit = handleSubmit(data => {
  //   console.log(data);
  // });

  const {messageLoader, messageError, message} = useAppSelector(
    state => state.Register,
  );

  const onSubmit: SubmitHandler<Participant> = data => {
    dispatch(
      registerParticipant({
        id: '1',
        name: data.name,
        age: data.age,
        locality: data.locality,
        dateOfBirth: data.dateOfBirth?.getDate().toString(),
        profession: data.profession?.value,
        noOfGuests: data.noOfGuests,
        address: data.address,
      }),
    );
    console.log('submit data', data);
  };

  const data: RadioOption[] = participants.map(item => {
    const {id, name, icon} = item;
    return {
      label: name,
      value: id,
      //rightElement: null,
    };
  });

  React.useEffect(() => {
    console.log('message called', message);
  }, [message]);

  React.useEffect(() => {
    console.log('message called', messageError);
  }, [messageError]);

  const _onItemPressed = (item: RadioOption) => {
    return () => {
      console.log(item);
    };
  };

  // const onChangeDate = (event, selectedDate: Date) => {
  //   const currentDate = selectedDate || dateOfBirth;
  //   console.log('currentDate---', currentDate);
  //   setDateOfBirth(currentDate);
  // };

  const watchGuestCount = watch('noOfGuests', 0);
  const watchDateOfBirth = watch('dateOfBirth', new Date());

  const [guestsCounter, setGuestsCounter] = React.useState(0);
  //const [dateOfBirth, setDateOfBirth] = React.useState(new Date());

  return (
    <Container style={{flex: 1}}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextField
            onBlur={onBlur}
            autoFocus
            style={[{backgroundColor: card}, styles.input]}
            value={value}
            onChangeText={onChange}
            hasMargin
            // placeholder={getTranslation(store.getState(), "FIRST_NAME")}
            placeholder={'Name'}
          />
        )}
        name="name"
      />
      {errors.name && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextField
            onBlur={onBlur}
            autoFocus
            style={[{backgroundColor: card}, styles.input]}
            value={value?.toString()}
            onChangeText={onChange}
            hasMargin
            // placeholder={getTranslation(store.getState(), "FIRST_NAME")}
            placeholder={'Age'}
            // secureTextEntry={true}
          />
        )}
        name="age"
      />
      {errors.age && <Text>This is required.</Text>}

      <Controller
        defaultValue={new Date()}
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <DateTimePicker
            value={value ? value : new Date()}
            mode="date"
            //onChange={onChangeDate}
            onChange={(event, date) => {
              onChange(date);
            }}
          />
        )}
        name="dateOfBirth"
      />
      {errors.dateOfBirth && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View>
            <Text>Profession</Text>
            <RadioButton
              //defaultValue={value}
              data={data}
              onItemPressed={onChange}
            />
          </View>
        )}
        name="profession"
      />
      {errors.profession && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextField
            onBlur={onBlur}
            autoFocus
            style={[{backgroundColor: card}, styles.input]}
            value={value?.toString()}
            onChangeText={onChange}
            hasMargin
            // placeholder={getTranslation(store.getState(), "FIRST_NAME")}
            placeholder={'Locality'}
            // secureTextEntry={true}
          />
        )}
        name="locality"
      />
      {errors.locality && <Text>This is required.</Text>}

      <Text>No of Guests</Text>
      <Controller
        control={control}
        defaultValue={0}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={styles.counterContainer}>
            <Button
              isTransparent
              onPress={() => {
                value > 0 && setValue('noOfGuests', value - 1);
                //setGuestsCounter(value);
              }}>
              <Icon name="minus" size={22} isPrimary />
            </Button>
            <Text isSecondary style={styles.counterText}>
              {value}
            </Text>
            <Button
              isTransparent
              onPress={() => {
                value < 2
                  ? setValue('noOfGuests', value + 1)
                  : Alert.alert('Cannot add more than 2 guests');
                //setValue('noOfGuests', value + 1);
                //setGuestsCounter(value);
              }}>
              <Icon name="plus" size={22} isPrimary />
            </Button>
          </View>
        )}
        name="noOfGuests"
      />
      {errors.noOfGuests && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: {value: 50, message: 'invalid - address'},
        }}
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
          <>
            <TextField
              onBlur={onBlur}
              autoFocus
              style={[{backgroundColor: card}, styles.input]}
              value={value?.toString()}
              onChangeText={onChange}
              hasMargin
              numberOfLines={2}
              // placeholder={getTranslation(store.getState(), "FIRST_NAME")}
              placeholder={'Address'}
              // secureTextEntry={true}
            />
            {error && <Text>{error.message || 'Address not valid.'}</Text>}
          </>
        )}
        name="address"
      />

      <Button
        style={styles.submitButton}
        backgroundColor={color.BUTTON_BG}
        onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText} isBold isHeadingTitle>
          Submit
        </Text>
      </Button>
      <ActivityLoader isLoading={messageLoader} text={'please wait'} />
    </Container>
  );
};
export default HomeScreen;
