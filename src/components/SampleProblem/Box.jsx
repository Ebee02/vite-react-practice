function Box(props) {
  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent",
  };

  return (
    <div
      onClick={() => props.toggle(props.id)}
      style={styles}
      className="{styles.backgroundColor} w-28 h-28 border rounded shadow-md shadow-gray-300 cursor-pointer border-black inline-block ml-4"
    ></div>
  );
}
export default Box;
