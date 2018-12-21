import React from 'react';
import iconSvg from '../icons/normalized/circle-slice-5.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__circle-slice-5" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender