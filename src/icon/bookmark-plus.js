import React from 'react';
import iconSvg from '../icons/normalized/bookmark-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bookmark-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender