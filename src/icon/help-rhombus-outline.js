import React from 'react';
import iconSvg from '../icons/normalized/help-rhombus-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__help-rhombus-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender