import React from 'react';
import iconSvg from '../icons/normalized/checkbox-blank-circle-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__checkbox-blank-circle-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender