import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Dropdown, Badge, Modal } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import '../styles/main.css';

const RegistrationComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [TPN, setTPN] = useState('');
  const [BTN, setBTN] = useState('');
  const [TIN, setTIN] = useState('');
  const [BAD, setBAD] = useState('');
  const [NUM, setNUM] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const handleTINChange = (event) => {
    const inputValue = event.target.value;
    const formattedValue = inputValue
      .replace(/[^0-9]/g, '')
      .replace(/(\d{3})(\d{3})(\d{3})(\d{3})/, '$1-$2-$3'); 
    setTIN(formattedValue);
  };

  const handleRegister = () => {
    const newUser = {
      email,
      password,
      TPN,
      BTN,
      TIN,
      BAD,
      NUM,
      cartItems: cartItems.map(item => ({ id: item.id, name: item.name, price: item.price }))
    };
    
    setEmail('');
    setPassword('');
    setTPN('');
    setBTN('');
    setTIN('');
    setCartItems([]);
    showRegistrationSuccessModal();
    console.log('Registration data:', newUser);
  };

  const itemsData = [
    { id: 1, name: "Percentage Tax", price: "Php 4,000.00" },
    { id: 2, name: "Value-Added Tax", price: "Php 10,000.00" },
    { id: 3, name: "Excise Tax", price: "Php 6,000.00" },
    { id: 4, name: "Income Tax", price: "Php 20,000.00" },
    { id: 5, name: "Registration Fee", price: "Php 500.00" },
    { id: 6, name: "Withholding - Business/VAT", price: "Php 12,000.00" },
    { id: 7, name: "Withholding-Expanded", price: "Php 12,000.00" },
    { id: 8, name: "Withholding-Compensation", price: "Php 12,000.00" },
  ];

  const itemsData2 = [
    { id: 9, name: "Annual Ending Inventory", price: "Php 5,000.00" },
    { id: 10, name: "Summary List of Sales", price: "Php 5,000.00" },
    { id: 11, name: "Summary List of Purchases", price: "Php 5,000.00" },
    { id: 12, name: "1604C - Alphalist & Filing", price: "Php 5,000.00" },
    { id: 13, name: "1604E - Alphalist & Filing", price: "Php 5,000.00" },
    { id: 14, name: "0613 - TCVD Penalties", price: "Php 1,000.00" },
    { id: 15, name: "Updating Books of Accounts", price: "Php 10,000.00" },
    { id: 16, name: "Updated Seminars and Reviews", price: "Php 3,000.00" },
    
  ];

  const addItemToCart = (item) => {
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    const total = cartItems.reduce((accumulator, item) => {
      const priceValue = parseFloat(item.price.replace(/[^0-9.-]+/g,""));
      return accumulator + priceValue;
    }, 0);
  
    return total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const showRegistrationSuccessModal = () => {
    setShowModal(true);
  };

  return (
    <Container className='contdes'>
      <Row>
        <Col md={6}>
          <div className="registration-form">
            <h2 className="registration-title">Registration</h2>
            <Form>
              <Form.Group controlId="email">
              <Form.Label className='groupdes'>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              </Form.Group>

              <Form.Group controlId="password">
              <Form.Label className='groupdes'>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Group controlId="username">
              <Form.Label className='groupdes'>Taxpayer's Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Taxpayer's Name"
                value={TPN}
                onChange={(e) => setTPN(e.target.value)}
              />
              </Form.Group>
              </Form.Group>
              <Form.Group controlId="BTN">
              <Form.Label className='groupdes'>Business Trade Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Business Trade Name"
                value={BTN}
                onChange={(e) => setBTN(e.target.value)}
              />
              </Form.Group>
              <Form.Group controlId='TIN'>
              <Form.Label className='groupdes'>TIN</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter TIN"
                value={TIN}
                onChange={handleTINChange}
              />
              </Form.Group>
              <Form.Group controlId='BAD'>
              <Form.Label className='groupdes'>Business Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Business Address"
                value={BAD}
                onChange={(e) => setBAD(e.target.value)}
              />
              </Form.Group>
              <Form.Group controlId='Contact'>
              <Form.Label className='groupdes'>Contact Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Contact Number"
                value={NUM}
                onChange={(e) => setNUM(e.target.value)}
              />
              </Form.Group>
              <Form.Group controlId='documentUpload'>
              <Form.Label className='groupdes'>Upload Copy of COR and DTI</Form.Label>
              <Form.Control
                type="file"
                accept=".pdf, .jpg, .png"
                multiple
              />
              <Form.Text className="text-muted">
                Please upload scanned copies of required documents.
              </Form.Text>
              </Form.Group>
              <Button className="groupdes" id="newdes" onClick={handleRegister}>
                Register
              </Button>
            </Form>
          </div>
        </Col>
        <Col md={6}>
          <div className="cart-container custom-cart-container">
            <h2>Available Items</h2>
              <div className="available-items-grid">
              {itemsData.map(item => (
                <div className="item-card" key={item.id}>
                  <p>{item.name}</p>
                  <p>Price: {item.price}</p>
                  <button className="add-to-cart-button" onClick={() => addItemToCart(item)}>Add to Cart</button>
                </div>
              ))}
            </div>
            <h2 className='adjustdes'>Other Services</h2>
              <div className="available-items-grid">
              {itemsData2.map(item => (
                <div className="item-card" key={item.id}>
                  <p>{item.name}</p>
                  <p>Price: {item.price}</p>
                  <button className="add-to-cart-button" onClick={() => addItemToCart(item)}>Add to Cart</button>
                </div>
              ))}
            </div>
            <Dropdown className='dropdes custom-dropdown'>
              <Dropdown.Toggle variant="link" id="cart-dropdown-toggle">
                <FaShoppingCart /> Cart <Badge variant="danger">{cartItems.length}</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <div className="cart-items-dropdown">
                 {cartItems.map(item => (
                  <div className="cart-item" key={item.id}>
                    <div className="item-details">
                      <p>{item.name}</p>
                      <p>Price: {item.price}</p>
                    </div>
                      <button className="remove-button" onClick={clearCart}>Remove All</button>
                  </div>
                  ))}
                    <div className="cart-total">
                    <p className="total-label">Total:</p>
                    <p className="total-amount">Php {getTotalPrice()}</p>
                </div>
                 </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>
        <Modal className="modaldes2" show={showModal} onHide={handleCloseModal}>
          <Modal.Header>
            <Modal.Title>Registration Successful</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Thank you! We will review your application. Please bear with us.
          </Modal.Body>
          <Modal.Footer>
            <Button id="newdes" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
    </Container>
  );
};

export default RegistrationComponent;

