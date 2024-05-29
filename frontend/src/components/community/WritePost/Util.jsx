export const handleInputChange = (setter, errors, setErrors) => (e) => {
  setter(e.target.value);
  if (errors[e.target.name]) {
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[e.target.name];
      return newErrors;
    });
  }
};

export const validateFields = (fields) => {
  const errors = {};
  Object.keys(fields).forEach((field) => {
    if (!fields[field]) {
      errors[field] = `${
        field.charAt(0).toUpperCase() + field.slice(1)
      } is required`;
    }
  });
  return errors;
};
