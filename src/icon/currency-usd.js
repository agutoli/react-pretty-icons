import React from 'react';
import iconSvg from '../icons/normalized/currency-usd.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__currency-usd" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender