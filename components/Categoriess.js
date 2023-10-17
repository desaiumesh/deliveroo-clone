import { View, Text, ScrollView } from 'react-native'
import React,  { useEffect, useState }  from 'react'
import CategoryCard from './CategoryCard'
import client, { urlFor } from '../sanity'

const Categoriess = () =>{

  const [category, setCategory] = useState([]);

  useEffect(() => {

      client.fetch(`
       *[_type=="category"]
        `,).then(data => { setCategory(data) });

  }, []);

  return (
    <ScrollView contentContainerStyle={{
      paddingHorizontal: 15,
      paddingTop: 10
    }}
      horizontal showsHorizontalScrollIndicator={false}>

        {
          category.map(category=>(
            <CategoryCard 
            key={category._id}
            imgUrl= {urlFor(category.image).url()}
            title={category.name} />
          ))
        }
     
    </ScrollView>
  )
}

export default Categoriess;