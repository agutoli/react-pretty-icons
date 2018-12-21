import React from 'react';
import iconSvg from '../icons/normalized/web.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__web" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender