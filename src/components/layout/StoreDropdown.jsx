import React from "react";
import styles from "./navbar.module.sass";

import { Link } from 'react-router-dom';
import { Skeleton } from "@chakra-ui/react"

import { QueryRenderer } from 'react-relay';
import { fetchAllCategoriesQuery } from '../../graphql';

export default function StoreDropdown ({environment}) {
    const dropdown = [];

    return (
        <QueryRenderer
            environment={environment}
            query={fetchAllCategoriesQuery}
            render={({ error, props }) => {
                if (error) {
                    return <div>{ error.message }</div>
                }

                if (!props) {
                    return (
                        <React.Fragment>
                            <div className={styles["item"]}>
                                <Skeleton height="20px" />
                            </div>

                            <div className={styles["item"]}>
                                <Skeleton height="20px" />
                            </div>

                            <div className={styles["item"]}>
                                <Skeleton height="20px" />
                            </div>
                        </React.Fragment>
                    )
                }

                const categories = props.fetchAllCategories;
                for (const category of categories) {
                    dropdown.push(
                        <div className={styles["item"]}>
                            <Link to={"/store/category/" + category.shrug }>{ category.name }</Link>
                        </div>
                    )
                }

                return <React.Fragment>
                    { dropdown }
                </React.Fragment>
            }}
        />
    )
} 
 
