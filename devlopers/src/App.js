import { useContext } from "react";
import { Input } from "./components/Input";
import { ThemeContext } from "./context/ThemeContext";
function App() {
  const {light} = useContext(ThemeContext)
  
  return (
    <div  style={{background:light ? '#f5f8ff' : '#202124' , padding:'10px', paddingTop:'20px'}}>
      <Input />
    </div>
  );
}

export default App;
