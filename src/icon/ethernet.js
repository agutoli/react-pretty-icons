import React from 'react';
import iconSvg from '../icons/normalized/ethernet.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ethernet" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender