import React from 'react';
import iconSvg from '../icons/normalized/xamarin.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__xamarin" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender