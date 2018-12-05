import React,{Component } from 'react';
import propTypes from 'prop-types'
import styles from './index.less';

class Button extends Component{
    static defaultProps = { 
        className: styles.primary
    }
    state={
        className:this.props.className,
        style:null,
    }
    //click start
    handleTouchStart = ()=>{
        const {activeClass,activeStyle} = this.props;
        if(activeClass){
            // oButton.className+=(' '+activeClass);
            //todo 'className'
        }
     
        this.setState({
            style:activeStyle||{opacity:'0.8'}
        })

    }
    //click end
    handleTouchEnd=()=>{
        const {activeClass,onClick,style} = this.props;
        if(activeClass){
            //todo
        }
        this.setState({
            style:style||null
        })
        onClick&&onClick();
    }

    render(){
        const {className,style} = this.state;
        const {children} = this.props;
        return(
            <div
             className={className||this.props.className}
             onTouchStart={this.handleTouchStart}
             onTouchEnd={this.handleTouchEnd}
             style={style||null} 
             ref='button'>
                {children}
            </div>
        )
    }
}

Button.propTypes={
    className:propTypes.string,
    children:propTypes.string,
    style:propTypes.object,
    onClick:propTypes.func
}

export default Button;