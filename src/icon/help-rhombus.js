import React from 'react';
import iconSvg from '../icons/normalized/help-rhombus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__help-rhombus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender