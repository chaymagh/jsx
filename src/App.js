
import './App.css';
import ProfilePhoto from './component/profile/ProfilePhoto';
import Address from './component/profile/Address';
import FullName from './component/profile/FullName';

function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <Address />
      <FullName />
    </div>
  );
}

export default App;
