// import axios from 'axios';

// export async function getPokemons (){
//     var endpoints = [];
//     for (var i = 1; i < 200; i++) {
//       endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
//     }
//     let dados = await axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => {return res});
//     console.log(dados)
//     return {
//         type:'apidata',
//         payload: dados
//     }
//   };

import { GET_DATA, DATA_ERROR } from '../types.js'
import axios from 'axios'

export const getData = () => async dispatch => {

    try {
        var endpoints = [];
        for (var i = 1; i < 200; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        const dados = await axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => { return res });
        // dispatch({
        //     type: GET_DATA,
        //     payload: dados.data
        // })
        return {type: GET_DATA,
        payload: dados}
    }
    catch (e) {
        dispatch({
            type: DATA_ERROR,
            payload: console.log(e),
        })
    }

}