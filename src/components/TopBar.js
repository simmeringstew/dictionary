import "../styles/TopBar.css";

const TopBar = () => {

    const fonts = [
        {
            family: "Merrieweather"
        },
        {
            family: "Lato"
        },
        {
            family: "Source Code Pro"
        }
    ];

    const colors = [
        {
            text: "#444444",
            textSecondary: "#A3A3A3",
            background: "#F9FAFB",
            input: "#F3F4F6",
            path: "M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"
        },
        {
            text: "rgba(255, 255, 255, .87)",
            textSecondary: "rgba(255, 255, 255, .66)",
            background: "#181818",
            input: "#1F1F1F",
            path: "M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
        }
    ];

    const handleChange = (e) => {
        const font = e.target.value;
        const body = document.querySelector("BODY");
        if (font === "serif") {
            body.style.fontFamily = `${fonts[0].family}, serif`;
        }
        else if (font === "sans") {
            body.style.fontFamily = `${fonts[1].family}, sans-serif`;
        } else {
            body.style.fontFamily = `${fonts[2].family}, monospace`;
        }
    }

    const handleCheck = (e) => {
        const root = document.documentElement;
        const icon = document.querySelector(".toggle-path");
        if (e.target.checked) {
            root.style.setProperty("--clr-text", colors[1].text);
            root.style.setProperty("--clr-text-secondary", colors[1].textSecondary);
            root.style.setProperty("--clr-background", colors[1].background);
            root.style.setProperty("--clr-input", colors[1].input);
            icon.setAttribute("d", colors[1].path);
        } else {
            root.style.setProperty("--clr-text", colors[0].text);
            root.style.setProperty("--clr-text-secondary", colors[0].textSecondary);
            root.style.setProperty("--clr-background", colors[0].background);
            root.style.setProperty("--clr-input", colors[0].input);
            icon.setAttribute("d", colors[0].path);
        }
    }

    return(
        <div className="bar">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-book" viewBox="0 0 16 16">
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
            </svg>
            <div className="bar-right">
                <div className="select-box">
                    <select onChange={e => handleChange(e)}>
                        <option value="serif">Serif</option>
                        <option value="sans">Sans-Serif</option>
                        <option value="mono">Monospace</option>
                    </select>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </div>
                <label className="switch">
                    <input type="checkbox" onClick={e => handleCheck(e)} />
                    <span className="slider"></span>
                    <span className="switch-text">Light Dark Toggle</span>
                </label>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-moon" viewBox="0 0 16 16">
                    <path className="toggle-path" d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
                </svg>
            </div>
        </div>
    );
}

export default TopBar;
