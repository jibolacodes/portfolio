import React, { useState, useEffect } from "react";

// Markup
import { Wrapper, Content, Title } from "../../PageStyle";
import { Comment, Text, Person } from "./Comments.style";

const Comments = ({ testimonials }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (index < 2) {
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        setIndex(0);
      }
    console.log(index);
    }, 8000);
  }, [index]); 


  return ( 
    <Wrapper id="comments">
      <Content>
        <Title>
          <h1 className="section--title">Comment</h1>
          <p className="section--title--absolute">Comments</p>
        </Title>

        <Comment>
          {testimonials.map((item, i) => {
            const { name, role, image, comment } = item;
            return (
              index === i && (
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
                      <span>★★★ </span>
                      {role}
                      <span> ★★★</span>
                    </p>
                  </Person>
                </div>
              )
            );
          })}
        </Comment>
      </Content>
    </Wrapper>
  );
};

export default Comments;
