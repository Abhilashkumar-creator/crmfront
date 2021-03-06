import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Breadcrumb } from "react-bootstrap";
import PropTypes from "prop-types";
import tickets from './tickets.json';
import { useNavigate } from 'react-router-dom';

import { Link } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <Container>
    <Row>
        <Col>
          <PageBreadCrumb page="Dashboard" />
        </Col>
    </Row>
    <Row>
        <Col className="text-center mt-5 mb-2">
        
            <Button
              variant="info"
              style={{ fontSize: "2rem", padding: "10px 30px" }}
              onClick={() => navigate("/AddTicket")}
            >
              Add New Ticket
            </Button>
          
        </Col>
      </Row>
      <Row>
        <Col className="text-center  mb-2">
          <div>Total tickets: 50</div>
          <div>Pending tickets: 5</div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">Recently Added tickets</Col>
      </Row>
      <hr />

      <Row>
        <Col className="recent-ticket">
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};

export const TicketTable = ({ tickets }) => {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Subjects</th>
            <th>Status</th>
            <th>Opened Date</th>
          </tr>
        </thead>
        <tbody>
          {tickets.length ? (
            tickets.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>
                  <Link to={`/tickets/${row.id}`}>{row.subject}</Link>
                </td>
                <td>{row.status}</td>
                <td>{row.addedAt}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No ticket show{" "}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    );
  };

  TicketTable.propTypes = {
    tickets: PropTypes.array.isRequired,
  };

 export const PageBreadCrumb = ({ page }) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item active>{page}</Breadcrumb.Item>
    </Breadcrumb>
  );
};