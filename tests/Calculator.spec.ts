import { Calculator } from "../src/Calcaulator"

describe('calculator test', () =>{
    const calculator = new Calculator();

    test('calculator.add', () => {
        expect(calculator.add(1, 2)).toEqual(3);        
    })
})