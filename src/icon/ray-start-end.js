import React from 'react';
import iconSvg from '../icons/normalized/ray-start-end.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ray-start-end" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender