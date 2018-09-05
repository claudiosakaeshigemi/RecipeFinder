import React , {Component } from 'react';
import {connect } from 'react-redux';

class recipeList extends Component {
    render () {
        console.log(  'this.props', this.props);
        return( 
            <div> 
                {
                    this.props.recipes.map(( recipes, index)  => {
                        return (
                            <div key= {index}>
                                 <h4>  {recipes.title  }    </h4>
                            </div>
                           
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