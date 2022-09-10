import {
  Outlet,
  NavLink,
  useSearchParams,
  useLocation
} from 'react-router-dom';
import { getDrinks, getSnacks } from '../mockData';
import './Items.css';

const QueryNavLink = ({ to, ...props }) => {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
};

const Items = ({ category }) => {
  let items;
  if (category === 'Drinks') {
    items = getDrinks();
  } else {
    items = getSnacks();
  }

  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className='Items'>
      <nav>
        <input
          value={searchParams.get('filter') || ''}
          onChange={(evt) => {
            let filter = evt.target.value;
            filter ? setSearchParams({ filter }) : setSearchParams({});
          }}
        />
        {items
          .filter((item) => {
            let filter = searchParams.get('filter');
            if (!filter) return true;
            let name = item.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((item) => (
            <QueryNavLink
              className='Items-element'
              to={`/${category}/${item.id}`}
              key={item.id}
            >
              {item.name}
            </QueryNavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default Items;
