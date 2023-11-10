import Loading from "../../components/Loading/Loading";
import styles from "./home.module.scss";
import Serie from "./components/serie";
// import { series } from "../../data";
import { useEffect, useState } from "react";

function Home() {

  const [filter, setFilter] = useState("");
  const [series, setSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchSeries() {
      try {
        const response = await fetch(
          "http://localhost:8000/api/series/getSeries"
        );
        if (response.ok) {
          const seriesFromBack = await response.json();
          const modifiedSeries = seriesFromBack.map((s) =>
            s.like === 1 ? { ...s, like: true } : { ...s, like: false }
          );
          setIsLoading(false);
          setSeries(modifiedSeries);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchSeries();
  }, []);

  function updateSeries(newSerie) {
    setSeries(series.map((s) => (s.id === newSerie.id ? newSerie : s)));
  }

  function deleteSeries(id) {
    setSeries(series.filter((s) => s.id !== id));
  }

  const handleInput = (e) => {
    const search = e.target.value;
    setFilter(search.trim().toLowerCase());
  };

    return (
        <div className={styles.home}>
          <h1>Découvrez nos dernières critiques</h1>
          
           
              
              <input
              className={styles.searchbar}
                onInput={handleInput}
                type="text"
                placeholder="Search..."
            
              />
    
            {/* {isLoading ? ( */}
              <Loading />
            {/* ) : ( */}
              <div className={styles.grid}>
                {series
                  .filter((serie) => serie.title.toLowerCase().includes(filter))
                  .map((serie) => (
                    <Serie
                      key={serie.id}
                      serie={serie}
                      updateSeries={updateSeries}
                      deleteSeries={deleteSeries}
                    />
                  ))}
              </div>
         
          </div>

      );
    }

    export default Home;