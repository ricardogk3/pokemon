export const FETCH_POKEMONS_REQUEST = 'FETCH_POKEMONS_REQUEST';
export const FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS';
export const FETCH_POKEMONS_FAILURE = 'FETCH_POKEMONS_FAILURE';

export const fetchPokemons = () => {
    return (dispatch) => {
      dispatch(fetchPokemonsRequest());
      var endpoints = [];
      for (var i = 1; i < 200; i++) {
          endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      }
      Promise.all(endpoints.map(endpoint => fetch(endpoint)))
        .then(responses => Promise.all(responses.map(res => res.json())))
        .then(pokemon => {
          dispatch(fetchPokemonsSuccess(pokemon));
        })
        .catch(error => {
          dispatch(fetchPokemonsFailure(error.message));
        });
    };
  };


  export const fetchPokemonsRequest = () => {
    return {
      type: FETCH_POKEMONS_REQUEST
    };
  };