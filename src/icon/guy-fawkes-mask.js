import React from 'react';
import iconSvg from '../icons/normalized/guy-fawkes-mask.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__guy-fawkes-mask" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender