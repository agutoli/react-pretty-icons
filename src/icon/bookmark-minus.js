import React from 'react';
import iconSvg from '../icons/normalized/bookmark-minus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bookmark-minus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender