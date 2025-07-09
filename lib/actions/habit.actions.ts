"use server";

import { supabase } from "@/utils/supabase";
import { Habit } from "../types/habit";
import { auth } from "@clerk/nextjs/server";

export const addHabit = async (formData: Habit) => {
  const { userId } = await auth();
  const { error } = await supabase
    .from("habit")
    .insert({ ...formData, user_id: userId });
  if (error) console.log(error);
};
