import { useEffect, useState } from 'react'

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      // console.log('Location Changed');
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('popstate', onLocationChange)

    // cleanup functiont to remove window.addEvent
    return () => {
      window.removeEventListener('popstate', onLocationChange)
    }
  }, []) // [] means render only once when first rendered to screen

  return currentPath === path
    ? children
    : null
}

export default Route;