import React from 'react';
import iconSvg from '../icons/normalized/vector-polyline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__vector-polyline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender