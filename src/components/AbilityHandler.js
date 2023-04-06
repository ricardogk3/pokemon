import {capitalizeFirstLetter} from './CapitalizeFirstLetter' 

export const abilityHandler = (ability) => {
    if (ability[2]) {
      return capitalizeFirstLetter(ability[0].ability.name) + ", " + capitalizeFirstLetter(ability[1].ability.name) + " and " + capitalizeFirstLetter(ability[2].ability.name);
    }
    if (ability[1]) {
      return capitalizeFirstLetter(ability[0].ability.name) + " and " + capitalizeFirstLetter(ability[1].ability.name);
    }
    return capitalizeFirstLetter(ability[0].ability.name);
  };