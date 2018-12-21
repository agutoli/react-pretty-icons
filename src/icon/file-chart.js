import React from 'react';
import iconSvg from '../icons/normalized/file-chart.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-chart" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender