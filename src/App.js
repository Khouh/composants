import "./App.css";
import ProfilePhoto from "./composant/profile/profilePhoto";
import FullName from "./composant/profile/FullName";
import Adress from "./composant/profile/adress";

function App() {
  return (
    <div className="App">
      <FullName />
      <br />
      <ProfilePhoto />
      <br />
      <Adress />
    </div>
  );
}

export default App;