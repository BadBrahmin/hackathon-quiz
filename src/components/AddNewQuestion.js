import React from 'react';
import "../components/AddNewQuestion.scss";





function AddNewQuestion(){
    return (
        <div>
            <h2 className="add-question-heading">Add New Question</h2>
            <form className="flex-column">
            <input className="form-question" type="text" placeholder="Question"/>
            <input className="form-option" type="text" placeholder="Option 1"/>
            <input className="form-option" type="text" placeholder="Option 2"/>
            <input className="form-option" type="text" placeholder="Option 3"/>
            <input className="form-option" type="text" placeholder="Option 4"/>
            <input className="form-option" type="text" placeholder="Correct answer"/>
            </form>
            <select className="form-select" >
                <option value="" disabled selected>Categories</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="fullstack">Fullstack</option>
            </select>
            <div className="centre">
                <button className="button is-primary">submit</button>
            </div>
        </div>
    )
}

export default AddNewQuestion;