const Stack = require('./Stack');

describe('--should demo stack', () => {

    let stack = null;

    beforeEach(() => {
        stack = new Stack();
    });
    
    afterEach(() => {
        stack = null;
    });

    test('--should demo push operation', () => {
        
        stack.push(1);
        
        let stackLength = stack.length();
        
        expect(stackLength).toBeGreaterThan(0);
        expect(stackLength).toBe(1);

        stack.push(2);

        stackLength = stack.length();

        expect(stackLength).toBeGreaterThan(0);
        expect(stackLength).toBe(2);
    });

    test('--should demo pop operation', () => {
        
        stack.push(1);
        
        stack.push(2);

        let topMostElement = stack.pop();

        expect(topMostElement).toBe(2);

        topMostElement = stack.pop();

        expect(topMostElement).toBe(1);
    });

});