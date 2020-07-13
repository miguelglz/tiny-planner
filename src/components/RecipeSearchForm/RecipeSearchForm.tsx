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
                            <option value="low-fat">low-fat</option>
                            <option value="low-carb">low-carb</option>
                            <option value="low-sodium">low-sodium</option>
                        </select>
                    </label>
                </div>

                <div className="six columns">
                    <label>
                        Health Type
                        <br />
                        <select className={s.selectStyle} multiple name="health_type">
                            <option value="vegan">Vegan</option>
                            <option value="vegetarian">Vegetarian</option>
                            <option value="peanut-free">Peanut Free</option>
                            <option value="tree-nut-free">Tree Nut Free</option>
                            <option value="alcohol-free">Alcohol Free</option>
                            <option value="sugar-concious">Sugar Concious</option>
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
