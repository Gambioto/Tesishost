import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './styles.css'
import Chat from './Chat'

function Objective() {
    const [typeBusiness, setTypeBusiness] = useState('')
    const [market, setMarket] = useState('')
    const [lineBusiness, setLineBusiness] = useState('')
    const [restrictions, setRestriction] = useState('');
    const [variable, setVariable] = useState('')
    const [situation, setSituation] = useState('')


    const handleSituation = (e) => {
        setSituation(e.target.value)
    }

    const handleRestriction = (e) => {
        setRestriction(e.target.value)
    }

    const handleTypeChange = (e) => {
        setTypeBusiness(e.target.value)
    }

    const handleMarketChange = (e) => {
        setMarket(e.target.value)
    }

    const handleBusinessChange = (e) => {
        setLineBusiness(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setVariable(`Necesito un objetivo empresarial del tipo ${typeBusiness} para una empresa con el siguiente mercado objetivo ${market} 
        con giro en ${lineBusiness}. La empresa se esta enfrentando a los siguientes desafios ${restrictions} y en la siguiente situacion actual ${situation}`)
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit} className='form'>
                        <Form.Group controlId="type">
                            <Form.Label>Tipo de objetivo</Form.Label>
                            <Form.Select onChange={handleTypeChange} id='form-select'>
                                <option value="general">Seleccionar tipo de objetivo</option>
                                <option value="Crecimiento">Crecimiento</option>
                                <option value="Rentabilidad">Rentabilidad</option>
                                <option value="Desarrollo">Desarrollo</option>
                                <option value="Eficiencia">Eficiencia</option>
                                <option value="Innovacion">Innovacion</option>
                                <option value="Sostenibilidad">Sostenibilidad</option>
                                <option value="Recursos Humanos">Recursos Humanos</option>
                                <option value="Expansion y Diversificacion">Expansion y Diversificacion</option>
                                <option value="Responsabilidad Social Corporativa">Responsabilidad Social Corporativa</option>
                                <option value="Calidad y Satisfaccion">Calidad </option>
                                <option value="other">Otro</option>
                            </Form.Select>
                        </Form.Group>

                        {typeBusiness === 'other' && (
                            <Form.Group>
                                <Form.Label>Ingresa tipo del objetivo:</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={handleTypeChange}
                                    id='form-input'
                                    required
                                />
                            </Form.Group>
                        )}

                        <Form.Group>
                            <Form.Label>Giro del negocio</Form.Label>
                            <Form.Select onChange={handleBusinessChange} id='form-select'>
                                <option value="general">Seleccionar giro del negocio</option>
                                <option value="Restaurant">Restaurant</option>
                                <option value="Tienda">Tienda</option>
                                <option value="Consultora">Consultora</option>
                                <option value="Hoteleria y turismo">Hoteleria y turismo</option>
                                <option value="Tecnologia">Tecnologia</option>
                                <option value="Entretenimiento">Entretenimiento</option>
                                <option value="Salud y Bienestar">Salud y Bienestar</option>
                                <option value="Moda y Belleza">Moda y Belleza</option>
                                <option value="Educacion y Formacion">Educacion y Formacion</option>
                                <option value="Construccion y bienes raices">Construccion y bienes raices</option>
                                <option value="Automocion">Automocion</option>
                                <option value="Finanzas y servicios bancarios">Finanzas y servicios bancarios</option>
                                <option value="Otro">Otro</option>
                            </Form.Select>
                        </Form.Group>

                        {lineBusiness === 'Otro' && (
                            <Form.Group >
                                <Form.Label>Ingresa otro giro de negocio:</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={handleBusinessChange}
                                    id='form-input'
                                    required
                                />
                            </Form.Group>
                        )}

                        <Form.Group>
                            <Form.Label>Mercado objetivo</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={2}
                                onChange={handleMarketChange}
                                id='form-input'
                                placeholder="Jóvenes adultos urbanos de entre 18 y 30 años que tienen un estilo de vida activo, moderno y están interesados en las tendencias de la moda urbana."
                            />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Restricciones y desafios</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={2}
                                onChange={handleRestriction}
                                id='form-input'
                                placeholder="Dependencia de Proveedores: Si dependen de proveedores externos, podrían enfrentar desafíos de disponibilidad de productos y cambios en los precios."
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Situacion actual</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                onChange={handleSituation}
                                id='form-input'
                                placeholder="La tienda de ropa de moda urbana ha estado en funcionamiento durante dos años en el centro de una ciudad metropolitana. Durante este tiempo, ha establecido una clientela leal de jóvenes adultos de entre 18 y 30 años que buscan expresar su estilo único a través de la moda urbana"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" onSubmit={handleSubmit} id='form-button'>
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col>
                    <Chat directPrompt={variable} />
                </Col>
            </Row>

        </Container>

    );
};
export default Objective;

