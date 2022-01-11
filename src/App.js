import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './redux/configureStore';
import Greeting from './components/Greeting';

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
