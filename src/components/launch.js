import React from 'react';
import './launch.css'

function Launch({ details }) {
    const { flight_number, mission_name, mission_id, launch_year, launch_success, links, rocket } = details;
    const imgSrc = links.mission_patch_small;
    const land_success = rocket.first_stage.cores[0].land_success;

    return (<div className="specex-card card">
        <div key={flight_number}>
            <div>
                <img src={imgSrc} alt="" className="specex-card-img"/>
            </div>
            <div className="specex-card-img__number">
                {mission_name} #{flight_number}
            </div>
            <div className="specex-card-label">
                Mission Ids: <ul> <li className="specex-card-value">{mission_id}</li></ul>
            </div>
            <div className="specex-card-label">
                Launch Year: <span className="specex-card-value">{launch_year}</span>
            </div>
            <div className="specex-card-label">
                Successful Launch: <span className="specex-card-value">{launch_success ? "true" : "false"}</span>
            </div>
            <div className="specex-card-label">
                Successful Landing: <span className="specex-card-value">{land_success ? "true" : "false"}</span>
            </div>
        </div>
    </div>);
}

export default Launch;

