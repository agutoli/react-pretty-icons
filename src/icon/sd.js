import React from 'react';
import iconSvg from '../icons/normalized/sd.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__sd" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender