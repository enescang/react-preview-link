import React, { Fragment } from "react"
import { AlignmentDirection, AlignmentPosition, Direction, FlexDirection } from "./types";
import { PreviewLinkImage } from "./PreviewLinkImage"

type PreviewLinkProps = {
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

    const get_direction = ():Direction=> {
        if(props.imagePosition == "left" || props.imagePosition == "right")
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
            backgroundColor: "greenyellow",
            width: general_direction == "vertical" ? "100%" : `${100-props.imageCoverage}%`,
            height: general_direction == "horizontal" ? "100%" : `${100-props.imageCoverage}%`,
        }
    }

    const get_image_container_style = (): React.CSSProperties => {
        const general_direction = get_direction();
        return {
            backgroundColor: "violet",
            width: general_direction == "vertical" ? "100%" : `${props.imageCoverage}%`,
            height: general_direction == "horizontal" ? "100%" : `${props.imageCoverage}%`,
        }
    }
    return <Fragment>
        <div style={{ display: "flex", border: props.border, width: props.width, height: props.height, borderRadius: 2, }}>
            <div style={get_container_style()}>
                <div style={get_image_container_style()}>
                    <PreviewLinkImage />
                </div>
                <div style={get_content_style()}>
                    <div>
                        <span>Title</span>
                    </div>
                    <div>
                        <span>Description</span>
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