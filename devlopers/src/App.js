// import { useContext } from "react";
import { Input } from "./components/Input";
// import { ThemeContext } from "./context/ThemeContext";
import './App.css'
function App() {
  // const {light} = useContext(ThemeContext)
  
  return (
    <div>
      <Input />
    </div>
  );
}

export default App;
// style={{background:light ? '#f5f8ff' : '#202124' ,}