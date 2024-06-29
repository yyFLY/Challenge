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
import { Box } from "@mui/material";
import Home from "./Home"
import ChallengeDetail from "./ChallengeDetail";
  /**
  /api/task/tasklist
  /api/task/:taskId/details
  /api/task/:taskId/participants
  /api/user/:userId/details
  /api/user/:userId/tasks
  /api/user/:userId/progress?taskId=xxx


  
  
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
            userData: userData,
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
  */

function App() {
  let ifLogin = false
  const [taskList, setTaskList] = useState(null);
  const [taskDetail, setTaskDetail] = useState(null);
  const [taskParticipants, setTaskParticipants] = useState(null);
  const [userDetail, setUserDetail] = useState(null);
  const [userTasks, setUserTasks] = useState(null);
  const [userTaskProgress, setUserTaskProgress] = useState(null);

  if (ifLogin) {
    return <Login></Login>
  }
  const processTaskDate = (o)=>{
    o.startDate = new Date(o.startDate)
    o.endDate = new Date(o.endDate)
    o.leftDays = Math.floor((o.endDate-Date.now()) / (1000 * 60 * 60 * 24))
    return o
  }

  const fetchTaskList = async () => {
    try {
        const response = await axios.get(`http://127.0.0.1:8080/api/task/tasklist`);
        response.data = response.data.map(o=>processTaskDate(o))
        setTaskList(response.data)
    } catch (error) {
      console.log(error);
    }
  };
  const fetchTaskDetail = async () => {
    const taskId = "667f7db5997a28d63916246a"
    try {
        const response = await axios.get(`http://127.0.0.1:8080/api/task/${taskId}/details}`);
        response.data = processTaskDate(response.data)
        setTaskDetail(response.data)
    } catch (error) {
      console.log(error);
    }
  };
  const fetchTaskParticipants = async () => {
    const taskId = "667f7db5997a28d63916246a"
    try {
        const response = await axios.get(`http://127.0.0.1:8080/api/task/${taskId}/participants}`);
        setTaskParticipants(response.data)
    } catch (error) {
      console.log(error);
    }
  };
  const fetchUserDetail = async () => {
    const userId = "667f7b9bc3a705d90fd19733"
    try {
        const response = await axios.get(`http://127.0.0.1:8080/api/user/${userId}/details`);
        setUserDetail(response.data)
    } catch (error) {
      console.log(error);
    }
  };
  const fetchUserTask = async () => {
    const userId = "667f7b9bc3a705d90fd19733"
    try {
        const response = await axios.get(`http://127.0.0.1:8080/api/user/${userId}/tasks`);
        setUserTasks(response.data)
    } catch (error) {
      console.log(error);
    }
  };
  const fetchUserTaskProgress = async () => {
    const taskId = "667f7db5997a28d63916246a"
    const userId = "667f7b9bc3a705d90fd19733"
    try {
        const response = await axios.get(`http://127.0.0.1:8080/api/user/${userId}/progress?taskId=${taskId}`);
        response.data.taskId = processTaskDate(response.data.taskId)
        setUserTaskProgress(response.data)
    } catch (error) {
      console.log(error);
    }
  };
   
   

  return (
    <div className="App">
          <Routes>
              <Route path="start" element={<StartPage />} />
              <Route path="login" element={<Login />} />
              <Route path="Welcome" element={<Welcome />} />
              <Route path="/" element={<Layout />}>
              <Route index element={<Home userDetail={userDetail} taskList={taskList} userTasks={userTasks} fetchTaskList={fetchTaskList} fetchUserDetail={fetchUserDetail} fetchUserTask={fetchUserTask}/>} />
              <Route path="media" element={<Media />} />
              <Route path="challenge" element={<Challenge />} />
              <Route path="*" element={<NoMatch />} />
            </Route>
          </Routes> 
    </div>
  )
}

  

function Layout() {
  return (
    <Box>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      {/*
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
