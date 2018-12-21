import React from 'react';
import iconSvg from '../icons/normalized/ray-start-arrow.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ray-start-arrow" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender