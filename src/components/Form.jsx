import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils"
import { useState } from "react";



const Form = (addNewInfo) => {
    const [form, setForm] = useState("Introduce tus datos");

    const handleChange = (ev) => {
        console.log (ev.target.name);
        console.log (ev.target.value);
        const {name, value} = ev.target;
        setForm ({...form, [name]: value});
        
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        addNewInfo(form)
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label>
                    <span>Name</span>
                    <input type="text" name="name" value={form.name} onChange={handleChange}/>
                </label>
                <label>
                    <span>Phone</span>
                    <input type="text" name="phone" value={form.phone} onChange={handleChange}/>
                </label>
                <label>
                    <span>Email</span>
                    <input type="text" name="email" value={form.email} onChange={handleChange}/>
                </label>
                <button type="submit">Send</button>
            </fieldset>
        </form>
    )




}
export default Form;