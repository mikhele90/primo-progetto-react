// HomePage.js
import React from 'react';
import { useState } from 'react';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';


function HomePage() {
  const appMainTitle = "Il Ricettario";
  const appTagLine = "Le ricette più ricettate.";
  const [searchTerm, setSearchTerm] = useState('');

  const recipes = [
    {
      id: 1,
      name: "Pasta al Pesto Genovese",
      description: "Un classico della cucina ligure, veloce e saporito.",
      imageUrl: "https://images.unsplash.com/photo-1621995818295-8e47458622c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM4ODQxfDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=400",
      ingredients: ["Basilico fresco", "Pinoli", "Parmigiano", "Pecorino", "Aglio", "Olio EVO", "Sale", "Pasta"],
      instructions: "Frullare basilico, pinoli, aglio, formaggi e olio fino ad ottenere una salsa. Cuocere la pasta, scolarla e condire con il pesto. Servire caldo."
    },
    {
      id: 2,
      name: "Risotto ai Funghi Porcini",
      description: "Un primo piatto cremoso con funghi freschi di stagione.",
      imageUrl: "https://images.unsplash.com/photo-1621995818295-8e47458622c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM4ODQxfDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=400",
      ingredients: ["Riso Carnaroli", "Funghi porcini", "Brodo vegetale", "Cipolla", "Vino bianco", "Burro", "Parmigiano"],
      instructions: "Tostare il riso, sfumare con vino. Aggiungere brodo caldo e funghi. Mantecare con burro e parmigiano. Servire subito."
    },
    {
      id: 3,
      name: "Tiramisù Classico",
      description: "Il dessert italiano più amato, strati di bontà.",
      imageUrl: "https://images.unsplash.com/photo-1621995818295-8e47458622c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM4ODQxfDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=400",
      ingredients: ["Savoiardi", "Caffè", "Mascarpone", "Uova", "Zucchero", "Cacao in polvere"],
      instructions: "Preparare il caffè. Montare tuorli con zucchero, unire mascarpone. Inzuppare savoiardi nel caffè e alternare con crema. Spolverare con cacao."
    },
    {
      id: 4,
      name: "Pizza Margherita",
      description: "La Regina della cucina italiana.",
      imageUrl: "https://images.unsplash.com/photo-1594007654729-407edc4ef653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM4ODQxfDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=400",
      ingredients: ["Farina", "Acqua", "Lievito", "Sale", "Pomodoro", "Mozzarella", "Basilico", "Olio EVO"],
      instructions: "Preparare l'impasto, stenderlo e condirlo con pomodoro, mozzarella e basilico. Cuocere in forno caldo."
    }
  ];

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header title={appMainTitle} tagLine={appTagLine} />
      <main>
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
      </main>
    </>
  );
}

export default HomePage;