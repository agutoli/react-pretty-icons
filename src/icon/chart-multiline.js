import React from 'react';
import iconSvg from '../icons/normalized/chart-multiline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chart-multiline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender