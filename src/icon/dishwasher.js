import React from 'react';
import iconSvg from '../icons/normalized/dishwasher.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__dishwasher" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender