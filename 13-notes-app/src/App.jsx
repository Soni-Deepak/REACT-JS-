import { CloudOff } from "lucide";
import React, { useState } from "react";
import { X } from 'lucide-react';

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({ title, details });

    setTask(copyTask);
    // console.log(copyTask)
    // console.log(task);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    // console.log(copyTask[idx]);

    copyTask.splice(idx , 1)

    setTask(copyTask)
  }

  return (
    <div className="h-screen lg:flex bg-black text-white ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex lg:w-1/2 gap-4 items-start flex-col p-10  "
      >
        <h1 className="text-4xl mb-2 font-bold">Add Notes</h1>

        {/* PHELA INPUT FOR HEADING */}
        <input
          className="px-5 w-full py-2 font-medium border-2 outline-none rounded"
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        {/* DETAILED VALA INPUT */}
        <textarea
          className="px-5 w-full h-32 py-2 font-medium border-2 outline-none rounded"
          type="text"
          placeholder="Write Details"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button className="bg-white active:scale-95 text-black w-full px-5 py-2 font-medium outline-none rounded">
          Add Note
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto ">
          {task.map(function (elem, idx) {
            return (
              <div key={idx} className="h-52 w-40 flex justify-between flex-col items-start relative rounded-xl text-black pt-9 pb-4 px-4 bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">

               <div>

                <h3 className="leading-tight text-lg font-bold " >{elem.title}</h3>
                <p className="mt-3 leading-tight text-sm font-semibold  text-gray-600">{elem.details}</p>
               </div>

               <button onClick={() => {
                deleteNote(idx)
               }} className="w-full cusrsor-pointer active:scale-95 bg-red-500 text-white py-1 text-xs rounded font-bold">Delete</button>
              </div>
            );
          })}
          {/* <div className="h-52 w-40 rounded-xl bg-white"></div>
          <div className="h-52 w-40 rounded-xl bg-white"></div> */}
        </div>
      </div>
    </div>
  );
};

export default App;
