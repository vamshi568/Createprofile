import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import Avatar from "@mui/material/Avatar";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./index.css";
import { Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8, Step9, Step10 } from "./steps/step1";

const steps = [
  {
    label: "Complete your profile",
    description: 'Please fill all the necessary details',
    time:5
  },
  {
    label: "What we are,who we are and what we do",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
      time:5
  },
  {
    label: "Team communication channels",
    description: ` how to resolve approval issues.`,
    time:2
  },
  {
    label: "How do we have fun",
    description: ` how to resolve approval issues.`,
    time:2
  },
  {
    label: "My timesheet",
    description: ` how to resolve approval issues.`,
    time:2
  },
  {
    label: "My Leaves",
    description: ` how to resolve approval issues.`,
    time:2
  },
  {
    label: "What are my benefits",
    description: ` how to resolve approval issues.`,
    time:3
  },
  {
    label: "Day one",
    description: ` how to resolve approval issues.`,
    time:5
  },
  {
    label: "F.A.Q",
    description: ` how to resolve approval issues.`,
    time:2
  },
  {
    label: "Help us to improve preboarding",
    description: ` how to resolve approval issues.`,
    time:2
  },
];

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export const Homepage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [userdeatils, setuser] = useState({
    id: 1,
    name: "",
    joiningdate: "2023-05-22",
    location: "Hyderabad",
    role: "Web Developer",
  });
  const [tasktime,setTime]=useState(30)
  const [showstep,setstep]=useState(false)
  const navigate = useNavigate();

  const handleNext = () => {
    // setActiveStep((prevActiveStep) => prevActiveStep + 1 );
    
    setstep(true)
    
  };

  

  const updateuser = (data) => {
    setuser((prevUserDetails) => {
      return {
        ...prevUserDetails,
        ...data,
      };
    });
  };

  useEffect(() => {
    let data;
    async function fetchData() {
      const id = Cookies.get("id");
      const url = `http://localhost:3001/getdetails/${id}`;
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const responce = await fetch(url, options);
      data = await responce.json();

      updateuser(data);
      
    }
    fetchData();
    
  }, []);

  const singout = () => {
    Cookies.remove("jwtToken");
    navigate("/");
  };

  const updateuserdate = (data) => {
    const joiningDate = new Date(data);
    const currentDate = new Date();
    const differenceInMs = joiningDate.getTime() - currentDate.getTime();
    const differenceInDays = Math.ceil(differenceInMs / (1000 * 3600 * 24));
    return differenceInDays;
  };
  const newstep=()=>{
    setstep(false)
  }

  const setactive=()=>{
    setActiveStep((prevActiveStep) => prevActiveStep + 1 )
    setTime((prev)=>prev-steps[activeStep].time);
    setProgress((activeStep+1)*10);
  }

  if (showstep){
 switch (activeStep) {
  case 0:
    return <Step1 currentstep={newstep} setsteps={setactive} heading={steps[activeStep].label} />
    
  case 1:
    return <Step2 currentstep={newstep} setsteps={setactive} heading={steps[activeStep].label}/>
   
  case 2:
    return <Step3 currentstep={newstep} setsteps={setactive} heading={steps[activeStep].label}/>
    
  case 3:
    return <Step4 currentstep={newstep} setsteps={setactive} heading={steps[activeStep].label}/>
    
  case 4:
    return <Step5 currentstep={newstep} setsteps={setactive} heading={steps[activeStep].label}/>
    
  case 5:
    return <Step6 currentstep={newstep} setsteps={setactive} heading={steps[activeStep].label}/>
    
  case 6:
    return <Step7 currentstep={newstep} setsteps={setactive} heading={steps[activeStep].label}/>
    
  case 7:
    return <Step8 currentstep={newstep} setsteps={setactive} heading={steps[activeStep].label}/>
    
  case 8:
    return <Step9 currentstep={newstep} setsteps={setactive} heading={steps[activeStep].label}/>
    
  case 9:
    return <Step10 currentstep={newstep} setsteps={setactive} heading={steps[activeStep].label}/>
    

  default:
    break;
}
    
     
  }

  return (
    <>
      <h1 className="m-1">CREATE PROFILE</h1>
      <div className="flex justify-center">
        <div className=" w-5/6  border-2 border-neutral-800 ">
          <div className="flex justify-between p-2">
            <h1 className="text-blue-600 font-bold p-3">HCLTech</h1>
            <button
              type="button"
              className=" bg-blue-600 border-none rounded text-white px-3 "
              onClick={singout}
            >
              Sing out
            </button>
          </div>
          <div className="w-full">
            <div className="flex  w-full">
              <div className="w-1/2 m-2 bg-slate-200 text-center p-5">
                <p>
                  {userdeatils.name}, we can't wait to see you in{" "}
                  {updateuserdate(userdeatils.joiningdate)} days
                </p>
              </div>
              <div className="w-1/2 m-2 bg-slate-200 text-center p-5 items-center flex flex-col">
                <p>Your preboarding progress now</p>
                <Box sx={{ width: "80%" }}>
                  <LinearProgressWithLabel value={progress} />
                </Box>
              </div>
            </div>
            <div className="flex w-full">
              <div>

              
            <div className="flex bg-slate-200  p-2 items-center flex-col ml-2">
              <Avatar src="/broken-image.jpg" />
              <p>{userdeatils.name}</p>
              <p>{userdeatils.role}</p>
              <br />
              <p>Joining Location: {userdeatils.location}</p>
              <p>Joining Date: {userdeatils.joiningdate}</p>
              <p>Tower:2</p>
              <p>ODC: 503A</p>
              <button
                type="button"
                className="w-3/4 mb-2 mt-1 bg-slate-300  border-solid border-2 p-1 border-slate-700 shadow-slate-600 shadow-md rounded-lg"
              >
                Contact Manager
              </button>
              <button
                type="button"
                className="w-3/4 bg-slate-300  border-solid border-2 p-1 border-slate-700 shadow-slate-600 shadow-md rounded-lg"
              >
                Contact HR
              </button>
            </div>
            <div className=" bg-slate-200  p-2  ml-2 mt-2">
              <h1 className="font-bold mt-3 ml-3">Other new joiners</h1>
              <div className="flex justify-around my-4">
                <div className="flex items-center flex-col">
                  <Avatar src="/broken-image.jpg" />
                  <p>Aditi Singh</p>
                  <p>TL</p>
                  <button
                    type="button"
                    className="w-full bg-slate-300  border-solid border-2 p-1 border-slate-700 shadow-slate-600 shadow-md rounded-lg"
                  >
                    Contact
                  </button>
                </div>
                <div className="flex items-center flex-col">
                  <Avatar src="/broken-image.jpg" />
                  <p>Aditi Singh</p>
                  <p>TL</p>
                  <button
                    type="button"
                    className="w-full bg-slate-300  border-solid border-2 p-1 border-slate-700 shadow-slate-600 shadow-md rounded-lg"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
            </div>
            
            <div className="w-10/12 m-2">
              <div className="flex justify-between">

              <p>Suggested Roadmap</p>
              <p>{steps.length-activeStep} Tasks to complete</p>
              <p>It should take you upto {tasktime} mins</p>
              </div>
              <Box sx={{ maxWidth: 900 }} className='mt-4 p-4 py-8  bg-slate-200'>
                <Stepper activeStep={activeStep} orientation="vertical">
                  {steps.map((step, index) => (
                    
                    <Step key={step.label}>
                      <StepLabel
                        optional={
                          index === 9 ? (
                            <Typography variant="caption">Last step</Typography>
                          ) : null
                        }
                        
                      >
                        <div className=" flex justify-between">

                        <p>{step.label}</p>
                        <p>{step.time} min</p>
                        
                        
                        </div>
                        
                        
                      </StepLabel>
                      <StepContent>
                        <Typography>{step.description}</Typography>
                        <Box sx={{ mb: 2 }}>
                          <div>
                            <Button
                              variant="contained"
                              onClick={handleNext}
                              sx={{ mt: 1, mr: 1 }}
                            >
                              {index === steps.length - 1
                                ? "Finish"
                                : "Continue"}
                            </Button>
                            
                          </div>
                        </Box>
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>
               
              </Box>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
