import React, { Component, useEffect, useState } from "react";
import Recipe from "./RecipeComponent";

function Main(props){
        const APP_ID = "c09c7057";
        const APP_KEY = "66611f9d9e93dd397daab3479900b758";

        const [recipes, setRecipes] = useState([]);
        const [search, setSearch] = useState("");
        const [query, setQuery] = useState('chicken');

        const getRecipes = async () => {
            const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
            );
            const data = await response.json();
            setRecipes(data.hits);
            console.log(data.hits);
        }

        useEffect(() => {
            getRecipes();
        }, [query]); // eslint-disable-line react-hooks/exhaustive-deps

        const updateSearch = e => {
            setSearch(e.target.value);
        };

        const getSearch = e => {
            e.preventDefault();
            setQuery(search);
            // const clearObj = {message: 'Search again:'};
            // setSearch(clearObj);
            setSearch('');
        };
    

        return (
            <div className="main">
                <div className = "form-heading">
                <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" value={search} onChange = {updateSearch} />
                <button className = "search-button" type="submit">Search</button>
                </form>
            </div>
            <div className = "button-heading">
                <button className = "userrecipe-button" type="submit">Enter Own Recipe</button>
            </div>
            <div className="recipes">
                {recipes.map(recipe =>(
                <Recipe
                    key={recipe.recipe.label}
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients}
                />
             ))}
            </div>
            </div>
        );
}

export default Main;