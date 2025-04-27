
export const validationAvatarUrl = (url) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(url);
}

export const avatarValidationMessage = 'Este no es una URL valida';