import React from 'react';
import iconSvg from '../icons/normalized/currency-cny.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__currency-cny" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender