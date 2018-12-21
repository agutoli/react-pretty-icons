import React from 'react';
import iconSvg from '../icons/normalized/tag-text-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tag-text-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender