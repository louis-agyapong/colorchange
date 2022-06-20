import colorNames from "colornames";

const Input = ({ colorValue, setColorValue, setHexValue }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="Input">Add Color Name:</label>
      <input
        type="text"
        id="Input"
        autoFocus
        placeholder="Add Color Name"
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
    </form>
  );
};

export default Input;
