import React from 'react';
import iconSvg from '../icons/normalized/up-arrow.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__up-arrow" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender