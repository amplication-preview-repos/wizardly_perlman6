import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AccountWhereInput = {
  eMail?: StringNullableFilter;
  id?: StringFilter;
  password?: StringNullableFilter;
};
