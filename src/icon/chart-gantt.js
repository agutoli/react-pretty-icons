import React from 'react';
import iconSvg from '../icons/normalized/chart-gantt.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chart-gantt" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender