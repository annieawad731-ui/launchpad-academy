const courseConfig = {
    totalTracks: 4,
    tracks: [
        "HTML Masterclass",
        "CSS Masterclass",
        "JavaScript Masterclass",
        "Python Masterclass"
    ]
};

const assessmentTimeline = [
    { id: 1, title: "HTML Architecture", week: 1, type: "Quiz" },
    { id: 2, title: "CSS Grid & Flexbox", week: 2, type: "Project" },
    { id: 3, title: "JavaScript Logic", week: 3, type: "Challenge" },
    { id: 4, title: "LaunchPad Presentation", week: 4, type: "Review" }
];

const filterAssessmentsByType = (type) => {
    return assessmentTimeline.filter(item => item.type === type);
};

const MILLISECONDS_IN_A_DAY = 86400000;
const TODAY_DATE = new Date("May 20, 2026 00:00:00");

const courseNames = [
    "HTML Masterclass",
    "CSS Masterclass",
    "JavaScript Masterclass",
    "Python Masterclass"
];

const courseStatuses = [
    "Completed",
    "In Progress",
    "Not Started",
    "Upcoming"
];

const startDates = [
    "Apr 15, 2026",
    "May 1, 2026",
    "May 20, 2026",
    "Oct 10, 2026"
];

const getDaysUntil = (launchDate) => {
    const launch = new Date(launchDate);
    launch.setHours(0, 0, 0, 0);

    const differenceMs = launch.getTime() - TODAY_DATE.getTime();

    return Math.round(differenceMs / MILLISECONDS_IN_A_DAY);
};

const getStatusLabel = (daysLeft) => {

    if (daysLeft > 0) {
        return `${daysLeft} days left`;
    }

    if (daysLeft === 0) {
        return "Launching today";
    }

    return "Already launched";
};

const getCoursesByStatus = (status) => {

    const matchingCourses = [];

    for (let i = 0; i < courseStatuses.length; i++) {

        if (courseStatuses[i] === status) {

            matchingCourses.push({
                name: courseNames[i],
                status: courseStatuses[i],
                startDate: startDates[i]
            });

        }

    }

    return matchingCourses;
};

window.addEventListener("DOMContentLoaded", () => {

    console.log("LaunchPad Academy System Initialized.");

    console.log("Active Cohorts:");
    console.log(courseConfig.tracks);

    console.log("Quiz Assessments:");
    console.log(filterAssessmentsByType("Quiz"));

    console.log("All Courses:");

    for (let i = 0; i < courseNames.length; i++) {

        const daysLeft = getDaysUntil(startDates[i]);

        console.log(
            `${courseNames[i]} | ${courseStatuses[i]} | ${getStatusLabel(daysLeft)}`
        );

    }

    console.log("In Progress Courses:");
    console.log(getCoursesByStatus("In Progress"));

    console.log("Upcoming Courses:");

    for (let i = 0; i < courseNames.length; i++) {

        const daysLeft = getDaysUntil(startDates[i]);

        if (daysLeft > 0) {

            console.log(
                `${courseNames[i]} - ${daysLeft} days left`
            );

        }

    }

});