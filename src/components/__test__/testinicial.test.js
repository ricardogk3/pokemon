import { abilityHandler } from '../abilityHandler';
import { capitalizeFirstLetter } from '../CapitalizeFirstLetter';

jest.mock('../CapitalizeFirstLetter', () => ({
  capitalizeFirstLetter: jest.fn(),
}));

describe('abilityHandler', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return the capitalized name of a single ability', () => {
    const abilities = [{ ability: { name: 'overgrow' } }];
    const expected = capitalizeFirstLetter(abilities[0].ability.name);
    capitalizeFirstLetter.mockReturnValue(expected);

    const result = abilityHandler(abilities);

    expect(result).toEqual(expected);
    expect(capitalizeFirstLetter).toHaveBeenCalledWith(abilities[0].ability.name);
  });

  it('should return the capitalized name of two abilities', () => {
    const abilities = [      { ability: { name: 'overgrow' } },      { ability: { name: 'chlorophyll' } },    ];
    const expected =
      capitalizeFirstLetter(abilities[0].ability.name) +
      ' and ' +
      capitalizeFirstLetter(abilities[1].ability.name);
    capitalizeFirstLetter.mockReturnValueOnce(
      capitalizeFirstLetter(abilities[0].ability.name),
    );
    capitalizeFirstLetter.mockReturnValueOnce(
      capitalizeFirstLetter(abilities[1].ability.name),
    );

    const result = abilityHandler(abilities);

    expect(result).toEqual(expected);
    expect(capitalizeFirstLetter).toHaveBeenCalledWith(abilities[0].ability.name);
    expect(capitalizeFirstLetter).toHaveBeenCalledWith(abilities[1].ability.name);
  });

  it('should return the capitalized name of three abilities', () => {
    const abilities = [      { ability: { name: 'overgrow' } },      { ability: { name: 'chlorophyll' } },      { ability: { name: 'leaf-guard' } },    ];
    const expected =
      capitalizeFirstLetter(abilities[0].ability.name) +
      ', ' +
      capitalizeFirstLetter(abilities[1].ability.name) +
      ' and ' +
      capitalizeFirstLetter(abilities[2].ability.name);
    capitalizeFirstLetter.mockReturnValueOnce(
      capitalizeFirstLetter(abilities[0].ability.name),
    );
    capitalizeFirstLetter.mockReturnValueOnce(
      capitalizeFirstLetter(abilities[1].ability.name),
    );
    capitalizeFirstLetter.mockReturnValueOnce(
      capitalizeFirstLetter(abilities[2].ability.name),
    );

    const result = abilityHandler(abilities);

    expect(result).toEqual(expected);
    expect(capitalizeFirstLetter).toHaveBeenCalledWith(abilities[0].ability.name);
    expect(capitalizeFirstLetter).toHaveBeenCalledWith(abilities[1].ability.name);
    expect(capitalizeFirstLetter).toHaveBeenCalledWith(abilities[2].ability.name);
  });
});
