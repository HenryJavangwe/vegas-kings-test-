import React from 'react'
import { Table, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function DisplayData(props) {
    const selectedValue = props.details;
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={4} className="side_bar text-left" style={{justifyContent: "flex-start", paddingRight: "210px", fontWeight:"700", color:"#02af5a"}}>
                        <span className="text-left" >
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="book" className="svg-inline--fa fa-book fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{marginLeft: "3px;"}}><path fill="currentColor" d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path></svg>
                        </span>
                        ODDS & Markets
                    </Col>
                    <Col sm={8} className="display_data">
                        <Table  hover>
                            <thead>
                                <tr>
                                    <th style={{border: "none"}}></th>
                                    <th colspan="2" style={{width: "20em", border: "none", textAlign: "center"}}>Spread</th>
                                    <th rowspan="2" style={{width: "16em", verticalAlign: "top", textAlign: "center"}}>Total Score</th>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th style={{width: "10em", textAlign: "center" }}>
                                        <p style={{backgroundColor:"#eff4fa", borderRadius:"8px", fontSize:".8rem", fontWeight:"500"}}>
                                            {selectedValue.away_team_name }
                                        </p>
                                    </th>
                                    <th style={{width: "10em", textAlign: "center"}}>
                                        <p style={{backgroundColor:"#eff4fa", borderRadius:"8px", fontSize:".8rem", fontWeight:"500"}}>
                                            {selectedValue.home_team_name}
                                        </p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody style={{borderTop: "none"}}>
                                <tr>
                                    <td>Quarter4</td>
                                    <td>
                                        <Row>
                                            <Col style={{verticalAlign: "middle", textAlign: "center"}}><img src={selectedValue.away_team_image} style={{width:"54px", height:"54px"}}/></Col>
                                            <Col style={{verticalAlign: "middle", textAlign: "center"}}>{selectedValue.away_spread}</Col>
                                        </Row>
                                    </td>
                                    <td>
                                        <Row>
                                            <Col style={{verticalAlign: "middle", textAlign: "center"}}><img src={selectedValue.home_team_image} style={{width:"54px", height:"54px"}}/></Col>
                                            <Col style={{verticalAlign: "middle", textAlign: "center"}}>{selectedValue.home_spread}</Col>
                                        </Row>
                                    </td>
                                    <td>{selectedValue.relevancy}</td>
                                </tr>
                                {/* SECOND TABLE ROW */}
                                <tr>
                                    <td>Quarter4</td>
                                    <td>
                                        <Row>
                                            <Col style={{verticalAlign: "middle", textAlign: "center"}}><img src={selectedValue.away_team_image} style={{width:"54px", height:"54px"}}/></Col>
                                            <Col style={{verticalAlign: "middle", textAlign: "center"}}>{selectedValue.away_spread}</Col>
                                        </Row>
                                    </td>
                                    <td>
                                        <Row>
                                            <Col style={{verticalAlign: "middle", textAlign: "center"}}><img src={selectedValue.home_team_image} style={{width:"54px", height:"54px"}}/></Col>
                                            <Col style={{verticalAlign: "middle", textAlign: "center"}}>{selectedValue.home_spread}</Col>
                                        </Row>
                                    </td>
                                    <td>{selectedValue.relevancy}</td>
                                </tr>
                                {/* THIRD TABLE ROW */}
                                
                                <tr>
                                    <td>Quarter4</td>
                                    <td>
                                        <Row>
                                            <Col style={{verticalAlign: "middle", textAlign: "center"}}><img src={selectedValue.away_team_image} style={{width:"54px", height:"54px"}}/></Col>
                                            <Col style={{verticalAlign: "middle", textAlign: "center"}}>{selectedValue.away_spread}</Col>
                                        </Row>
                                    </td>
                                    <td>
                                        <Row>
                                            <Col style={{verticalAlign: "middle", textAlign: "center"}}><img src={selectedValue.home_team_image} style={{width:"54px", height:"54px"}}/></Col>
                                            <Col style={{verticalAlign: "middle", textAlign: "center"}}>{selectedValue.home_spread}</Col>
                                        </Row>
                                    </td>
                                    <td>{selectedValue.relevancy}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DisplayData
