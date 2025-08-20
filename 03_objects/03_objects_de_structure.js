const course = {
    courseName : "js in hindi",
    price :"999",
    courseInstructer:"sainithin"
}

//course.courseInstructer

const {courseInstructer} = course
console.log(courseInstructer);

const {courseInstructer:Instructer} = course
console.log(Instructer);

// {
//     "name":"sainithin",
//     "courseName":"js",
//     "price":"30000"
// }