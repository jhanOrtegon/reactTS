import HeaderV from './components/Header'
import SearchV from './components/Search/index';
import ListGifV from './components/ListGif/index';

function App() {
  return (
    <div className='container p-4'>
      <HeaderV />
      <SearchV />
      <ListGifV />
    </div>
  );
}

export default App;
