import React from "react";
import './Menu.css';
import { Container, Tab, Tabs, Row, Col } from 'react-bootstrap';
import menuImage1 from '../../assets/images/menu/menu-item-1.png';
import menuImage2 from '../../assets/images/menu/menu-item-2.png';
import menuImage3 from '../../assets/images/menu/menu-item-3.png';
import menuImage4 from '../../assets/images/menu/menu-item-4.png';
import menuImage5 from '../../assets/images/menu/menu-item-5.png';
import menuImage6 from '../../assets/images/menu/menu-item-6.png';

var Menu = [
    {
        "id": 1,
        "category": "Starters",
        "header": "Starters",
    },
    {
        "id": 2,
        "category": "Breakfast",
        "header": "Breakfast",
    },
    {
        "id": 3,
        "category": "Lunch",
        "header": "Lunch",
    },
    {
        "id": 4,
        "category": "Dinner",
        "header": "Dinner",
    }
]

export default function AppMenu(){
   
    return(
        <>
            <section id="menu" className="menu">
                <div className="section-header">
                    <h2>Our Menu</h2>
                    <p>Check Our <span>Yummy Menu</span></p>
                </div>
                <Container>
                <Tabs
                    defaultActiveKey="Starters"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                    >
                        
                    {Menu.map((item)=>(
                        <Tab eventKey={item.category} title={item.category} key={item.id}>
                            <Row>
                                <Col lg={12}>
                                    <div className="tab-header text-center">
                                        <p>Menu</p>
                                        <h3>{item.header}</h3>
                                    </div>
                                </Col>
                                <Col lg={4} className="menu-item">
                                <img src={menuImage1} className="menu-img img-fluid" alt={item.title}/>
                                    <h4>Magnam Tiste</h4>
                                    <p className="ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </p>
                                    <p className="price">
                                        $5.95
                                    </p>
                                </Col>
                                <Col lg={4} className="menu-item">
                                <img src={menuImage2} className="menu-img img-fluid" alt={item.title}/>
                                    <h4>Aut Luia</h4>
                                    <p className="ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </p>
                                    <p className="price">
                                        $14.95 
                                    </p>
                                </Col>
                                <Col lg={4} className="menu-item">
                                <img src={menuImage3} className="menu-img img-fluid" alt={item.title}/>
                                    <h4>Est Eligendi</h4>
                                    <p className="ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </p>
                                    <p className="price">
                                        $8.95 
                                    </p>
                                </Col>
                                <Col lg={4} className="menu-item">
                                <img src={menuImage4} className="menu-img img-fluid" alt={item.title}/>
                                    <h4>Eos Luibusdam</h4>
                                    <p className="ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </p>
                                    <p className="price">
                                        $12.95 
                                    </p>
                                </Col>
                                <Col lg={4} className="menu-item">
                                <img src={menuImage5} className="menu-img img-fluid" alt={item.title}/>
                                    <h4>Eos Luibusdam</h4>
                                    <p className="ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </p>
                                    <p className="price">
                                        $12.95 
                                    </p>
                                </Col>
                                <Col lg={4} className="menu-item">
                                <img src={menuImage6} className="menu-img img-fluid" alt={item.title}/>
                                    <h4>Laboriosam Direva</h4>
                                    <p className="ingredients">
                                        Lorem, deren, trataro, filede, nerada
                                    </p>
                                    <p className="price">
                                        $9.95 
                                    </p>
                                </Col>
                            </Row>
                        </Tab>                
                                            
                    ))}
                </Tabs>
                </Container>
            </section>
        </>
    )
}