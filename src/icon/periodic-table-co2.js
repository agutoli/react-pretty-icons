import React from 'react';
import iconSvg from '../icons/normalized/periodic-table-co2.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__periodic-table-co2" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender