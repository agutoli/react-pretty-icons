import React from 'react';
import iconSvg from '../icons/normalized/star-three-points-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__star-three-points-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender