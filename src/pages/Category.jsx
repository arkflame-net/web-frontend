import React from "react";
import Product from "../components/layout/product";
import Container from '../components/layout/Container'
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
                    return <Container
                            style={{margin: "10px", paddingBottom: "20px"}}
                            id={"category"}
                            header={[<a href="/">{"Tienda"}</a>, " > " + category]}
                        >
                            <LoadingSkeleton />
                    </Container>
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

                    return <Container
                            id={"category"}
                            header={[<a href="/">{"Tienda"}</a>, " > " + category]}
                        >
                    {productList}</Container>
                } else {
                    return <Container
                            style={{margin: "10px", paddingBottom: "20px"}}
                            id={"category"}
                            header={[<a href="/">{"Tienda"}</a>, " > " + category]}
                        >
                            <div style={{borderRadius: "10px", padding: "20px", background: "#313742"}}>
                                No hay productos en la categoría seleccionada.
                            </div>
                    </Container>
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
                    return <Container
                            style={{margin: "10px", paddingBottom: "20px"}}
                            id={"category"}
                            header={[<a href="/">{"Tienda"}</a>, " > Cargando..."]}
                        >
                            <LoadingSkeleton />
                    </Container>
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
        //const {basket} = this.props

        return (
            <div>
                <ProductModal {...this.props} />
                <CategoryQuery {...this.props} />
            </div>
        )
    }
}