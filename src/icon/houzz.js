import React from 'react';
import iconSvg from '../icons/normalized/houzz.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__houzz" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender