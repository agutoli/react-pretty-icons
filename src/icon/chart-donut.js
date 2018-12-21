import React from 'react';
import iconSvg from '../icons/normalized/chart-donut.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chart-donut" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender