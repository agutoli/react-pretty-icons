import React from 'react';
import iconSvg from '../icons/normalized/vector-curve.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__vector-curve" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender