import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  createdAt?: SortOrder;
  eMail?: SortOrder;
  id?: SortOrder;
  password?: SortOrder;
  updatedAt?: SortOrder;
};
