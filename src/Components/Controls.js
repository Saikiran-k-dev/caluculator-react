import styles from '../Styles/controls.module.css';
import ControlButton from './ControlButton';

const operators = ['AC','C','%','/',
                    '7','8','9','*',
                    '4','5','6','-',
                    '1','2','3','+',
                    '0','.','='];

const Controls = (props) => {
    const {output, setOutput} = props;

    const handleClick = (value) => {
        switch(value){
            case 'AC':
                setOutput('0');
                break;
            
            case 'C':
                if(output.length === 1){
                    setOutput('0')
                    break;
                }
                setOutput(output.slice(0,output.length-1));
                break;
            
            case '%':
                if( output === '0' || output === '+' || output === '-'){
                    window.alert('Please First Enter a value!!');
                    break;
                }
                const answer = eval(output * '0.01');
                setOutput(answer.toString());
                break;

            case '=':
                var result = eval(output).toString();
                if(result.length > 22){
                    result=Number(result).toExponential();
                }
                setOutput(result);
                break;

            case '/':
                case '%':
                if( output === '0' || output === '+' || output === '-'){
                    window.alert('Please First Enter a value!!');
                    break;
                }

            case '*':
                if( output === '0' || output === '+' || output === '-'){
                    window.alert('Please First Enter a value!!');
                    break;
                }

            case '+':
                if( output === '+' || output === '-'){
                    window.alert('Please First Enter a value!!');
                    break;
                }

            case '-':
                if( output === '+' || output === '-'){
                    window.alert('Please First Enter a value!!');
                    break;
                }

            default:
                if(output === '0'){
                    setOutput(value.toString());
                    break;
                }
                setOutput(output + value);
                break;
        }
    }


    return(
        <div className={styles.controlContainer}>
            {operators.map((value,i) => <ControlButton key={i}
                                                        index={i}
                                                        value={value}
                                                        handleClick={handleClick} />)}
        </div>
    );
}

export default Controls;