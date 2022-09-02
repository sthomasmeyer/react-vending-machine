import { useParams } from 'react-router-dom';
import { getSnack } from '../mockData';
import './snack.css';

const Snack = () => {
  let params = useParams();
  let snack = getSnack(params.snackId);
  console.log(`Selected snack-object: ${snack}`);
  return (
    <div className='Snack'>
      <h2>{snack.name}</h2>
      <p>Price: {snack.price}</p>
      <p>Code: {snack.id}</p>
    </div>
  );
};

export default Snack;
