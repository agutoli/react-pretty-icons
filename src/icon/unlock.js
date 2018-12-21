import React from 'react';
import iconSvg from '../icons/normalized/unlock.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__unlock" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender