import React, { useEffect, useState } from "react";
import { PreviewLink, TestComponent } from "./src";

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
                    direction={"horizontal"}
                    width={790}
                    height={100}
                    margin={0}
                    imageCoverage={15}
                    content={{
                        vertical: "flex-start",
                        horizontal: "flex-start",
                        margin: "0px 0px 8px 5px",
                    }}
                    image={{
                        margin: 4,
                        borderRadius: 10,
                    }}
                />
            </div>
        </div>
    )
}
export default App;
