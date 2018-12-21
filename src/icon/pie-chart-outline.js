import React from 'react';
import iconSvg from '../icons/normalized/pie-chart-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pie-chart-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender