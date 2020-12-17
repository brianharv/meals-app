import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/meals-actions';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
  switch(action.type){
    case TOGGLE_FAVORITE: 
      const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
      if (existingIndex >= 0) { // remember we are REMOVING it from the Favorites here. This returns us a new favoriteMeals state slice without the favorited meal
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return {...state, favoriteMeals: updatedFavMeals };
      }else {
        const meal = state.meals.find(meal => meal.id === action.mealId)
        return {...state, favoriteMeals: state.favoriteMeals.concat(meal)}
      }
    default:
    return state;
  }
}

export default mealsReducer;