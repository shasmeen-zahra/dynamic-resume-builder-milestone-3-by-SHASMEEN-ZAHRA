

document.getElementById('resumeForm')?.addEventListener('submit', function(event){
    event.preventDefault();

    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;





    const resumeOutput = ` 
    <h2>Resume</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>email:</strong> ${email}<p>
    <p><strong>phone:</strong> ${phone}<p>
    <h3>Education</h3>
    <p> ${education}<p>
    <h3>Experience</h3>
    <p> ${experience}<p>
    <h3>Skills</h3>
    <p> ${skills}}<p>


    `;

    const resumeOutputElement = document.getElementById('resumeOutput')
    if (resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
    } else {
        console.error('the resume output elements are missing ')
    } 
 } else {
   console.error('one or more output elements are missing ')
    }
})