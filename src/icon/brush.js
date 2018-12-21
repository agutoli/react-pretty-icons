import React from 'react';
import iconSvg from '../icons/normalized/brush.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__brush" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender