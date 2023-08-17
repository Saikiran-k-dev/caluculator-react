import { useState } from "react";


const Controls = (props) => {
    const {output, setOutput} = props;
    const [oper1,setOper1] = useState();
    const [operation,setOperation] = useState('');
    const [oper2,setOper2] = useState();

    const handleClick = (value) => {
        // e.preventDefault();
        setOutput( output + value);
    }

    const handleSymbolClick = (symbol) => {
        setOper1(Number(output));
        setOutput(output + symbol);
        setOperation(symbol);
    }

    return(
        <>
            <h2>Controls</h2>
            <ul>
                <li>
                    <button onClick={ () => handleClick(1) }>
                        1
                    </button>
                </li>
                <li>
                    <button onClick={() => handleClick(2) }>
                        2
                    </button>
                </li>
                <li>
                    <button onClick={() => handleClick(3)}>
                        3
                    </button>
                </li>
                <li>
                    <button onClick={() => handleClick(4)}>
                        4
                    </button>
                </li>
                <li>
                    <button onClick={() => handleClick(5) }>
                        5
                    </button>
                </li>
                <li>
                    <button onClick={() => handleClick(6)}>
                        6
                    </button>
                </li>
                <li>
                    <button onClick={() => handleClick(7)}>
                        7
                    </button>
                </li>
                <li>
                    <button onClick={() => handleClick(8)}>
                        8
                    </button>
                </li>
                <li>
                    <button onClick={() => handleClick(9)}>
                        9
                    </button>
                </li>
                <li>
                    <button onClick={() => handleClick(0)}>
                        0
                    </button>
                </li>
                <li>
                    <button onClick={() => handleClick(5) }>
                        +
                    </button>
                </li>
                <li>
                    <button onClick={() => handleClick(6)}>
                        -
                    </button>
                </li>
                <li>
                    <button onClick={() => handleClick(7)}>
                        *
                    </button>
                </li>
                <li>
                    <button onClick={() => handleClick(/)}>
                        /
                    </button>
                </li>
                <li>
                    <button onClick={() => handleClick('=')}>
                        =
                    </button>
                </li>
                <li>
                    <button onClick={() => handleClick('clear')}>
                        C
                    </button>
                </li>
            </ul>
        </>
    );
}

export default Controls;