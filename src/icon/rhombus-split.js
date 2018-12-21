import React from 'react';
import iconSvg from '../icons/normalized/rhombus-split.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__rhombus-split" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender