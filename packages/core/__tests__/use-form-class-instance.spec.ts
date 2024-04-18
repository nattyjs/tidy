import { nattyForms, prop, required } from "../index"
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
class Hobby {
    @required()
    name: string
}
class Info {
    @required()
    brief: string;
}
class User {
    @required()
    name: string;

    @required({
        conditionalExpression: (t) => t.name == 'Bharat'
    })
    lastName: string;

    @prop()
    info: Info;
    @prop()
    hobbies: Hobby[];
}
test("useForm",()=>{
    const user = new User();
    user.name = "Donald"
    const form = useForm(user);
    expect(form.name).toEqual("Donald")
    expect(form.lastName).toEqual(undefined)
    expect(form.valid).toBe(true)
    form.name = "Bharat";
    expect(form.valid).toBe(false)
})

test("useForm Object", () => {
    const info = new Info();
    info.brief='';
    const user = new User();
    user.name = "Donald"
    user.info = info;
    const form = useForm(user)
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
    const hobbies = new Array<Hobby>();
    hobbies.push(new Hobby());
    const user = new User();
    user.name = "Donald"
    user.hobbies = hobbies
    const form = useForm(user)
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