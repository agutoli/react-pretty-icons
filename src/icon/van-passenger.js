import React from 'react';
import iconSvg from '../icons/normalized/van-passenger.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__van-passenger" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender