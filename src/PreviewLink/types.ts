type AlignmentPosition = "top" | "bottom" | "left" | "right"

type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";

type AlignmentDirection = "flex-end" | "flex-start" | "center";

type Direction = "vertical" | "horizontal";

type PageStatus = "loading" | "success" | "error";

type OGResponse = {
    data: {
        url: string,
        name: string,
        title: string,
        description: string,
        image: string,
    },
    error: {
        type: string,
        message: string,
    }
} | null

export { AlignmentPosition, FlexDirection, AlignmentDirection, Direction, PageStatus, OGResponse }