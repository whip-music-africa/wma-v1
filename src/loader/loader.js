import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={476}
        height={124}
        viewBox="0 0 476 124"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="53" y="10" rx="3" ry="3" width="88" height="6" />
        <rect x="53" y="28" rx="3" ry="3" width="52" height="6" />
        <rect x="5" y="58" rx="3" ry="3" width="224" height="6" />
        <rect x="5" y="74" rx="3" ry="3" width="208" height="6" />
        <rect x="5" y="90" rx="3" ry="3" width="98" height="6" />
        <circle cx="25" cy="22" r="20" />
    </ContentLoader>
)

export default MyLoader