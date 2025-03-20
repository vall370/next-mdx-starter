// Generic content configuration for different page types
export type ContentItem = {
    slug: string;
    title: string;
    description: string;
    metaDescription?: string;
    keywords?: string[];
    features?: string[];
    icon?: string;
};

export const contentConfig = {
    // Add items to this object to configure content for different sections
    items: {
        insurances: [
            {
                slug: 'hemforsakring',
                title: 'Hemförsäkring',
                description: 'Skydda ditt hem och dina tillhörigheter med en hemförsäkring.',
                metaDescription: 'Jämför hemförsäkringar och hitta det bästa skyddet för ditt hem.',
                keywords: ['hem', 'försäkring', 'hemförsäkring', 'bostad'],
                features: [
                    'Skydd vid inbrott',
                    'Skydd vid brand',
                    'Ansvarsförsäkring',
                    'Rättsskydd',
                    'Reseskydd'
                ],
                icon: 'window.svg'
            },
            {
                slug: 'bilforsakring',
                title: 'Bilförsäkring',
                description: 'Hitta den bilförsäkring som passar dina behov och din budget.',
                keywords: ['bil', 'försäkring', 'bilförsäkring', 'fordon'],
                features: [
                    'Trafikförsäkring',
                    'Halvförsäkring',
                    'Helförsäkring',
                    'Assistans vid olycka',
                    'Maskinskadeskydd'
                ],
                icon: 'file.svg'
            },
            // Additional items can be added here
        ],
        // Other content types can be added here
    },

    // Placeholder text for pages without content
    fallback: {
        pageTitle: 'Information om %s',
        needInfo: 'Vi hjälper dig att hitta den bästa %s som passar dina behov och din budget.',
        whySection: 'Varför behöver du %s?',
        whyContent: 'En bra försäkring ger dig trygghet och skydd när olyckan är framme. Med rätt försäkring kan du känna dig säker på att du får den hjälp du behöver.',
        featuresSection: 'Vad ingår i en %s?',
        ctaTitle: 'Jämför %s',
        ctaDescription: 'Fyll i formuläret nedan för att jämföra priser från ledande försäkringsbolag.',
        ctaButton: 'Jämför nu'
    }
}; 