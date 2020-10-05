import React from 'react';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      id: 0,
      Name: '',
      dob: '',
      cls: '',
      div: '',
      gen: '',
    }
  }
  componentDidMount() {
    axios.get("http://localhost:8080/api/")
      .then((res) => {
        this.setState({
          users: res.data,
          id: 0,
          name: '',
          dob: '',
          cls: '',
          div: '',
          gen: ''
        })
      })
  }
  submit(evenet,id) {
    console.log(id)
    evenet.preventDefault();
    if (id === 0) {
      axios.post("http://localhost:8080/api/", {
        name: this.state.name,
        dob: this.state.dob,
        cls: this.state.cls,
        div: this.state.div,
        gen: this.state.gen
      }).then((result) => {
        console.log(result, "gfhjkdfhjksdfhk")
        if (result.status == '200' && result.data != "") {
          alert('Saved Successfully')
        }
        else {
          alert('Save failed!!!')
        }
        this.componentDidMount();
      })
    } else {
      axios.put("http://localhost:8080/api/", {
        id: id,
        name: this.state.name,
        dob: this.state.dob,
        cls: this.state.cls,
        div: this.state.div,
        gen: this.state.gen,
      }).then(() => {
        this.componentDidMount();
      })
    }
  }
  delete(id) {
    let cnf = window.confirm('Are you sure you want to Delete?');
    if(cnf){
    axios.delete("http://localhost:8080/api/" + id)
      .then(() => {
        this.componentDidMount();
      })
    }
    else 
     return false;
  
  }
  edit(id) {
    axios.get("http://localhost:8080/api/" + id)
      .then((res) => {
        this.setState({
          id: res.data.id,
          name: res.data.name,
          dob: res.data.dob,
          cls: res.data.cls,
          div: res.data.div,
          gen: res.data.gen,
        });
      })
  }
  render() {
    return (
      <div className="container">
        <div className="header">
          <div className="mainname">
            <a class="mainhead" href="">Student Details </a>
          </div>
        </div>
        <div class="mainbody">
          <div className="center">
            <q class="quote"> If you fail, never give up because fail  means first Attempt In Learning</q>
          </div>
          <div className="leftbody">
            <form name="myname" className="form" onSubmit={"return validate()", (e) => this.submit(e, this.state.id)}>
              <h1>Student Details</h1>
              <label className="label">Name:</label>
              <input required pattern="([a-zA-Z\s]){2,}" placeholder="Enter name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} type="text" className="text" />
              <br />

              <label className="label">Date of birth: </label>
              <input value={this.state.dob} onChange={(e) => this.setState({ dob: e.target.value })} type="date" className="text" required />
              <br />
              <label className="label">Class:</label>
              <select className="text" onChange={(e) => { this.setState({ cls: e.target.value }) }} value={this.state.cls} required  >
                <option >Select class</option>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
                <option value="V">V</option>
                <option value="VI">VI</option>
                <option value="VII">VII</option>
                <option value="VIII">VIII</option>
                <option value="XI">IX</option>
                <option value="X">X</option>
                <option value="XI">XI</option>
                <option value="XII">XIII</option>
              </select>
              <br />
              <label className="label">Division:</label>
              <select className='text' onChange={(e) => { this.setState({ div: e.target.value }) }} value={this.state.div} required>
                <option>Select Division</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
              <br />
              <label className="label">Gender:</label>
              <label className="radio">male</label>
              <input className="radio" name='gender' checked={this.state.gen == 'male' ? true : false} value="male" onChange={(e) => this.setState({ gen: e.target.value })} type="radio" required />
              <label className="radio">Female</label>
              <input claassName="radio" name='gender' checked={this.state.gen == 'female' ? true : false} value="female" onChange={(e) => this.setState({ gen: e.target.value })} type="radio" required />
              <br />
              <button className="bt" type="submit" name="action" >Submit </button>
            </form>
          </div>
          <div className='rightbody'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Dob</th>
                  <th>Class</th>
                  <th>Division</th>
                  <th>Gender</th>
                  <th>Regno</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {
                  this.state.users.map((user) =>
                    <tr >
                      <td>{user.name}</td>
                      <td>{user.dob}</td>
                      <td>{user.cls}</td>
                      <td>{user.div}</td>
                      <td>{user.gen}</td>
                      <td>{user.rollno}</td>
                     

                      <td>
                        <button onClick={(e) => this.edit(user.id)} className="bt1" type="submit" name="action">

                        </button>
                      </td>
                      <td>
                        <div>
                          <button onClick={(e) => this.delete(user.id)} className=" bt1" type="submit" name="action">

                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                }


              </tbody>
            </table>
          </div>
          <div className="footer">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
