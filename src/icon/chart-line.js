import React from 'react';
import iconSvg from '../icons/normalized/chart-line.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chart-line" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender