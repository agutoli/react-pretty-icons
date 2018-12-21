import React from 'react';
import iconSvg from '../icons/normalized/quaver-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__quaver-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender