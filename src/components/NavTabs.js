import React, { useState, useEffect } from 'react'
import { Container, Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from './DropdownComponent';
import axios from 'axios';

function NavTabs() { 
    const [teams, setTeams] = useState ([]);
    const {REACT_APP_API_KEY } = process.env;
    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get(`https://api.quarter4.io/search/v2/stream?filter%5Binjuries%5D=0&filter%5Bevent_predictions%5D=1&filter%5Bplayer_predictions%5D=0&filter%5Bdiamonds%5D=0&filter%5Bhottest%5D=0&api_key=${REACT_APP_API_KEY}`)
        .then((response)=>{
            // const teamsData = response.data.data;
            // console.log(teamsData)
            setTeams(response.data.data)
            // axios returns API response body in .data
          })
        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [REACT_APP_API_KEY]);

    // const data = [
    //     {Team: 1, name: " Team 1"}, 
    //     {Team: 2, name: " Team 2"}, 
    //     {Team: 3, name: " Team 3"}, 
    //     {Team: 4, name: " Team 4"}
    //   ];

    return (
        <div>
            <Container>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="m-0">
                    <Tab eventKey="Forecasts" title="Home">
                        Forecasts
                    </Tab>
                    <Tab eventKey="In-game " title="In-game ">
                        In-game 
                    </Tab>
                    <Tab eventKey="Probabilities" title="Probabilities">
                        Probabilities
                    </Tab>
                    <Tab eventKey="Odds & Markets" title="Odds&Markets" >
                        Odds & Markets
                        <Dropdown options={teams}/>
                        <div>
                            {/* <p>{teams === null ? 'loading' : teams}</p> */}
                        </div>
                    </Tab>
                </Tabs>
            </Container>
        </div>
    )
}

export default NavTabs;
