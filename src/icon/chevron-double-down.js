import React from 'react';
import iconSvg from '../icons/normalized/chevron-double-down.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chevron-double-down" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender