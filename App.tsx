import React, { useEffect, useState } from "react";
import { PreviewLink } from "./src";

const App = () => {
    const [url, setUrl] = useState<string>("https://www.npmjs.com/package/eazy-time");

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            <div style={{ display: "flex", flexDirection: "row", gap: 40 }}>
                <PreviewLink
                    key={url}
                    url={url}
                    width={490}
                    height={390}
                    margin={0}
                    imageCoverage={70}
                    direction={"vertical"}
                    content={{
                        vertical: "flex-start",
                        horizontal: "flex-start",
                        margin: 2,
                        gap: 6,
                    }}
                    image={{
                        margin: 0,
                        borderRadius: "10px 10px 0px 0px",
                    }}
                />
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: 40 }}>
                <PreviewLink
                    key={url}
                    url={url}
                
                />
            </div>
        </div>
    )
}
export default App;
