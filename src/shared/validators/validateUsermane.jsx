
export const validateUsername = (username) => {
    const regex = /^\S{3,8}$/;
    return regex.test(username);
}

export const validateUsernameMessage = 'El nombre del usuario debe tener entre 3 a 8 caracteres y no debe tener espacios';