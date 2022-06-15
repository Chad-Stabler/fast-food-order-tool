export default function NameInput({ setOrderName }) {
  return (<div className="input">
    Name for the order: <input onChange={e => setOrderName(e.target.value)}></input>
  </div>);
}