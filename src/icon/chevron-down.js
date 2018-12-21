import React from 'react';
import iconSvg from '../icons/normalized/chevron-down.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chevron-down" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender