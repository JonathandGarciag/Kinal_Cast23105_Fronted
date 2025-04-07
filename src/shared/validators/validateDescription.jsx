
export const validateDescription = (description) => {
    return description.length >= 10 && description.length <= 200;
}

export const descriptionValidationMessage = 'La descripcion debe tener entre 10 a 200 caracteres';