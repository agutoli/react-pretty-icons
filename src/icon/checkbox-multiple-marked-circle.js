import React from 'react';
import iconSvg from '../icons/normalized/checkbox-multiple-marked-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__checkbox-multiple-marked-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender