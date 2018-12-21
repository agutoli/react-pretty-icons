import React from 'react';
import iconSvg from '../icons/normalized/arrow-expand-right.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__arrow-expand-right" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender