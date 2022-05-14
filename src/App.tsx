import HeaderV from './components/Header'
import SearchV from './components/Search/index';
import ListGifV from './components/ListGif/index';
import useForm from './hooks/useForm';

function App() {

  const { handleChange, state } = useForm({ inputSearch: '' })

  return (
    <div className='container p-4'>
      <HeaderV />
      <SearchV handleChange={handleChange} />
      <ListGifV formState={state} />
    </div>
  );
}

export default App;
