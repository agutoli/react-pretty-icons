import React from 'react';
import iconSvg from '../icons/normalized/film.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__film" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender