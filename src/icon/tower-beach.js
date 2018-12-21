import React from 'react';
import iconSvg from '../icons/normalized/tower-beach.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tower-beach" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender