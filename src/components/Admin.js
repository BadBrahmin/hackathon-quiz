import React from 'react';
import "../components/Admin.scss";
import "../components/AddNewQuestion.scss";



function Admin(){
    return (
        <main>
            <div className="flex-column">
                <button className="button is-primary is-large">
                    <a href="/admin/addnew">ADD QUESTION</a>
                </button>
                <button className="button is-primary is-large">
                    <a href="/admin/Questionlist">QUESTION-LIST</a>
                </button>
            </div>
        </main>
    )
}

    


export default Admin;