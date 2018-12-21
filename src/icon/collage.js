import React from 'react';
import iconSvg from '../icons/normalized/collage.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__collage" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender