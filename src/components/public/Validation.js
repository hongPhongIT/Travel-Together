export const validate = values => {
    const errors = {}

    if (!values.name) {
        errors.name = 'Required'
    }

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (!values.age) {
        errors.age = 'Required'
    } else if (isNaN(Number(values.age))) {
        errors.age = 'Must be a number'
    } else if (Number(values.age) < 18) {
        errors.age = 'Sorry, you must be at least 18 years old'
    }

    if (!values.address) {
        errors.address = 'Required'
    }

    if (!values.phone) {
        errors.phone = 'Required'
    } else if (!/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/i.test(values.phone)) {
    // } else if (!/^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/g.test(values.phone)) {
        errors.phone = 'Invalid phone number'
    }

    if (!values.dateOfBirth) {
        errors.dateOfBirth = 'Required'
    }
    // else if (!/^(0[1-9]|[12][0-9]|3[01])[\- \/.](?:(0[1-9]|1[012])[\- \/.](19|20)[0-9]{2})$/i.test(values.dateOfBirth)) {
    else if ((/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/g).test(values.dateOfBirth)) {
        errors.dateOfBirth = 'Invalid date'
    }


    // FieldArray + OrderForm
    if (!values.clubName) {
        errors.clubName = 'Required'
    }
    if (!values.members || !values.members.length) {
        errors.members = { _error: 'At least one member must be entered' }
    } else {
        const membersArrayErrors = []
        values.members.forEach((member, memberIndex) => {
            const memberErrors = {}
            if (!member || !member.name) {
                memberErrors.name = 'Required'
                membersArrayErrors[memberIndex] = memberErrors
            }
            if (!member || !member.DateOfBirth) {
                memberErrors.DateOfBirth = 'Required'
                membersArrayErrors[memberIndex] = memberErrors
            } 
        })
        if (membersArrayErrors.length) {
            errors.members = membersArrayErrors
        }
    }

    return errors
}