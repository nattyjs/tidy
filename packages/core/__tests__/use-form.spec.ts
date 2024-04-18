import { nattyForms } from ".."
import { Validators } from "../const/validators"
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
    const form = useForm({ name: 'Donald', lastName: '' }, {
        validators: {
            name: Validators.required(),
            lastName: Validators.required({
                conditionalExpression: (t) => t.name == 'Bharat'
            })
        }
    })
    expect(form.name).toEqual("Donald")
    expect(form.lastName).toEqual("")
    expect(form.valid).toBe(true)
    form.name = "Bharat";
    expect(form.valid).toBe(false)
})

test("useForm Object", () => {
    const form = useForm({
        info: {
            brief: ''
        }
    }, {
        validators: {
            info: {
                brief: Validators.required()
            }
        }
    })
    expect(form.info).toBeDefined();
    expect(form.valid).toBe(false);
    expect(form.info.valid).toBe(false);
    expect(form.errors).toEqual({
        info: {
            brief: {
                required: {
                    message: "this field is required.",
                    refValues: []
                }
            }
        }
    })
    expect(form.info.errors).toEqual({
        brief: {
            required: {
                message: "this field is required.",
                refValues: []
            }
        }
    })
    form.info.brief = "I am writer";
    expect(form.valid).toBe(true);
    expect(form.info.valid).toBe(true);
    expect(form.errors).toEqual(null)
    expect(form.info.errors).toEqual(null)
})

test("useForm Array", () => {
    const form = useForm({
        hobbies: [{
            name: ''
        }]
    }, {
        validators: {
            hobbies: [{
                name: Validators.required()
            }]
        }
    })
    expect(form.hobbies).toBeDefined();
    expect(form.valid).toBe(false);
    expect(form.hobbies.valid).toBe(false);
    expect(form.hobbies[0].valid).toBe(false);
    expect(form.errors).toEqual({
        hobbies: [{
            name: {
                required: {
                    message: "this field is required.",
                    refValues: []
                }
            },
            index: 0
        }]

    })
    expect(form.hobbies.errors).toEqual([{
        name: {
            required: {
                message: "this field is required.",
                refValues: []
            }
        },
        index: 0
    }])
    form.hobbies[0].name = "Chess";
    expect(form.valid).toBe(true);
    expect(form.hobbies.valid).toBe(true);
    expect(form.errors).toEqual(null)
    expect(form.hobbies.errors).toEqual(null)
})