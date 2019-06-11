const add = (a, b) => a + b;

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`; 

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test ('should generate greeting', () => {
    expect(generateGreeting('Alex')).toBe('Hello Alex!');
});

test ('should generate default greeting', () => {
    expect(generateGreeting()).toBe('Hello Anonymous!');
});