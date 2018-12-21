import React from 'react';
import iconSvg from '../icons/normalized/currency-kzt.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__currency-kzt" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender