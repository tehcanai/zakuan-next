
import Script from 'next/script';

const GAScript = () => {
    return (
        <>
            <Script
                id="ga-lib"
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=G-NTX2TN8J3L`}
            />
            <Script
                id="ga-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                
                gtag('config', 'G-NTX2TN8J3L');
                `,
                }}
            />
        </>
    );
}

export default GAScript