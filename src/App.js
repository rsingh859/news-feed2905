import './App.css';

import {NewsContextProvider} from './context/news/news.context.provider';

import Header from './components/header/header.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import reducer, { initialState } from './context/news/reducer';

function App() {
  return (
    <div className='app'>
      <ErrorBoundary>
        <NewsContextProvider initialState={initialState} reducer={reducer}>
          <Header />
        </NewsContextProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;