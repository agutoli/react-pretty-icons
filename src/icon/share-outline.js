import React from 'react';
import iconSvg from '../icons/normalized/share-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__share-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender