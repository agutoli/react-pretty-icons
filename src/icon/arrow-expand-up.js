import React from 'react';
import iconSvg from '../icons/normalized/arrow-expand-up.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__arrow-expand-up" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender