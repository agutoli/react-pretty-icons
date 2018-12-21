import React from 'react';
import iconSvg from '../icons/normalized/clover.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__clover" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender