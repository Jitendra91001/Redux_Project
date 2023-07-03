import './App.css';
import NewMassage from './component/NewMassage';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
   <>
   <Provider store={store}>
   <NewMassage/>
   </Provider>
   </>
  );
}

export default App;
