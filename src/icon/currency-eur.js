import React from 'react';
import iconSvg from '../icons/normalized/currency-eur.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__currency-eur" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender