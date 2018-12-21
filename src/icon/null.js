import React from 'react';
import iconSvg from '../icons/normalized/null.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__null" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender