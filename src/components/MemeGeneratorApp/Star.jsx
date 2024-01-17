function Star(props) {
  let starIcon = props.isFilled ? "star-filled2.png" : "star-empty.png";
  return (
    <img
      src={`../images/${starIcon}`}
      className="w-8 h-8 mb-2 cursor-pointer"
      onClick={props.handleClick}
    />
  );
}
export default Star;
