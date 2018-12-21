import React from 'react';
import iconSvg from '../icons/normalized/checkbox-multiple-blank-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__checkbox-multiple-blank-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender