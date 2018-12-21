import React from 'react';
import iconSvg from '../icons/normalized/currency-sign.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__currency-sign" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender