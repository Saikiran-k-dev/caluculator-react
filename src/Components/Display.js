import styles from "../Styles/display.module.css";

const Display = (props) => {
    const {output} = props;
    return(
        <>
            <div className={styles.display}>
                {output}
            </div>
        </>
    );
}

export default Display;