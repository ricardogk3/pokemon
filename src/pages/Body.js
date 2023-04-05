import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getPokemons } from '../store/Apidata/Apidata.actions'
import {connect} from 'react-redux'
import {getData} from '../store/Apidata/Apidata.actions'

function Body() {
    const dispatch = useDispatch()
    const result = {}
    // console.log("resultad",result)
    // const result = useSelector(state => {
    //     async function fetchData() {
    //       // You can await here
    //       const response = await dispatch(getData());
    //       return response
    //       // ...
    //     }
        
    //     return fetchData();
    //   })
    // console.log(result)

    // const selectChange = async () => {
    //     // if (hasChanged) {
    //         return await dispatch(getData());
    //     // } else {
    //     // //   await dispatch(redirectPage(userCode));
    //     // }
    // }
    
    // useEffect(() => {
    //     selectChange();
    //     console.log(selectChange())
    // }, []);

    // useEffect(
    //     async () => {
    //         // const {data} = getData()
    //         // console.log(data)
    //         // // getPokemons()
    //         const a = dispatch(getData())
    //         console.log(a)
    //     }, []
    // );

    useEffect(() => {
        async function fetchData() {
          // You can await here
          const response = await dispatch(getData());
          console.log("res",response)
          // ...
        }
        fetchData();
      }, []); 

    // const getData = async () => {
    //     let dados = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
    //     let data = dados.data;
    //     console.log(data)
    // };
    // const getPokemons = async() => {
    //     var endpoints = [];
    //     for (var i = 1; i < 200; i++) {
    //       endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    //     }
    //     let dados = await axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => {return res});
    //     console.log(dados)
    //   };
    
    //   const pokemonFilter = (name) => {
    //     var filteredPokemons = [];
    //     if (name === "") {
    //       getPokemons();
    //     }
    //     for (var i in pokemons) {
    //       if (pokemons[i].data.name.includes(name)) {
    //         filteredPokemons.push(pokemons[i]);
    //       }
    //     }
    
    //     setPokemons(filteredPokemons);
    //   };

}

export default Body