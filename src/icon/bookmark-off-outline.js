import React from 'react';
import iconSvg from '../icons/normalized/bookmark-off-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bookmark-off-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender