import React from 'react';
import iconSvg from '../icons/normalized/horseshoe.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__horseshoe" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender