import { useState } from 'react';
import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";
import Bouton from '../bouton/bouton.jsx';
import Items from "../items/items.jsx";
import logo from "../../assets/logo.png";


function Navbar() {
  
  
//   const [authentif, setAuthentif] = useState('Connexion');

//   function handleClick() {
    
//     setAuthentif(authentif === 'Connexion' ? 'Déconnexion' : 'Connexion');
//   }

  return (
    <header>
      
        <Link to="/"><img className={styles.logo} src={logo}/></Link>
      
      <nav>
      <Link to="/"><button>Homepage</button></Link>
       <Link to="/"><button>Détails</button></Link>
       <Link to="/"><button className={styles.brown}>Favoris</button></Link>
       <Link to="/Login"><button>Login</button></Link>
      <Link to="/Register"><button>Register</button></Link>
      <Link to="/"><button className={styles.admin}>Admin</button></Link>
      <Link to="/"><button><i className="fa-solid fa-user"/>Profil</button></Link>
    
      </nav>
    </header>
  );
}

export default Navbar;