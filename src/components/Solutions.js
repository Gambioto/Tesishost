import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './styles.css'
import Chat from './Chat'


export default function Solutions (){
    const [lineBusiness, setLineBusiness] = useState('')
    const [restrictions, setRestriction] = useState('');
    const [variable, setVariable] = useState('')
    const [situation, setSituation] = useState('')
    const [problem, setProblem] = useState('')
    const [fortalezas, setFortalezas] = useState('')
    const [oportunidades, setOportunidades] = useState('')
    const [debilidades, setDebilidades] = useState('')
    const [amenazas, setAmenazas] = useState('')

    const handleProblem = (e) => {
      setProblem(e.target.value)
    }

    const handleFortalezas = (e) => {
      setFortalezas(e.target.value)
    }

    const handleOportunidades = (e) => {
        setOportunidades(e.target.value)
    }
 
    const handleDebilidades = (e) => {
        setDebilidades(e.target.value)
    }

    const handleAmenazas = (e) => {
        setAmenazas(e.target.value)
    }
 
    const handleSituation = (e) => {
        setSituation(e.target.value)
    }

    const handleRestriction = (e) => {
        setRestriction(e.target.value)
    }


    const handleBusinessChange = (e) => {
        setLineBusiness(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setVariable(`Necesito una solucion para el siguiente problema ${problem} al que se esta enfrentando mi empresa 
        con giro en ${lineBusiness}. La empresa se esta enfrentando a los siguientes desafios ${restrictions} y se encuentra en la siguiente situacion ${situation}
        El FODA de la empresa es el siguiente:
        Su fortaleza es:${fortalezas}
        Su oportunidad es:${oportunidades}
        Su debilidad es:${debilidades}
        Su amenaza es: ${amenazas}`)
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit} className='form'>

                        <Form.Group>
                            <Form.Label>Giro del negocio</Form.Label>
                            <Form.Select onChange={handleBusinessChange} id='form-select'>
                                <option value="">Seleccionar giro del negocio</option>
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
                                <option value="other">Otro</option>
                            </Form.Select>
                        </Form.Group>

                        {lineBusiness === 'other' && (
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

                        <Form.Group >
                            <Form.Label>Descripcion del problema</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={handleProblem}
                                id='form-input'
                                placeholder="Ingresa el problema a solucionar"
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

                        <Form.Group>
                            <Form.Label>Analisis FODA</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={handleFortalezas}
                                id='form-input'
                                placeholder="Ingresa las Fortalezas de tu empresa"
                            />
                            <Form.Control
                                type="text"
                                onChange={handleOportunidades}
                                id='form-input'
                                placeholder="Ingresa las Oportunidades de tu empresa"
                            />
                            <Form.Control
                                type="text"
                                onChange={handleDebilidades}
                                id='form-input'
                                placeholder="Ingresa las Debilidades de tu empresa"
                            />
                            <Form.Control
                                type="text"
                                onChange={handleAmenazas}
                                id='form-input'
                                placeholder="Ingresa las Amenazas de tu empresa"
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
}
