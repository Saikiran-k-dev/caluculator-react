import { useState } from "react";
import Controls from "./Components/Controls";
import Display from "./Components/Display";


function App() {
  const [output,setOutput] = useState('0');
  return (
    <div>
      <Display output={output} />
      <Controls output={output} 
                setOutput={setOutput} />
    </div>
  );
}

export default App;
