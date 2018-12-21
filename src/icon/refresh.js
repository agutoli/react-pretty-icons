import React from 'react';
import iconSvg from '../icons/normalized/refresh.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__refresh" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender