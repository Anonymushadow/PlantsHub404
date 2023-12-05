//objeto con datos unicos queno pueden modificarse ni añadir nuevos
export const MESSAGE_TYPES = Object.freeze({
    ERROR: Symbol(),
    IS_NUMBER: Symbol(),
    IS_LETTERS: Symbol(),
    IS_MAIL: Symbol(),
    IS_PHONE: Symbol(),
    IS_DATE: Symbol()
})