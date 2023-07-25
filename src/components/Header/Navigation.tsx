import { Link, useLocation } from 'react-router-dom';

type NavigationProps = {
  categories: any;
  loading: boolean;
  error: any;
}

export default function Navigation({ categories, loading, error } : NavigationProps) {

  const { pathname } = useLocation();

  return (
    <nav>
      <ul>
        <Link to='/'>
          <li>ALL</li>
        </Link>
        {categories.map((category: any) => {
          return (
            <Link to={`${category.slug}`} key={category.id}>
              <li className='list'>{category.name}</li>
            </Link>
          )
        })}
      </ul>
    </nav>
  )
}