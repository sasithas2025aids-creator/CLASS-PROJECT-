import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),

  email: z.string().email("Invalid email"),

  password: z.string().min(6, "Password must be at least 6 characters"),

  age: z.coerce.number().min(18, "Age must be at least 18")
});