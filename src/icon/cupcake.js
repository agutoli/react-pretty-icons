import React from 'react';
import iconSvg from '../icons/normalized/cupcake.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cupcake" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender