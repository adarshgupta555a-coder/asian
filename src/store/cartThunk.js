import { createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../Database/supabase";

const SyncCartThunk = createAsyncThunk("upsert-cart", async ({ userId, cartItem }) => {
    const { error } = await supabase
        .from("cart")
        .upsert({
            user_id: userId,
            product_id: cartItem.id,
            quantity: cartItem.qty,
            price: cartItem.price,
        }, { onConflict: "user_id,product_id" })
console.log(error)

    if (error) {
        console.error(error);
    }

    return cartData
})

export const FetchCartThunk = createAsyncThunk("cart/fetchCart", async (user_id) => {
    const { data, error } = await supabase
        .from("cart")
        .select("*")
        .eq("user_id", user_id)

    if (error) {
        console.log(error)
        return error
    }
    console.log(data)
    return data?.map((item) => ({
        id: item?.product_id,
        qty: item?.quantity,
        price: item?.price
    }))

})

export default SyncCartThunk;