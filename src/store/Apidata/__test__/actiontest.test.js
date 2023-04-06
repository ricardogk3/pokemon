import { fetchPokemons, fetchPokemonsRequest, fetchPokemonsSuccess, fetchPokemonsFailure } from '../testactio';

describe('fetchPokemons', () => {
  it('dispatches the correct actions when API call succeeds', async () => {
    const mockResponse = [{ name: 'bulbasaur' }, { name: 'charmander' }, { name: 'squirtle' }];
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockResponse)
    }));

    const dispatch = jest.fn();
    await fetchPokemons()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(fetchPokemonsRequest());
  });

  it('dispatches the correct actions when API call fails', async () => {
    global.fetch = jest.fn().mockImplementation(() => Promise.reject(new Error('Request failed')));

    const dispatch = jest.fn();
    await fetchPokemons()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(fetchPokemonsRequest());
  });
});
