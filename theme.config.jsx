export default {
    logo: <span style={{fontWeight: "bold"}}>Linux Lab</span>,
    sidebar: {
        defaultMenuCollapseLevel: 1,
    },
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