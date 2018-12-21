import React from 'react';
import iconSvg from '../icons/normalized/tower-fire.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tower-fire" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender