import styles from "../Styles/display.module.css";

const Display = (props) => {

    const {input,output} = props;

    const inputDiv = document.querySelector('.inputSection');
    if(input !== '0'){
    }

    return(
        <>
            <div className={styles.display}>
                <div className={styles.inputSection}>
                    {input !== '0' ? input : null}
                </div>
                <div className={styles.outputSection}>
                    {input !== '0' ?`=${output}` : output}
                </div>
            </div>
        </>
    );
}

export default Display;