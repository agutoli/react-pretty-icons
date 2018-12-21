import React from 'react';
import iconSvg from '../icons/normalized/square-inc.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__square-inc" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender