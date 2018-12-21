import React from 'react';
import iconSvg from '../icons/normalized/octagon-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__octagon-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender