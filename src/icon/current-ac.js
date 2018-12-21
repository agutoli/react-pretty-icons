import React from 'react';
import iconSvg from '../icons/normalized/current-ac.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__current-ac" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender