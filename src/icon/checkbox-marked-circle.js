import React from 'react';
import iconSvg from '../icons/normalized/checkbox-marked-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__checkbox-marked-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender