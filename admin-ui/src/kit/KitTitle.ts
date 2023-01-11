import { Kit as TKit } from "../api/kit/Kit";

export const KIT_TITLE_FIELD = "id";

export const KitTitle = (record: TKit): string => {
  return record.id || String(record.id);
};
