import React from 'react';
import iconSvg from '../icons/normalized/backburger.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__backburger" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender