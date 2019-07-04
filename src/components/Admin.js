import React from 'react';
import "../components/Admin.scss";
import "../components/AddNewQuestion.scss";




function Admin(){
    return (
        <main>
            <button className="centre form-question">
                <a href="/admin/addnew">ADD QUESTION</a>
            </button>

        </main>
    )
}

    


export default Admin;