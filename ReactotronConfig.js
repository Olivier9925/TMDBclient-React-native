import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

const yeOldeConsoleLog = console.log;
console.log = (...args) =>
{
  yeOldeConsoleLog(...args);

  Reactotron.display({
    name: 'CONSOLE.LOG',
    value: args,
    preview: args.lenght > 0 && typeof args[0] === 'string' ? args[0] : null
  });
}


const reactotron = Reactotron
  .configure({
    name: "React Native MovieTracker"
  })
  .useReactNative({
    asyncStorage: false, // there are more options to the async storage.
    networking: { // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate/
    },
    editor: false, // there are more options to editor
    errors: { veto: (stackFrame) => false }, // or turn it off with false
    overlay: false, // just turning off overlay
  })
  .use(sagaPlugin())
  .use(reactotronRedux())
  .connect();

export default reactotron;