import React from 'react';
import iconSvg from '../icons/normalized/chili-hot.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chili-hot" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender