import React from 'react';
import iconSvg from '../icons/normalized/bookmark-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bookmark-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender