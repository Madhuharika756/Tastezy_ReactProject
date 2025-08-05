import { Sum } from "../src/components/Sum"

test("Sum fuction should execute sum of two numbers",()=>{
    const result = Sum(3,4);
    expect(result).toBe(7);
})