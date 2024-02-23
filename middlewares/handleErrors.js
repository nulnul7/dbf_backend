export const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { username: '', password: '' }

    // incorrect username
    if (err.message === 'incorrect usename') {
        errors.username = 'That user is not registered';
    }

    // incorrect password
    if (err.message === 'incorrect password') {
        errors.password = 'That password is incorrect';
    }

    return errors
}