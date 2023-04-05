import { FETCH_POKEMONS_REQUEST, FETCH_POKEMONS_SUCCESS, FETCH_POKEMONS_FAILURE } from './Apidata.actions';

const initialState = {
  loading: false,
  pokemon: [],
  error: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMONS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_POKEMONS_SUCCESS:
      return {
        loading: false,
        pokemon: action.payload,
        error: ''
      };
    case FETCH_POKEMONS_FAILURE:
      return {
        loading: false,
        pokemon: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
