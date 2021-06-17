import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import api from '../../services/api';

const RomanPage: React.FC = () => {

  const [intRoman, setINTRoman] = useState('');
  const [romRoman, setROMRoman] = useState('');
  const [numero, setNumero] = useState(intRoman);

  async function handleConvertClick(e: any) {
    
    e.preventDefault();

    const convertedRoman = await api.get(`/int2rom?int=${intRoman}`);

    setROMRoman(convertedRoman.data.rom);

    setNumero(intRoman);
  }

    return (
      <Container style={{paddingTop: 20}}>
        <h2>Convert INTEGER to ROMAN</h2>

        <Form>
          <Form.Group controlId="formInt2ROM">
            <Form.Control type="text" placeholder="Only numbers from 1 to 999" onChange={(e) => setINTRoman(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleConvertClick} style={{width: '100%'}}> Convert </Button>
        </Form>

        <h3 style={{paddingTop: 20}}>INTEGER: {numero} <br/></h3>
        <h3>ROMAN: {romRoman} </h3>
        
      </Container>
    )
  }
 
  export default RomanPage;