export default function Display({ burger, side, drink, orderName }) {
  return (<div className="display">
    <section className="images">
      <img src={`${burger}.jpg`} />
      <img src={`${side}.jpg`} />
      <img src={`${drink}.jpg`} />
    </section>
    <section className="details">
      Name for the order: {orderName}
    </section>
  </div>);
}