export const required = (field) => {
  if (!field.value) {
    return `${field.name} is required`;
  } else if (field.value.replace(/\s+/g, "").length === 0) {
    return `${field.name} is required`;
  } else {
    return null;
  }
};

const validations = { required };

export default validations;
