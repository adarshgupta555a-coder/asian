import { useEffect, useState } from "react"
import "../../Css/Category.css";
import supabase from "../../Database/supabase";
import CategoryCard from "./CategoryCard";
import { Link } from "react-router";

const Categories = ({featured}) => {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState(null);
  const [Error, setError] = useState(false);

  useEffect(() => {
    getCategories()
  }, [])

  const getCategories = async () => {
    setLoading(true);
    if (featured) {
      
    
    const { data, error } = await supabase
      .from("category")
      .select("*")
      .eq("featured", true)

    if (!error) {
      console.log(data);
      setCategory(data);
      setLoading(false);
    } else{
      setLoading(false)
      setError(true)
    }
  } else{
        
    const { data, error } = await supabase
      .from("category")
      .select("*")

    if (!error) {
      console.log(data);
      setCategory(data);
      setLoading(false);
    } else{
      setLoading(false)
      setError(true)
    }
  }
  }

  return (
    <section className="Categories">
      <h1>Categories</h1>
      <div className="cateCards">
        {loading ? (<center><h1>Loading...</h1></center>) :Error ? (<center><h1>Categories not found.</h1></center>) : category?.map((item, index) => <Link key={index} to={`/category/${item.slug}`}><CategoryCard card={item} /></Link>)}
      </div>
    </section>
  )
}

export default Categories
