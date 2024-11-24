import { describe } from "node:test";
import { sum } from "./math";



describe('check the function sum of two number',()=>{

    test('sanity test',()=>{
        expect(sum(4,3)).toBe(7);
    })

    const arr = [[-1,-3,-4],[2,2,4],[1,7,8],[2,1,3]]

    test.each(arr)('sum(%i,%j) should return %s',(a,b,expected)=>{
        expect(sum(a,b)).toBe(expected);
    })
    
})