import React from 'react';
import iconSvg from '../icons/normalized/chart-timeline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chart-timeline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender