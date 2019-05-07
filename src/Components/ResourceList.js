import React,{useEffect,useState} from 'react';
import axios from 'axios'
const ResourceList = ({resource})=>{
const [resources,setResources] = useState([])
  
 const fetchResources = async(resource)=>{ 
 let data =  await axios.get(`http://jsonplaceholder.typicode.com/${resource}`)
  setResources(data.data)
}
useEffect(()=>{
    fetchResources(resource)
},[resource]);
return<ul>{resources.map(res=><li key={res.id}>{res.title}</li>)}</ul>
}
export default ResourceList