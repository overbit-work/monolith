import { Address } from "../address/Address";
import { Team } from "../team/Team";

export type Company = {
  addresses?: Array<Address>;
  createdAt: Date;
  id: string;
  name: string | null;
  teams?: Array<Team>;
  updatedAt: Date;
};
