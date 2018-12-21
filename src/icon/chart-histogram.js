import React from 'react';
import iconSvg from '../icons/normalized/chart-histogram.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chart-histogram" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender