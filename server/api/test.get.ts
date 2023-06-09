import { Database } from "~/types/database";

export default defineEventHandler(() => {
  const test: Database = {
    n: 1,
  };

  return {
    test,
  };
});
