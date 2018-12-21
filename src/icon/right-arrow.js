import React from 'react';
import iconSvg from '../icons/normalized/right-arrow.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__right-arrow" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender