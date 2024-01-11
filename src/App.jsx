import { Provider } from 'react-redux';
import './App.css'
import NavBar from './components/NavBar';
import Page from './pages/Page';
import { store } from './Redux/store';
import Productitem from './components/Productitem';

function App() {
  return(
  <>
  <Provider store={store}>
  <NavBar/>
  <Page/> 
  </Provider>

  </>
  )  
}

export default App
