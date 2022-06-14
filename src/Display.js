export default function Display({ burger, side, drink }) {
  return (<div className="display">
    <img src={`${burger}.jpg`} />
    <img src={`${side}.jpg`} />
    <img src={`${drink}.jpg`} />
  </div>);
}