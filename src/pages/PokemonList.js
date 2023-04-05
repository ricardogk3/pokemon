import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '../store/Apidata/Apidata.actions';
import React, { useEffect } from 'react';


// import Card from "react-bootstrap/Card";
// import Hover from './Hover';
// import { FaCaretDown, FaCaretUp, FaToggleOff, FaToggleOn } from "react-icons/fa";
// import { Button, IconButton } from '@mui/material';


const PokemonList = () => {
    const dispatch = useDispatch();
    const { loading, pokemon, error } = useSelector(state => state);
    pokemon.map(poke => (
        console.log(poke.data.stats)
    ))

    useEffect(() => {
        dispatch(fetchPokemons());
    }, [dispatch]);

    if (loading) {
        return <div style={{ display: "flex", alignItems: 'center', justifyContent: 'space-evenly', }}>
            <div className="spinner">
                <span>Loading...</span>
                <div className="half-spinner"></div>
            </div>
        </div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <ul>
                {pokemon.map(poke => (
                    <>
                    <li key={poke.id}>{poke.data.species.name}</li>
                    <li key={poke.id}>{poke.data.sprites.front_default}</li>
                    {/* <li key={poke.id}>{poke.data.abilities}</li> */}
                    {/* <li key={poke.id}>{poke.data.types}</li> */}
                    {/* <li key={poke.id}>{poke.data.stats}</li> */}
                    </>
                ))}
            </ul>

        </div>
    );
}

            // <div style={{ display: "flex", alignItems: 'center', justifyContent: 'space-evenly', marginBottom: "3vh" }}>
            //     <div style={{ flex: 1 }}></div>
            //     {/* buttons used to select last seven days, job title, company name, posted */}
            //     <div style={{ flex: 3, display: "flex", alignItems: 'center', justifyContent: 'space-evenly', }}>
            //         {filters.sevenDays ? <><Button variant="contained" onClick={() => {
            //             setFilters({
            //                 ...filters,
            //                 sevenDays: !filters.sevenDays
            //             });
            //         }}>Last seven days <FaToggleOn size={22} /></Button></>
            //             : <><Button variant="contained" onClick={() => {
            //                 setFilters({
            //                     ...filters,
            //                     sevenDays: !filters.sevenDays
            //                 });
            //             }}>Last seven days <FaToggleOff size={22} /></Button></>}
            //         {/* Job Title */}
            //         {filters.jobTitle ? <><Button variant="outlined" onClick={() => {
            //             setFilters({
            //                 ...filters,
            //                 jobTitle: !filters.jobTitle,
            //                 companyName: false,
            //                 posted: false,
            //             });
            //         }}>Job Title<FaCaretUp /></Button></>
            //             : <><Button variant="outlined" onClick={() => {
            //                 setFilters({
            //                     ...filters,
            //                     jobTitle: !filters.jobTitle,
            //                     companyName: false,
            //                     posted: false,
            //                 });
            //             }}>Job Title<FaCaretDown /></Button></>}
            //         {/* Company Name */}
            //         {filters.companyName ? <><Button variant="outlined" onClick={() => {
            //             setFilters({
            //                 ...filters,
            //                 jobTitle: false,
            //                 companyName: !filters.companyName,
            //                 posted: false,
            //             });
            //         }}> Company Name<FaCaretUp /></Button></>
            //             : <><Button variant="outlined" onClick={() => {
            //                 setFilters({
            //                     ...filters,
            //                     jobTitle: false,
            //                     companyName: !filters.companyName,
            //                     posted: false,
            //                 });
            //             }}> Company Name<FaCaretDown /></Button></>}

            //         {/* Posted */}
            //         <Button variant="outlined" onClick={() => {
            //             setFilters({
            //                 ...filters,
            //                 jobTitle: false,
            //                 companyName: false,
            //                 posted: !filters.posted,
            //                 sevenDays: false
            //             });
            //         }}> Posted<FaCaretDown /></Button>
            //     </div>
            //     <div style={{ flex: 1 }}></div>
            // </div>
            // {/* show all the data and filter or sort depending on the selection made */}
            // {loading ?
            //     <div style={{ display: "flex", alignItems: 'center', justifyContent: 'space-evenly', }}>
            //         <div className="spinner">
            //             <span>Loading...</span>
            //             <div className="half-spinner"></div>
            //         </div>
            //     </div> :
            //     <div style={{ display: "flex" }}>
            //         <div style={{ flex: 1 }}></div>
            //         <div style={{ flex: 8 }}>
            //             {newdata.filter(n => {
            //                 // filter last seven days posted jobs
            //                 if (filters.sevenDays) {
            //                     const d = new Date()
            //                     d.setDate(d.getDate() - 7)
            //                     return d < new Date(n.postingDate)
            //                 } else {
            //                     return n
            //                 }
            //             }).sort((a, b) => {
            //                 // sort by the job title, company name and the posted date
            //                 if (filters.jobTitle) {
            //                     if (a.jobTitle < b.jobTitle) return -1;
            //                     if (a.jobTitle > b.jobTitle) return 1;
            //                     return 0;
            //                 } if (filters.companyName) {
            //                     if (a.companyName > b.companyName) return 1;
            //                     if (a.companyName < b.companyName) return -1;
            //                     return 0;
            //                 } else {
            //                     if (new Date(a.postingDate) > new Date(b.postingDate)) return -1;
            //                     if (new Date(a.postingDate) < new Date(b.postingDate)) return 1;
            //                     return 0;
            //                 }
            //             }).slice([0], [10]).map((data) => {
            //                 // show the data in boxes. That will show all the 10 job titles, company names and when it was posted, It also call a hover that show more data about the job oportunity
            //                 return (
            //                     <Card key={data.id}>
            //                         <Card.Body style={{ display: "flex", alignItems: 'center', justifyContent: 'center', background: '#FFF', }}>
            //                             <div className="job" style={{ display: "flex", width: '95%', border: '1px solid gray', margin: 3, }}>
            //                                 <Card.Text style={{ flex: 2 }}>{data.jobTitle}<h4>{data.companyName}</h4></Card.Text>
            //                                 {/* <Card.Text className="company" style={{ flex: 2 }}><h4>{data.companyName}</h4></Card.Text> */}
            //                                 <Card.Text style={{ flex: 6, textAlign: 'justify' }}>{data.snippets[0]}

            //                                     <Hover jobDescription={data.jobDescription} key={data.id} />
            //                                 </Card.Text>
            //                                 {/* <Card.Text style={{ flex: 1 }}>{data.jobDescription}</Card.Text> */}
            //                                 {/* <Card.Text style={{ flex: 1 }}>{data.jobdesc}</Card.Text> */}
            //                                 <Card.Text style={{ flex: 2 }}>
            //                                     <div>
            //                                         {new Date(data.postingDate).toLocaleDateString()}
            //                                         <p>{data.estimatedSalary}</p>
            //                                         <p>{data.postedDate}</p>
            //                                         <a></a>
            //                                     </div>
            //                                 </Card.Text>
            //                             </div>
            //                         </Card.Body>
            //                     </Card>
            //                 )
            //             })}
            //         </div>
            //         <div style={{ flex: 1 }}></div>
            //     </div>}
export default PokemonList;
