import { useState } from 'react';
import './App.css';
import OrderImages from './OrderImages';
import Dropdown from './Dropdown';
import NameInput from './NameInput';
import backgroundImg from './background.jpg';

function App() {
  const [burger, setBurger] = useState('single');
  const [side, setSide] = useState('side-1');
  const [drink, setDrink] = useState('drink-1');
  const [orderName, setOrderName] = useState('');
  const burgerOptions = [{ value: 'single', display: 'Single' }, { value: 'double', display: 'Double' }, { value: 'octuple', display: 'ALL OF THE BURGER' }];
  const sideOptions = [{ value: 'side-1', display: 'Fries' }, { value: 'side-2', display: 'Tater Tots' }, { value: 'side-3', display: 'The Mozz' }];
  const drinkOptions = [{ value: 'drink-1', display: 'Small' }, { value: 'drink-2', display: 'Medium' }, { value: 'drink-3', display: 'Diabetes' }];

  function handleBurgerChange(e) {
    setBurger(e.target.value);
  }
  
  function handleSideChange(e) {
    setSide(e.target.value);
  }

  function handleDrinkChange(e) {
    setDrink(e.target.value);
  }
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <header>
        Welcome to the Good Burger, home of the good burger, can I take your order?
      </header>
      <div>
        <Dropdown options={burgerOptions} handleChange={handleBurgerChange} item={'Burger'} />
        <Dropdown options={sideOptions} handleChange={handleSideChange} item={'Side'} />
        <Dropdown options={drinkOptions} handleChange={handleDrinkChange} item={'Drink'} />
      </div>
      <NameInput setOrderName={setOrderName}/>
      <section className='display'>
        <OrderImages burger={burger} side={side} drink={drink}/>
        <div>Name for order: {orderName}</div>
      </section>
    </div>
  );
}

export default App;
