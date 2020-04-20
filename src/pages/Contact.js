import React from "react";
import Form from "react-bootstrap/Form";
import Axios from "axios";
import Footer from "../components/Footer";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
      btnColor: "#f65058ff",
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    // prevents default behavior
    event.preventDefault();

    Axios.post("http://localhost:3030/api/email ", this.state)
      .then((res) => {
        if (res.data.sucess) {
          this.setState({
            disabled: false,
            emailSent: true,
            btnColor: "#fbdb6b",
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false,
          });
        }
      })
      .catch((error) => {
        console.log("error", error);
        this.setState({
          disabled: false,
          emailSent: false,
        });
      });
  };

  render() {
    return (
      <div className="page contact">
        <div className="content">
          <h1>Contact Me</h1>
          <Form onSubmit={this.handleSubmit} className="fields">
            <Form.Group>
              <Form.Label htmlFor="full-name">Full Name</Form.Label>
              <Form.Control
                id="full-name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="text"
                value={this.state.email}
                onChange={this.handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="message">Message</Form.Label>
              <Form.Control
                id="message"
                name="message"
                as="textarea"
                value={this.state.message}
                onChange={this.handleChange}
                rows={3}
              ></Form.Control>
            </Form.Group>

            <button
              className="d-inline-block btn"
              type="submit"
              style={{ backgroundColor: this.state.btnColor }}
              disabled={this.state.disabled}
              onClick={(event) => this.handleSubmit(event)}
            >
              Send
            </button>

            {this.state.emailSent === false && (
              <p className="d-inline error-msg">Error: Email Not Sent</p>
            )}

            {this.state.emailSent === true && (
              <p className="d-inline success-msg">Email Sent</p>
            )}
          </Form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
