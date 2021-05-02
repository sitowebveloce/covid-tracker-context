import Front from './components/Front';
import Header from  './components/Header';
//***** IMPORT CONTEXT PROVIDER AND WRAP ALL COMPONENTS */
import {ContextProvider} from './store/globalStore';

function App() {
  return (
    <ContextProvider>
      <Header />
      <Front />
    </ContextProvider>
  );
}

export default App;
