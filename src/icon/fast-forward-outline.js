import React from 'react';
import iconSvg from '../icons/normalized/fast-forward-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__fast-forward-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender