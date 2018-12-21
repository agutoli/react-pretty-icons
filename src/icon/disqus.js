import React from 'react';
import iconSvg from '../icons/normalized/disqus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__disqus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender