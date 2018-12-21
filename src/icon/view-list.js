import React from 'react';
import iconSvg from '../icons/normalized/view-list.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__view-list" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender