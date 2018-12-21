import React from 'react';
import iconSvg from '../icons/normalized/hackernews.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__hackernews" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender