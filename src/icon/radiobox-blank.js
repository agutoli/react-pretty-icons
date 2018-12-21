import React from 'react';
import iconSvg from '../icons/normalized/radiobox-blank.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__radiobox-blank" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender