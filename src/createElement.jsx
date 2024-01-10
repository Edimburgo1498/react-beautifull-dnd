import React from "react";

const CreateElement = () => {

    const element = React.useRef(null);

  function myFunction() {
    // Create an "li" node:
     const node = document.createElement("li");

    // // Create a text node:
     const textnode = document.createTextNode("Water");

    // // Append the text node to the "li" node:
     node.appendChild(textnode);
    let nodeElement = element.current;
    // Append the "li" node to the list:
    for (let index = 0; index < 5; index++) {
          //nodeElement.appendChild(<h1>Hola</h1>);
          console.log('%%%%%%%%',index)
    }
  }

  return (
    <>
      <h1>The Element Object</h1>
      <h2>The appendChild() Method</h2>

      <ul ref={element}>
        <li>Coffee</li>
        <li>Tea</li>
      </ul>

      <p>Click "Append" to append an item to the end of the list:</p>

      <button onClick={myFunction}>Append</button>
    </>
  );
};

export default CreateElement;
