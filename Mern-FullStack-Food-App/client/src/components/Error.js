import React from "react";

function Error(err) {
  return (
    <div>
      <div class="alert alert-danger" role="alert">
        {err}
      </div>
    </div>
  );
}

export default Error;
