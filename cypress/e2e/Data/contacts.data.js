module.exports = [
    {
        valid: true,
        first_name: 'Tiny',
        last_name: 'Tim',
        email: 'timtiny@yopmail.com',
        subject: 'Hello',
        message: 'Hello Tiny Tim',
        missingField: ''
    },
    {
         valid: false,
        first_name: '',
        last_name: 'Tim',
        email: 'timtiny@yopmail.com',
        subject: 'Hello',
        message: 'Hello Tim',
        missingField: 'first name',
        error: 'Field is required!'
    },
    {
         valid: false,
        first_name: 'Tiny',
        last_name: '',
        email: 'timtiny@yopmail.com',
        subject: 'Hello',
        message: 'Hello John Doe',
        missingField: 'last name',
        error: 'Field is required!'
    },
    {
       valid: false,
        first_name: 'Tiny',
        last_name: 'Tim',
        email: '',
        subject: 'Hello',
        message: 'Hello John Doe',
        missingField: 'email',
        error: 'Field is required!'
    },
    {
         valid: false,
        first_name: 'Tiny',
        last_name: 'Tim',
        email: 'timtiny@yopmail.com',
        subject: '',
        message: 'Hello Jan Deez',
        missingField: 'subject',
        error: 'Field is required!'
    },
    {
        valid: false,
        first_name: 'Tiny',
        last_name: 'Tim',
        email: 'timtiny@yopmail.com',
        subject: 'Hello',
        message: '',
        missingField: 'message',
        error: 'Field is required!'
    },
    
]
