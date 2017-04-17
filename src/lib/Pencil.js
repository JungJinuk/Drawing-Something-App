import { v4 } from 'uuid';

export default (context) => {
  let stroke = null;
  
  const onMouseDown = (x, y) => {
    stroke = {
      id: v4(),
      points: [{ x, y }]
    };
    return [stroke];
  };

  const onMouseUp = (x, y) => {
    if (!stroke) return;
    onMouseMove(x, y);
    const item = stroke;
    stroke = null;
    return [item];
  };

  const onMouseMove = (x, y) => {
    if (!stroke) return [];
    const newPoint = { x, y };
    const start = stroke.points.slice(-1)[0];
    drawLine(stroke, start, newPoint);
    stroke.points.push(newPoint);

    return [stroke];
  };

  const drawLine = (item, start, { x, y }) => {
    context.save();
    context.lineJoin = "round";
    context.lineCap = "round";
    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = "#000000";
    context.globalCompositeOperation = "source-over";
    context.moveTo(start.x, start.y);
    context.lineTo(x, y);
    context.closePath();
    context.stroke();
    context.restore();
  };

  return {
    onMouseDown,
    onMouseMove,
    onMouseUp,
  };
};