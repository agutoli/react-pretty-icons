import React from 'react';
import iconSvg from '../icons/normalized/yelp-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__yelp-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender