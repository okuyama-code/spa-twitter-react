import { RecoilRoot } from 'recoil';
import './App.scss';
import Home from './pages/Home';

function App() {
  // return <Profile />
  return (
    <RecoilRoot>
      <Home />
    </RecoilRoot>

  )
}

export default App;
