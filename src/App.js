// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import { Category } from './Category';
import menu from './Data';
// import { Menu } from './Menu';

function App() {
const [menuitems, setmenuitems]= useState(menu)

let allcat=[...new Set(menu.map((obj)=>{
  return(obj.category)
}))]
// console.log(allcat)
function selected(item){
 var newmenu=menu.filter((obj)=>{
  return obj.category===item
})
setmenuitems(newmenu)
}

  return <h2>
    {allcat.map((x)=>{
          return <h4>
            <button onClick={()=>{selected(x)}}>{x}</button>
          </h4>
        })
}
    
{
            menuitems.map((menuitem)=>{
                const{id, title, img, discrp, price }=menuitem;
                return <article key={id}>
                  {id}
                    <img src={img} alt={title}/>
                    <h1><header>{title}</header></h1>
                    <h4>{discrp}</h4>
                    <h4>{price}</h4>
                </article>
                
            })
        }
       
  </h2>
}

export default App;
