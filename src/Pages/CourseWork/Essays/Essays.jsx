import styled from "styled-components";

import SingleEssay from "./SingleEssay.jsx";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>

            <SingleEssay
                question={`Explain the difference between HTML, CSS & Javascript.`}
            >
                HTML defines the structure and content of web pages using markup
                tags. CSS controls the presentation and style of HTML elements,
                enhancing the visual design of web pages. Javascript adds
                interactivity and dynamic functionality to web pages, allowing
                for user interactions and real-time updates.
            </SingleEssay>
            <SingleEssay
                question={`What is the difference between Git & Github?`}
            >
                Git is a distributed version control system for tracking changes
                in source code, enabling collaboration and managing project
                history locally. GitHub, on the other hand, is a web-based
                platform built around Git, offering features like hosting
                repositories, collaboration tools, and project management. In
                essence, Git is the technology, while GitHub is a service that
                utilizes Git for code hosting and collaboration.
            </SingleEssay>
            <SingleEssay
                question={`What is the difference between JQuery & React?`}
            >
                jQuery is a JavaScript library designed primarily for DOM
                manipulation and simplifying common tasks like event handling,
                animation, and AJAX requests in web development. It provides a
                concise and cross-browser-compatible way to interact with the
                DOM and perform various tasks. React, on the other hand, is a
                JavaScript library for building user interfaces, specifically
                for single-page applications. It focuses on creating reusable UI
                components and managing the state of those components
                efficiently. React uses a declarative approach to building UIs,
                where developers describe how the UI should look based on the
                current state, and React takes care of updating the DOM
                efficiently.
            </SingleEssay>
            <SingleEssay
                question={`What is the difference between a Front-End and a Back-End developer?`}
            >
                Front-end developers work on the visible parts of a website or
                app that users interact with directly, focusing on design and
                user experience using languages like HTML, CSS, and JavaScript.
                Back-end developers handle the server-side logic and databases
                that power the front-end, ensuring functionality, security, and
                scalability using languages like Python, Ruby, PHP, or Java.
            </SingleEssay>
            <SingleEssay
                question={`In React, what are the different ways we can link to resources (e.g. Root Relative vs Document Relative)?`}
            >
                In React, linking to resources can be done using different
                methods. Root Relative Links are specified relative to the root
                of the website or application. They always start with a forward
                slash ("/") and refer to the root directory of the site.
                Document Relative Links are specified relative to the current
                document's location. They do not begin with a forward slash and
                refer to resources within the same directory or a subdirectory
                of the current document. Both methods have their use cases based
                on the structure and requirements of the project. Root relative
                links are beneficial for linking to resources across the entire
                application, while document relative links are useful for
                referencing resources within the same area or hierarchy of the
                application.
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
