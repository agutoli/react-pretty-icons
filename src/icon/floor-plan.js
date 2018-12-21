import React from 'react';
import iconSvg from '../icons/normalized/floor-plan.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__floor-plan" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender