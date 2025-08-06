import colors from "tailwindcss/colors";

export default {
    logo: <span style={{fontWeight: "bold"}}>Linux Lab</span>,
    project: {
        link: "https://github.com/abduraimovabdurahmon/linuxlab.uz",
    },
    useNextSeoProps() {
        return {
            titleTemplate: "LinuxLab.uz - %s",
        };
    },
    footer: {
        text: "Copyright Abdurakhmon 2025",
    }
};