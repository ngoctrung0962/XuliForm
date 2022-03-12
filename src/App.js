import { Component } from 'react';
import './App.css';
import Control from './Component/Control';
import Form from './Component/Form';
import TaskForm from './Component/TaskForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      StatusTaskForm: false
    }
  }

  componentWillMount() {
    if (localStorage && localStorage.getItem('tasks')) {
      var tasks = JSON.parse(localStorage.getItem('tasks'))
      this.setState({
        tasks: tasks
      })
    }
  }

  getData = () => {
    var tasks = [
      {
        id: "1",
        name: "Hoc boi",
        status: true
      },
      {
        id: "2",
        name: "Hoc Android",
        status: false
      },
      {
        id: "3",
        name: "Hoc toan cao cap",
        status: true
      }

    ]
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  OnOffTaskForm = () => {
    this.setState({
      StatusTaskForm: !this.state.StatusTaskForm
    })
  }

  onExitTaskForm = () => {
    this.setState({
      StatusTaskForm: false
    })
  }

  render() {
    var { tasks, StatusTaskForm } = this.state;
    var elemStatusTaskForm = StatusTaskForm === true ? <TaskForm onExitTaskForm={this.onExitTaskForm} /> : ""
    return (
      <div className="App">
        <div className="container">
          <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr />
          </div>
          <div className="row">
            {elemStatusTaskForm}
            <div className={StatusTaskForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
              <button type="button" className="btn btn-primary" onClick={this.OnOffTaskForm}>
                <span className="fa fa-plus mr-5" ></span>Thêm Công Việc
              </button>
              <button type="button" className="btn btn-danger" onClick={this.getData}>
                <span className="fa fa-plus mr-5"></span>Add du lieu
              </button>
              <Control />
              <Form tasks={tasks} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
