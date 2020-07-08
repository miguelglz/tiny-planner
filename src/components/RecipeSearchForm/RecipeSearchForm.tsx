import React from 'react';
import s from './RecipeSearchForm.module.scss';

const RecipeSearchForm = () => {
    return (
        <span>
            <div className="row">
                <div className={`u-full-width ${s.boldStyle}`}>Search Recipes</div>
            </div>
            <div className="row">
                <div className="u-full-width">
                    <input type="text" name="q" placeholder="Search" />
                </div>
            </div>

            <div className="row">
                <div className="six columns">
                    <label>
                        Diet
                        <br />
                        <select className={s.selectStyle} multiple name="diet">
                            <option value="balanced">balanced</option>
                            <option value="high-protein">high-protein</option>
                            <option value="high-fiber">high-fiber</option>
                            <option value="low-fat">low-fat</option>
                            <option value="low-carb">low-carb</option>
                            <option value="low-sodium">low-sodium</option>
                        </select>
                    </label>
                </div>
            </div>
            <div className="row">
                <div className="six columns">
                    <label>
                        Dish Type
                        <br />
                        <select className={s.selectStyle} multiple name="dish_type">
                            <option value="Bread">Bread</option>
                            <option value="Cereals">Cereals</option>
                            <option value="Condiments and sauces">Condiments and sauces</option>
                            <option value="Drinks">Drinks</option>
                            <option value="Desserts">Desserts</option>
                            <option value="Main course">Main course</option>
                            <option value="Pancake">Pancake</option>
                            <option value="Preps">Preps</option>
                            <option value="Preserve">Preserve</option>
                            <option value="Salad">Salad</option>
                            <option value="Sandwiches">Sandwiches</option>
                            <option value="Side dish">Side dish</option>
                            <option value="Soup">Soup</option>
                            <option value="Starter">Starter</option>
                            <option value="Sweets">Sweets</option>
                        </select>
                    </label>
                </div>

                <div className="six columns">
                    <label>
                        Cuisine Type
                        <br />
                        <select className={s.selectStyle} multiple name="cuisine_type">
                            <option value="American">American</option>
                            <option value="Asian">Asian</option>
                            <option value="British">British</option>
                            <option value="Caribbean">Caribbean</option>
                            <option value="Central Europe">Central Europe</option>
                            <option value="Chinese">Chinese</option>
                            <option value="Eastern Europe">Eastern Europe</option>
                            <option value="French">French</option>
                            <option value="Indian">Indian</option>
                            <option value="Italian">Italian</option>
                            <option value="Japanese">Japanese</option>
                            <option value="Kosher">Kosher</option>
                            <option value="Mediterranean">Mediterranean</option>
                            <option value="Mexican">Mexican</option>
                            <option value="Middle Eastern">Middle Eastern</option>
                            <option value="Nordic">Nordic</option>
                            <option value="South American">South American</option>
                            <option value="South East Asian">South East Asian</option>
                        </select>
                    </label>
                </div>
            </div>
            <div className="row">
                <div className="u-full-width">
                    <button className="u-pull-right" value="Search" type="submit">
                        Search
                    </button>
                </div>
            </div>
        </span>
    );
};

export default RecipeSearchForm;
