import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import {
  FETCH_POKEMONS_REQUEST,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_FAILURE,
  fetchPokemons,
  fetchPokemonsRequest,
  fetchPokemonsSuccess,
  fetchPokemonsFailure,
} from './pokemonActions';

const mockStore = configureMockStore([thunk]);

describe('pokemonActions', () => {
  it('should create an action to fetch pokemons request', () => {
    const expectedAction = {
      type: FETCH_POKEMONS_REQUEST,
    };
    expect(fetchPokemonsRequest()).toEqual(expectedAction);
  });

  it('should create an action to fetch pokemons success', () => {
    const pokemon = [      { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },      { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },    ];
    const expectedAction = {
      type: FETCH_POKEMONS_SUCCESS,
      payload: pokemon,
    };
    expect(fetchPokemonsSuccess(pokemon)).toEqual(expectedAction);
  });

  it('should create an action to fetch pokemons failure', () => {
    const error = 'Network Error';
    const expectedAction = {
      type: FETCH_POKEMONS_FAILURE,
      payload: error,
    };
    expect(fetchPokemonsFailure(error)).toEqual(expectedAction);
  });

  it('should create FETCH_POKEMONS_SUCCESS when fetching pokemons has been done', () => {
    const mock = new MockAdapter(axios);
    const store = mockStore({ pokemonList: [] });

    var endpoints = [];
    for (var i = 1; i < 200; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }

    const pokemon = [      { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },      { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },    ];
    mock.onGet(endpoints[0]).reply(200, pokemon[0]);
    mock.onGet(endpoints[1]).reply(200, pokemon[1]);

    const expectedActions = [      { type: FETCH_POKEMONS_REQUEST },      { type: FETCH_POKEMONS_SUCCESS, payload: pokemon },    ];

    return store.dispatch(fetchPokemons()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should create FETCH_POKEMONS_FAILURE when fetching pokemons has failed', () => {
    const mock = new MockAdapter(axios);
    const store = mockStore({ pokemonList: [] });

    var endpoints = [];
    for (var i = 1; i < 200; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }

    const error = 'Network Error';
    mock.onGet(endpoints[0]).reply(500, error);

    const expectedActions = [      { type: FETCH_POKEMONS_REQUEST },      { type: FETCH_POKEMONS_FAILURE, payload: error },    ];

    return store.dispatch(fetchPokemons()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
