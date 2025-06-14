import React, { useEffect, useState } from 'react'; // Assicurati che useState sia importato

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';


function HomePage() {
  const appMainTitle = "Il Ricettario";
  const appTagLine = "Le ricette più ricettate.";
  const [searchTerm, setSearchTerm] = useState('');

  const [fetchedRecipes, setFetchedRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const recipes = [
    {
      id: 1,
      name: "Pasta al Pesto Genovese",
      description: "Un classico della cucina ligure, veloce e saporito.",
      imageUrl: "https://i0.wp.com/www.ricettealvolo.it/wp-content/uploads/2016/10/spaghetti-al-pesto.jpg?w=1280&ssl=1",
      ingredients: ["Basilico fresco", "Pinoli", "Parmigiano", "Pecorino", "Aglio", "Olio EVO", "Sale", "Pasta"],
      instructions: "Frullare basilico, pinoli, aglio, formaggi e olio fino ad ottenere una salsa. Cuocere la pasta, scolarla e condire con il pesto. Servire caldo."
    },
    {
      id: 2,
      name: "Risotto ai Funghi Porcini",
      description: "Un primo piatto cremoso con funghi freschi di stagione.",
      imageUrl: "https://www.ilcuoreinpentola.it/wp-content/uploads/2019/11/tagliatelle-ai-funghi-1.jpg",
      ingredients: ["Riso Carnaroli", "Funghi porcini", "Brodo vegetale", "Cipolla", "Vino bianco", "Burro", "Parmigiano"],
      instructions: "Tostare il riso, sfumare con vino. Aggiungere brodo caldo e funghi. Mantecare con burro e parmigiano. Servire subito."
    },
    {
      id: 3,
      name: "Tiramisù Classico",
      description: "Il dessert italiano più amato, strati di bontà.",
      imageUrl: "https://www.capsuleandcoffee.com/wp-content/uploads/2022/01/ricetta-tiramisu.jpg",
      ingredients: ["Savoiardi", "Caffè", "Mascarpone", "Uova", "Zucchero", "Cacao in polvere"],
      instructions: "Preparare il caffè. Montare tuorli con zucchero, unire mascarpone. Inzuppare savoiardi nel caffè e alternare con crema. Spolverare con cacao."
    },
    {
      id: 4,
      name: "Pizza Margherita",
      description: "La Regina della cucina italiana.",
      imageUrl: "https://www.cibotoday.it/~media/horizontal-hi/31583586473285/pizza-margherita-di-sofia.jpg",
      ingredients: ["Farina", "Acqua", "Lievito", "Sale", "Pomodoro", "Mozzarella", "Basilico", "Olio EVO"],
      instructions: "Preparare l'impasto, stenderlo e condirlo con pomodoro, mozzarella e basilico. Cuocere in forno caldo."
    }
  ];

  const fetchRecipes = () => {
    // Resettiamo eventuali errori precedenti e reimpostiamo isLoading
    setError(null);
    setIsLoading(true);

    setTimeout(() => {
      // Simula un errore nel 30% dei casi
      const shouldFail = Math.random() < 0.3; // 30% di probabilità di fallire

      if (shouldFail) {
        setError('Errore durante il caricamento delle ricette. Riprova più tardi!');
        setIsLoading(false); // Il caricamento è comunque terminato (con errore)
      } else {
        setFetchedRecipes(recipes);
        setIsLoading(false);
      }
    }, 2000);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const filteredRecipes = fetchedRecipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.ingredients.some(ingredient =>
      ingredient.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <>
      <Header title={appMainTitle} tagLine={appTagLine} />
      <main>
        {/* Ordine delle condizioni: Errori > Caricamento > Contenuto */}
        {error ? ( // Se c'è un errore, mostralo
          <p className="error-message">{error}</p>
        ) : isLoading ? ( // Altrimenti, se è in caricamento, mostra il messaggio di caricamento
          <p className="loading-message">Caricamento ricette...</p>
        ) : ( // Altrimenti, mostra la UI completa (Search Bar e Ricette)
          <>
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
            {filteredRecipes.length === 0 && searchTerm !== '' ? (
              <p className="no-results">Nessuna ricetta trovata per "{searchTerm}".</p>
            ) : (
              <div className="recipe-list-container">
                {filteredRecipes.map(recipe => (
                  <RecipeCard
                    key={recipe.id}
                    name={recipe.name}
                    description={recipe.description}
                    imageUrl={recipe.imageUrl}
                    ingredients={recipe.ingredients}
                    instructions={recipe.instructions}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </main>
    </>
  );
}

export default HomePage;