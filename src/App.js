import "./App.css";
import axios from 'axios';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import Login from "./Login";
import Start from "./Welcome";
import Footer from "./Components/Footer"
import Media from "./Media"
import Challenge from "./Challenge"
import Welcome from "./Welcome"
import Bar from "./Components/Bar"
import { Box } from "@mui/material";
import Home from "./Home"

function App() {
  let ifLogin = false
  const [userData, setUserData] = useState(null);
  const [taskList, setTaskList] = useState(null);
  const [taskDetail, setTaskDetail] = useState(null);
  const [taskParticipants, setTaskParticipants] = useState(null);
  
  const fetchUserData = async () => {
    const userId = "667f7b9bc3a705d90fd19733"
    try {
        const response = await axios.get(`http://127.0.0.1:8080/api/user/${userId}`);
        setUserData(response.data)
    } catch (error) {
      console.log(error);
    }
  };
  const fetchAllTask = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8080/api/task/all');
        const data = response.data.map(o=>{
          o.startDate = new Date(o.startDate)
          o.endDate = new Date(o.endDate)
          return o
        })
        setTaskList(data)
    } catch (error) {
      console.log(error);
    }
  };
  const fetchTaskData = async () => {
    try {
        const taskId = "667f7db5997a28d63916246a"
        const response1 = await axios.get(`http://127.0.0.1:8080/api/task/${taskId}/participants`);
        const taskInfo = response1.data
        taskInfo.startDate = new Date(taskInfo.startDate)
        taskInfo.endDate = new Date(taskInfo.endDate)
        taskInfo.leftSeconds = taskInfo.endDate - Date.now()
        taskInfo.leftDays = Math.floor(taskInfo.leftSeconds / (1000 * 60 * 60 * 24))
        setTaskDetail(taskInfo)
    } catch (error) {
      console.log(error);
    }
  };
  const fetchUserTask = async () => {
    try {
        const taskId = "667f7db5997a28d63916246a"
        const userId = "667f7b9bc3a705d90fd19733"
        const allJoinData = await axios.get(`http://127.0.0.1:8080/api/task/${taskId}/participants`);


        const userJoinData = await axios.get(`http://127.0.0.1:8080/api/user/${userId}?taskId=${taskId}`);
        
        const taskInfo = response.data.taskData
        taskInfo.startDate = new Date(response.data.taskData.startDate)
        taskInfo.endDate = new Date(response.data.taskData.endDate)
        taskInfo.leftSeconds = response.data.taskData.endDate - Date.now()
        taskInfo.leftDays = Math.floor(response.data.taskData.leftSeconds / (1000 * 60 * 60 * 24))
        const joinData = response.data.joinData
        const userTask = response.data.joinData.find(o => o.userId._id==userId)
        const userData = response.data.userData
        const data = {
            userData: userData
            taskInfo: taskInfo,
            userTask: userTask,
            joinData: joinData
        }
        setUserData(userData)
        console.log(userData);
    } catch (error) {
      console.log(error);
    }
  };

  if (ifLogin) {
    return <Login></Login>
  }
  else{
    return (
      <div className="App">
            <Routes>
                <Route path="start" element={<StartPage />} />
                <Route path="/" element={<Layout />}>
                <Route index element={<Home  taskData={taskData} fetchAllTask={fetchAllTask} userData={userData} fetchUserTask={fetchUserTask}/>} />
                <Route path="media" element={<Media userData={userData} fetchUserTask={fetchUserTask}/>} />
                <Route path="challenge" element={<Challenge />} />
                <Route path="login" element={<Login />} />
                <Route path="Welcome" element={<Welcome />} />
                <Route path="*" element={<NoMatch />} />
              </Route>
            </Routes> 
      </div>
    )
};
}


function Layout() {
  return (
    <Box>
      <Bar />
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/start">start</Link>
          </li>
          <li>
            <Link to="/media">Media</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr /> */}

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet/>
      <Footer />
    </Box>
  );
}


function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function StartPage() {
  return (<Start></Start>);
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
