import React from 'react';
import iconSvg from '../icons/normalized/relative-scale.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__relative-scale" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender