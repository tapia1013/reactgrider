import React from 'react';



const Link = ({ className, href, children }) => {

  const onClick = (e) => {
    // if control key clicked and new tab open
    if (e.metaKey || e.ctrlKey) {
      return;
    }

    e.preventDefault()
    window.history.pushState({}, '', href);

    // tell components url changed and go there
    const navEvent = new PopStateEvent('popstate')
    window.dispatchEvent(navEvent)
  }

  return (
    <a
      onClick={onClick}
      className={className}
      href={href}
    >
      {children}
    </a>
  )
}

export default Link