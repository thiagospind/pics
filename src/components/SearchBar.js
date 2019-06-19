import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  //Uma forma de resolver o problema de undefined
  onFormSubmit = event => {
    event.preventDefault();    
    
    this.props.onSubmit(this.state.term);
  }

  // onFormSubmit (event) {
  //     event.preventDefault();    
  //     console.log(this.state.term);
  //   }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
        {/* Outra forma de resolver o problema do undefined */}
        {/* <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form"> */}        
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
            {/** 
              Forma alternativa de esccrever o mesmo código acima 
              sem a necessidade de criar a função onInputChange 
            <input type="text" onChange={(e) => console.log(e.target.value)} />
            */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
