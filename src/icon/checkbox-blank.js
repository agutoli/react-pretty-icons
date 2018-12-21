import React from 'react';
import iconSvg from '../icons/normalized/checkbox-blank.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__checkbox-blank" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender