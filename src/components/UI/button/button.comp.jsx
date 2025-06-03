

export function Button({   className ="",   onClickHandler, text }) {
  return (
    <button
      onClick={onClickHandler}
      className={ `  ${ className}` }
     
       
          

    >
      {text}
    </button>
  );
}



// zum nutzen !!!

{/* <Button
  text="Logout"
  bgColor="--btn-blue"
  hoverColor="--content-red"
  textColor="--content-light"
/> */}