import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

class Dialog extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: true
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }


  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    let { orderList } = this.props
    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
      >
        {orderList ? (<div className="container">
          <div >
            <span><span style={{ fontWeight: "bold" }}>Full Name </span>:{orderList.data.name}</span><br />
            <span><span style={{ fontWeight: "bold" }}>Address </span>:{orderList.data.address}</span><br />
            <span><span style={{ fontWeight: "bold" }}>Email </span>:{orderList.data.email}</span><br />
            <span><span style={{ fontWeight: "bold" }}>phone Number </span>:{orderList.data.phone}</span><br />
          </div>
          <table className="table table-sm">
            <thead>
              <tr>
                <th>No</th>
                <th>Name </th>
                <th>Date of Birth</th>
                <th>Address</th>
                <th>Sex</th>
                <th>Type of Guest</th>
                <th>Age</th>
                <th>Single room</th>
                <th>Visa</th>
              </tr>
            </thead>
            <tbody>
              {orderList.data.members.map(member => {
                let count = 0
                count++
                return (
                  <tr key ={count}>
                    <td>{count}</td>
                    <td>{member.name}</td>
                    <td>{member.DateOfBirth}</td>
                    <td>{member.address}</td>
                    <td>{member.sex}</td>
                    <td>{member.typeCustom}</td>
                    <td>{member.age}</td>
                    <td>{member.singerRom}</td>
                    <td>{member.visa}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <button onClick={this.closeModal}>Close</button>
          <button onClick={this.closeModal}>Update</button>
          <button onClick={this.closeModal}>Delete your tour</button>
        </div>)
          : ''
        }
      </Modal>
    );
  }
}

ReactDOM.render(<Dialog />, document.getElementById('root'));
export default Dialog