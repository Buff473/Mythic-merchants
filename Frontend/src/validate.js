function validation (values){
 
  let error ={}

  
    if (values.name === '' || values.name == null) {
      error.name = 'Name is required';
    }
  
    if (values.email === '' || values.email == null) {
      error.email = 'Email is required';
    }
    if (values.password === '' || values.password == null) {
      error.password = 'Password is required';
    }
    if (values.confirmpassword === '' || values.confirmpassword == null) {
      error.confirmpassword = 'Must confirm your Password';
    }

    if (values.confirmpassword !== values.password) {
      error.confirmpassword = 'Password must match';
    }
  
    return error;

  
}

export default validation