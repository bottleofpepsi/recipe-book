import { array, object, string } from "yup";

export const validationSchema = object({
    dishTypeValues: array(string()),
    dietValues: array(string()),
    query: string().when(
        ["dishTypeValues", "dietValues"],
        ([dishTypeValues, dietValues], schema) => {
            return dishTypeValues.length || dietValues.length
                ? schema.min(0)
                : schema
                      .required(
                          "Please provide a search query or select one of the categories below."
                      )
                      .min(
                          3,
                          "The search query must be at least 3 characters long!"
                      );
        }
    ),
});
