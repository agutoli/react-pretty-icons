import React from 'react';
import iconSvg from '../icons/normalized/douban.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__douban" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender