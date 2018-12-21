import React from 'react';
import iconSvg from '../icons/normalized/reddit.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__reddit" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender