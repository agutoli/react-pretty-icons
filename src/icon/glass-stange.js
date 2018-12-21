import React from 'react';
import iconSvg from '../icons/normalized/glass-stange.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__glass-stange" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender