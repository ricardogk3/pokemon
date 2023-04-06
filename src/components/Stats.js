import React from 'react';
import './Progress.css'
import {capitalizeFirstLetter} from './CapitalizeFirstLetter' 

function Stats({ stats }) {

    return (
        <div style={{fontSize: "10px"}}>
            {stats.map((s,i) => {
                return (
                    <>
                    {capitalizeFirstLetter(s.stat.name)} - ( {s.base_stat} / 250 )
                    <div id="progress-bar" key={i}>
                        <div id="progress" style={dropzoneStyle(s.base_stat/2.5)}></div>
                    </div>
                    </>
                )
            })}
        </div>
    );
}

export default Stats

const dropzoneStyle = (isPreview) => ({
    width: `${isPreview}%`,
    height: "100%",
    backgroundColor: "#4CAF50",
});
