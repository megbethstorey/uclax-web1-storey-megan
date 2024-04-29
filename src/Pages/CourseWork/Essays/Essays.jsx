import styled from "styled-components";

import SingleEssay from "./SingleEssay.jsx";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>

            <SingleEssay
                question={`Q1: Explain the difference between HTML, CSS & Javascript.`}
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
            <SingleEssay question={`Q4: Sample Question...`}>
                Answer 4 goes here.
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
