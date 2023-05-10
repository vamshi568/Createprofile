import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import "./index.css";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Cookies from "js-cookie";

export const Step1 = (props) => {
  const { currentstep, setsteps, heading } = props;
  const [updateddetails,setdetails]=useState({id:2, name:'', surname:'', placeOfBirth:'', fullAddress:'', zipcode:50455 })

  const handleNext = async() => {
const url='http://localhost:3001/createprofile'
const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updateddetails),
};
const response = await fetch(url, options);
console.log(response.json())
    currentstep();
    setsteps();
  };

  const backtohome = () => {
    currentstep();
  };

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(()=>{
    const userid=Cookies.get('id')
    setdetails(prev=>({...prev, id : parseInt(userid)}))
  },[])

  return (
    <>
    {console.log(updateddetails)}
      <h1 className="text-blue-700 text-2xl font-bold">Task Details</h1>

      <div className="flex justify-center">
        <div className=" my-6 p-5 w-5/6  border-2 border-neutral-800">
          <p className="inline" onClick={backtohome}>
            {" "}
            {"<"} Back to Roadmap{" "}
          </p>
          <div className="flex justify-center">
            <Box
              sx={{ maxWidth: 900 }}
              className=" mt-4 p-4 py-8  bg-slate-200"
            >
              <Stepper activeStep={0} orientation="vertical">
                <Step key="1">
                  <StepLabel>
                    <div>
                      <h1 className="text-xl">{heading}</h1>
                    </div>
                  </StepLabel>
                  <StepContent>
                    <Typography>
                      Please fill all this necessary details
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <div className="flex flex-col">
                        <form>
                          <h2 className="font-bold text-lg">1.1 Personal data</h2>
                          <div className="flex flex-wrap gap-2">
                            <div className="p-3 w-5/12">
                              <label htmlFor="name">Name</label>
                              <input
                                placeholder="vamshi"
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="current-password"
                                required
                                onChange={(e)=>setdetails({...updateddetails, name : e.target.value})}
                                value={updateddetails.name}
                                className="p-3 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />{" "}
                            </div>
                            <div className=" p-3 w-5/12">
                              <label htmlFor="surname">Surname</label>
                              <input
                                placeholder="Kyadari"
                                id="surname"
                                name="name"
                                type="text"
                                autoComplete="current-password"
                                required
                                onChange={(e)=>setdetails({...updateddetails, surname : e.target.value})}
                                value={updateddetails.surname}
                                className="p-3 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />{" "}
                            </div>
                            <div className=" p-3 w-5/12">
                              <label htmlFor="pob">Place of Birth</label>
                              <input
                                placeholder="Lucknow"
                                id="pob"
                                name="name"
                                type="text"
                                autoComplete="current-password"
                                required
                                onChange={(e)=>setdetails({...updateddetails, placeOfBirth : e.target.value})}
                                value={updateddetails.placeOfBirth}
                                className="p-3 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />{" "}
                            </div>
                            <div className="p-3 w-5/12">
                              <label htmlFor="full">Full Address</label>
                              <input
                                placeholder="C.B 2nd tower."
                                id="full"
                                name="name"
                                type="text"
                                autoComplete="current-password"
                                required
                                onChange={(e)=>setdetails({...updateddetails, fullAddress : e.target.value})}
                                value={updateddetails.fullAddress}
                                className="p-3 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />{" "}
                            </div>
                            <div className="p-3 w-5/12">
                              <label htmlFor="zip">Zip Code</label>
                              <input
                                placeholder="503101"
                                id="zip"
                                name="name"
                                type="text"
                                autoComplete="current-password"
                                required
                                onChange={(e)=>setdetails({...updateddetails, zipcode : e.target.value})}
                                value={updateddetails.zipcode}
                                className="p-3 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />{" "}
                            </div>
                            <div className="p-3 w-5/12">
                              <label htmlFor="number">Contact number</label>
                              <input
                                placeholder="9876543210"
                                id="number"
                                name="name"
                                type="text"
                                autoComplete="current-password"
                                required
                                className="p-3 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />{" "}
                            </div>
                          </div>
                          <div>
                            <p className="font-bold text-lg">1.2 Visual data</p>
                            <p>
                              Upload your ID picture it will be used as a
                              profile picture in internal communication
                            </p>
                            <div
                              className="h-20 border-2  flex
    items-center  justify-center border-dashed border-gray-700 bg-slate-100 m-5 rounded-lg "
                              {...getRootProps()}
                            >
                              <input {...getInputProps()} />
                              {isDragActive ? (
                                <p>Drop the files here ...</p>
                              ) : (
                                <p>
                                  Drag 'n' drop some files here, or click to
                                  select files
                                </p>
                              )}
                            </div>
                          </div>
                          <div>
                          <p className="font-bold text-lg">1.3 Scan and upload documents</p>
                            <p>
                              Upload bank account
                            </p>
                            <div
                              className="h-20 border-2  flex
    items-center  justify-center border-dashed border-gray-700 bg-slate-100 m-5 rounded-lg "
                              {...getRootProps()}
                            >
                              <input {...getInputProps()} />
                              {isDragActive ? (
                                <p>Drop the files here ...</p>
                              ) : (
                                <p>
                                  Drag 'n' drop some files here, or click to
                                  select files
                                </p>
                              )}
                            </div>
                          </div>
                            <p>
                              Upload insurance form
                            </p>
                            <div
                              className="h-20 border-2  flex
    items-center  justify-center border-dashed border-gray-700 bg-slate-100 m-5 rounded-lg "
                              {...getRootProps()}
                            >
                              <input {...getInputProps()} />
                              {isDragActive ? (
                                <p>Drop the files here ...</p>
                              ) : (
                                <p>
                                  Drag 'n' drop some files here, or click to
                                  select files
                                </p>
                              )}
                            </div>
                          
                            <p>
                              Upload scan copy of ID proof
                            </p>
                            <div
                              className="h-20 border-2  flex
    items-center  justify-center border-dashed border-gray-700 bg-slate-100 m-5 rounded-lg "
                              {...getRootProps()}
                            >
                              <input {...getInputProps()} />
                              {isDragActive ? (
                                <p>Drop the files here ...</p>
                              ) : (
                                <p>
                                  Drag 'n' drop some files here, or click to
                                  select files
                                </p>
                              )}
                            </div>
                          
                        </form>

                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                          className="self-end"
                        >
                          next step
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>

                <Step key="2">
                  <StepLabel></StepLabel>
                  <StepContent>
                    <Typography></Typography>
                    <Box sx={{ mb: 2 }}></Box>
                  </StepContent>
                </Step>
              </Stepper>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export const Step2 = (props) => {
  const { currentstep, setsteps } = props;

  const handleNext = () => {
    currentstep();
    setsteps();
  };

  const backtohome = () => {
    currentstep();
  };

  return (
    <>
      <div className=" my-8 p-5 w-5/6  border-2 border-neutral-800">
        <p onClick={backtohome}> {"<"} Back to Roadmap </p>

        <Box sx={{ maxWidth: 900 }} className="mt-4 p-4 py-8  bg-slate-200">
          <Stepper activeStep={1} orientation="vertical">
            <Step key="1" index={1}>
              <StepLabel>
                <div>hai</div>
              </StepLabel>
              <StepContent>
                <Typography>hais</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      next step
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>

            <Step key="2" index={2}>
              <StepLabel></StepLabel>
              <StepContent>
                <Typography></Typography>
                <Box sx={{ mb: 2 }}></Box>
              </StepContent>
            </Step>
          </Stepper>
        </Box>
      </div>
    </>
  );
};

export const Step3 = (props) => {
  const { currentstep, setsteps } = props;

  const handleNext = () => {
    currentstep();
    setsteps();
  };

  const backtohome = () => {
    currentstep();
  };

  return (
    <>
      <div className=" my-8 p-5 w-5/6  border-2 border-neutral-800">
        <p onClick={backtohome}> {"<"} Back to Roadmap </p>

        <Box sx={{ maxWidth: 900 }} className="mt-4 p-4 py-8  bg-slate-200">
          <Stepper activeStep={2} orientation="vertical">
            <Step key="1" index={2}>
              <StepLabel>
                <div>hai</div>
              </StepLabel>
              <StepContent>
                <Typography>hais</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      next step
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>

            <Step key="2" index={3}>
              <StepLabel></StepLabel>
              <StepContent>
                <Typography></Typography>
                <Box sx={{ mb: 2 }}></Box>
              </StepContent>
            </Step>
          </Stepper>
        </Box>
      </div>
    </>
  );
};

export const Step4 = (props) => {
  const { currentstep, setsteps } = props;

  const handleNext = () => {
    currentstep();
    setsteps();
  };

  const backtohome = () => {
    currentstep();
  };

  return (
    <>
      <div className=" my-8 p-5 w-5/6  border-2 border-neutral-800">
        <p onClick={backtohome}> {"<"} Back to Roadmap </p>

        <Box sx={{ maxWidth: 900 }} className="mt-4 p-4 py-8  bg-slate-200">
          <Stepper activeStep={3} orientation="vertical">
            <Step key="1" index={3}>
              <StepLabel>
                <div>hai</div>
              </StepLabel>
              <StepContent>
                <Typography>hais</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      next step
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>

            <Step key="2" index={4}>
              <StepLabel></StepLabel>
              <StepContent>
                <Typography></Typography>
                <Box sx={{ mb: 2 }}></Box>
              </StepContent>
            </Step>
          </Stepper>
        </Box>
      </div>
    </>
  );
};

export const Step5 = (props) => {
  const { currentstep, setsteps } = props;

  const handleNext = () => {
    currentstep();
    setsteps();
  };

  const backtohome = () => {
    currentstep();
  };

  return (
    <>
      <div className=" my-8 p-5 w-5/6  border-2 border-neutral-800">
        <p onClick={backtohome}> {"<"} Back to Roadmap </p>

        <Box sx={{ maxWidth: 900 }} className="mt-4 p-4 py-8  bg-slate-200">
          <Stepper activeStep={4} orientation="vertical">
            <Step key="1" index={4}>
              <StepLabel>
                <div>hai</div>
              </StepLabel>
              <StepContent>
                <Typography>hais</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      next step
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>

            <Step key="2" index={5}>
              <StepLabel></StepLabel>
              <StepContent>
                <Typography></Typography>
                <Box sx={{ mb: 2 }}></Box>
              </StepContent>
            </Step>
          </Stepper>
        </Box>
      </div>
    </>
  );
};

export const Step6 = (props) => {
  const { currentstep, setsteps } = props;

  const handleNext = () => {
    currentstep();
    setsteps();
  };

  const backtohome = () => {
    currentstep();
  };

  return (
    <>
      <div className=" my-8 p-5 w-5/6  border-2 border-neutral-800">
        <p onClick={backtohome}> {"<"} Back to Roadmap </p>

        <Box sx={{ maxWidth: 900 }} className="mt-4 p-4 py-8  bg-slate-200">
          <Stepper activeStep={5} orientation="vertical">
            <Step key='3' index={5} >
              <StepLabel>
                <div>hai</div>
              </StepLabel>
              <StepContent>
                <Typography>hais</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      next step
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>

            <Step key="2" index={6}>
              <StepLabel></StepLabel>
              <StepContent>
                <Typography></Typography>
                <Box sx={{ mb: 2 }}></Box>
              </StepContent>
            </Step>
          </Stepper>
        </Box>
      </div>
    </>
  );
};

export const Step7 = (props) => {
  const { currentstep, setsteps } = props;

  const handleNext = () => {
    currentstep();
    setsteps();
  };

  const backtohome = () => {
    currentstep();
  };

  return (
    <>
      <div className=" my-8 p-5 w-5/6  border-2 border-neutral-800">
        <p onClick={backtohome}> {"<"} Back to Roadmap </p>

        <Box sx={{ maxWidth: 900 }} className="mt-4 p-4 py-8  bg-slate-200">
          <Stepper activeStep={6} orientation="vertical">
            <Step key="1" index={6}>
              <StepLabel>
                <div>hai</div>
              </StepLabel>
              <StepContent>
                <Typography>hais</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      next step
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>

            <Step key="2" index={7}>
              <StepLabel></StepLabel>
              <StepContent>
                <Typography></Typography>
                <Box sx={{ mb: 2 }}></Box>
              </StepContent>
            </Step>
          </Stepper>
        </Box>
      </div>
    </>
  );
};

export const Step8 = (props) => {
  const { currentstep, setsteps } = props;

  const handleNext = () => {
    currentstep();
    setsteps();
  };

  const backtohome = () => {
    currentstep();
  };

  return (
    <>
      <div className=" my-8 p-5 w-5/6  border-2 border-neutral-800">
        <p onClick={backtohome}> {"<"} Back to Roadmap </p>

        <Box sx={{ maxWidth: 900 }} className="mt-4 p-4 py-8  bg-slate-200">
          <Stepper activeStep={7} orientation="vertical">
            <Step key="1" index={7}>
              <StepLabel>
                <div>hai</div>
              </StepLabel>
              <StepContent>
                <Typography>hais</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      next step
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>

            <Step key="2" index={8}>
              <StepLabel></StepLabel>
              <StepContent>
                <Typography></Typography>
                <Box sx={{ mb: 2 }}></Box>
              </StepContent>
            </Step>
          </Stepper>
        </Box>
      </div>
    </>
  );
};

export const Step9 = (props) => {
  const { currentstep, setsteps } = props;

  const handleNext = () => {
    currentstep();
    setsteps();
  };

  const backtohome = () => {
    currentstep();
  };

  return (
    <>
      <div className=" my-8 p-5 w-5/6  border-2 border-neutral-800">
        <p onClick={backtohome}> {"<"} Back to Roadmap </p>

        <Box sx={{ maxWidth: 900 }} className="mt-4 p-4 py-8  bg-slate-200">
          <Stepper activeStep={8} orientation="vertical">
            <Step key="1" index={8}>
              <StepLabel>
                <div>hai</div>
              </StepLabel>
              <StepContent>
                <Typography>hais</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      next step
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>

            <Step key="2" index={9}>
              <StepLabel></StepLabel>
              <StepContent>
                <Typography></Typography>
                <Box sx={{ mb: 2 }}></Box>
              </StepContent>
            </Step>
          </Stepper>
        </Box>
      </div>
    </>
  );
};

export const Step10 = (props) => {
  const { currentstep, setsteps } = props;

  const handleNext = () => {
    currentstep();
    setsteps();
  };

  const backtohome = () => {
    currentstep();
  };

  return (
    <>
      <div className=" my-8 p-5 w-5/6  border-2 border-neutral-800">
        <p onClick={backtohome}> {"<"} Back to Roadmap </p>

        <Box sx={{ maxWidth: 900 }} className="mt-4 p-4 py-8  bg-slate-200">
          <Stepper activeStep={9} orientation="vertical">
            <Step key="1" index={9}>
              <StepLabel>
                <div>hai</div>
              </StepLabel>
              <StepContent>
                <Typography>hais</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      next step
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>

          </Stepper>
        </Box>
      </div>
    </>
  );
};
