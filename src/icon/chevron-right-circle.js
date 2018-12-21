import React from 'react';
import iconSvg from '../icons/normalized/chevron-right-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chevron-right-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender