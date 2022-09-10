import { useParams } from 'react-router-dom';
import { getDrink } from '../mockData';
import './Drink.css';

const Drink = () => {
  let params = useParams();
  let drink = getDrink(params.drinkId);
  console.log(`Selected drink-object: ${drink}`);
  return (
    <div className='Drink'>
      <h2>{drink.name}</h2>
      <p>Price: {drink.price}</p>
      <p>Code: {drink.id}</p>
    </div>
  );
};

export default Drink;
