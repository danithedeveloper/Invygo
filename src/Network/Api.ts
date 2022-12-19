import axios from 'axios';
import DeviceInfo from 'react-native-device-info';
import {Platform} from 'react-native';

function fetchResponse(instance: any, config: any) {
  return instance(config)
    .then((response: any) => {
      const {data, status} = response;

      let responseData = data;

      if (responseData != null) {
        responseData.status = status;
      } else {
        responseData = {
          status,
          success: false,
          errorMessage: 'Sorry, something went wrong, Please try again',
        };
      }
      return responseData;
    })
    .catch((error: any) => {
      const {data, status} = error;

      if (data) {
        return {
          status: status,
          success: data.success,
          errorMessage: data.message,
          errors: data.errors,
        };
      } else {
        return {
          status: 10,
          success: false,
          errorMessage: 'Check your Internet',
        };
      }
    });
}

let BASE_URL = 'https://invygo.free.beeceptor.com/';

export const api = async (config: any) => {
  //let headers;
  let instance;
  axios.defaults.timeout = 600000;

  instance = axios.create({
    baseURL: BASE_URL,
  });

  // let systemVersion = DeviceInfo.getSystemVersion();
  // let version = DeviceInfo.getVersion();
  // let deviceId = DeviceInfo.getDeviceId();
  // const deviceName = await DeviceInfo.getDeviceName();
  //
  // if (config.headers) {
  //   headers = {...config.headers};
  // } else {
  //   headers = {
  //     //Accept: 'application/json',
  //     'Device-Details': {
  //       DeviceName: deviceName,
  //       DeviceOSType: Platform.OS === 'ios' ? 'IOS' : 'ANDROID',
  //       DeviceOSVersion: systemVersion,
  //       AppVersion: version,
  //       DeviceId: deviceId,
  //     },
  //   };
  // }

  delete config.baseURL;
  //delete config.headers;
  console.log(
    // JSON.stringify({...config, headers, ...{responseType: 'application/json'}}),
    JSON.stringify({...config}),
  );
  return fetchResponse(
    instance,
    config,
    //   {
    // ...config,
    //headers,
    //...{responseType: 'application/json'},
    //}
  );
};
