import { minDate, nattyForms, prop } from "../index"
import { useForm } from "../functions/use-form"




beforeAll(() => {
    nattyForms.configure({
        errorMessage: {
            validator: {
                required: 'this field is required.'
            }
        }
    })
})

test("useForm", () => {
    class User {
        @prop()
        enrollmentDate: string;
    
        @minDate({ fieldName: 'enrollmentDate' })
        lastRegistrationDate: string;
    }
    const form = useForm<Partial<User>>({
        enrollmentDate: '2023-06-16',
        lastRegistrationDate: '2023-06-15'
    }, {
        type: User
    });
    expect(form.valid).toBe(false)
    form.enrollmentDate= '2023-06-14';
    expect(form.valid).toBe(true)
})