import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import Items from "../items/items.jsx";

function Footer() {
    

    return (

        <footer className={styles.footer}>

        <p className={styles.copyright}>&copy; {new Date().getFullYear()} CLASSIVEMENT | Tout droit réservé</p>

    </footer>
    );
    }

    export default Footer;