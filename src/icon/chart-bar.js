import React from 'react';
import iconSvg from '../icons/normalized/chart-bar.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chart-bar" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender