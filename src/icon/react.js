import React from 'react';
import iconSvg from '../icons/normalized/react.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__react" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender