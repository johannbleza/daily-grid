"use server";

import { supabase } from "@/utils/supabase";
import { Day } from "../types/day";

export const completeDay = async (formData: Day) => {
  const { error } = await supabase.from("day").insert(formData);
  if (error) console.log(error);
};

export const removeDay = async (date: string) => {
  const { error } = await supabase.from("day").delete().eq("date", date);
  if (error) console.log(error);
};

export const getDaysCompleted = async (habit_id: string) => {
  const { data, error } = await supabase
    .from("day")
    .select()
    .eq("habit_id", habit_id);
  if (error) console.log(error);
  if (data) return data;
};
