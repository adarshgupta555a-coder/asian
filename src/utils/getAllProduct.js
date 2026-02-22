import supabase from "../Database/supabase"

 export const getAllproducts = async () =>{
          let { data, error } = await supabase
                .from('product')
                .select(`
                        id,
                        name,
                        description,
                        price,
                        image_url,
                        stock,
                        category (
                            name
                            )
                        `)
            if (!error) {
                return data
            }
    }