import { Validators } from "../const/validators"
import { useForm } from "../functions/use-form"
import { RunValidatorStrategy } from "../enums/run-validator-strategy"
import { nattyForms } from "../const/natty-forms"
beforeAll(() => {
    nattyForms.configure({
        runValidatorStrategy: RunValidatorStrategy.OnSubmit,
        errorMessage: {
            validator: {
                required: 'this field is required.'
            }
        }
    })
})
test("run validators on submit", () => {
    const form = useForm({ name: '' }, {
        validators: {
            name: Validators.required(),
        }
    })
    expect(form.valid).toBe(true)
    form.submit = true;
    expect(form.valid).toBe(false)
})
