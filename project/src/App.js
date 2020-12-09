import './App.css';
import Child from './components/Child';
import {TransactionProvider} from './components/transContext'

function App() {
  return (
    <div className='container'>
      <TransactionProvider>
     <Child />
     </TransactionProvider>
     
    </div>
  );
}

export default App;
