import { useState } from "react";
import Controls from "./Controls";
import Display from "./Display";
import styels from "../Styles/calculator.module.css";

const Calculator = () => {
    const [output,setOutput] = useState('0');
    
    return (
        <div className={styels.calculatorLayout}>
            <Display output={output} />
            <hr />
            <Controls output={output} 
                        setOutput={setOutput} />
        </div>
    );
}

export default Calculator;