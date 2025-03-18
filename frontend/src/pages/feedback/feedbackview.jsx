import React from "react";

const FeedbackCard = ({ feedback }) => {
  const cardStyle = {
    width: "100%",
    maxWidth: "400px",
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    textAlign: "left",
    marginBottom: "15px",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  };

  const textStyle = {
    fontSize: "14px",
    color: "#555",
    marginBottom: "5px",
  };

  const ratingStyle = {
    fontSize: "14px",
    fontWeight: "bold",
    color: feedback.rating >= 4 ? "green" : feedback.rating >= 2 ? "orange" : "red",
  };

  return (
    <div style={cardStyle}>
      <div style={titleStyle}>Feedback from {feedback.name}</div>
      <p style={textStyle}>
        <strong>Email:</strong> {feedback.email}
      </p>
      <p style={textStyle}>
        <strong>Rating:</strong> <span style={ratingStyle}>{feedback.rating} / 5</span>
      </p>
      <p style={textStyle}>
        <strong>Message:</strong> {feedback.message}
      </p>
    </div>
  );
};

const FeedbackView = () => {
  const feedbackData = [
    { name: "John Doe", email: "john@example.com", rating: 5, message: "Great service!" },
    { name: "Jane Smith", email: "jane@example.com", rating: 3, message: "It was okay, needs improvement." },
    { name: "Alice Brown", email: "alice@example.com", rating: 4, message: "Very satisfied with the experience!" },
  ];

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>User Feedback</h2>
      {feedbackData.map((item, index) => (
        <FeedbackCard key={index} feedback={item} />
      ))}
    </div>
  );
};

export default FeedbackView;
