type Triangle = {
  type: "triangle";
  base: number;
  height: number;
};
type Rectangle = {
  type: "rectangle";
  width: number;
  height: number;
};
type Circle = { type: "circle"; radius: number };

const triangle: Triangle = { type: "triangle", base: 5, height: 10 };
const rectangle: Rectangle = { type: "rectangle", width: 8, height: 14 };
const circle: Circle = { type: "circle", radius: 8 };

function getFigureInfo(figure: Triangle | Rectangle | Circle) {
  switch (figure.type) {
    case "triangle":
      const triangle_area = (figure.base * figure.height) / 2;
      return `Triangle with base ${figure.base} and height ${figure.height} has an area of ${triangle_area}`;

    case "rectangle":
      const rectangle_area = figure.width * figure.height;
      return `Rectangle with width ${figure.width} and height ${figure.height} has an area of ${rectangle_area}`;

    case "circle":
      const circle_area = Math.PI * Math.pow(figure.radius, 2);
      return `Circle with radius ${
        figure.radius
      } has an area of ${circle_area.toFixed(2)}`;
  }
}

console.log(getFigureInfo(triangle));
// Output: " Triangle with base 5 and height 10 has an area of 25"

console.log(getFigureInfo(rectangle));
// Output: " Rectangle with width 8 and height 14 has an area of 112"

console.log(getFigureInfo(circle));
// Output: " Circle with radius 8 has an area of 201.06"
