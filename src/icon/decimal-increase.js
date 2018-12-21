import React from 'react';
import iconSvg from '../icons/normalized/decimal-increase.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__decimal-increase" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender