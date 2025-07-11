import React from "react";

class UserClass extends React.Component{
     constructor(props){
            super(props);
            this.state={
                count :0,
            }
            console.log(props);
        }
    render(){
       const {name,email} = this.props;
       const {count} = this.state;
       
        return(
            <>
                <h1>Count : {count} </h1>
                <button className="button" onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                    })
                }}>Click</button>
                <h1>Name :{name} </h1>
                <h2>Contatct : {email}</h2>
            </>
        )
    }
}

export default UserClass;