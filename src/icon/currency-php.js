import React from 'react';
import iconSvg from '../icons/normalized/currency-php.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__currency-php" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender