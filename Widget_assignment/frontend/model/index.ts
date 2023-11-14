export interface QuestionsType {
  id: string;
  type: string;
  title: string;
  placeHolder: string;
  isRequired: boolean;
}
export interface QuestionsTypeParams {
  questionId: string;
  response: string;
}
export interface RateType {
  numberRate: string;
}
