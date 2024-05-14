import { Routes, Route, HashRouter } from "react-router-dom";

// global Styles
import "@/Common/css/normalize.css";
import "@/Common/css/global.scss";

// layout
import PagesLayout from "@/Common/PagesLayout/PagesLayout.jsx";

import { MediaQueryProvider } from "@/Common/useMediaQuery.jsx";

// page components
import Home from "./Home/Home.jsx";
import Staff from "./Staff/Staff.jsx";
import Contact from "./Contact";

// course work page components
import CourseWorkLayout from "./CourseWork/CourseWorkLayout.jsx";
import SunAndMoon from "./Coursework/SunAndMoon/SunAndMoon.jsx";
import Essays from "./Coursework/Essays/Essays.jsx";
import ResponsiveDesign from "./Coursework/ResponsiveDesign.jsx";

const MyRoutes = () => {
    return (
        <HashRouter>
            <MediaQueryProvider>
                <Routes>
                    <Route element={<PagesLayout />}>
                        <Route element={<Home />} path="" />
                        <Route element={<Staff />} path="staff" />
                        <Route element={<Contact />} path="contact" />

                        <Route
                            element={<CourseWorkLayout />}
                            path="course-work"
                        >
                            <Route element={<Essays />} path="" />
                            <Route element={<SunAndMoon />} path="" />
                            <Route
                                element={<ResponsiveDesign />}
                                path="responsive"
                            />
                        </Route>
                    </Route>
                </Routes>
            </MediaQueryProvider>
        </HashRouter>
    );
};

export default MyRoutes;
