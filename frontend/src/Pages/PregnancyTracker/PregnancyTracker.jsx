import { useEffect, useState } from "react";

import LessonLayout from "../../components/LessonLayout/LessonLayout";

import TrackerForm from "../../components/TrackerForm/PregnancyTrackerForm";
import TrackerResult from "../../components/TrackerForm/PregnancyTrackerResult";
import Notes from "../../components/TrackerForm/PregnancyNotes";

import "./PregnancyTracker.css";

function PregnancyTracker(){

    const [lmp,setLmp]=useState("");

    const [week,setWeek]=useState("");

    const [trimester,setTrimester]=useState("");

    const [dueDate,setDueDate]=useState("");

    const [notes,setNotes]=useState("");

    useEffect(()=>{

        const savedNotes=localStorage.getItem("pregnancyNotes");

        if(savedNotes){

            setNotes(savedNotes);

        }

    },[]);

    function calculatePregnancy(){

        if(!lmp){

            alert("Please select your Last Menstrual Period.");

            return;

        }

        const lmpDate=new Date(lmp);

        const today=new Date();

        const difference=today-lmpDate;

        const weeks=Math.floor(

            difference/(1000*60*60*24*7)

        );

        setWeek(weeks);

        if(weeks<=13){

            setTrimester("First Trimester");

        }

        else if(weeks<=27){

            setTrimester("Second Trimester");

        }

        else{

            setTrimester("Third Trimester");

        }

        const edd=new Date(lmpDate);

        edd.setDate(

            edd.getDate()+280

        );

        setDueDate(

            edd.toDateString()

        );

    }

    function saveNotes(){

        localStorage.setItem(

            "pregnancyNotes",

            notes

        );

        alert("Notes saved.");

    }

    return(

        <LessonLayout

            title="Pregnancy Tracker"

            backRoute="/maternal-child-health"

        >

            <TrackerForm

                lmp={lmp}

                setLmp={setLmp}

                onCalculate={calculatePregnancy}

            />

            <TrackerResult

                week={week}

                trimester={trimester}

                dueDate={dueDate}

            />

            <Notes

                notes={notes}

                setNotes={setNotes}

                onSave={saveNotes}

            />

        </LessonLayout>

    );

}

export default PregnancyTracker;