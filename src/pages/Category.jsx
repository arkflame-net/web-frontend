import React from "react";
import Product from "../components/layout/product";
import { Skeleton } from "@chakra-ui/react"
import { QueryRenderer } from 'react-relay';
import { ProductModal, openModal } from "../components/gui/productmodal";
import { fetchProductsByCategoryQuery, fetchCategoryByShrugQuery } from "../graphql";

function LoadingSkeleton () {
    return (
        <div className="grid-list">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    )
}

function ProductsQuery ({environment, category}) {
    return (
        <QueryRenderer
            environment={environment}
            query={fetchProductsByCategoryQuery}
            variables={{category}}
            render={({ error, props }) => {
                if (error) {
                    return <div>{ error.message }</div>
                }

                if (!props) {
                    return <LoadingSkeleton/>
                }

                const products = props.fetchProductsByCategory;
                const productList = []

                for (const product of products) {
                    productList.push(
                        <Product
                            onClick={() => { openModal(product) }}
                            {...product}
                        />
                    )
                }

                return <React.Fragment>{ productList }</React.Fragment>
            }}
        />
    );
}

function CategoryQuery ({environment}) {
    const path = window.location.pathname;
    const shrug = path.split("/")[path.split("/").length - 1];

    return (
        <QueryRenderer
            environment={environment}
            query={fetchCategoryByShrugQuery}
            variables={{shrug}}
            render={({error, props}) => {
                if (error) {
                    return <div>{ error.message }</div>
                }

                if (!props) {
                    return <LoadingSkeleton/>
                }

                const category = props.fetchCategoryByShrug;
                if (category == null) {
                    return <div>Category doesn't exist</div>
                } else {
                    const id = category._id;
                    return <ProductsQuery environment={environment} category={id}/>
                }
            }}
        />
    )
}

export default function Category (props) {
    return (
        <div>
            <ProductModal/>
            <CategoryQuery {...props} />
            <Product name="Rango vip" description="Este vip es muy piola y si lo compras te crece la pija" price={5.25} image="/assets/products/default.jpg"/>
        </div>
    )
}