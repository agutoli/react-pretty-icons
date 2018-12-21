import React from 'react';
import iconSvg from '../icons/normalized/chart-arc.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chart-arc" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender