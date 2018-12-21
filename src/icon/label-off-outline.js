import React from 'react';
import iconSvg from '../icons/normalized/label-off-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__label-off-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender