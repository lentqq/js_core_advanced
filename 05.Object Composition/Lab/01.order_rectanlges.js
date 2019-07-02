function rectangleBuilder(width, height) {
    let rectangle = {
        width: width,
        height: height,
        area: () => rectangle.width * rectangle.height,
        compareTo: function (other) {
            let result = other.area() - rectangle.area();
            return result || (other.width - rectangle.width);
        }
    };
    return rectangle;
};

let rects = [rectangleBuilder(10, 5), rectangleBuilder(5, 12)];
rects.sort((r1, r2) => r1.compareTo(r2));
console.log(rects);