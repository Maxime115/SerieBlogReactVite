import styles from "./bouton.module.scss";

function bouton (texte) {

    const [count, setCount] = useState(0);


    return (
        <>
        <button>{texte.children}</button>
        </>
    )
}

export default bouton