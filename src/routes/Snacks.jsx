import {
  Outlet,
  NavLink,
  useSearchParams,
  useLocation
} from 'react-router-dom';
import { getSnacks } from '../mockData';
import './Snacks.css';

const QueryNavLink = ({ to, ...props }) => {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
};

const Snacks = () => {
  let snacks = getSnacks();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className='Snacks'>
      <nav>
        <input
          value={searchParams.get('filter') || ''}
          onChange={(evt) => {
            let filter = evt.target.value;
            filter ? setSearchParams({ filter }) : setSearchParams({});
          }}
        />
        {snacks
          .filter((snack) => {
            let filter = searchParams.get('filter');
            if (!filter) return true;
            let name = snack.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((snack) => (
            <QueryNavLink
              className='Snacks-element'
              to={`/snacks/${snack.id}`}
              key={snack.id}
            >
              {snack.name}
            </QueryNavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default Snacks;
