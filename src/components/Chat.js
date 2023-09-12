import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';
import {IoIosArrowForward} from 'react-icons/io'
import './styles.css'
import { Col, Container, Form, Row } from "react-bootstrap";


export default function ChatGPT(props) {
  const {directPrompt = ''} = props
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping]  = useState(false);

  const HTTP = "http://localhost:8080/chat";
  
  useEffect(() =>{
    sendDirectMessage();
  } ,[directPrompt])

  const sendDirectMessage = async () =>{
    console.log(directPrompt)
    if (directPrompt.trim() === '') return;
    const userMessage = {
      role: 'user',
      content: directPrompt,
    };
    let chatLog = [...messages, userMessage];
    console.log(directPrompt)
    
    try {
      // Hacer una solicitud POST a la API de OpenAI
      const response = await 
      axios
      .post(HTTP, {
        prompt: messages.map(message => message.content).join('\n') + '\nUsuario: ' + input + '\nAsistente:',
        max_tokens: 50,
        temperature: 0.7,
      }
      .then(
        setIsTyping(true),
        setInput('')
      )
      )
      .finally(
        setIsTyping(true)
      )
      ;

      // Guardar la respuesta de la API
      const aiMessage = {
        role: 'ai',
        content: response.data,
      };
      setMessages([...chatLog, aiMessage]);
    } 
    catch (error) {
      console.error('Error al enviar el mensaje:', error);
    }
    console.log('Hola')
  }


  const sendMessage = async (e) => {
    e.preventDefault()
    setIsTyping(true)
    if (input.trim() === '') return;
    // Guardar el mensaje enviado por el usuario
    const userMessage = {
      role: 'user',
      content: input,
    };
    let chatLog = [...messages, userMessage];
    console.log(isTyping)
    try {
      // Hacer una solicitud POST a la API de OpenAI
      const response = await axios.post(HTTP, {
        prompt: messages.map(message => message.content).join('\n') + '\nUsuario: ' + input + '\nAsistente:',
        max_tokens: 50,
        temperature: 0.7,
      }
      )
      .then(
        setInput(''),
        console.log(isTyping)
      )
      .finally(
        setIsTyping(false)
      )
      ;

      // Guardar la respuesta de la API
      const aiMessage = {
        role: 'ai',
        content: response.data,
      };
      setMessages([...chatLog, aiMessage]);
    } 
    catch (error) {
      console.error('Error al enviar el mensaje:', error);
    }
  };


  return (
    <Container className="chat">
      <label className="text-color text-center">Escriba su consulta al asistente</label>
      <Row>
        {messages.map((message, index) => (
        <div key={index}>
          {message.role === 'user' ? 
          <div className="user text-color">
            {message.content}
          </div> 
          :
          <div className="ai text-color">
          {message.content}
          </div>
          } 
        </div>
        ))
        }
      </Row>
      <Row>
        <Col>
        {isTyping ?
        <Spinner animation="border" role="status" variant="light">
          <span className="visually-hidden" color="white">Loading...</span>
        </Spinner>
        :
        <form  onSubmit={sendMessage}>
          <br></br>
          <input
          type="text"
          value={input}
          className="input"
          onChange={e => setInput(e.target.value)}
          />
          <button className="button" onClick={sendMessage}><IoIosArrowForward/></button>
        </form>
        }
        </Col>
      </Row>
    </Container>
  );
}