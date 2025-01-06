import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { data } from "../../helpers/data";
import { useState, Fragment } from "react";
import LegendCard from "./LegendCard";


const LegendContainer = () => {
  
    
  return (
    <div>        
      <Form.Control type="search"  className="w-50 mx-auto my-2" placeholder="Search Legends..." />
      <Container className='p-3 my-3 card-container w-75'>
        <Row xs={1} md={2} xl={3} className='justify-content-center g-3'>
        {
          data.map ((legend)=>(
            
            <LegendCard key={legend.id} legend={legend} />
          ))
        }
        </Row>
      </Container>
</div>
  )
}

export default LegendContainer