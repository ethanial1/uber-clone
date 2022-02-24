import { Provider } from 'react-redux';
import { store } from './redux/store';
import Home from './screens/Home';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Home />
      </SafeAreaProvider>
    </Provider>
  );
}
