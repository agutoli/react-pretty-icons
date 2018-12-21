import React from 'react';
import iconSvg from '../icons/normalized/gnome.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gnome" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender