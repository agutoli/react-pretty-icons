import React from 'react';
import iconSvg from '../icons/normalized/bookmark-check.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bookmark-check" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender