import { z } from "zod";

const snippetSchema = z.object({
  username: z.string().min(3).max(50),
  language: z.string().min(2).max(20),
  stdin: z.string(),
  code: z.string(),
});

export default snippetSchema;
