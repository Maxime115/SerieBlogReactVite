import { useNavigate, useRouteError } from "react-router-dom";
import Bouton from "./bouton/bouton";

export default function ErrorPage() {
  const error = useRouteError();
//   console.log(error);

  const navigate = useNavigate();

  function navigateToHomepage() {
    navigate("/");
  }
  return (
    <div>
      <h1>ERREUR 404 - Veuillez retournez a la page d'accueil</h1>

      <button onClick={navigateToHomepage}>
        Retour a l'accueil
      </button>
    </div>
  );
}