import React from 'react';
import iconSvg from '../icons/normalized/margin.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__margin" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender