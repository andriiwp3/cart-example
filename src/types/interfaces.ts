export interface UserInputField<TValue = string, TError = string> {
  error?: TError;
  value: TValue;
}
