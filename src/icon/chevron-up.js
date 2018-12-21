import React from 'react';
import iconSvg from '../icons/normalized/chevron-up.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chevron-up" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender