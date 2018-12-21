import React from 'react';
import iconSvg from '../icons/normalized/beer.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__beer" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender