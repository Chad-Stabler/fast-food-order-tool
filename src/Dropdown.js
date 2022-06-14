export default function XDDDDDDDDDDDDD({ options, handleChange, item }) {
  return (
    <div>
        Select a {item}
      <select onChange={handleChange}>
        {
          options.map((option, i) => <option value={option.value} key={option + i}>{option.display}</option>)
        }
      </select>
    </div>
  );
}