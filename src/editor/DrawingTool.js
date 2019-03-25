// DrawingTool.js
import React from 'react';
import { makeid } from '../common/tool.js';


export const calcCenter = (x, y, size) => {
  return { x: (x + size / 2), y: (y + size / 2) };
}

export const calcTheta = (x1, y1, x2, y2) => {
  let theta = 0;

  if( x2 === x1 ) {
    theta = (y2 >= y1 ? 90 : 270) * Math.PI / 180;
  } else {
    theta = x2 > x1
      ? Math.atan((y2 - y1) / (x2 - x1))
      : Math.atan((y1 - y2) / (x1 - x2)) + Math.PI;
  }

  return theta;
}


// rect: (x1, y1) ~ (x2, y2)
// point: (px, py);
// return whether the point is in the rect or not
export const isPtInRect = (x1, y1, x2, y2, px, py) => {
	const
		sx = Math.min(x1, x2),
		sy = Math.min(y1, y2),
		ex = Math.max(x1, x2),
		ey = Math.max(y1, y2)
	;

	return sx <= px && sy <= py && px <= ex && py <= ey;
}

// p1, p2: {x, y}
export const drawArrowLine = (p1, p2, beginRadius, endRadius, arrowSize, strokWidth, color, clickHandler) => {
  const dx = p2.x - p1.x, dy = p2.y - p1.y;
  const d = Math.sqrt(dx * dx + dy * dy);

  if( d < arrowSize + endRadius )
      return null;

  const
    sX = p1.x + beginRadius * dx / d,
    sY = p1.y + beginRadius * dy / d,
    eX = p2.x - (endRadius + arrowSize) * dx / d,
    eY = p2.y - (endRadius + arrowSize) * dy / d;

  const th = calcTheta(p1.x, p1.y, p2.x, p2.y);

  const arrowX = [ -arrowSize + 3, -arrowSize, +arrowSize, -arrowSize ];
  const arrowY = [  0,  -arrowSize + 2,   0,   +arrowSize - 2];
  
  let path = '';
  for(let i = 0; i < arrowX.length; ++i) {
    if( i > 0 )
      path += ',';

    path += ((Math.cos(th) * arrowX[i] - Math.sin(th) * arrowY[i] + eX)
      + ',' + (Math.sin(th) * arrowX[i] + Math.cos(th) * arrowY[i] + eY));
  }

  return (
    <g key={makeid(6)} onMouseDown={clickHandler}>
      <line
        x1={sX} y1={sY} x2={eX} y2={eY}
        style={{ strokeWidth:strokWidth, stroke:color }}
      />
      <polygon points={path} style={{ fill:color }} />
    </g>
  );
}
