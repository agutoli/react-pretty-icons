import React from 'react';
import iconSvg from '../icons/normalized/reply-all.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__reply-all" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender