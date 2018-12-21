import React from 'react';
import iconSvg from '../icons/normalized/chili-mild.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chili-mild" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender