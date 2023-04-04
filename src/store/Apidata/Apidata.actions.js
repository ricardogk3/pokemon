import axios from 'axios';

export async function getPokemons (){
    var endpoints = [];
    for (var i = 1; i < 200; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    let dados = await axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => {return res});
    console.log(dados)
    return {
        type:'apidata',
        payload: dados
    }
  };