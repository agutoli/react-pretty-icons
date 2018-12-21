import React from 'react';
import iconSvg from '../icons/normalized/tag-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tag-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender