import React from 'react';
import iconSvg from '../icons/normalized/hammer.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__hammer" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender