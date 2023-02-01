import logo from './logo.svg';
import './App.css';
import Topbar from './Topbar';
import Sidebar from './sidebar'

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className='container'>
        <Sidebar />
        <div className='others'>other pages</div>
      </div>
    </div>
  );
}

export default App;
