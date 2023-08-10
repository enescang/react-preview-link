import { Fragment } from "react";

type PreviewLinkImageProps = {

}

const PreviewLinkImage = (props: PreviewLinkImageProps) => {
    return <Fragment>
        <img
            src={"https://fastly.picsum.photos/id/622/400/400.jpg?hmac=-sZTkXOqFpCDohvWh4f44S9QkjYKHTa7nkf0gh6JJuY"}
            style={{
                width: "100%",
                height: "100%",
            }}
        />
    </Fragment>
}

export { PreviewLinkImage };