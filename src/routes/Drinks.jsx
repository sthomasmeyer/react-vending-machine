import {
  Outlet,
  NavLink,
  useSearchParams,
  useLocation
} from 'react-router-dom';
import { getDrinks } from '../mockData';
import './Drinks.css';

const QueryNavLink = ({ to, ...props }) => {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
};

const Drinks = () => {
  let drinks = getDrinks();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className='Drinks'>
      <nav>
        <input
          value={searchParams.get('filter') || ''}
          onChange={(evt) => {
            let filter = evt.target.value;
            filter ? setSearchParams({ filter }) : setSearchParams({});
          }}
        />
        {drinks
          .filter((drink) => {
            let filter = searchParams.get('filter');
            if (!filter) return true;
            let name = drink.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((drink) => (
            <QueryNavLink
              className='Drinks-element'
              to={`/drinks/${drink.id}`}
              key={drink.id}
            >
              {drink.name}
            </QueryNavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default Drinks;
