 import styles from "./layout.module.sass";
import { Spinner } from "@chakra-ui/react"

export default function LoadingPanel () {
    return (
        <div className={styles["loadingContainer"]}>
            <Spinner
                className={styles["loadingAnimation"]}
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="purple.300"
                size="xl"
                />
        </div>
    )
}