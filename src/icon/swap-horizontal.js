import React from 'react';
import iconSvg from '../icons/normalized/swap-horizontal.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__swap-horizontal" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender