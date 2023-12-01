import { Link } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className=''>
      <Link to="/signup" className='mr-2'>新規登録へ</Link>
      <Link to="/login">ログインへ</Link>
    </div>
  );
}

export default App;
