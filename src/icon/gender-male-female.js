import React from 'react';
import iconSvg from '../icons/normalized/gender-male-female.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gender-male-female" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender