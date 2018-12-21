import React from 'react';
import iconSvg from '../icons/normalized/weight-pound.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__weight-pound" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender