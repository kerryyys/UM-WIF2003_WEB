import React, { useEffect } from 'react';

function Redirect() {
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.href = '/successful';
    }, 2000);

    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <div>
      <p className='redirect'>Redirecting to ...</p>
    </div>
  );
}

export default Redirect;
