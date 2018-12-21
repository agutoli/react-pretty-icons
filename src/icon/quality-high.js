import React from 'react';
import iconSvg from '../icons/normalized/quality-high.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__quality-high" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender