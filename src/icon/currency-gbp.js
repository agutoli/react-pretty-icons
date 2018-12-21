import React from 'react';
import iconSvg from '../icons/normalized/currency-gbp.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__currency-gbp" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender