import React from 'react';
import iconSvg from '../icons/normalized/rss-symbol.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__rss-symbol" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender