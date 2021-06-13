import React from "react";
import Product from "../components/layout/product";
import { QueryRenderer } from 'react-relay';
import { ProductModal, openModal } from "../components/gui/productmodal";
import { fetchProductsByCategoryQuery, fetchCategoryByShrugQuery } from "../graphql";

function LoadingSkeleton() {
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

function ProductsQuery({ environment, category }) {
    return (
        <QueryRenderer
            environment={environment}
            query={fetchProductsByCategoryQuery}
            variables={{ category }}
            render={({ error, props }) => {
                if (error) {
                    return <div>{error.message}</div>
                }

                if (!props) {
                    return <LoadingSkeleton />
                }

                const products = props.fetchProductsByCategory;

                if (products.length > 0) {
                    const productList = []

                    for (const product of products) {
                        productList.push(
                            <Product
                                onClick={() => { openModal(product) }}
                                {...product}
                            />
                        )
                    }

                    return <React.Fragment>{productList}</React.Fragment>
                } else {
                    return <React.Fragment><div>No hay productos</div></React.Fragment>;
                }
            }}
        />
    );
}

function CategoryQuery({ environment }) {
    const path = window.location.pathname;
    const shrug = path.split("/")[path.split("/").length - 1];

    return (
        <QueryRenderer
            environment={environment}
            query={fetchCategoryByShrugQuery}
            variables={{ shrug }}
            render={({ error, props }) => {
                if (error) {
                    return <div>{error.message}</div>
                }

                if (!props) {
                    return <LoadingSkeleton />
                }

                const category = props.fetchCategoryByShrug;
                if (category == null) {
                    return <div>Category doesn't exist</div>
                } else {
                    const id = category._id;
                    return <ProductsQuery environment={environment} category={id} />
                }
            }}
        />
    )
}

export default class Category extends React.Component {
    render() {
        const {basket} = this.props
        console.log(basket)

        return (
            <div>
                <ProductModal {...this.props} />
                <CategoryQuery {...this.props} />
            </div>
        )
    }
}