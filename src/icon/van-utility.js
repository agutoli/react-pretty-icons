import React from 'react';
import iconSvg from '../icons/normalized/van-utility.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__van-utility" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender