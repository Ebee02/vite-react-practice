function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  } else {
    badgeText = "";
  }
  return (
    <div className="main-div w-60 m-8 rounded-md relative">
      {badgeText && (
        <div className="border bg-white px-2 py-1 m-2 rounded-sm shadow-lg absolute text-center font-bold text-sm cursor-pointer text-slate-700">
          {badgeText}
        </div>
      )}

      <img className="w-full" src={props.coverImg} alt="" />
      <div className="flex items-center text-sm mt-2">
        <img
          className="h-4 w-4 mr-1"
          src="../images/star.png"
          alt="star logo"
        />
        <span className="">{props.rating}</span>
        <span className="text-gray-400">
          ({props.reviewCount}).{props.location}
        </span>
      </div>
      <p className="text-sm mt-1">{props.title}</p>
      <p className="text-sm font-semibold mt-1">
        From ${props.price} <span className="font-thin">/ person</span>
      </p>
    </div>
  );
}

export default Card;
