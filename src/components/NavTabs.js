import React, { useState, useEffect } from 'react'
import { Container, Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from './DropdownComponent';
import axios from 'axios';

function NavTabs() { 
    const [odds, setOdds] = useState ([]);
    const {REACT_APP_API_KEY } = process.env;
    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get(`https://api.quarter4.io/search/v2/stream?filter%5Binjuries%5D=0&filter%5Bevent_predictions%5D=1&filter%5Bplayer_predictions%5D=0&filter%5Bdiamonds%5D=0&filter%5Bhottest%5D=0&api_key=${REACT_APP_API_KEY}`)
        .then((response)=>{
            // axios returns API response body in .data
            // const teamsData = response.data.data;
            // console.log("Data: ", teamsData );
            setOdds(response.data.data)
          })
        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [REACT_APP_API_KEY]);

    return (
        <div>
            <Container className="pb-5">
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
                        <Dropdown options={odds}/>
                    </Tab>
                </Tabs>
            </Container>
        </div>
    )
}

export default NavTabs;
