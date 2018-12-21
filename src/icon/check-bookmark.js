import React from 'react';
import iconSvg from '../icons/normalized/check-bookmark.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__check-bookmark" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender