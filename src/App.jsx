import React from 'react';
import './App.css';

function ContactInfo() {
    return (
        <section id="contact">
            <h2>Contact Information</h2>
            <ul>
                <li>Email: veronika.kachur@gmail.com</li>
                <li>Location: Lviv, Ukraine</li>
            </ul>
        </section>
    );
}

function Summary() {
    return (
        <section id="summary">
            <h2>Summary</h2>
            <p>Student of Lviv Polytechnic National University since 2023. Interested in backend development, automation, and cybersecurity basics.</p>
        </section>
    );
}

function TechSkills() {
    return (
        <section id="tech-skills">
            <h2>Tech Skills</h2>
            <ul>
                <li>Python: fundamentals, functions, file handling</li>
                <li>Bash: basic scripting for automation</li>
                <li>Linux: command line, permissions, process management</li>
                <li>SQL: basics of queries and relational databases</li>
            </ul>
        </section>
    );
}

function Education() {
    return (
        <section id="education">
            <h2>Education</h2>
            <p>Lviv Polytechnic National University, 2023–present</p>
        </section>
    );
}

function App() {
    return (
        <div className="App">
            <header>
                <h1>Kachur Veronika</h1>
                <p>Cybersecurity Student</p>
            </header>
            <main>
                <ContactInfo />
                <Summary />
                <TechSkills />
                <Education />
            </main>
        </div>
    );
}

export default App;