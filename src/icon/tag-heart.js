import React from 'react';
import iconSvg from '../icons/normalized/tag-heart.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tag-heart" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender