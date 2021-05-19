import './App.css';
import PlanLayout from './Layouts/PlanLayout';
import Welcome from './pages/welcome';
import { BrowserRouter, Route } from 'react-router-dom';
import PhoneConfirmation from './pages/phoneconfirmation';

function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Route exact path="/"><Welcome /></Route>
        <Route exact path="/invite"><PhoneConfirmation /></Route>
      </PlanLayout>
    </BrowserRouter>
  );
}

export default App;
