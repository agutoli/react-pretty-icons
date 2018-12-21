import React from 'react';
import iconSvg from '../icons/normalized/arrow-expand-horizontal.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__arrow-expand-horizontal" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender