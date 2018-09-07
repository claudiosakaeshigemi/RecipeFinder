import React , {Component } from 'react';
import {connect } from 'react-redux';
import RecipeItem from  './RecipeItem';


class recipeList extends Component {
    render () {
        console.log(  'this.props', this.props);
        return( 
            <div> 
                {
                    this.props.recipes.map(( recipe, index)  => {
                        return (
                            <RecipeItem 
                                key= {index} 
                                recipe= {recipe}
                                favoriteButton={false}
                            />
                           
                        )
                    })
                }
            </div>
        )
    }
}
function mapToStateToProps(state){
    return state;
}

export default connect( mapToStateToProps,null)(recipeList);