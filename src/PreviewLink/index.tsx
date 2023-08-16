import React, { Fragment, useEffect, useRef, useState } from "react"
import { AlignmentDirection, AlignmentPosition, Direction, FlexDirection, OGResponse, PageStatus } from "./types";
import { PreviewLinkImage } from "./PreviewLinkImage"
import APIRequest from "../request";

type PreviewLinkProps = {
    url: string,
    width: number,
    height: number,
    margin: number,
    border: string,
    direction: Direction
    reverse: boolean,
    imageCoverage: number,
    content: {
        vertical?: AlignmentDirection,
        horizontal?: AlignmentDirection,
        margin?: number | string,
        gap?: number,
    },
    image: {
        borderRadius?: number | string,
        margin?: number | string,
    }
}

const container_flex_direction = {
    left: "row",
    right: "row-reverse",
    top: "column",
    bottom: "column-reverse",
} as Record<AlignmentPosition, FlexDirection>



const PreviewLink = (props: PreviewLinkProps) => {
    const [pageStatus, setPageStatus] = useState<PageStatus>("loading");
    const [ogInfo, setOGInfo] = useState<OGResponse>(null);

    const isUnmounted = useRef<boolean>();

    useEffect(() => {
        isUnmounted.current = false;
        load();
        return () => {
            isUnmounted.current = true;
        }
    }, [props.url])

    const load = async () => {
        const response = await APIRequest.OGInfo(props.url);
        if (isUnmounted.current) {
            return;
        }
        if (response.error || response.data?.error) {
            setPageStatus("error");
            return;
        }
        setOGInfo(response.data);
        setPageStatus("success");
    }

    const get_container_style = (): React.CSSProperties => {
        return {
            display: "flex",
            flexDirection: container_flex_direction[props.direction == "vertical" ? (props.reverse ? "bottom" : "top") : (props.reverse ? "right" : "left")],
            margin: props.margin,
            width:"100%",
            height:"100%",
        }
    }

    const get_content_style = (): React.CSSProperties => {
        const direction = props.direction;
        return {
            display: "flex",
            flexDirection: "column",
            alignItems: props.content?.horizontal,
            justifyContent: props.content?.vertical,
            width: direction == "vertical" ? "100%" : `${100 - props.imageCoverage}%`,
            height: direction == "horizontal" ? "100%" : `${100 - props.imageCoverage}%`,
            gap: props.content.gap,
            margin: props.content.margin,
        }
    }

    const get_image_container_style = (): React.CSSProperties => {
        const direction = props.direction;
        return {
            display: "flex",
            width: direction == "vertical" ? "100%" : `${props.imageCoverage}%`,
            height:  direction == "horizontal" ? "100%" : `${props.imageCoverage}%`,
        }
    }
    if (pageStatus == "loading")
        return <span>Loading</span>
    return <Fragment>
        <div style={{ display: "flex", border: props.border, width: props.width, height: props.height, borderRadius: 10, }}>
            <div style={get_container_style()}>
                <div style={get_image_container_style()}>
                    <PreviewLinkImage
                        src={ogInfo?.data.image}
                        borderRadius={props.image.borderRadius}
                        margin={props.image.margin}
                    />
                </div>
                <div style={get_content_style()}>
                    <div>
                        <span style={{ fontWeight: "bold" }}>{ogInfo?.data.title}</span>
                    </div>
                    <div>
                        <span>{ogInfo?.data.description}</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", gap: 5 }}>
                        <div>
                            {ogInfo?.data.name}
                        </div>
                        <div>
                            •
                        </div>
                        <div>
                            {ogInfo?.data.url}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
}

PreviewLink.defaultProps = {
    url: "",
    width: 790,
    height: 100,
    margin: 0.9,
    border: "1px solid gray",
    direction: "horizontal",
    reverse: false,
    imageCoverage: 15,
    content: {
        vertical: "flex-start",
        horizontal: "flex-start",
        margin: "0px 0px 1px 5px",
        gap: 0,
    },
    image: {
        margin: 3,
        borderRadius: 4,
    }
} satisfies PreviewLinkProps

export { PreviewLink }