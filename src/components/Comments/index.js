import React from "react";

// Markup
import { Wrapper, Content, Title } from "../../PageStyle";
import { Comment, Text, Person } from "./Comments.style";

const Comments = ({ testimonials }) => (
  <Wrapper id="comments">
    <Content>
      <Title>
        <h1 className="section--title">Comment</h1>
        <p className="section--title--absolute">Comments</p>
      </Title>
      <Comment>
        {testimonials.map((item, id) => {
          const { name, role, image, comment } = item;

          return (
            <div className="carousel">
              <div className="quote-left">
                <p>"</p>
              </div>
              <Text>
                <p>{comment}</p>
              </Text>
              <div className="quote-right">
                <p>"</p>
              </div>
              <Person>
                <div className="image">
                  <img src={`../../images/${image}`} alt="user" />
                </div>
                <p className="name">{name}</p>
                <p className="role">
                  <span>***</span>
                  {role}
                  <span>***</span>
                </p>
              </Person>
            </div>
          );
        })}
      </Comment>
    </Content>
  </Wrapper>
);

export default Comments;
