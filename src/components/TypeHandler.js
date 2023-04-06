import {capitalizeFirstLetter} from './CapitalizeFirstLetter' 

export const typeHandler = (types) => {
    if (types[1]) {
      return capitalizeFirstLetter(types[0].type.name) + " | " + capitalizeFirstLetter(types[1].type.name);
    }
    return capitalizeFirstLetter(types[0].type.name);
  };