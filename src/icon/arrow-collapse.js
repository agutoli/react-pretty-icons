import React from 'react';
import iconSvg from '../icons/normalized/arrow-collapse.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__arrow-collapse" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender