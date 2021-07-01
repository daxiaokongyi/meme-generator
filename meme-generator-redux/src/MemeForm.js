import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import './MemeForm.css';

const MemeForm = ({addMeme}) => {
    const INITIAL_FORM = {
        url: "",
        topText: "",
        bottomText: ""
    };

    const [form, setForm] = useState(INITIAL_FORM);

    const handleChange = evt => {
        const {name, value} = evt.target;
        setForm({...form, [name]: value});
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        addMeme({...form, id: uuidv4()});
        setForm(INITIAL_FORM);
    }

    return (
        <div>
            <h2>Make a New Meme</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="url">Image Url: </label>
                    <input 
                        type="text" 
                        name="url"
                        id="form_url"
                        onChange={handleChange}
                        value={form.url}
                    />
                </div>
                <div>
                    <label htmlFor="top">Top Text: </label>
                    <input 
                        type="text"
                        name="topText"
                        id="form_top"
                        onChange={handleChange}
                        value={form.topText}
                    />
                </div>
                <div>
                    <label htmlFor="bottom">Bottom Text: </label>
                    <input 
                        type="text" 
                        name="bottomText"
                        id="form_bottom"
                        onChange={handleChange}
                        value={form.bottomText}
                    />
                </div>
                <button>Generate MEME!</button>
            </form>
        </div>
    )
}

export default MemeForm;