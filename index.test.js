const stringLength = require('./index.js');

describe('Tests the validity of strLength() fn', () => {
  test('Length of mundane toEqual 7', () => {
    // Arrange
    const testStr = 'mundane';
    // Act
    const len = stringLength(testStr);
    // Assert
    expect(len).toEqual(7);
  });
  
  test('Should throw an error', () => {
     // Arrange
     const testStr = '';
     // Act & Assert
     expect(() => {stringLength(testStr)}).toThrow('String must have at least 1 character and should be less than 10 characters');
  })
  
  test('Should throw an error', () => {
    const testStr = 'this is a very long test string'
    expect(() => {stringLength(testStr)}).toThrow('String must have at least 1 character and should be less than 10 characters');
  });
  
  test('Should throw an error', () => {
    expect(() => {stringLength()}).toThrow('String must have at least 1 character and should be less than 10 characters');
  });
})
