import React from 'react'
import './Tabela.css'

class Tabela extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/api/item")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="items-container">
          {items.map(item => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title" key={item.name}>Ativo - {item.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Sistema - {item.system}</h6>
                <p class="card-subtitle mb-2 text-muted"><small>ID - {item._id}</small></p>
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Tabela;