export default {
    logo: <span style={{ display: "inline-flex", alignItems: "center" }}>Linux <img src="/terminal.webp" alt="Icon" style={{ marginLeft: "5px", width:20 }} /></span>,
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