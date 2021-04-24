const useTabs = (toefl, sat, ielts, gre, bocconi, gmat) => {
    const tabs = (e) => {
        if (e.target.getAttribute("data-name") === "toefl") {
            toefl.current.style.setProperty("--width", "82%");
            sat.current.style.setProperty("--width", "84%");
            ielts.current.style.setProperty("--width", "86%");
            gre.current.style.setProperty("--width", "88%");
            bocconi.current.style.setProperty("--width", "90%");
            gmat.current.style.setProperty("--width", "92%");
        } else if (e.target.getAttribute("data-name") === "sat") {
            toefl.current.style.setProperty("--width", "0%");
            sat.current.style.setProperty("--width", "84%");
            ielts.current.style.setProperty("--width", "86%");
            gre.current.style.setProperty("--width", "88%");
            bocconi.current.style.setProperty("--width", "90%");
            gmat.current.style.setProperty("--width", "92%");
        } else if (e.target.getAttribute("data-name") === "ielts") {
            toefl.current.style.setProperty("--width", "0%");
            sat.current.style.setProperty("--width", "0%");
            ielts.current.style.setProperty("--width", "86%");
            gre.current.style.setProperty("--width", "88%");
            bocconi.current.style.setProperty("--width", "90%");
            gmat.current.style.setProperty("--width", "92%");
        } else if (e.target.getAttribute("data-name") === "gre") {
            toefl.current.style.setProperty("--width", "0%");
            sat.current.style.setProperty("--width", "0%");
            ielts.current.style.setProperty("--width", "0%");
            gre.current.style.setProperty("--width", "88%");
            bocconi.current.style.setProperty("--width", "90%");
            gmat.current.style.setProperty("--width", "92%");
        } else if (e.target.getAttribute("data-name") === "bocconi") {
            toefl.current.style.setProperty("--width", "0%");
            sat.current.style.setProperty("--width", "0%");
            ielts.current.style.setProperty("--width", "0%");
            gre.current.style.setProperty("--width", "0%");
            bocconi.current.style.setProperty("--width", "90%");
            gmat.current.style.setProperty("--width", "92%");
        } else if (e.target.getAttribute("data-name") === "gmat") {
            toefl.current.style.setProperty("--width", "0%");
            sat.current.style.setProperty("--width", "0%");
            ielts.current.style.setProperty("--width", "0%");
            gre.current.style.setProperty("--width", "0%");
            bocconi.current.style.setProperty("--width", "0%");
            gmat.current.style.setProperty("--width", "92%");
        }
    };

    return {
        tabs,
    };
};

export default useTabs;
