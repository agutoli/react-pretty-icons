import React from 'react';
import iconSvg from '../icons/normalized/disqus-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__disqus-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender