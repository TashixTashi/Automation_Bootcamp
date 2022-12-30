module.exports = [
    {
        authType: 'login',
        valid: true,
        userType: 'valid user',
        email: 'tashcamp@yopmail.com',
        password: 'P@ssword1!',

    },
    {
        authType: 'login',
        vaid: false,
        userType: 'invalid email user',
        email: 'testtest@yopmail.com',
        password: 'Penny1234',
        errorMsgAlert: 'Wrong email or password.',
    },
    {
        authType: 'login',
        vaid: false,
        userType: 'invalid password',
        email: 'testing12@yahoomail.com',
        password: 'wrongbang',
        errorMsgAlert: 'Wrong email or password.',
    },
    {
        authType: 'signUp',
        valid: false,
        userType: 'already registered user',
        email: 'tashcamp@yopmail.com',
        password: 'Password123',
        errorMsgAlert: "We're sorry, something went wrong when attempting to sign up.",
    },
    {
        authType: 'signUp',
        valid: true,
        userType: 'valid user',
        email: '',
        password: 'P@ssword1234!',

    },
]
