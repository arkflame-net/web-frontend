// Libraries
import ReactDOM from 'react-dom';

// Providers and components
import { ChakraProvider } from '@chakra-ui/react';

// Main app component
import App from './App';

// Services
import { validate } from './services/authService';

// Redux
import { Provider } from 'react-redux';
import { sessionService } from 'redux-react-session';
import store from './redux/store';

sessionService.initSessionService(store, {
  validateSession: async (session) => {
    const valid = await validate(session.token);
    return valid;
  }
});

ReactDOM.render(
  <ChakraProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>
  , document.getElementById('root')
);
