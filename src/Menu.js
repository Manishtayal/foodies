import React from 'react'

export const Menu = ({items}) => {
  return 
    <div className='section-center'>
        {/* {
            items.map((menuitem)=>{
                const{id, title, img,discrp, price }=menuitem;
                return <article key={id}>
                    <h1><img src="{img}" alt="{title}" /></h1>
                    <h1><header>{title}</header></h1>
                    <h4>{discrp}</h4>
                    <h4>{price}</h4>
                </article>
            })
        } */}
    </div>

}
  export default  Menu