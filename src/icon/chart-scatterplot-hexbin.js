import React from 'react';
import iconSvg from '../icons/normalized/chart-scatterplot-hexbin.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chart-scatterplot-hexbin" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender