import React from "react";
import { Rates } from "./Rates";

class Convert extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Rates: Rates,
            to: "USD",
            from: "USD",
            given: 0,
            converted: 0,
        };

        this.handleChange = this.handleChange.bind(this);
        this.convert = this.convert.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        }, () => this.convert());
    }

    convert(){
        let ans = (this.state.given/this.state.Rates[this.state.from]) * this.state.Rates[this.state.to];
        this.setState({
            converted: parseFloat(ans.toFixed(2)),
        });
    }

    render(){
        return (
            <>
                <input 
                    name="given" 
                    placeholder="Enter Amount"
                    value={this.state.given}
                    onChange={this.handleChange}/>
                <select 
                    id="from" 
                    name="from" 
                    value={this.state.from}
                    onChange={this.handleChange}> 
                    {
                        Object.keys(this.state.Rates).map(key => 
                            <option key={key} value={key}>{key}</option> 
                        )
                    }
                </select>

                <br/><br/>

                <input 
                    name="converted" 
                    value={this.state.converted}
                    readOnly />
                <select 
                    id="to" 
                    name="to"
                    value={this.state.to}
                    onChange={this.handleChange}> 
                    {
                        Object.keys(this.state.Rates).map(key => 
                            <option key={key} value={key}>{key}</option> 
                        )
                    }
                </select> 
            </>
        );
    }
}

export default Convert;