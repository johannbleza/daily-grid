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

export const getHabits = async () => {
  const { userId } = await auth();
  const { data, error } = await supabase
    .from("habit")
    .select()
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) console.log(error.message);
  if (data) return data;
};

export const getHabit = async (id: string) => {
  const { data, error } = await supabase.from("habit").select().eq("id", id);
  if (error) console.log(error.message);
  if (data) return data[0];
};
