import { Fragment } from "react";

type PreviewLinkImageProps = {
    src: string | undefined,
    borderRadius?: number | string,
    margin?: number | string,
}

const PreviewLinkImage = (props: PreviewLinkImageProps) => {
    return <Fragment>
        <div style={{
            margin: props.margin
        }}>
            <img
                src={props.src}
                style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: props.borderRadius,
                }}
            />
        </div>
    </Fragment>
}

export { PreviewLinkImage };