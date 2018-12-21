import React from 'react';
import iconSvg from '../icons/normalized/duck.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__duck" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender