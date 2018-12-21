import React from 'react';
import iconSvg from '../icons/normalized/pencil-of-gross-size-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pencil-of-gross-size-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender