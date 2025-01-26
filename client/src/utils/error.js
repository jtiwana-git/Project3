export const getResponseError = (error) => {
  if (error === 0 || error === undefined) return null;

  if (error.response) {
    if (error.response.ststus === 400 && error.response.data) {
      const responseError = error.response.data.errors;
      if (responseError) {
        const errorData = {};
        for (const errorItem of responseError) {
          errorData[errorItem.field] = errorItem.defaultMessage;
        }
        return errorData;
      }
      return null;
    }
  }
};
