import React from "react";

function AdminDash() {
  return (
    <div>
          <div class="is-size-1 has-text-weight-bold	">
        <h1>DASHBOARD</h1>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <a class="button is-danger is-large is-outlined">
          <span>Add Question</span>
          <span class="icon is-small">
            <i class="fas fa-plus" />
          </span>
        </a>
        <br />
        <br />
        <br />
        <br />
        <a class="button is-danger is-large is-outlined">
          <span>Show Question</span>
          <span class="icon is-small">
            <i class="fas fa-question" />
          </span>
        </a>
      </div>
    </div>
  );
}

export default AdminDash;
