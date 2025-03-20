export const siteConfig = {
    // Basic site info
    name: "Billiga-forsakringar.nu",
    description: "Vi hjälper dig att hitta och jämföra de bästa försäkringarna till bästa pris.",
    url: "https://billiga-forsakringar.nu",

    // SEO defaults
    defaultTitle: "Billiga Försäkringar",
    titleTemplate: "%s | Billiga Försäkringar",
    defaultDescription: "Jämför försäkringar och hitta det bästa skyddet till bästa pris.",

    // Navigation links
    mainNav: [
        { title: "Bilförsäkring", href: "/bilforsakring" },
        { title: "Hemförsäkring", href: "/hemforsakring" },
        { title: "Djurförsäkring", href: "/djurforsakringar" },
        { title: "Reseförsäkring", href: "/reseforsakring" },
    ],

    // Footer links and columns
    footerNav: [
        {
            title: "Försäkringstyper",
            links: [
                { title: "Bilförsäkring", href: "/bilforsakring" },
                { title: "Hemförsäkring", href: "/hemforsakring" },
                { title: "Djurförsäkring", href: "/djurforsakringar" },
                { title: "Reseförsäkring", href: "/reseforsakring" },
            ],
        },
        {
            title: "Om oss",
            links: [
                { title: "Om oss", href: "/om-billiga-forsakringar" },
                { title: "Kontakta oss", href: "/kontakta-oss" },
                { title: "Användarvillkor", href: "/anvandarvillkor" },
                { title: "Säkerhetspolicy", href: "/sakerhetspolicy" },
            ],
        },
    ],

    // Contact info
    contact: {
        email: "info@billiga-forsakringar.nu",
        social: {
            facebook: "#",
            twitter: "#",
            instagram: "#",
        },
    },

    // Theme colors
    theme: {
        primaryColor: "blue",
        secondaryColor: "yellow",
    }
};

export type SiteConfig = typeof siteConfig; 