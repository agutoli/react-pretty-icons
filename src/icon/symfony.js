import React from 'react';
import iconSvg from '../icons/normalized/symfony.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__symfony" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender