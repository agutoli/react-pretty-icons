import React from 'react';
import iconSvg from '../icons/normalized/telephone-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__telephone-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender