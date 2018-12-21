import React from 'react';
import iconSvg from '../icons/normalized/chevron-down-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chevron-down-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender