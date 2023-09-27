export type Point = {
  x: number;
  y: number;
};

function formatPoints(points: Point[], close: boolean): number[] {
  const finalPoints = points.map(({ x, y }) => [x, y]);

  if (close) {
    const lastPoint = finalPoints[finalPoints.length - 1];
    const secondToLastPoint = finalPoints[finalPoints.length - 2];

    const firstPoint = finalPoints[0];
    const secondPoint = finalPoints[1];

    finalPoints.unshift(lastPoint);
    finalPoints.unshift(secondToLastPoint);

    finalPoints.push(firstPoint);
    finalPoints.push(secondPoint);
  }

  return finalPoints.flat();
}

function spline(
  points: Point[] = [],
  tension: number = 1,
  close: boolean = false,
  cb?: (action: string, coords: number[]) => any
) {
  const finalPoints = formatPoints(points, close);

  const size = finalPoints.length;
  const last = size - 4;

  const startPointX = close ? finalPoints[2] : finalPoints[0];
  const startPointY = close ? finalPoints[3] : finalPoints[1];

  let path = "M" + [startPointX, startPointY];

  cb && cb("MOVE", [startPointX, startPointY]);

  const startIteration = close ? 2 : 0;
  const maxIteration = close ? size - 4 : size - 2;
  const inc = 2;

  for (let i = startIteration; i < maxIteration; i += inc) {
    const x0 = i ? finalPoints[i - 2] : finalPoints[0];
    const y0 = i ? finalPoints[i - 1] : finalPoints[1];

    const x1 = finalPoints[i + 0];
    const y1 = finalPoints[i + 1];

    const x2 = finalPoints[i + 2];
    const y2 = finalPoints[i + 3];

    const x3 = i !== last ? finalPoints[i + 4] : x2;
    const y3 = i !== last ? finalPoints[i + 5] : y2;

    const cp1x = x1 + ((x2 - x0) / 6) * tension;
    const cp1y = y1 + ((y2 - y0) / 6) * tension;

    const cp2x = x2 - ((x3 - x1) / 6) * tension;
    const cp2y = y2 - ((y3 - y1) / 6) * tension;

    path += "C" + [cp1x, cp1y, cp2x, cp2y, x2, y2];

    cb && cb("CURVE", [cp1x, cp1y, cp2x, cp2y, x2, y2]);
  }

  return path;
}

export { spline };
