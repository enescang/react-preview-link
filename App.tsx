import React from "react";
import { PreviewLink, TestComponent } from "./src";

const App = () => {
    return (
        <div style={{display:"flex", flexDirection:"column", gap:40}}>
            <div style={{ display: "flex", flexDirection: "row", gap: 40 }}>
                <PreviewLink
                    width={300}
                    imagePosition={"bottom"}
                    imageCoverage={50}
                    margin={2}
                    contentVerticalAlignment={"center"}
                    contentHorizontalAlignment={"flex-end"}
                />

                <PreviewLink
                    width={300}
                    imagePosition={"right"}
                    contentVerticalAlignment={"flex-end"}
                    contentHorizontalAlignment={"flex-end"}
                />

                <PreviewLink
                    width={300}
                    imagePosition={"right"}
                    contentVerticalAlignment={"flex-start"}
                    contentHorizontalAlignment={"flex-end"}
                />
            </div>
        </div>
    )
}
export default App;
