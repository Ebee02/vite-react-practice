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
    <div className="main-div w-60 m-8 rounded-md relative shadow-xl">
      {badgeText && (
        <div className=" bg-white hover:bg-black transition-all duration-150  px-3 py-2 m-2 rounded-[3px] shadow-lg absolute text-center font-bold text-sm cursor-pointer text-slate-800 hover:text-white">
          {badgeText}
        </div>
      )}

      <img
        className="w-full rounded-lg"
        src={props.coverImg}
        alt={props.title}
      />
      <div className=" p-2">
        <div className="flex items-center text-sm">
          <img
            className="h-5 w-5 mr-2"
            src="../images/star.png"
            alt="star logo"
          />
          <span className="">{props.rating}</span>
          <span className="text-gray-500">
            ({props.reviewCount}).{props.location}
          </span>
        </div>
        <p className="text-sm mt-1">{props.title}</p>
        <p className="text-sm font-semibold mt-1">
          From ${props.price} <span className="font-thin">/ person</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
