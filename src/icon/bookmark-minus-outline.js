import React from 'react';
import iconSvg from '../icons/normalized/bookmark-minus-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bookmark-minus-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender