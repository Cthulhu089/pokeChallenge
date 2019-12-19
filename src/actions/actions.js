import { getPokelist, getPokemon } from '../services/services'
export const getPokemonList =  (type) => async dispatch => {
    const response = await getPokelist(type);
    dispatch({
     type: 'POKE_LIST',
     payload: response.data['cards']
    })
}

export const getPokemonInfo =  (type) => async dispatch => {
    const response = await getPokemon(type);
    
    dispatch({
     type: 'POKEMON',
     payload: response.data.card
    })
}

export const clearPokemonInfo =  (type) => async dispatch =>    { 
    dispatch({
     type: 'CLEAR_POKEMON',
     payload: {}
    })
}