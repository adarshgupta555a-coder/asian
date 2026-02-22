import { useState, useEffect, useCallback } from "react";
import { supabase } from "../supabaseClient";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAllProducts = useCallback(async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("product")
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
      `);

    if (error) {
      setError(error.message);
    } else {
      setProducts(data);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  return { products, loading, error, refetch: getAllProducts };
};