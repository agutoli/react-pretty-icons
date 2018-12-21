import React from 'react';
import iconSvg from '../icons/normalized/chevron-left-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chevron-left-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender