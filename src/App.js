import AppRoutes from './routes/app-routes';
import { NavBar } from './components';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar title={"CAFE REACT"} />
      <AppRoutes />
    </div>
  );
}

export default App;
