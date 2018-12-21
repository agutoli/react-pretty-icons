import React from 'react';
import iconSvg from '../icons/normalized/responsive.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__responsive" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender