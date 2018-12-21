import React from 'react';
import iconSvg from '../icons/normalized/format-horizontal-align-left.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-horizontal-align-left" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender