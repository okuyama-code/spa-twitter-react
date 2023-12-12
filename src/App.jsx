import { RecoilRoot } from 'recoil';
import './App.scss';
// import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  // return <Profile />
  return (
    <RecoilRoot>
      <Login />
    </RecoilRoot>

  )
}

export default App;
