import React from 'react';
import iconSvg from '../icons/normalized/checkbox-pen-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__checkbox-pen-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender