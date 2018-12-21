import React from 'react';
import iconSvg from '../icons/normalized/call-split.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__call-split" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender