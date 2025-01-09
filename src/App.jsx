import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import BookList from './components/BookList'
import fantasy from './data/fantasy.json';
import history from './data/history.json';
import horror from './data/horror.json';
import romance from './data/romance.json';
import scifi from './data/scifi.json';

function App() {

  return (
    <>
      <MyNav />
      <Welcome />
      <BookList books={fantasy}/>
      <MyFooter />
    </>
  )
}

export default App