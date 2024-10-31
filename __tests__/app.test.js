const { restar, longitudCadena } = require('../app')

describe('Validaciones de la funcion restar', () => {
    test('La funcion restar debe estar definida', () => {
        expect(restar).toBeDefined()
    })

    test('La funcion restar debe recibir 2 argumentos', () => {
        expect(restar).toHaveProperty('length', 2)
    })

    test('La resta de 40 - 12 debe ser 28', () => {
        expect(restar(40, 12)).toBe(28)
    })

    test('La longitud de Hola debe de ser 4', () => {
        expect(longitudCadena('Hola')).toBe(4)
    })

    test('La longitud de Hola Mundo debe de ser 10', () => {
        expect(longitudCadena('Hola Mundo')).toBe(10)
    })
})

describe('Validaciones de la funcion longitudCadena', () => {
    test('La funcion longitudCadena debe estar definida', () => {
        expect(longitudCadena).toBeDefined()
    })

    test('La funcion longitudCadena debe recibir 1 argumento', () => {
        expect(longitudCadena).toHaveProperty('length', 1)
    })
})