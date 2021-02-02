import './App.css';

import {NewsContextProvider} from './context/news/news.context.provider';

import Header from './components/header/header.component';
import NewsList from './components/news-list/news-list.component';

function App() {
  return (
    <div className='app'>
      <Header />
      <NewsContextProvider>
        <NewsList />
      </NewsContextProvider>
    </div>
  );
}

export default App;
