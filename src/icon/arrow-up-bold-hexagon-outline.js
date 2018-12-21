import React from 'react';
import iconSvg from '../icons/normalized/arrow-up-bold-hexagon-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__arrow-up-bold-hexagon-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender