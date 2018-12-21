import React from 'react';
import iconSvg from '../icons/normalized/chevron-right.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chevron-right" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender