import React from 'react';
import iconSvg from '../icons/normalized/scale-balance.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__scale-balance" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender