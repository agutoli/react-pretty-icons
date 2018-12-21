import React from 'react';
import iconSvg from '../icons/normalized/bullseye-arrow.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bullseye-arrow" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender