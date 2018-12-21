import React from 'react';
import iconSvg from '../icons/normalized/laravel.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__laravel" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender