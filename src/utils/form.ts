import { FormDataTypes } from "../containers/create-job-post/utils/objects"

export const checkEmptyFields = (formData: FormDataTypes): boolean => {
  const isEmpty = formData && Object.keys(formData).some(key => {
    if (typeof formData[key] === 'number') return formData[key] < 1
    return formData[key].toString().trim().length < 1
  })
  return isEmpty
}
