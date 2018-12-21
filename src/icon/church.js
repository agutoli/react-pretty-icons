import React from 'react';
import iconSvg from '../icons/normalized/church.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__church" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender