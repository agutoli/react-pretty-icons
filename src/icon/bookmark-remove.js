import React from 'react';
import iconSvg from '../icons/normalized/bookmark-remove.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bookmark-remove" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender