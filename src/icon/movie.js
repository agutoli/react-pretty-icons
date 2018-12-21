import React from 'react';
import iconSvg from '../icons/normalized/movie.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__movie" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender