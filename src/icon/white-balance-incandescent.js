import React from 'react';
import iconSvg from '../icons/normalized/white-balance-incandescent.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__white-balance-incandescent" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender