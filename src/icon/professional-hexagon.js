import React from 'react';
import iconSvg from '../icons/normalized/professional-hexagon.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__professional-hexagon" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender