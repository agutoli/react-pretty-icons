import React from 'react';
import iconSvg from '../icons/normalized/xamarin-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__xamarin-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender