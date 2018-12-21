import React from 'react';
import iconSvg from '../icons/normalized/cash-usd.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cash-usd" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender