import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '../store/Apidata/Apidata.actions';
import React, { useEffect, useState } from 'react';
import PokemonCard from './PokeCard';
import { Box, Grid, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import './Styles.css'
import pokeball from '../pages/img/pokeball.png'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const PokemonList = () => {
    const dispatch = useDispatch();
    const { loading, pokemon, error } = useSelector(state => state);
    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchPokemons());
    }, [dispatch]);

    useEffect(() => {
        setPokemons(pokemon)
    }, [pokemon]);

    const pokemonFilter = (name) => {
        var filteredPokemons = [];
        if (name === "") {
            setPokemons(pokemon);
        }
        for (var i in pokemon) {
            if (pokemon[i].data.name.includes(name.toLowerCase())) {
                filteredPokemons.push(pokemon[i]);
            }
            else if (pokemon[i].data.types[1]) {
                if (pokemon[i].data.types[1].type.name.includes(name.toLowerCase())) {
                    filteredPokemons.push(pokemon[i]);
                }
            } else {
                if (pokemon[i].data.types[0].type.name.includes(name.toLowerCase())) {
                    filteredPokemons.push(pokemon[i]);
                }
            }
        }
        setPokemons(filteredPokemons);
    };

    const Numbers = () => {
        const numbers = Array.from({ length: Math.ceil(pokemons.length / 12) }, (_, index) => index + 1);
        return (
            <div style={{ margin: 5, width: "93%", padding: '1%' }}>
                {numbers.map((number, index) => (
                    <Button key={index} variant="outlined" style={{ margin: 3 }} onClick={() => setPage(number)}>{number}</Button>
                ))}
            </div>
        );
    }


    if (loading) {
        return <div style={{ display: "flex",flexDirection:'column', alignItems: 'center', justifyContent: 'center', }}>
            <div className="spinner">
                <span>Hunting for Pokémon...</span>
            </div>
            <div className="spinner">
                <div className="half-spinner"></div>
            </div>
                {/* <img className='pokewait' src={pokeball} alt="Logo" style={{ maxHeight: "15vh", maxWidth: "100%", }} /> */}
        </div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div id='pklistid'>
            <Search id='pesquisa' onChange={(e) => pokemonFilter(e.target.value)}>
                <SearchIconWrapper>
                    {/* <SearchIcon /> */}
                    <img className='pokewait' src={pokeball} alt="Logo" style={{ maxHeight: "3vh", maxWidth: "100%", }} />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            <Grid container spacing={3} id='gridid' style={{ width: "95%", padding: '1%' }} justify="center" alignItems="center">
                {pokemons.slice([12 * page - 12], [12 * page]).map(poke => (
                    <Grid item xs={12} sm={6} md={4} lg={2} key={poke.id} >
                        <Box >
                            <PokemonCard
                                className='pokemoncard'
                                key={poke.data.id}
                                id={poke.data.id}
                                name={poke.data.species.name}
                                image={poke.data.sprites.front_default}
                                types={poke.data.types}
                                abilities={poke.data.abilities}
                                stats={poke.data.stats}
                            />
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <Numbers />
        </div>
    );
}

export default PokemonList;
