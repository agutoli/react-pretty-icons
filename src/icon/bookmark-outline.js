import React from 'react';
import iconSvg from '../icons/normalized/bookmark-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bookmark-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender