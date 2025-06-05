export function validateNumber(input) {
  try {
    return new Big(input);
  } catch (error) {
    console.error('Invalid number format:', input);
    return new Big(0);  // Return safe default
  }
}
