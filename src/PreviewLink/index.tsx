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
    imagePosition: AlignmentPosition,
    imageCoverage: number,
    contentHorizontalAlignment: AlignmentDirection,
    contentVerticalAlignment: AlignmentDirection,
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
        return ()=>{
            isUnmounted.current = true;
        }
    }, [props.url])

    const load = async () => {
        const response = await APIRequest.OGInfo(props.url);
        if(isUnmounted.current){
            return;
        }
        if (response.error || response.data?.error) {
            setPageStatus("error");
            return;
        }
        setOGInfo(response.data);
        setPageStatus("success");
    }
    const get_direction = (): Direction => {
        if (props.imagePosition == "left" || props.imagePosition == "right")
            return "horizontal";
        return "vertical";
    }

    const get_container_style = (): React.CSSProperties => {
        return {
            display: "flex",
            flexDirection: container_flex_direction[props.imagePosition],
            margin: props.margin,
        }
    }

    const get_content_style = (): React.CSSProperties => {
        const general_direction = get_direction();
        return {
            display: "flex",
            flexDirection: "column",
            alignItems: props.contentHorizontalAlignment,
            justifyContent: props.contentVerticalAlignment,
            width: general_direction == "vertical" ? "100%" : `${100 - props.imageCoverage}%`,
            height: general_direction == "horizontal" ? "100%" : `${100 - props.imageCoverage}%`,
        }
    }

    const get_image_container_style = (): React.CSSProperties => {
        const general_direction = get_direction();
        return {
            width: general_direction == "vertical" ? "100%" : `${props.imageCoverage}%`,
            height: general_direction == "horizontal" ? "100%" : `${props.imageCoverage}%`,
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
                    />
                </div>
                <div style={get_content_style()}>
                    <div>
                        <span style={{ fontWeight: "bold" }}>{ogInfo?.data.title}</span>
                    </div>
                    <div>
                        <span>{ogInfo?.data.description}</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
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
    width: 340,
    height: 120,
    margin: 0.9,
    border: "1px solid gray",
    imagePosition: "left",
    imageCoverage: 30,
    contentHorizontalAlignment: "center",
    contentVerticalAlignment: "center"
} as PreviewLinkProps

export { PreviewLink }