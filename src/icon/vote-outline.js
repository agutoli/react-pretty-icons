import React from 'react';
import iconSvg from '../icons/normalized/vote-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__vote-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender