export const hasEmptyField = (obj) => Object.values(obj).every((value) => !!value);

export const isEmptyObject = (obj) => Object.values(obj).every((value) => !value);
