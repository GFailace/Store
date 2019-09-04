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
            <div className="card">
              <div className="card-body">
                <h5 className="card-title" key={item._id}>Ativo - {item.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Sistema - {item.system}</h6>
                <p className="card-subtitle mb-2 text-muted"><small>ID - {item._id}</small></p>
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Tabela;