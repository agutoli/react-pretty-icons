import React from 'react';
import iconSvg from '../icons/normalized/watch.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__watch" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender