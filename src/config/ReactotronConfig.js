import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({host: '192.0.28.168'})
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
