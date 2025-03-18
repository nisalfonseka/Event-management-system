import React, { useState } from 'react';
import './PaymentForm.css'; // Assuming you have a CSS file for styling

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    portalId: '',
    amount: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      portalId: '',
      amount: ''
    });
  };

  const handlePay = () => {
    // Add payment logic here
    console.log('Payment submitted:', formData);
    alert('Payment processed! (Simulated)');
  };

  return (
    <div className="payment-form-container">
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </div>
      <div className="form-group">
        <label>E-mail</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </div>
      <div className="form-group">
        <label>Portal ID</label>
        <input
          type="text"
          name="portalId"
          value={formData.portalId}
          onChange={handleChange}
          placeholder="Enter your Portal ID"
        />
      </div>
      <div className="form-group">
        <label>Amount</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Enter amount"
        />
      </div>
      <div className="button-group">
        <button className="clear-btn" onClick={handleClear}>Clear</button>
        <button className="pay-btn" onClick={handlePay}>Pay</button>
      </div>
    </div>
  );
};

export default PaymentForm;