  const x = async function tests() {
     throw new Error('Error message');
  }

  try {
    x();
  } catch (e) {
    console.log(e) // Will the error be caught in "try catch"?
  }

// no, because `try catch` works with sync code.
