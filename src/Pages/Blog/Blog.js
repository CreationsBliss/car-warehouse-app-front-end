import React from 'react';
import { Accordion, Table } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
  return (
    <div>
      <div className='blog-container'>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Difference between javascript and nodejs</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>JavaScript</th>
                        <th>Node.js</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>JavaScript is a programming language.</td>
                        <td>NodeJS is a JavaScript runtime.</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Javascript runs in the browser.</td>
                        <td>JavaScript can be run outside the browser with the help of NodeJS.</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>It is used on the client-side.</td>
                        <td>It is used on the server-side.</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>When should you use nodejs and when should you use mongodb?</Accordion.Header>
                <Accordion.Body>
                <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Node</th>
                        <th>Mongo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>NodeJS is a Javascript runtime environment. It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.</td>
                        <td>MongoDB is a database system. MongoDB is uded for Create, Read, Updata, Delete data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Differences between sql and nosql databases</Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>SQL</th>
                        <th>NoSQL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Relational Database Management System.</td>
                        <td>Non Relational Database Management System.</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>It manages structured data.</td>
                        <td>It manages all type of data.</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>It handles data in less volume.</td>
                        <td>It handles data in high volume.</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>What is the purpose of jwt and how does it work?</Accordion.Header>
                <Accordion.Body>
                JSON Web Token is a standard used to create access tokens for an application. The server produces a token that confirms the client identity, and sends it to the client. The client will send the token back to the server for each resulting demand, so the server realizes the solicitation comes from a specific identity. This architecture ends up being extremely compelling in modern Web Apps, where after the client is verified we perform API requests either to a REST or a GraphQL API.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Blog;