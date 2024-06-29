import "./App.css";
import Cookies from 'js-cookie';
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


function App() {
  let ifLogin = false
  const [taskList, setTaskList] = useState(null);
  const [taskDetail, setTaskDetail] = useState(null);
  const [taskParticipants, setTaskParticipants] = useState(null);
  const [userDetail, setUserDetail] = useState(null);
  const [userTasks, setUserTasks] = useState(null);
  const [userTaskProgress, setUserTaskProgress] = useState(null);
  console.log("cookie:", Cookies.get('userId'));
  // if (Cookies.get('userId')) {
  //   return (<Login/>)
  // }
  const processTaskDate = (o)=>{
    o.startDate = new Date(o.startDate)
    o.endDate = new Date(o.endDate)
    o.leftDays = Math.floor((o.endDate-Date.now()) / (1000 * 60 * 60 * 24))
    return o
  }

  const fetchTaskList = async () => {
    try {
        const response = await axios.get(`http://13.55.193.64:8080/api/task/tasklist`);
        response.data = response.data.map(o=>processTaskDate(o))
        setTaskList(response.data)
    } catch (error) {
      console.log(error);
    }
  };
  const fetchTaskDetail = async (taskId) => {
    taskId = taskId || "667f7db5997a28d63916246a"
    try {
        const response = await axios.get(`http://13.55.193.64:8080/api/task/${taskId}/details`);
        response.data = processTaskDate(response.data)
        setTaskDetail({
          taskId: processTaskDate(response.data)
        })
    } catch (error) {
      console.log(error);
    }
  };
  const fetchTaskParticipants = async (taskId) => {
    taskId = taskId || "667f7db5997a28d63916246a"
    try {
        const response = await axios.get(`http://13.55.193.64:8080/api/task/${taskId}/participants`);
        setTaskParticipants(response.data)
    } catch (error) {
      console.log(error);
    }
  };
  const fetchUserDetail = async () => {
    const userId = Cookies.get('userId') || "667f7b9bc3a705d90fd19733"
    try {
        const response = await axios.get(`http://13.55.193.64:8080/api/user/${userId}/details`);
        setUserDetail(response.data)
    } catch (error) {
      console.log(error);
    }
  };
  const fetchUserTask = async () => {
    const userId = Cookies.get('userId') || "667f7b9bc3a705d90fd19733"
    try {
        const response = await axios.get(`http://13.55.193.64:8080/api/user/${userId}/tasks`);
        response.data = response.data.map( (o)=>{
          o.taskId = processTaskDate(o.taskId)
          return o
        })
        setUserTasks(response.data)
    } catch (error) {
      console.log(error);
    }
  };
  const fetchUserTaskProgress = async (taskId) => {
    taskId = taskId || "667f7db5997a28d63916246a"
    const userId = Cookies.get('userId') || "667f7b9bc3a705d90fd19733"
    try {
        const response = await axios.get(`http://13.55.193.64:8080/api/user/${userId}/progress?taskId=${taskId}`);
        response.data.taskId = processTaskDate(response.data.taskId)
        setUserTaskProgress(response.data)
    } catch (error) {
      console.log(error);
    }
  };

    return (
      <div className="App">
            <Routes>
                <Route path="login" element={<Login/>} />
                <Route path="start" element={<StartPage />} />
                <Route path="/" element={<Layout />}>
                <Route index element={<Home userDetail={userDetail} taskList={taskList} userTasks={userTasks} fetchTaskList={fetchTaskList} fetchUserDetail={fetchUserDetail} fetchUserTask={fetchUserTask}/>} />
                <Route path="media" element={<Media />} />
                <Route path="challenge" element={<Challenge taskList={taskList} />} />
                <Route path="challengeDetail/:taskId" element={<ChallengeDetail taskDetail={taskDetail} fetchTaskDetail={fetchTaskDetail} taskParticipants={taskParticipants} fetchTaskParticipants={fetchTaskParticipants}/>} />
                <Route path="Welcome" element={<Welcome />} />
                <Route path="*" element={<NoMatch />} />
              </Route>
            </Routes> 
      </div>
    )
};


  

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
