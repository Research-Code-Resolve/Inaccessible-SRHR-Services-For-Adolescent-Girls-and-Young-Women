import { useState, useEffect } from "react";

import LessonLayout from "../../components/LessonLayout/LessonLayout";

import MenstrualTrackerForm from "../../components/TrackerForm/MenstrualTrackerForm";
import MenstrualTrackerResult from "../../components/TrackerForm/MenstruakTrackerResult";
import Calendar from "../../components/TrackerForm/Calender";
import Symptoms from "../../components/TrackerForm/Symptoms";
import MenstrualNotes from "../../components/TrackerForm/MenstrualNotes";

import "./MenstrualTracker.css";

function MenstrualTracker() {

    const [startDate, setStartDate] = useState("");

    const [cycleLength, setCycleLength] = useState(28);

    const [periodLength, setPeriodLength] = useState(5);

    const [nextPeriod, setNextPeriod] = useState("");

    const [daysRemaining, setDaysRemaining] = useState("");

    const [cycleDay, setCycleDay] = useState("");

    const [symptoms, setSymptoms] = useState([]);

    const [notes, setNotes] = useState("");

    useEffect(() => {

        const savedNotes = localStorage.getItem("menstrualNotes");

        if (savedNotes) {

            setNotes(savedNotes);

        }

    }, []);

    function calculateCycle() {

        if (!startDate) {

            alert("Please select the first day of your last period.");

            return;

        }

        const firstDay = new Date(startDate);

        const today = new Date();

        const difference =
            today.getTime() - firstDay.getTime();

        const currentCycleDay =
            Math.floor(difference / (1000 * 60 * 60 * 24)) + 1;

        setCycleDay(currentCycleDay);

        const nextDate = new Date(firstDay);

        nextDate.setDate(
            nextDate.getDate() + Number(cycleLength)
        );

        setNextPeriod(
            nextDate.toDateString()
        );

        const remaining = Math.ceil(
            (nextDate.getTime() - today.getTime()) /
            (1000 * 60 * 60 * 24)
        );

        setDaysRemaining(
            remaining > 0 ? remaining : 0
        );

    }

    function saveNotes() {

        localStorage.setItem(
            "menstrualNotes",
            notes
        );

        alert("Notes saved successfully.");

    }

    return (

        <LessonLayout

            title="Menstrual Tracker"

            backRoute="/menstrual-health"

        >

            <MenstrualTrackerForm

                startDate={startDate}

                setStartDate={setStartDate}

                cycleLength={cycleLength}

                setCycleLength={setCycleLength}

                periodLength={periodLength}

                setPeriodLength={setPeriodLength}

                onCalculate={calculateCycle}

            />

            <MenstrualTrackerResult

                nextPeriod={nextPeriod}

                daysRemaining={daysRemaining}

                cycleDay={cycleDay}

                cycleLength={cycleLength}

                periodLength={periodLength}

            />

            <Calendar

                nextPeriod={nextPeriod}

            />

            <Symptoms

                symptoms={symptoms}

                setSymptoms={setSymptoms}

            />

            <MenstrualNotes

                notes={notes}

                setNotes={setNotes}

                onSave={saveNotes}

            />

        </LessonLayout>

    );

}

export default MenstrualTracker;