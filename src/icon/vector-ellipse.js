import React from 'react';
import iconSvg from '../icons/normalized/vector-ellipse.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__vector-ellipse" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender