type Card = {id:string,text:string,isFlipped:boolean,isMatched:boolean}

const Card = (props: {data: Card}) => {
  return (
    <>
      {props.data.isFlipped ? <CardFront text={props.data.text}></CardFront> : <CardBack></CardBack>}
    </>
  );
};
const CardFront = (text:any) => {
    return (
      <>
        <div className="bg-transparent h-72 w-90">
          <div className="relative w-full h-full text-center text-white bg-black">
            {text.text}
          </div>
        </div>
      </>
    );
  };

  const CardBack = () => {
    return (
      <>
        <div className="bg-transparent h-72 w-90">
          <div className="relative w-full h-full text-center bg-cyan-400">
            Jacob is a Slut
          </div>
        </div>
      </>
    );
  };

  export default Card;