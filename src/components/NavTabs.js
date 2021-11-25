import React from 'react'
import { Container, Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from './DropdownComponent';

function NavTabs() {
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
                        <Dropdown/>
                    </Tab>
                </Tabs>
            </Container>
        </div>
    )
}

export default NavTabs;
