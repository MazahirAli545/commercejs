import supabase from "../services/supabase";

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) throw new Error("Could not get settings");

  return data;
}

export async function updateSettings(newSetting) {
  console.log(newSetting);
  const { data, error } = await supabase
    .from("settings")
    .update(newSetting)
    .eq("id", 1)
    .single();

  if (error) throw new Error("Could not update settings");

  return data;
}
