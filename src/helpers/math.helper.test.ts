import { test, expect, describe } from "vitest"
import { add, substract, multiply } from "./math.helper"


describe("add", () => {

    test("should add two positive numbers", () => {
        const result = add(2, 2)
        expect(result).toBe(4)

    })

    test("should add two positive numbers", () => {
        const result = add(10, 50)
        expect(result).toBe(60)

    })

    test("should add two positive numbers", () => {
        const result = add(-5, -2)
        expect(result).toBe(-7)

    })

})

describe("substract", () => {

    test("should substract two positive numbers", () => {
        const result = substract(2, 2)
        expect(result).toBe(0)

    })

    test("should substract two positive numbers", () => {
        const result = substract(10, 50)
        expect(result).toBe(-40)

    })

    test("should substract two positive numbers", () => {
        const result = substract(-5, -2)
        expect(result).toBe(-3)

    })

})

describe("multiply", () => {

    test("should multiply two positive numbers", () => {
        const result = multiply(2, 2)
        expect(result).toBe(4)

    })

    test("should multiply two positive numbers", () => {
        const result = multiply(20, 4)
        expect(result).toBe(80)

    })

    test("should multiply two positive numbers", () => {
        const result = multiply(-5, -2)
        expect(result).toBe(10)

    })

})
