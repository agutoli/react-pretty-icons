import React from 'react';
import iconSvg from '../icons/normalized/info.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__info" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender