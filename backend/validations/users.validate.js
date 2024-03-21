import { z } from "zod";

const registrationSchema = z.object({
  firstName: z.string().min(1).max(255),
  lastName: z.string().min(1).max(255),
  email: z.string().email(),
  password: z.string().min(6),
});

export default registrationSchema;
