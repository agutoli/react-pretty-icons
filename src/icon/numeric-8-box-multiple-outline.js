import React from 'react';
import iconSvg from '../icons/normalized/numeric-8-box-multiple-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__numeric-8-box-multiple-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender