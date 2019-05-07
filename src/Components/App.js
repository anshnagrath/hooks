import React,{useState} from 'react';
import ResourceList from './ResourceList'
const App = ()=> {
  const [resource,setResource] = useState("posts");
  return (
    <div className="ui container">
      <div>
        <button className="ui primary basic button" onClick={()=>setResource('posts')}>Post</button>
        <button className="ui primary basic button" onClick={()=>setResource('todos')}>Todos</button>
      </div>

      <ResourceList resource={resource}></ResourceList>
    </div>
  )
}

export default App;
