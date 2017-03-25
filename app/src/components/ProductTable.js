import React from "react"
import ProductCategoryRow from "./ProductCategoryRow.js"
import ProductRow from "./ProductRow.js"

export default class ProductTable extends React.Component{
    constructor(){
        super()
        //mostrando que no hay atributos para this, props se muestra como undefined
         console.log("ProductTable.construct().this",this)
    }

    render(){

        let rows = [];
        let lastCategory = null;
        
        if(this.props.products !== null) {
           this.props.products.forEach((product)=>{ 
                console.log(this.props.products)           
                if(product.category != lastCategory)
                    //cada componente debe tener una llave única en este caso usamos product.category
                    // que no debe repertise
                    rows.push(<ProductCategoryRow category={product.category} key={product.category} />)
                    
                rows.push(<ProductRow product={product.name} key={product.name} />)
                lastCategory = product.category
            });
        }
        else{
            rows.push(<h1>Cargando...</h1>)
        }

        return(
            <div>
                {rows}              
            </div>
        );
    }
}


