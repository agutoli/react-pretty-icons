import React from 'react';
import iconSvg from '../icons/normalized/gate-not.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gate-not" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender