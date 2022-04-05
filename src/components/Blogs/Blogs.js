import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1>what's the context API?</h1>
      <p>
        It's a way to move props from grand parent to child to parent.It returns
        a consumer and a provider. Provider is a component that as it's names
        suggests provides the state to its children. Context API is used when
        some data needs to be accessible by many components at different nesting
        levels.
      </p>

      <h1>What is semantic tag? </h1>
            <p>In HTML,the "h1" tag is a semantic tag. Which gives the text it wraps around the role of "a top level heading on your page." There are some semantic tag available:</p>
            <p>1.article</p>
            <p>2.header</p>
            <p>3.footer</p>
            <p>4.main</p>
            <p>5.nav</p>
            <p>6.section</p>
            <p>7.aside</p>
    </div>
  );
};

export default Blogs;
