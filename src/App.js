import './App.css';
import PlanLayout from './Layouts/PlanLayout';
import Welcome from './pages/welcome';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PhoneConfirmation from './pages/phoneconfirmation';
import CodeConfirm from './pages/codeconfirm';
import AllowNotification from './pages/allownotification';
import Home from './pages/home';
import AppLayout from './Layouts/AppLayout';
import Explore from './pages/explore';
import Profile from './pages/profile';

function App() {
  return (
    <BrowserRouter>
      <Route exact path={["/", "/invite", "/codeconfirm", "/allownotification"]}>
        <PlanLayout>
          <Switch>
          <Route exact path="/"><Welcome /></Route>
          <Route exact path="/invite"><PhoneConfirmation /></Route>
          <Route exact path="/codeconfirm"><CodeConfirm /></Route>
          <Route exact path="/allownotification"><AllowNotification /></Route>
          </Switch>
        </PlanLayout>
      </Route>
      <Route exact path={["/home", "/explore", "/profile"]}>
        <AppLayout>
          <Switch>
            <Route exact path="/home"><Home /></Route>
            <Route exact path="/explore"><Explore /></Route>
            <Route exact path="/profile"><Profile /></Route>
          </Switch>
        </AppLayout>
      </Route>
    </BrowserRouter>
  );
}

export default App;
