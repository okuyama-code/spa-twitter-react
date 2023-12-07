import { RecoilRoot } from 'recoil';
import './App.scss';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  // return <Profile />
  return (
    <RecoilRoot>
      <Home />
    </RecoilRoot>

  )
}

export default App;
