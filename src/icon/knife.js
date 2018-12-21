import React from 'react';
import iconSvg from '../icons/normalized/knife.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__knife" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender