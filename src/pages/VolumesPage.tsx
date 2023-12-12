/**
 * Calculate the volume of a cube
 * 
 * The function takes an object dimensions with property length, and
 * calculates the volume of the cube. It uses the formula:
 * 
 * volume = length * length * length
 * 
 * function must be defined with the arrow function.
 * 
 * @param {object} dimensions with property length
 * @throws {Error} if the object does not contain a property length
 * @example calculateCubeVolume({length: 10})
 */
export const calculateCubeVolume = (dimensions: { length: number }):number => {
    if (!dimensions.length) {
    throw new Error('The object does not contain a property length');
  }
  return dimensions.length * dimensions.length * dimensions.length;
}

