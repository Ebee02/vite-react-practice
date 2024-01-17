function Count(props) {
  console.log("Count component renders");

  return (
    <div className="w-28 h-28 rounded-full bg-black text-white flex items-center justify-center cursor-pointer p-4">
      <h1 className="text-5xl font-bold">{props.number}</h1>
    </div>
  );
}
export default Count;
