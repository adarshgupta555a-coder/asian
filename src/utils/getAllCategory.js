import supabase from "../Database/supabase"

 export const getAllcategory = async () =>{
          let { data, error } = await supabase
                .from('category')
                .select('*')
            if (!error) {
                return data
            }
    }