import './App.css';
import PlanLayout from './Layouts/PlanLayout';
import Welcome from './pages/welcome';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <PlanLayout>
      <Welcome />
      </PlanLayout>
    </BrowserRouter>
  );
}

export default App;
