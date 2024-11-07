/* 
Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.
*/
{
  type TCircle = {
    shape: string;
    radius: number;
  };
  type TRectangle = {
    shape: string;
    width: number;
    height: number;
  };

  const calculateShapeArea = (objct: TCircle | TRectangle) => {
    if ("radius" in objct) {
      const circleArea = Math.PI * objct.radius * objct.radius;
      return circleArea.toFixed(2);
    } else {
      const rectangleArea = objct.height * objct.width;
      return rectangleArea.toFixed(2);
    }
  };
  console.log(
    "🚀 ~ calculateShapeArea ~ calculateShapeArea:",
    calculateShapeArea({
      shape: "rectangle",
      width: 4,
      height: 6,
    })
  );
}
