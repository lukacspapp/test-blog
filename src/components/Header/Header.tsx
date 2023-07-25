import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import { getCategories } from '../../lib/queries'

export default function Header() {

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCategories()
      .then(data => {
        setLoading(true);
        setCategories(data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      })
  }, [])


  return (
    <header>
      <nav>
        <Link to='/' className='logo'>Home Icon</Link>
        <Navigation
          categories={categories}
          loading={loading}
          error={error}
        />
      </nav>
    </header>
  )
}