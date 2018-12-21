import React from 'react';
import iconSvg from '../icons/normalized/ray-end-arrow.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ray-end-arrow" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender