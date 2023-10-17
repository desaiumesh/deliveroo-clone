import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name:"name",
      type:"string",
      title:"Restaurant name",
      validation:(Rule)=>Rule.required(),
    },
    {
      name:"short_description",
      type:"string",
      title:"Short Description",
      validation:(Rule)=>Rule.max(200),
    },
    {
      name:"image",
      type:"image",
      title:"Image of the Restaurent",
    },
   {
      name:"lat",
      type:"number",
      title:"Latittude of the restaurant",
    },
    {
      name:"long",
      type:"number",
      title:"Logitude of the restaurant",
    },
    {
      name:"address",
      type:"string",
      title:"Restaureant Address",
      validation:(Rule)=>Rule.required(),
    },
    {
      name:"rating",
      type:"number",
      title:"Enter a number between 1 and 5",
      validation:(Rule)=>Rule.required()
      .min(1)
      .max(5)
      .error("Please enter value between 1 and 5"),
    },
    {
      name:"type",
      title:"Category",
      validation:(Rule)=>Rule.required(),
      type :"reference",
      to:[{type:"category"}],
    },
    {
      name:"dishes",
      type:"array",
      title:"Dishes",
      of:[{type:"reference",to:[{type:"dish"}]}],
    }
  ],


})
