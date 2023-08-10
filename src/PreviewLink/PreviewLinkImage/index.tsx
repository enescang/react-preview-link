import { Fragment } from "react";

type PreviewLinkImageProps = {
    src: string | undefined
}

const PreviewLinkImage = (props: PreviewLinkImageProps) => {
    return <Fragment>
        <img
            src={props.src}
            style={{
                width: "100%",
                height: "100%",
            }}
        />
    </Fragment>
}

export { PreviewLinkImage };