import React from "react";

// Markup
import { Wrapper, Content, Title } from "../../PageStyle";

// Components
import { Form } from "./Contact.style";

const Contact = ({ handleChange, formData, handleSubmit }) => (
  <Wrapper id="contact me">
    <Content>
      <Title>
        <h1 className="section--title">Contact</h1>
        <p className="section--title--absolute">Contact</p>
      </Title>
      <Form>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          onChange={handleChange}
          value={formData.firstname}
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          onChange={handleChange}
          value={formData.lastname}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          onChange={handleChange}
          value={formData.subject}
        />
        <textarea
          name="message"
          placeholder="Message"
          onChange={handleChange}
          value={formData.message}
          rows="8"
          columns="1"
        />
        <button type="submit" onClick={handleSubmit}>
          Send Message
        </button>
      </Form>
    </Content>
  </Wrapper>
);

export default Contact;
