import React from 'react';
import iconSvg from '../icons/normalized/npm-variant-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__npm-variant-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender