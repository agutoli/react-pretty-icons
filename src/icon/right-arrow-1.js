import React from 'react';
import iconSvg from '../icons/normalized/right-arrow-1.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__right-arrow-1" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender