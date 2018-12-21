import React from 'react';
import iconSvg from '../icons/normalized/directions.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__directions" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender