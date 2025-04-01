function handleClick() {
  console.log("Hello!");
}

function handleMouseOver() {
  console.log("Bye..!");
}

function handleDblClick (){
    console.log("you double click");
}


export default function Button() {
  return (
    <div>
      <button onClick={handleClick}>Click me !</button>
      <p onMouseOver={handleMouseOver}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        quibusdam magni assumenda exercitationem porro repellendus itaque, esse
        repellat culpa accusantium quas, quasi dolorem, ad natus facere.
        Voluptatum enim obcaecati dicta.
      </p>
      <button onDoubleClick={dblClick}>click me dbl</button>
    </div>
  );
}
