import React from "react";
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecipeCard from "./components/RecipeCard";

function App(){
  const appMainTitle = "Il Ricettario";
  const appTagLine = "Le ricette più ricettate.";
  const appCompanyName = "Ricette Intelligenti SRL";

  const recipes = [
    {
      id: 1,
      name: "Pasta al Pesto",
      description: "Un classico della cucina ligure, veloce e saporito.",
      imageUrl: "https://images.unsplash.com/photo-1621995818295-8e47458622c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM4ODQxfDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
      id: 2,
      name: "Risotto ai Funghi Porcini",
      description: "Un primo piatto cremoso con funghi freschi di stagione.",
      imageUrl: "https://images.unsplash.com/photo-1621995818295-8e47458622c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM4ODQxfDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
      id: 3,
      name: "Tiramisù",
      description: "Il dessert italiano più amato, strati di bontà.",
      imageUrl: "https://images.unsplash.com/photo-1621995818295-8e47458622c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM4ODQxfDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
      id: 4,
      name: "Pizza Margherita",
      description: "La miglior pizza",
      imageUrl: "https://images.unsplash.com/photo-1621995818295-8e47458622c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM4ODQxfDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=400"
    }
  ];

  return (
    <div className="App">
      <Header title={appMainTitle} tagLine={appTagLine} />
      <main>
        <div className="recipe-list-container">
          {recipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              name={recipe.name}
              description={recipe.description}
              imageUrl={recipe.imageUrl}
            />
          ))}
        </div>
      </main>
      <Footer companyName={appCompanyName}/> 
    </div>
  )
}

export default App;