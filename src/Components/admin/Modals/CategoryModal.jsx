import React, { useState } from 'react'
import supabase from '../../../Database/supabase';
import { getAllcategory } from '../../../utils/getAllCategory';

const CategoryModal = ({ editItem, setShowModal, setCategories }) => {
  const [category, setCategory] = useState({
    name: "",
    description: "",
    slug: "",
    Image: ""
  })

  const OnchangeForm = (e) => {
    const { value, name } = e.target;
    setCategory((prev) => ({ ...prev, [name]: value }))
  }

  const OnhandleForm = async (e) => {
    e.preventDefault();
    console.log(category);

    if (!editItem) {
      //all value are check karo agar koi bhi values khali hai toh return kardo 
      for (const [key, value] of Object.entries(category)) {
        if (value == "") {
          return;
        }
      }

      const { error } = await supabase
        .from("category")
        .insert([{ name: category.name, description: category.description, slug: category.slug, Image: category.Image }])
        .select()

      if (!error) {
        getAllcategory().then((res => {
          setCategories(res)
          setShowModal(false)
        }))
      } else {
        console.log(error)
      }
    } else {
      const UpdateCategory = {}

      for (const [key, value] of Object.entries(category)) {
        if (value != "" && editItem[key] != value.trim()) {
          UpdateCategory[key] = value
        }
      }

      console.log(UpdateCategory)
      if (Object.entries(UpdateCategory).length == 0) {
        console.log(Object.entries(UpdateCategory).length)
        alert("please insert data")
        return;
      }

      const { error } = await supabase
                .from('category')
                .update(UpdateCategory)
                .eq('id', editItem.id)
                .select()

            if (!error) {
                getAllcategory().then((res => {
                    setCategories(res)
                    setShowModal(false)
                }))
            }

    }


  }



  return (
    <form onSubmit={OnhandleForm}>
      <div className="form-group">
        <label>Category Name</label>
        <input type="text" name='name' defaultValue={category.name || editItem?.name || ''} onChange={OnchangeForm} />
        <textarea name="description" defaultValue={category.description || editItem?.description || ''} onChange={OnchangeForm}></textarea>
        <input type="text" name='slug' defaultValue={category.slug || editItem?.slug || ''} onChange={OnchangeForm} />
        <input type="text" name='Image' defaultValue={category.Image || editItem?.Image || ''} onChange={OnchangeForm} />

      </div>
      <button type='submit' className="btn btn-primary">{editItem ? 'Update' : 'Add'} Category</button>
    </form>
  )
}

export default CategoryModal
