import React from 'react';
import iconSvg from '../icons/normalized/apple-finder.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__apple-finder" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender