import './App.css';

import {NewsContextProvider} from './context/news/news.context.provider';

import Header from './components/header/header.component';

import reducer, { initialState } from './context/news/reducer';

function App() {
  return (
    <div className='app'>
      <NewsContextProvider initialState={initialState} reducer={reducer}>
        <Header />
      </NewsContextProvider>
    </div>
  );
}

export default App;
