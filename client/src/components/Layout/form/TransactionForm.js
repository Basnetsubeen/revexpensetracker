import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { addTransactionAction } from "../../../transactionState/transactionAction";
import { useDispatch } from "react-redux";
const TransactionForm = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    dispatch(addTransactionAction(form));
  };
  return (
    <div className="mt-3">
      <Form onSubmit={handleOnSubmit}>
        <Row className="g-2">
          <Col md="3">
            <Form.Select
              defaultValue=""
              name="type"
              onChange={handleOnChange}
              required
            >
              <option value="">Choose...</option>
              <option value="income">Income</option>
              <option value="expenses">Expenses</option>
            </Form.Select>
          </Col>
          <Col md="5">
            <Form.Control
              name="title"
              placeholder="transaction name"
              onChange={handleOnChange}
              required
            />
          </Col>
          <Col md="2">
            <Form.Control
              name="amount"
              placeholder="amount"
              onChange={handleOnChange}
              required
            />
          </Col>
          <Col md="2">
            <Form.Control type="submit" className="btn btn-primary" />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default TransactionForm;
