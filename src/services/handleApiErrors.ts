import showToast from "../lib/showToast";

// Function to handle errors
export const handleApiErrors = (error: any) => {
  let errorMessage = "";

  // Priority-based condition checks
  if (!errorMessage && error?.response?.data?.errors?.details?.[0]?.issue) {
    errorMessage = error.response?.data.errors.details[0].issue;
  }

  // New format error message, only if previous checks did not set an errorMessage
  if (!errorMessage && error?.response?.data?.errors?.message)
    errorMessage = error.response?.data.errors.message;
  if (!errorMessage && error?.response?.data?.errors?.[0].message)
    errorMessage = error.response?.data.errors?.[0].message;
  if (!errorMessage && error?.response?.data?.message)
    errorMessage = error.response?.data.message;

  const errorObject = error?.response?.data?.errors || error?.response?.errors;
  if (errorMessage) showToast.error(errorMessage);

  // Show additional error messages if available
  if (errorObject) {
    Object.values(errorObject ?? {}).forEach?.((messages: any) => {
      messages.forEach?.((message: any) => {
        showToast.error(message);
      });
    });
  }
};

// Function to handle api auth errors
export const handleApiAuthErrors = (error: any) => {
  const isDuplicateEmail =
    error?.response?.data?.message == "DuplicateUserName";
  let errorMessage = "";

  // Priority-based condition checks
  if (!errorMessage && error?.response?.data?.errors?.details?.[0]?.issue) {
    errorMessage = error.response?.data.errors.details[0].issue;
  }

  // New format error message, only if previous checks did not set an errorMessage
  if (!errorMessage && error?.response?.data?.errors?.message)
    errorMessage = error.response?.data.errors.message;
  if (!errorMessage && error?.response?.data?.message)
    errorMessage = error.response?.data.message;

  const errorObject = error?.response?.data?.errors || error?.response?.errors;
  if (errorMessage && !isDuplicateEmail) showToast.error(errorMessage);

  // Show additional error messages if available
  if (errorObject) {
    Object.values(errorObject ?? {}).forEach?.((messages: any) => {
      messages.forEach?.((message: any) => {
        showToast.error(message);
      });
    });
  }
};
