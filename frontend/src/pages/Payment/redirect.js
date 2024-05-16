import React, { useEffect } from "react";

function Redirect() {
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.href = "/successful";
    }, 2500);

    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <div className="App-header">
      <p className="redirect">Redirecting to ...</p>
    </div>
  );
}

export default Redirect;
