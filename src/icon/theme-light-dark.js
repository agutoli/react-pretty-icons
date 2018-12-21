import React from 'react';
import iconSvg from '../icons/normalized/theme-light-dark.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__theme-light-dark" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender