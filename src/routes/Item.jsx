import { useParams } from 'react-router-dom';
import { getDrink, getSnack } from '../mockData';
import './Item.css';

const Item = ({ category }) => {
  let params = useParams();
  let item;
  category === 'Drinks'
    ? (item = getDrink(params.id))
    : (item = getSnack(params.id));
  return (
    <div className='Item'>
      <h2>{item.name}</h2>
      <p>Price: {item.price}</p>
      <p>Code: {item.id}</p>
    </div>
  );
};

export default Item;
