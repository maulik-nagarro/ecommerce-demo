import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        document.title = "About"
    }, []);

    return (
        <>
            About page
        </>
    )
}

export default About;