import './App.css';
import AddBook from './Components/AddBook';
import AddModal from './Components/AddModal';
import Books from './Components/Books';

function App() {
  return (
    <div className='main'>
      <div className='title-wrapper'>
        <h1>Book List</h1>
        <AddBook />
      </div>
      <Books />
      <AddModal />
    </div>
  );
}

export default App;
