import React from 'react';
import iconSvg from '../icons/normalized/numeric-9-plus-box-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__numeric-9-plus-box-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender