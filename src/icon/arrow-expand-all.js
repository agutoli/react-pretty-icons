import React from 'react';
import iconSvg from '../icons/normalized/arrow-expand-all.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__arrow-expand-all" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender