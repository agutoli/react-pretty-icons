import React from 'react';
import iconSvg from '../icons/normalized/ubisoft.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ubisoft" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender