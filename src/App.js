import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";
//useState is a Hook that lets you add react state to components
//similar to this.state and we need to pass the initial state in
// and it will return the current state and the function that returns it
//useEffect
const App = () => {
  const APP_ID = "45807243";
  const APP_KEY = "4f4a5c8bb162dd7301106f0779b6b68e";
  // const examReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  //Hits is an array of objects
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(" ");
  const [query, setQuery] = useState("chicken");
  //Occurs after each render and update
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  //can access target from this event
  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    //prevent page refresh
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="App">
      <h1>Recipe Hunt</h1>
      {/* Create a form */}
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={Math.round(recipe.recipe.calories)}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
      <p className="footer">Made with &#9829; by Martin</p>
    </div>
  );
};

export default App;
