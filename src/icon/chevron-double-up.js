import React from 'react';
import iconSvg from '../icons/normalized/chevron-double-up.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chevron-double-up" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender