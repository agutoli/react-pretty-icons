import React from 'react';
import iconSvg from '../icons/normalized/share-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__share-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender