const CustomButton = ({ message, children }) => {
  return <button onClick={() => alert(message)}> Play somethink</button>;
};

export default CustomButton;
