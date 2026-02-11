import { useEffect, useState } from "react"
import "../../Css/Category.css";
import supabase from "../../Database/supabase";
import CategoryCard from "./CategoryCard";
import { Link } from "react-router";

const Categories = () => {
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState(null);
    // const [error, setError] = useState("");

    useEffect(()=>{
        getCategories()
    },[])

    const getCategories = async () =>{
        setLoading(true);
        const {data, error} = await supabase
        .from("category")
        .select("*")

        if (!error) {
            console.log(data);
            setCategory(data);
            setLoading(false);
        }
    }

  return (
    <section className="Categories">
        <h1>Categories</h1>
        <div className="cateCards">
          {loading?<h2>Loading...</h2>:category?.map((item,index)=><Link key={index} to={`/category/${item.id}`}><CategoryCard card={item}/></Link>)}
        </div>
    </section>
  )
}

export default Categories
