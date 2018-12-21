import React from 'react';
import iconSvg from '../icons/normalized/movie-roll.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__movie-roll" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender