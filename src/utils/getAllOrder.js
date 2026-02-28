import supabase from "../Database/supabase";

export const getAllOrders = async () => {
    const {data, error} = await supabase.from("order_items").select(`
            id,
            price,
            status,
            orders (
            order_number,
            total_amount,
            status,
            profile (
            name
            )
            ),
            product (
            image_url,
            name,
            price
            )
            `)

            if (!error) {
                return data;
            }
}