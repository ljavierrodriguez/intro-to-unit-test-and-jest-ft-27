const { sumar } = require('../app')

describe('Validaciones de la funcion sumar', () => {
    test('La funcion sumar debe estar definida', () => {
        expect(sumar).toBeDefined() // true
    })
    
    test('La funcion sumar debe recibir 2 argumentos', () => {
        expect(sumar).toHaveProperty('length', 2)
    })
    
    test('La suma de 7 + 9 debe ser 16', () => {
        expect(sumar(7, 9)).toBe(16)
    })
})