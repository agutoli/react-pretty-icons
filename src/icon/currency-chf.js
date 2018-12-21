import React from 'react';
import iconSvg from '../icons/normalized/currency-chf.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__currency-chf" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender