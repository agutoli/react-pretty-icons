import React from 'react';
import iconSvg from '../icons/normalized/star-four-points.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__star-four-points" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender