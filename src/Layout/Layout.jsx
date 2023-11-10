import styles from "./Layout.module.scss";
import { useLocation, Outlet } from "react-router-dom";
import Homepage from "../Pages/home/home.jsx";
import Navbar from "../Pages/navbar/navbar.jsx";
import Footer from "../Pages/Footer/Footer.jsx";


const Layout = () => {
  const { pathname } = useLocation();

  return (
    <>
    <div className={styles.site}>
        {/* Nous appelons la Navbar dans le Layout pour qu'elle soit sur toutes nos pages */}
        {pathname.toLowerCase() === "/navbar" ? "" : <Navbar />}
        <div className={styles.section}>
          {/* Est-ce que le pathname est égale à "/" ? Si oui, affiche le composant Home, si non, affiche le Outlet (le Outlet représente le composant appelé par la route (voir les paths dans le App.jsx)) | Nous appelons ceci un ternaire */}
          {pathname === "/" ? <Homepage /> : <Outlet />}
        </div>
        {pathname.toLowerCase() === "/footer" ? "" : <Footer />}
      </div> 
    </>
  );
};

export default Layout;

